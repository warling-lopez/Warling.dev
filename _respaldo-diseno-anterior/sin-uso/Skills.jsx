"use client";
import { portfolioData } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-4xl mx-auto px-6 border-t border-neutral-900">
      <h3 className="text-2xl font-mono text-white mb-12">
        <span className="text-emerald-400">01.</span> Stack & Justificación
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {portfolioData.skills.map((skill, index) => (
          <div key={index} className="border border-neutral-800 p-6 bg-neutral-900/30 hover:border-neutral-600 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-lg font-bold text-white">{skill.name}</h4>
              <span className="text-xs font-mono bg-neutral-800 text-emerald-400 px-2 py-1 rounded">
                {skill.category}
              </span>
            </div>
            <div className="space-y-3 text-sm">
              <p className="text-neutral-400">
                <span className="text-neutral-600 font-mono">Why:</span> {skill.reason}
              </p>
              <p className="text-neutral-300">
                <span className="text-neutral-600 font-mono">Solved:</span> {skill.problemSolved}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}