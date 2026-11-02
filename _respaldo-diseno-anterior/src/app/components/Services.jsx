"use client";
import { portfolioData } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="py-20 max-w-4xl mx-auto px-6">
      <h3 className="text-2xl font-mono text-white mb-12 border-b border-neutral-800 pb-4">
        <span className="text-emerald-400">01.</span> Servicios Técnicos
      </h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        {portfolioData.services.map((service, index) => (
          <div key={index} className="bg-neutral-900/20 border border-neutral-800 p-6 hover:border-emerald-500/50 transition-colors flex flex-col">
            <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
            <p className="text-neutral-400 text-sm mb-6 flex-grow">{service.description}</p>
            
            <div className="space-y-2 mb-6">
              <p className="text-xs font-mono text-emerald-500 uppercase">Entregables:</p>
              <ul className="text-sm text-neutral-300 list-disc list-inside">
                {service.deliverables.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            
            <p className="text-xs font-mono text-neutral-600 mt-auto border-t border-neutral-800 pt-4">
              Stack: {service.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}