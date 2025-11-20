// app/data/content.js

export const portfolioData = {
  personal: {
    name: "Warling Dev",
    role: "Desarrollador Web Independiente (JS)",
    tagline:
      "Creo páginas web rápidas, limpias y a código. Nada de CMS. Soluciones simples y estables para negocios reales.",
    availability: "🟢 Disponible para proyectos pequeños y medianos",
    email: "contacto@warlingdev.com",
    calendly: "https://calendly.com/warling", 
    social: {
      github: "https://github.com/warling",
      linkedin: "https://linkedin.com/in/warling"
    }
  },

  services: [
    {
      title: "Páginas Web a Código (HTML/CSS/JS)",
      description:
        "Sitios rápidos, ligeros y hechos desde cero. Pensados para negocios locales que quieren algo simple y profesional.",
      deliverables: [
        "Código fuente completo",
        "Optimización de carga",
        "Diseño adaptable (responsive)"
      ],
      tech: "HTML, CSS, JavaScript, Vite"
    },
    {
      title: "Webs con Funcionalidades Personalizadas",
      description:
        "Formularios, filtros, catálogos, dashboards simples y funciones hechas a la medida.",
      deliverables: [
        "Frontend funcional",
        "Integraciones con APIs",
        "Módulos JS reutilizables"
      ],
      tech: "JavaScript, Node.js (si se requiere), SQLite"
    },
    {
      title: "Mantenimiento y Cambios",
      description:
        "Actualización de contenido, correcciones, limpieza del código y mejoras visuales.",
      deliverables: [
        "Correcciones puntuales",
        "Soporte mensual básico",
        "Mejoras de rendimiento"
      ],
      tech: "Cualquier stack JS"
    }
  ],

  engagement: [
    {
      title: "Precio Fijo por Proyecto",
      idealFor: "Landing pages, páginas simples, funciones específicas.",
      desc: "Alcance claro, precio claro. Ideal para negocios pequeños."
    },
    {
      title: "Soporte Mensual",
      idealFor: "Negocios que necesitan cambios y mejoras constantes.",
      desc: "Incluye correcciones, actualizaciones y ajustes menores."
    },
    {
      title: "Despliegue / Hosting",
      idealFor: "Clientes sin experiencia técnica.",
      desc: "Configuro hosting, dominio, SSL y dejo todo funcionando."
    }
  ],

  process: [
    {
      step: "01",
      title: "Revisión del Negocio",
      desc: "Confirmo qué necesita el cliente y si es posible con su presupuesto."
    },
    {
      step: "02",
      title: "Propuesta",
      desc: "Alcance simple, precio claro, tiempo estimado."
    },
    {
      step: "03",
      title: "Desarrollo",
      desc: "Código limpio, avances visibles y comunicación directa."
    },
    {
      step: "04",
      title: "Entrega",
      desc: "Deploy listo, archivos entregados, propiedad del cliente."
    }
  ],

  projects: [
    {
      title: "Página para Negocio Local",
      problem: "Negocio sin presencia online y con baja visibilidad.",
      solution:
        "Landing rápida hecha a código, optimizada y lista para móviles.",
      value: "Mayor credibilidad y más consultas por WhatsApp.",
      stack: ["HTML", "CSS", "JavaScript", "Vite"],
      repoLink: "#",
      codeSnippet: {
        title: "Animación de entrada suave",
        code: `const fadeIn = (el) => {
  el.style.opacity = 0;
  setTimeout(() => (el.style.transition = "opacity .6s"), 10);
  setTimeout(() => (el.style.opacity = 1), 50);
};
fadeIn(document.querySelector(".hero"));`
      }
    }
  ]
};
