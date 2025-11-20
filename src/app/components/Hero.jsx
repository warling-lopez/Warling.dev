"use client";
import { portfolioData } from "../data/content";

export default function Hero() {
  const { name, role, tagline, availability, calendly } = portfolioData.personal;

  return (
    <section className="min-h-[80vh] flex flex-col justify-center max-w-4xl mx-auto px-6 pt-24">
      
      {/* Badge de Disponibilidad */}
      <div className="mb-6 inline-flex items-center border border-emerald-900 bg-emerald-950/30 rounded-full px-4 py-2">
        <span className="relative flex h-2 w-2 mr-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
          {availability}
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
        {name}.
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-neutral-500 mb-8">
        {role}.
      </h2>
      <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed mb-10 border-l-2 border-neutral-700 pl-6">
        {tagline}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href={calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center bg-emerald-500 text-black px-8 py-4 font-mono font-bold hover:bg-emerald-400 transition-colors"
        >
          Agendar Consulta Gratis
        </a>
        <a 
          href="#work"
          className="text-center border border-neutral-700 text-white px-8 py-4 font-mono font-bold hover:border-white transition-colors"
        >
          Ver Portafolio
        </a>
      </div>
    </section>
  );
}