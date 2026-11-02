import { portfolioData } from "../data/content";

export default function Stack() {
  const items = [...portfolioData.stack, ...portfolioData.stack];
  return (
    <section aria-label="Herramientas" className="border-y border-line py-10">
      <div className="mx-auto mb-6 max-w-7xl px-5 md:px-10">
        <p data-build="text" data-label="label" className="eyebrow leading-relaxed">
          Herramientas con las que
          <br />
          <span className="text-white">construyo cada proyecto.</span>
        </p>
      </div>
      <div data-build="block" data-label="marquee" className="relative overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-14 pr-14">
          {items.map((t, i) => (
            <span
              key={i}
              className={`display whitespace-nowrap text-4xl md:text-5xl ${i % 3 === 0 ? "text-accent" : "text-neutral-600"}`}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
      </div>
    </section>
  );
}
