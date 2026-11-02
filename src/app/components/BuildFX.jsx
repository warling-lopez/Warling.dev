"use client";
import { useEffect, useRef, useState } from "react";

/*
  BuildFX — la página "se construye sola" mientras haces scroll.

  Cómo usarlo: pon data-build en cualquier elemento.
    data-build="text"   → aparece escribiéndose de izquierda a derecha (con cursor de texto)
    data-build="media"  → bloque azul de plano y luego la imagen sale del desenfoque
    data-build="block"  → aparece con fundido (botones, tarjetas, filas…)
  data-label="nombre"   → etiqueta azul que se muestra sobre el marco (opcional)
*/

const COLORS = [
  "#ff4d6d", "#4cc9f0", "#80ffdb", "#ffd166", "#c77dff", "#06d6a0",
  "#f72585", "#4895ef", "#fb8500", "#90e0ef", "#e9ff70", "#ff99c8",
  "#72efdd", "#b8c0ff", "#ff6b6b", "#ffffff", "#5eead4", "#fda4af",
];

const arrow = (color) =>
  `<svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 2.5 20 11l-7.5 2L9 21Z" fill="${color}" stroke="rgba(0,0,0,.7)" stroke-width="1.5" stroke-linejoin="round"/></svg>`;

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

export default function BuildFX({ initial = "W" }) {
  const layerRef = useRef(null);
  const cursorLayerRef = useRef(null);
  const rulerTopRef = useRef(null);
  const rulerLeftRef = useRef(null);
  const engineRef = useRef(null);
  const [hud, setHud] = useState({
    on: false, agents: 18, built: 0, total: 0, status: "Escaneando", speed: 1, done: false,
  });

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("fx-on")) return;
    root.classList.add("fx-ready");

    const layer = layerRef.current;
    const cLayer = cursorLayerRef.current;
    const rulers = [rulerTopRef.current, rulerLeftRef.current];

    const isVisible = (el) => el.getClientRects().length > 0;
    const finish = (el) => {
      el.classList.remove("b-typing", "b-typed");
      el.classList.add("b-done", "b-settled");
    };

    // Elementos ocultos (por ejemplo, solo de escritorio en el móvil) se marcan como listos.
    const all = Array.from(document.querySelectorAll("[data-build]"));
    all.filter((el) => !isVisible(el)).forEach(finish);
    const els = all.filter(isVisible);
    const order = new Map(els.map((el, i) => [el, i]));
    const total = els.length;

    const small = window.innerWidth < 768;
    const N = small ? 9 : 18;
    const MAX = small ? 3 : 4;

    let speed = 1;
    let built = 0;
    let running = 0;
    let alive = true;
    let introDone = false;
    let pumping = false;
    const queue = [];
    const jobs = new Set();
    const timers = new Set();

    const wait = (ms) =>
      new Promise((res) => {
        const t = setTimeout(() => { timers.delete(t); res(); }, ms / speed);
        timers.add(t);
      });

    const set = (patch) => setHud((h) => ({ ...h, ...patch }));
    set({ on: true, total, built: 0, agents: N, status: "Escaneando" });

    // ---------- Reglas (como en un editor de diseño) ----------
    const buildRuler = (node, vertical) => {
      const len = vertical ? window.innerHeight : window.innerWidth;
      let html = "";
      for (let p = 100; p < len; p += 100) {
        html += `<span style="${vertical ? "top" : "left"}:${p}px">${p}</span>`;
      }
      node.innerHTML = html;
    };
    buildRuler(rulers[0], false);
    buildRuler(rulers[1], true);
    const showRulers = (v) => rulers.forEach((r) => r.classList.toggle("fx-show", v));

    // ---------- Cursores ----------
    const W = () => window.innerWidth;
    const H = () => window.innerHeight;
    const cursors = Array.from({ length: N }, (_, i) => {
      const node = document.createElement("div");
      node.className = "fx-cursor";
      node.innerHTML = arrow(COLORS[i % COLORS.length]);
      cLayer.appendChild(node);
      const side = i % 2 ? 1 : -1;
      const cx = W() / 2 + side * (110 + Math.random() * 40);
      const cy = H() / 2 + side * -30;
      return {
        node, x: cx + (Math.random() - 0.5) * 300, y: cy + (Math.random() - 0.5) * 300,
        tx: cx, ty: cy, cx, cy, phase: Math.random() * Math.PI * 2, rad: 20 + Math.random() * 40,
        job: null, ox: 0, oy: 0, jx: 0, jy: 0, follow: false, next: 0,
        ease: 0.045 + Math.random() * 0.05,
      };
    });

    const wander = (c, now) => {
      c.tx = W() * (0.06 + Math.random() * 0.88);
      c.ty = H() * (0.12 + Math.random() * 0.78);
      c.next = now + 1400 + Math.random() * 2600;
    };

    // ---------- Colocar marcos sobre los elementos ----------
    const place = (job, now) => {
      const r = job.el.getBoundingClientRect();
      const pad = 4;
      const x = r.left - pad, y = r.top - pad, w = r.width + pad * 2, h = r.height + pad * 2;
      const s = job.box.style;
      s.transform = `translate3d(${x}px,${y}px,0)`;
      s.width = `${w}px`;
      s.height = `${h}px`;
      const [gt, gb, gl, gr] = job.guides;
      gt.style.transform = `translate3d(0,${y}px,0)`;
      gb.style.transform = `translate3d(0,${y + h}px,0)`;
      gl.style.transform = `translate3d(${x}px,0,0)`;
      gr.style.transform = `translate3d(${x + w}px,0,0)`;
      if (job.typeStart != null) {
        job.progress = clamp((now - job.typeStart) / job.typeDur, 0, 1);
        if (job.caret) job.caret.style.left = `${job.progress * 100}%`;
      }
    };

    // ---------- Bucle de animación ----------
    let raf = 0;
    const tick = (now) => {
      if (!alive) return;
      for (const c of cursors) {
        if (!introDone) {
          const a = now / 520 + c.phase;
          c.tx = c.cx + Math.cos(a) * c.rad;
          c.ty = c.cy + Math.sin(a * 1.3) * c.rad * 0.6;
        } else if (c.job) {
          const r = c.job.el.getBoundingClientRect();
          const ox = c.follow && c.job.progress != null ? c.job.progress : c.ox;
          c.tx = r.left + ox * r.width + c.jx;
          c.ty = r.top + c.oy * r.height + c.jy;
          if (now > c.next) {
            c.jx = (Math.random() - 0.5) * (c.follow ? 6 : 26);
            c.jy = (Math.random() - 0.5) * (c.follow ? 4 : 18);
            c.next = now + 260 + Math.random() * 420;
          }
        } else if (now > c.next) {
          wander(c, now);
        }
        const k = Math.min(c.ease * (c.job ? 2.4 : 1) * speed, 0.45);
        c.x += (c.tx - c.x) * k;
        c.y += (c.ty - c.y) * k;
        c.node.style.transform = `translate3d(${c.x}px,${c.y}px,0)`;
      }
      for (const job of jobs) place(job, now);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // ---------- Construir un elemento ----------
    const SPOTS = [[0, 0], [1, 0], [1, 1], [0, 1], [0.5, 0.5]];

    const build = async (el) => {
      const type = el.dataset.build || "block";
      const r0 = el.getBoundingClientRect();
      const label = el.dataset.label || el.tagName.toLowerCase();

      const box = document.createElement("div");
      box.className = `fx-box fx-${type}`;
      box.innerHTML =
        `<span class="fx-tag">${label}</span>` +
        `<span class="fx-size">${Math.round(r0.width)} × ${Math.round(r0.height)}</span>` +
        `<i class="fx-h fx-tl"></i><i class="fx-h fx-tr"></i><i class="fx-h fx-bl"></i><i class="fx-h fx-br"></i>` +
        (type === "text" ? `<i class="fx-caret"></i>` : "") +
        (type !== "text" ? `<i class="fx-plus fx-p1"></i><i class="fx-plus fx-p2"></i>` : "");
      const guides = ["h", "h", "v", "v"].map((d) => {
        const g = document.createElement("div");
        g.className = `fx-guide fx-guide-${d}`;
        return g;
      });
      layer.append(...guides, box);
      const job = { el, box, guides, caret: box.querySelector(".fx-caret"), progress: null, typeStart: null };
      jobs.add(job);
      place(job, performance.now());

      // Enviar cursores al elemento
      const free = cursors.filter((c) => !c.job).sort(() => Math.random() - 0.5);
      const n = type === "media" ? 4 : type === "text" ? 2 : 3;
      const crew = free.slice(0, n);
      crew.forEach((c, i) => {
        c.job = job;
        c.follow = type === "text" && i === 0;
        c.ox = c.follow ? 0 : SPOTS[(i + 1) % SPOTS.length][0];
        c.oy = c.follow ? 0.55 : SPOTS[(i + 1) % SPOTS.length][1];
        c.next = 0;
      });

      await wait(type === "media" ? 520 : 320);
      if (!alive) return;

      if (type === "text") {
        const dur = clamp(r0.width * 1.3, 380, 950);
        el.style.setProperty("--fx-dur", `${dur / speed}ms`);
        el.classList.add("b-typing");
        void el.offsetWidth; // reinicia la transición
        el.classList.add("b-typed");
        job.typeDur = dur / speed;
        job.typeStart = performance.now();
        await wait(dur + 80);
      } else {
        el.classList.add("b-done");
        await wait(type === "media" ? 760 : 480);
      }
      if (!alive) return;

      crew.forEach((c) => { c.job = null; c.follow = false; c.next = 0; });
      box.classList.add("fx-out");
      guides.forEach((g) => g.classList.add("fx-out"));
      el.classList.add("b-done");
      const t = setTimeout(() => {
        timers.delete(t);
        finish(el);
        el.style.removeProperty("--fx-dur");
        jobs.delete(job);
        box.remove();
        guides.forEach((g) => g.remove());
      }, 800);
      timers.add(t);

      built += 1;
      set({ built, agents: N + Math.floor(Math.random() * 7) });
    };

    const status = () => {
      if (!introDone) return "Escaneando";
      if (built >= total) return "Listo";
      return running > 0 ? "Construyendo" : "Explorando";
    };

    const pump = async () => {
      if (pumping) return;
      pumping = true;
      while (alive && introDone && running < MAX && queue.length) {
        // Lo que ya salió de pantalla vuelve a esperar; así se construye primero lo que estás viendo.
        for (let i = queue.length - 1; i >= 0; i--) {
          const r = queue[i].getBoundingClientRect();
          if (r.bottom < 0 || r.top > window.innerHeight) io.observe(queue.splice(i, 1)[0]);
        }
        if (!queue.length) break;
        const el = queue.shift();
        running += 1;
        showRulers(true);
        set({ status: "Construyendo" });
        build(el).finally(() => {
          running -= 1;
          if (!alive) return;
          if (running === 0 && !queue.length) showRulers(false);
          set({ status: status() });
          if (built >= total) wrapUp();
          pump();
        });
        await wait(120);
      }
      pumping = false;
    };

    const wrapUp = () => {
      set({ status: "Listo", done: true });
      const t = setTimeout(() => {
        cLayer.classList.add("fx-out");
        set({ on: false });
      }, 2600);
      timers.add(t);
    };

    // ---------- Observador de scroll ----------
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          io.unobserve(e.target);
          queue.push(e.target);
        }
        queue.sort((a, b) => order.get(a) - order.get(b));
        pump();
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));

    // ---------- Intro: pantalla negra, letra y cursores escaneando ----------
    const intro = document.createElement("div");
    intro.className = "fx-intro";
    intro.innerHTML = `<span class="fx-intro-logo">${initial}</span>`;
    layer.appendChild(intro);
    showRulers(true);
    (async () => {
      await wait(1150);
      if (!alive) return;
      intro.classList.add("fx-out");
      introDone = true;
      cursors.forEach((c) => (c.next = 0));
      set({ status: running ? "Construyendo" : "Explorando" });
      pump();
      const t = setTimeout(() => { timers.delete(t); intro.remove(); }, 700);
      timers.add(t);
    })();

    const onResize = () => {
      buildRuler(rulers[0], false);
      buildRuler(rulers[1], true);
    };
    window.addEventListener("resize", onResize);

    const stop = () => {
      alive = false;
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      timers.clear();
      io.disconnect();
      window.removeEventListener("resize", onResize);
    };

    engineRef.current = {
      setSpeed: (s) => { speed = s; set({ speed: s }); },
      disable: () => {
        stop();
        all.forEach(finish);
        layer.innerHTML = "";
        cLayer.innerHTML = "";
        showRulers(false);
        set({ on: false });
      },
    };

    return () => {
      stop();
      layer.innerHTML = "";
      cLayer.innerHTML = "";
    };
  }, [initial]);

  const pct = hud.total ? Math.round((hud.built / hud.total) * 100) : 0;

  return (
    <>
      <div ref={rulerTopRef} className="fx-ruler fx-ruler-top" aria-hidden="true" />
      <div ref={rulerLeftRef} className="fx-ruler fx-ruler-left" aria-hidden="true" />
      <div ref={layerRef} className="fx-layer" aria-hidden="true" />
      <div ref={cursorLayerRef} className="fx-cursors" aria-hidden="true" />

      {hud.on && (
        <div className="fx-hud" role="status">
          <span className="flex -space-x-1.5">
            <i className="fx-avatar" style={{ background: "#ff4d6d" }}>W</i>
            <i className="fx-avatar" style={{ background: "#4895ef" }}>A</i>
          </span>
          <span className="tabular-nums">
            <b>{hud.agents}</b> agentes
          </span>
          <span className="fx-sep" />
          <span className="tabular-nums">
            <b>{hud.built}</b> / {hud.total} capas
          </span>
          <span className="fx-bar"><i style={{ width: `${pct}%` }} /></span>
          <span className={`fx-status ${hud.done ? "fx-status-done" : ""}`}>{hud.status}</span>
          <button
            type="button"
            className="fx-btn"
            title="Velocidad"
            onClick={() => engineRef.current?.setSpeed(hud.speed === 1 ? 2 : 1)}
          >
            {hud.speed}×
          </button>
          <button
            type="button"
            className="fx-btn"
            title="Saltar animación"
            aria-label="Saltar animación"
            onClick={() => engineRef.current?.disable()}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
