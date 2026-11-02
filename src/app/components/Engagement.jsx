import { portfolioData } from "../data/content";
import SectionLabel from "./SectionLabel";

export default function Engagement() {
  const { engagement } = portfolioData;
  return (
    <section id="modelos" className="border-t border-line bg-coal/60">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel index="05">Modelos de trabajo</SectionLabel>
            <h2 data-build="text" data-label="h2" className="display text-5xl text-white md:text-6xl">
              Sigue avanzando. <span className="text-accent">Sigue construyendo.</span>
            </h2>
          </div>
          <p data-build="text" data-label="p" className="max-w-xs text-sm text-neutral-400">
            Facturación clara. Sin sorpresas. Elige la forma que mejor se adapte a tu negocio.
          </p>
        </div>

        <div className="relative mt-14">
          <div data-build="block" data-label="line" className="absolute left-0 right-0 top-[7px] hidden h-px bg-gradient-to-r from-accent via-line to-transparent md:block" />
          <ol className="grid gap-10 md:grid-cols-3">
            {engagement.map((m, i) => (
              <li key={m.title} data-build="block" data-label="li.model" className="relative md:pt-10">
                <span className="absolute left-0 top-0 hidden h-[15px] w-[15px] rounded-full border-2 border-accent bg-ink md:block" />
                <span className="eyebrow text-accent">Opción {String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-xl font-bold text-white">{m.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{m.desc}</p>
                <p className="mt-4 border-l-2 border-accent pl-3 text-xs text-neutral-500">
                  <span className="font-semibold text-neutral-300">Ideal para: </span>
                  {m.idealFor}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-20 grid items-end gap-6 border-t border-line pt-10 md:grid-cols-2">
          <p data-build="text" data-label="h3.big" className="display text-5xl text-white md:text-7xl">
            Pequeños detalles.
            <br />
            <span className="text-accent">Gran impacto.</span>
          </p>
          <p data-build="text" data-label="p" className="max-w-md text-sm leading-relaxed text-neutral-400 md:justify-self-end">
            Un botón de WhatsApp bien puesto, una foto que carga rápido, un texto claro. Son los detalles que convierten
            visitas en clientes.
          </p>
        </div>
      </div>
    </section>
  );
}
