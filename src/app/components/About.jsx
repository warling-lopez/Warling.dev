import { portfolioData } from "../data/content";
import SectionLabel from "./SectionLabel";

export default function About() {
  const { about, stack, personal } = portfolioData;
  const pillars = [
    { t: "Rápido", d: "Páginas ligeras que cargan en segundos, también en datos móviles." },
    { t: "Limpio", d: "Código ordenado y fácil de mantener, sin capas innecesarias." },
    { t: "Tuyo", d: "Recibes el código fuente completo. Tu web te pertenece." },
  ];

  return (
    <section id="sobre-mi" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel index="04">Detrás del código</SectionLabel>
            <h2 data-build="text" data-label="h2" className="display text-5xl text-white md:text-7xl">
              {about.title[0]}
              <br />
              Una forma de <span className="text-accent">{about.highlight}</span>
            </h2>
          </div>
          <p data-build="text" data-label="p.bio" className="self-end text-sm leading-relaxed text-neutral-400 md:col-span-4 md:col-start-9">
            {about.text}
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h3 data-build="text" data-label="h3" className="text-sm font-bold uppercase tracking-[0.14em] text-white">
              Habilidades
            </h3>
            <p data-build="text" data-label="label" className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              Stack principal
            </p>
            <ul data-build="block" data-label="ul.stack" className="mt-3 flex flex-wrap gap-2">
              {stack.map((t) => (
                <li key={t} className="border border-line bg-coal px-3 py-1.5 text-xs text-neutral-300">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 data-build="text" data-label="h3" className="text-sm font-bold uppercase tracking-[0.14em] text-white">
              Lo que recibes
            </h3>
            <ul className="mt-5 space-y-5">
              {pillars.map((p, i) => (
                <li key={p.t} data-build="block" data-label="li" className="flex gap-4">
                  <span className="display text-2xl text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-sm font-bold text-white">{p.t}</p>
                    <p className="mt-1 text-sm text-neutral-400">{p.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <figure data-build="media" data-label="figure.quote" className="relative flex flex-col justify-between bg-accent p-7 md:col-span-4">
            <span className="display text-6xl leading-none text-ink/30">“</span>
            <blockquote className="mt-2 text-2xl font-semibold leading-snug text-ink">{about.quote}</blockquote>
            <figcaption className="mt-8 flex items-end justify-between">
              <span className="script text-4xl text-ink">{personal.name}</span>
              <span className="eyebrow text-ink/70">{personal.roleShort}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
