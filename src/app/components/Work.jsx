import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/content";
import SectionLabel from "./SectionLabel";

// Miniatura dibujada con CSS cuando el proyecto aún no tiene imagen
function MockThumb({ title, variant = 0 }) {
  const accents = ["from-accent/70 to-accent-deep/40", "from-sky-500/40 to-indigo-700/30", "from-amber-400/40 to-rose-600/30"];
  return (
    <div className="relative h-full w-full overflow-hidden bg-coal">
      <div className={`absolute inset-0 bg-gradient-to-br ${accents[variant % 3]} opacity-60`} />
      <div className="absolute inset-x-4 top-4 bottom-0 rounded-t-md border border-white/10 bg-ink/80 shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <i className="h-2 w-2 rounded-full bg-white/20" />
          <i className="h-2 w-2 rounded-full bg-white/20" />
          <i className="h-2 w-2 rounded-full bg-white/20" />
          <span className="ml-3 h-2 w-24 rounded bg-white/10" />
        </div>
        <div className="space-y-2.5 p-4">
          <p className="display text-2xl leading-none text-white">{title}</p>
          <span className="block h-2 w-3/4 rounded bg-white/15" />
          <span className="block h-2 w-1/2 rounded bg-white/10" />
          <span className="mt-3 inline-block h-6 w-24 rounded-sm bg-accent" />
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const { projects } = portfolioData;
  const slots = 3;
  const placeholders = Math.max(0, slots - projects.length);

  return (
    <section id="trabajos" className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <SectionLabel index="01">Trabajos seleccionados</SectionLabel>
          <h2 data-build="text" data-label="h2" className="display text-5xl text-white md:text-7xl">
            Proyectos que <span className="text-accent">hablan.</span>
          </h2>
        </div>
        <a data-build="block" data-label="a.all" href="#contacto" className="eyebrow inline-flex items-center gap-2 hover:text-white">
          ¿Tienes un proyecto? <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <article key={p.title} className="group">
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="block" aria-label={`Abrir ${p.title} (${p.domain})`}>
              <div data-build="media" data-label="img.thumb" className="aspect-[16/10] overflow-hidden border border-line">
                {p.image ? (
                  <img src={p.image} alt={`Captura de ${p.title}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                    <MockThumb title={p.title} variant={i} />
                  </div>
                )}
              </div>
              <div data-build="block" data-label="caption" className="mt-4 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <span className="display text-4xl leading-none text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-white">{p.title}</h3>
                    <p className="mt-1 text-xs text-neutral-500">
                      {p.category} · <span className="text-neutral-400">{p.domain}</span>
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-500 transition-colors group-hover:text-accent" />
              </div>
            </a>
            <dl data-build="text" data-label="dl.details" className="mt-4 space-y-2 border-t border-line pt-4 text-[13px] leading-relaxed">
              <div><dt className="inline font-semibold text-neutral-200">Problema: </dt><dd className="inline text-neutral-400">{p.problem}</dd></div>
              <div><dt className="inline font-semibold text-neutral-200">Solución: </dt><dd className="inline text-neutral-400">{p.solution}</dd></div>
              <div><dt className="inline font-semibold text-accent">Resultado: </dt><dd className="inline text-neutral-300">{p.value}</dd></div>
            </dl>
          </article>
        ))}

        {Array.from({ length: placeholders }).map((_, k) => {
          const i = projects.length + k;
          return (
            <a key={i} href="#contacto" className="group block">
              <div data-build="media" data-label="img.next" className="relative grid aspect-[16/10] place-items-center overflow-hidden border border-dashed border-neutral-700 bg-coal">
                <span className="display text-[7rem] leading-none text-ash transition-colors group-hover:text-accent/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="absolute bottom-4 left-4 eyebrow">Espacio disponible</span>
              </div>
              <div data-build="block" data-label="caption" className="mt-4 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <span className="display text-4xl leading-none text-neutral-700">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                      {k === 0 ? "Tu negocio, aquí" : "El próximo proyecto"}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-500">Hablemos de tu idea</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-500 transition-colors group-hover:text-accent" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
