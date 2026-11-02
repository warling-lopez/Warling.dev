// app/data/content.js

export const portfolioData = {
  personal: {
    name: "Warling Dev",
    role: "Desarrollador Web Independiente",
    tagline:
      "Creo páginas web rápidas, limpias y a código. Nada de CMS. Soluciones simples y estables para negocios reales.",
    availability: "🟢 Disponible para proyectos pequeños y medianos",
    email: "contacto@warlingdev.com",
    calendly: "https://calendly.com/warling", 
    social: {
      github: "https://github.com/warling-lopez",
      linkedin: "https://linkedin.com/in/warling"
    }
  },

  services: [
    {
      title: "Páginas Webs Simples",
      description:
        "Sitios rápidos y ligeros. Pensados para negocios locales que quieren algo simple y profesional.",
      deliverables: [
        "Código fuente completo",
        "Buenas prácticas SEO básicas",
        "Diseño responsive (móvil)",
        "Deploy en hosting (opcional)"
      ],
      tech: "Vite, Nextjs, Remix o Astro todo con SSR (si se requiere)"
    },
    {
      title: "Webs Personalizadas",
      description:
        "Formularios, filtros, catálogos, dashboards simples y funciones hechas a la medida.",
      deliverables: [
        "Código fuente completo",
        "Integraciones con APIs",
        "Buenas prácticas SEO ",
        "mejoras de rendimiento",
        "Diseño responsive (móvil)",
        "Deploy en hosting (opcional)"
      ],
      tech: "Nextjs, SQLite, tailwindcss, APIs REST (según necesidad)"
    },
    {
      title: "Mantenimiento Web",
      description:
        "Actualización de contenido, correcciones, limpieza del código y mejoras visuales.",
      deliverables: [
        "Correcciones puntuales",
        "Soporte mensual básico",
        "Mejoras de rendimiento"
      ],
      tech: "Nextjs, Vite, JavaScript, Php (según proyecto existente)"
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
