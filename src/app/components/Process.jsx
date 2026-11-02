import { portfolioData } from "../data/content";
import SectionLabel from "./SectionLabel";

// Resaltado de sintaxis muy simple para el bloque de código
function highlight(code) {
  const esc = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return esc
    .replace(/(".*?"|'.*?'|`.*?`)/g, '<span style="color:#9fdcf0">$1</span>')
    .replace(/\b(const|let|return|function|await|async|import|from|export)\b/g, '<span style="color:#0fb3dc">$1</span>')
    .replace(/\b(\d+)\b/g, '<span style="color:#ffd166">$1</span>')
    .replace(/(=&gt;)/g, '<span style="color:#0fb3dc">$1</span>');
}

export default function Process() {
  const { process, codeSample: snippet } = portfolioData;
  const lines = snippet.code.split("\n");

  return (
    <section id="proceso" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel index="03">Del código al resultado</SectionLabel>
          <h2 data-build="text" data-label="h2" className="display text-6xl text-white md:text-7xl">
            Del código.
            <br />
            <span className="text-accent">A lo real.</span>
          </h2>
          <p data-build="text" data-label="p" className="mt-6 max-w-xs text-sm leading-relaxed text-neutral-400">
            Una idea. Un proceso claro. Mira cómo unas líneas de código se convierten en una página que trabaja por
            tu negocio.
          </p>
          <p data-build="text" data-label="meta" className="mt-6 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
            {snippet.title} · Next.js · Tailwind CSS
          </p>
        </div>

        <div className="grid gap-4 md:col-span-8 md:grid-cols-5">
          <div data-build="media" data-label="pre.code" className="overflow-hidden border border-line bg-[#0b0b0c] md:col-span-3">
            <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
              <span className="text-[11px] text-neutral-500">{snippet.title}</span>
              <span className="flex gap-1.5">
                <i className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                <i className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                <i className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              </span>
            </div>
            <pre className="overflow-x-auto p-4 text-[12.5px] leading-6 text-neutral-300">
              {lines.map((l, i) => (
                <div key={i} className="flex gap-4">
                  <span className="w-4 select-none text-right text-neutral-700">{i + 1}</span>
                  <code dangerouslySetInnerHTML={{ __html: highlight(l) || "&nbsp;" }} />
                </div>
              ))}
            </pre>
          </div>

          <div data-build="media" data-label="div.preview" className="relative min-h-56 overflow-hidden border border-line bg-gradient-to-br from-accent/80 via-accent-deep to-[#03161b] md:col-span-2">
            <div className="absolute inset-0 opacity-30 [background:repeating-linear-gradient(0deg,transparent_0_23px,rgba(255,255,255,.08)_23px_24px),repeating-linear-gradient(90deg,transparent_0_23px,rgba(255,255,255,.08)_23px_24px)]" />
            <div className="relative flex h-full flex-col justify-end p-5">
              <span className="eyebrow text-white/70">Resultado</span>
              <p className="display mt-2 text-4xl leading-none text-white">Tu negocio, en línea.</p>
              <a href="#contacto" className="mt-4 inline-block w-max bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-white">
                Hablemos →
              </a>
            </div>
          </div>
        </div>
      </div>

      <ol className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 md:grid-cols-4">
        {process.map((s) => (
          <li key={s.step} data-build="block" data-label="li.step" className="group bg-ink p-6 transition-colors hover:bg-coal">
            <span className="display text-5xl text-accent">{s.step}</span>
            <h3 className="mt-4 text-base font-bold text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
