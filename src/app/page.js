import Hero from "./components/Hero";
import Services from "./components/Services";
import ProjectCard from "./components/ProjectCard"; // Usamos el mismo de antes
import Process from "./components/Process";
import Engagement from "./components/Engagement";
import { portfolioData } from "./data/content";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 selection:bg-emerald-500/30">
      <Hero />

      <Services />

      <Process />
      
      <Engagement />
      
      <section
        id="work"
        className="py-20 max-w-4xl mx-auto px-6 border-t border-neutral-900"
      >
        <h3 className="text-2xl font-mono text-white mb-12">
          <span className="text-emerald-400">04.</span> Casos de Éxito
        </h3>
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>

      <section
        id="contact"
        className="py-32 max-w-2xl mx-auto px-6 text-center"
      >
        <h3 className="text-4xl font-bold text-white mb-6">
          ¿Listo para construir?
        </h3>
        <p className="text-neutral-400 mb-10 text-lg">
          Actualmente tengo disponibilidad para 1 proyecto nuevo. Hablemos sobre
          tus requisitos técnicos y de negocio.
        </p>

        <div className="flex flex-col items-center gap-6">
          <a
            href={portfolioData.personal.calendly}
            className="bg-white text-black px-10 py-4 font-bold font-mono text-lg hover:bg-emerald-400 transition-colors w-full md:w-auto"
          >
            Agendar llamada (15 min)
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="text-neutral-500 hover:text-white transition-colors font-mono text-sm"
          >
            o escríbeme a {portfolioData.personal.email}
          </a>
        </div>
      </section>

      <footer className="py-8 text-center border-t border-neutral-900 text-neutral-600 text-xs font-mono">
        <p>
          &copy; {new Date().getFullYear()} {portfolioData.personal.name}.
          Freelance Full-Stack Engineer.
        </p>
      </footer>
    </main>
  );
}
