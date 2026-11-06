import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { portfolioData } from "../data/content";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  const { personal, whatsappLink } = portfolioData;
  const rows = [
    { icon: MessageCircle, label: "WhatsApp", value: personal.whatsappDisplay, href: whatsappLink },
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: Linkedin, label: "LinkedIn", value: "in/warlinglopez-dev", href: personal.social.linkedin },
    { icon: Github, label: "GitHub", value: "github.com/warling-lopez", href: personal.social.github },
    { icon: Instagram, label: "Instagram · Grolow", value: "@grolow.studio", href: personal.social.instagram },
  ];

  return (
    <section id="contacto" className="relative overflow-hidden border-t border-line">
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[50vmin] w-[50vmin] rounded-full bg-accent/15 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-5 lg:col-span-4">
          <SectionLabel index="06">Contacto</SectionLabel>
          <h2 data-build="text" data-label="h2" className="display text-6xl text-white md:text-7xl">
            Trabajemos
            <br />
            <span className="text-accent">juntos.</span>
          </h2>
          <p data-build="text" data-label="p" className="mt-6 max-w-xs text-sm leading-relaxed text-neutral-400">
            Actualmente tengo disponibilidad para 1 proyecto nuevo. Cuéntame qué necesita tu negocio.
          </p>
        </div>

        <ul className="self-center md:col-span-7 lg:col-span-4">
          {rows.map(({ icon: Icon, label, value, href }) => (
            <li key={label} data-build="block" data-label="a.contact" className="border-b border-line first:border-t">
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-4"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center border border-line text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="eyebrow block">{label}</span>
                  <span className="block truncate text-sm text-white">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          data-build="media"
          data-label="a.card"
          className="group relative flex min-h-72 flex-col justify-between overflow-hidden bg-[#06161a] p-7 md:col-span-12 lg:col-span-4"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-transparent to-transparent transition-opacity group-hover:opacity-80" />
          <span className="relative eyebrow">Tu próximo proyecto</span>
          <p className="relative display text-6xl text-white">
            Hazlo
            <br />
            <span className="text-accent">real.</span>
          </p>
          <span className="relative inline-flex w-max items-center gap-2 bg-accent px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-ink transition-colors group-hover:bg-white group-hover:text-ink">
            Escríbeme por WhatsApp <ArrowUpRight className="h-4 w-4" />
          </span>
        </a>
      </div>

      <footer className="relative border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-xs text-neutral-500 md:px-10">
          <a href="#inicio" className="display text-xl text-white">
            {personal.name}
            <span className="text-accent">.</span>
          </a>
          <p>© {new Date().getFullYear()} {personal.fullName}. Hecho a código con Next.js. Creado por{" "}
            <a
              href="https://grolow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-accent"
            >
              Grolow
            </a>
            .
          </p>
          <a href="#inicio" className="uppercase tracking-[0.16em] hover:text-white">Volver arriba ↑</a>
        </div>
      </footer>
    </section>
  );
}
