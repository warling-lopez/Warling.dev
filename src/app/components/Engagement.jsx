"use client";
import { portfolioData } from "../data/content";

export default function Engagement() {
  return (
    <section className="py-20 max-w-4xl mx-auto px-6 bg-neutral-900/30">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10">
        <h3 className="text-2xl font-mono text-white">
          <span className="text-emerald-400">03.</span> Modelos de Contratación
        </h3>
        <p className="text-sm text-neutral-500 mt-2 md:mt-0">Facturación clara. Sin sorpresas.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {portfolioData.engagement.map((model, index) => (
          <div key={index} className="border border-neutral-700 p-8 rounded bg-neutral-950">
            <h4 className="text-xl font-bold text-white mb-2">{model.title}</h4>
            <p className="text-emerald-400 font-mono text-xs mb-4 bg-emerald-950/30 inline-block px-2 py-1 rounded">
              Ideal para: {model.idealFor}
            </p>
            <p className="text-neutral-300 text-sm">{model.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}