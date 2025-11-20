"use client";
import { portfolioData } from "../data/content";

export default function Process() {
  return (
    <section className="py-20 max-w-4xl mx-auto px-6 border-t border-neutral-900">
      <h3 className="text-2xl font-mono text-white mb-12">
        <span className="text-emerald-400">02.</span> Proceso de Trabajo
      </h3>

      <div className="grid md:grid-cols-4 gap-4">
        {portfolioData.process.map((step, index) => (
          <div key={index} className="relative group">
            <div className="text-6xl font-bold text-neutral-800/50 mb-2 font-mono group-hover:text-neutral-800 transition-colors">
              {step.step}
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
            <p className="text-sm text-neutral-400 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}