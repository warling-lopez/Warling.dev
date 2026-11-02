import { ArrowDownRight, ArrowRight, MapPin, Play } from "lucide-react";
import { portfolioData } from "../data/content";

export default function Hero() {
  const { name, tagline, availability, location, photo } = portfolioData.personal;
  const { whatsappLink } = portfolioData;
  const { services, process } = portfolioData;

  const stats = [
    { n: `${services.length}.`, label: "Servicios claros" },
    { n: `${process.length}.`, label: "Pasos, sin vueltas" },
    { n: "0", label: "CMS · todo a código" },
  ];

  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden pt-20">
      {/* Resplandor rojo */}
      <div className="pointer-events-none absolute left-1/2 top-[38%] h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div data-build="text" data-label="tag" className="eyebrow pt-6 leading-relaxed">
          <span className="text-accent">Desarrollador / Web</span>
          <br />
          <span className="text-white">Hecho a código</span>
        </div>
      </div>

      {/* Palabra gigante de fondo */}
      <div className="pointer-events-none absolute inset-x-0 top-[200px] z-0 select-none text-center md:top-[17%]">
        <span
          data-build="text"
          data-label="h1.bg"
          className="display inline-block bg-gradient-to-b from-accent to-accent-deep bg-clip-text text-[22vw] leading-none text-transparent md:text-[19vw]"
        >
          Portafolio
        </span>
      </div>

      {/* Foto recortada */}
      <div className="pointer-events-none relative z-10 mx-auto mt-8 w-[82vw] max-w-[400px] md:absolute md:bottom-0 md:left-1/2 md:mt-0 md:w-auto md:max-w-none md:translate-x-[-22%]">
        <img
          data-build="media"
          data-label="img.photo"
          src={photo}
          alt={`Foto de ${name}`}
          className="hero-photo h-auto w-full md:h-[72svh] md:max-h-[640px] md:w-auto"
        />
      </div>

      <div className="relative z-20 mx-auto grid max-w-7xl grid-cols-1 -mt-24 gap-10 px-5 pb-10 md:mt-0 md:min-h-[calc(100svh-9rem)] md:grid-cols-12 md:px-10">
        {/* Columna izquierda */}
        <div className="flex flex-col justify-end md:col-span-5 md:pb-16">
          <p data-build="text" data-label="span.hello" className="script mb-1 text-4xl text-white md:text-6xl">
            Hola, soy
          </p>
          <h1 data-build="text" data-label="h1" className="display text-[19vw] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,.7)] md:text-[8.5rem]">
            {name}
            <span className="text-accent">.</span>
          </h1>
          <p data-build="text" data-label="h2.role" className="display mt-3 text-3xl leading-[0.95] text-accent md:text-4xl">
            Desarrollador
            <br />
            web independiente
          </p>
          <p data-build="text" data-label="p.intro" className="mt-5 max-w-sm text-[15px] leading-relaxed text-neutral-300">
            {tagline}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              data-build="block"
              data-label="a.cta"
              href="#trabajos"
              className="group inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-white hover:text-ink"
            >
              Ver mis trabajos
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <span data-build="text" data-label="span.loc" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-neutral-400">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              {location}
            </span>
          </div>
        </div>

        {/* Columna derecha */}
        <aside className="hidden flex-col items-end justify-between pb-16 pt-10 text-right md:col-span-3 md:col-start-10 md:flex">
          <div data-build="text" data-label="badge" className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-neutral-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {availability}
          </div>

          <p data-build="text" data-label="p.quote" className="text-sm leading-snug text-neutral-300">
            Cada línea,
            <br />
            escrita a mano.
          </p>

          <ul className="space-y-5">
            {stats.map((s) => (
              <li key={s.label} data-build="block" data-label="stat" className="flex items-center justify-end gap-3">
                <span className="text-[11px] uppercase tracking-[0.14em] text-neutral-400">{s.label}</span>
                <span className="display w-16 text-5xl text-accent">{s.n}</span>
              </li>
            ))}
          </ul>

          <a
            data-build="block"
            data-label="a.whatsapp"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-white hover:text-accent"
          >
            Escríbeme por WhatsApp <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </aside>
      </div>

      <div className="relative z-20 mx-auto hidden max-w-7xl items-center justify-between px-10 pb-8 md:flex">
        <a data-build="block" data-label="a.process" href="#proceso" className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-white hover:text-accent">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-neutral-600">
            <Play className="h-3.5 w-3.5 fill-current" />
          </span>
          Ver cómo trabajo
        </a>
        <span data-build="text" data-label="scroll" className="eyebrow">Scroll para descubrir ↓</span>
      </div>
    </section>
  );
}
