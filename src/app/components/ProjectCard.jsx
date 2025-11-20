"use client";
import { useState } from "react";

export default function ProjectCard({ project }) {
  const stack = project.stack ?? [];
  const roles = project.myRole ?? [];
  const deliverables = project.deliverables ?? []; // <-- Asumiendo que aquí vienen tus entregables
  const codeSnippet = project.codeSnippet ?? { title: '', code: '' };

  const [showAll, setShowAll] = useState(false);

  const visibleDeliverables = showAll
    ? deliverables
    : deliverables.slice(0, 4);

  return (
    <article className="mb-24 border-b border-neutral-800 pb-12 last:border-0">
      <div className="grid lg:grid-cols-2 gap-10">

        {/* Info del Proyecto */}
        <div>
          <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>

          <div className="flex flex-wrap gap-2 mb-6">
            {stack.map((tech) => (
              <span key={tech} className="text-xs font-mono text-emerald-400 bg-emerald-900/10 border border-emerald-900/30 px-2 py-1">
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-6 text-neutral-300 text-sm leading-relaxed">
            <div>
              <strong className="text-white block font-mono uppercase text-xs mb-1 tracking-wider">Problema Real</strong>
              <p>{project.problem}</p>
            </div>

            <div>
              <strong className="text-white block font-mono uppercase text-xs mb-1 tracking-wider">Solución Técnica</strong>
              <p>{project.solution}</p>
            </div>

            {/* LISTA DE ENTREGABLES CON VER MÁS / VER MENOS */}
            {deliverables.length > 0 && (
              <div>
                <strong className="text-white block font-mono uppercase text-xs mb-1 tracking-wider">
                  Entregables
                </strong>

                <ul className="list-disc list-inside text-neutral-400 marker:text-emerald-500">
                  {visibleDeliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {deliverables.length > 4 && (
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="mt-2 text-emerald-400 text-xs underline underline-offset-4"
                  >
                    {showAll ? "Ver menos" : "Ver más"}
                  </button>
                )}
              </div>
            )}

            {/* MI ROL */}
            {roles.length > 0 && (
              <div>
                <strong className="text-white block font-mono uppercase text-xs mb-1 tracking-wider">Mi Rol</strong>
                <ul className="list-disc list-inside text-neutral-400 marker:text-emerald-500">
                  {roles.map((role) => <li key={role}>{role}</li>)}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-8 flex gap-6 font-mono text-sm">
            <a
              href={project.repoLink}
              className="text-white hover:text-emerald-400 underline decoration-neutral-700 underline-offset-4"
            >
              git log --repo
            </a>

            {project.demoLink && (
              <a
                href={project.demoLink}
                className="text-white hover:text-emerald-400 underline decoration-neutral-700 underline-offset-4"
              >
                curl --head demo
              </a>
            )}
          </div>
        </div>

        {/* Bloque de Código */}
        <div className="bg-[#0a0a0a] border border-neutral-800 rounded overflow-hidden flex flex-col shadow-2xl">
          <div className="bg-neutral-900 px-4 py-2 border-b border-neutral-800 flex justify-between items-center">
            <span className="text-xs text-neutral-500 font-mono">{codeSnippet.title || 'Snippet'}</span>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
            </div>
          </div>
          <pre className="p-4 text-xs md:text-sm font-mono text-neutral-300 overflow-x-auto custom-scrollbar">
            <code>{codeSnippet.code || ''}</code>
          </pre>
        </div>

      </div>
    </article>
  );
}
