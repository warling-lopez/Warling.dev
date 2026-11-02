import { portfolioData } from "../data/content";
import SectionLabel from "./SectionLabel";

function Laurel({ flip = false }) {
  return (
    <svg viewBox="0 0 40 80" className={`h-20 w-10 text-accent ${flip ? "-scale-x-100" : ""}`} aria-hidden="true">
      <g fill="currentColor">
        <path d="M30 76c-12-8-20-22-20-38 0-10 3-20 9-28l2 1c-5 8-8 17-8 27 0 15 7 28 18 36z" />
        <ellipse cx="12" cy="18" rx="4" ry="9" transform="rotate(-25 12 18)" />
        <ellipse cx="7" cy="32" rx="4" ry="9" transform="rotate(-50 7 32)" />
        <ellipse cx="7" cy="47" rx="4" ry="9" transform="rotate(-70 7 47)" />
        <ellipse cx="12" cy="61" rx="4" ry="9" transform="rotate(-100 12 61)" />
      </g>
    </svg>
  );
}

export default function Services() {
  const { services } = portfolioData;
  return (
    <section id="servicios" className="relative overflow-hidden bg-gradient-to-b from-[#061a1f] via-coal to-ink">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-5">
          <SectionLabel index="02">Servicios & enfoque</SectionLabel>
          <h2 data-build="text" data-label="h2" className="display text-6xl text-white md:text-7xl">
            El trabajo.
            <br />
            <span className="text-accent">Los servicios.</span>
          </h2>

          <div data-build="block" data-label="badge.100" className="mt-10 flex items-center gap-2">
            <Laurel />
            <div className="text-center">
              <p className="display text-7xl leading-none text-white">100<span className="text-accent">%</span></p>
              <p className="eyebrow mt-1 text-accent">Código propio</p>
            </div>
            <Laurel flip />
          </div>

          <p data-build="text" data-label="p" className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-400">
            Sin plantillas ni CMS. Cada sitio se escribe desde cero, se entrega con su código fuente y queda 100% en
            manos del cliente.
          </p>
        </div>

        <ul className="md:col-span-7">
          {services.map((s, i) => (
            <li
              key={s.title}
              data-build="block"
              data-label="li.service"
              className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 border-b border-line py-7 first:border-t"
            >
              <span className="mt-1 text-xs font-semibold text-neutral-500">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-lg font-bold text-white transition-colors group-hover:text-accent">{s.title}</h3>
                <p className="mt-1 text-sm text-neutral-400">{s.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="border border-line px-2.5 py-1 text-[11px] text-neutral-300">
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[11px] uppercase tracking-[0.12em] text-neutral-600">{s.tech}</p>
              </div>
              <span className="display text-4xl leading-none text-accent">{String(i + 1).padStart(2, "0")}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
