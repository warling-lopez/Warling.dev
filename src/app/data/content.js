// app/data/content.js
// Todo el texto del sitio vive aquí. Cambia lo que quieras y la página se actualiza sola.

export const portfolioData = {
  personal: {
    name: "Warling",
    fullName: "Warling López",
    role: "Desarrollador Web Independiente",
    roleShort: "Desarrollador Web",
    tagline:
      "Creo páginas web rápidas, limpias y a código. Nada de CMS. Soluciones simples y estables para negocios reales.",
    availability: "Disponible para proyectos pequeños y medianos",
    location: "República Dominicana",
    email: "warlinglopez01@gmail.com",
    // WhatsApp: solo números, con código de país (1 = República Dominicana)
    whatsapp: "18099439787",
    whatsappDisplay: "+1 (809) 943-9787",
    whatsappMessage: "Hola Warling, vi tu portafolio y quiero una página web para mi negocio.",
    photo: "/foto-perfil.png",
    social: {
      github: "https://github.com/warling-lopez",
      linkedin: "https://www.linkedin.com/in/warlinglopez-dev/",
      instagram: "https://www.instagram.com/grolow.studio/",
    },
  },

  // Enlace de WhatsApp listo para usar en los botones
  get whatsappLink() {
    const p = this.personal;
    return `https://wa.me/${p.whatsapp}?text=${encodeURIComponent(p.whatsappMessage)}`;
  },

  // Sección "Sobre mí"
  about: {
    title: ["No solo código.", "Una forma de resolver."],
    highlight: "resolver.",
    text:
      "Trabajo directo con el dueño del negocio: sin intermediarios, sin plantillas recicladas. Escribo cada línea pensando en que la página cargue rápido, se vea bien en el móvil y sea tuya de verdad.",
    quote:
      "Una buena web no se nota. Solo funciona, carga rápido y le trae clientes a tu negocio.",
  },

  // Herramientas con las que trabajas (cinta animada)
  stack: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Vite",
    "Astro",
    "Remix",
    "SQLite",
    "Supabase",
    "APIs REST",
    "PHP",
  ],

  services: [
    {
      title: "Páginas Webs Simples",
      description:
        "Sitios rápidos y ligeros. Pensados para negocios locales que quieren algo simple y profesional.",
      deliverables: [
        "Código fuente completo",
        "Buenas prácticas SEO básicas",
        "Diseño responsive (móvil)",
        "Deploy en hosting (opcional)",
      ],
      tech: "Vite, Next.js, Remix o Astro, todo con SSR (si se requiere)",
    },
    {
      title: "Webs Personalizadas",
      description:
        "Formularios, filtros, catálogos, dashboards simples y funciones hechas a la medida.",
      deliverables: [
        "Código fuente completo",
        "Integraciones con APIs",
        "Buenas prácticas SEO",
        "Mejoras de rendimiento",
        "Diseño responsive (móvil)",
        "Deploy en hosting (opcional)",
      ],
      tech: "Next.js, SQLite, Tailwind CSS, APIs REST (según necesidad)",
    },
    {
      title: "Mantenimiento Web",
      description:
        "Actualización de contenido, correcciones, limpieza del código y mejoras visuales.",
      deliverables: [
        "Correcciones puntuales",
        "Soporte mensual básico",
        "Mejoras de rendimiento",
      ],
      tech: "Next.js, Vite, JavaScript, PHP (según proyecto existente)",
    },
  ],

  engagement: [
    {
      title: "Precio Fijo por Proyecto",
      idealFor: "Landing pages, páginas simples, funciones específicas.",
      desc: "Alcance claro, precio claro. Ideal para negocios pequeños.",
    },
    {
      title: "Soporte Mensual",
      idealFor: "Negocios que necesitan cambios y mejoras constantes.",
      desc: "Incluye correcciones, actualizaciones y ajustes menores.",
    },
    {
      title: "Despliegue / Hosting",
      idealFor: "Clientes sin experiencia técnica.",
      desc: "Configuro hosting, dominio, SSL y dejo todo funcionando.",
    },
  ],

  process: [
    {
      step: "01",
      title: "Revisión del Negocio",
      desc: "Confirmo qué necesita el cliente y si es posible con su presupuesto.",
    },
    {
      step: "02",
      title: "Propuesta",
      desc: "Alcance simple, precio claro, tiempo estimado.",
    },
    {
      step: "03",
      title: "Desarrollo",
      desc: "Código limpio, avances visibles y comunicación directa.",
    },
    {
      step: "04",
      title: "Entrega",
      desc: "Deploy listo, archivos entregados, propiedad del cliente.",
    },
  ],

  // Proyectos reales. Cada tarjeta abre "link" en una pestaña nueva.
  // Para agregar uno: copia un bloque, pon su captura en /public/proyectos y cambia los textos.
  projects: [
    {
      title: "Grolow",
      category: "Mi estudio · Software a medida",
      link: "https://www.grolow.com/es",
      domain: "grolow.com",
      image: "/proyectos/grolow.jpg",
      problem: "Negocios que operan con hojas de cálculo, plantillas y herramientas que no encajan.",
      solution: "Estudio de diseño y desarrollo que construye sitios, tiendas y sistemas a medida, sin WordPress ni plantillas.",
      value: "Software propio, hecho para cómo opera cada negocio.",
    },
    {
      title: "La Perfum RD",
      category: "Tienda online · Pedidos por WhatsApp",
      link: "https://laperfum1.com/",
      domain: "laperfum1.com",
      image: "/proyectos/laperfum.jpg",
      problem: "Catálogo de perfumes nicho sin una tienda propia donde vender.",
      solution: "Tienda online con catálogo visual de lujo que envía cada pedido directo a WhatsApp.",
      value: "Ventas sin comisiones de terceros.",
    },
    {
      title: "Hellen's Cute Kids",
      category: "Landing page · Ventas por zona",
      link: "https://hellenscute.com/",
      domain: "hellenscute.com",
      image: "/proyectos/hellenscute.jpg",
      problem: "Clientes de todo el país sin saber a qué representante comprarle.",
      solution: "Landing de conversión que asigna a cada visitante un distribuidor autorizado según su zona.",
      value: "Cada compra llega al representante correcto por WhatsApp.",
    },
  ],

  // Código de ejemplo que aparece en la sección "Del código. A lo real."
  codeSample: {
    title: "whatsapp.js",
    code: `const pedido = (producto, zona) => {
  const texto = \`Hola, quiero \${producto} (\${zona})\`;
  const url = "https://wa.me/1809XXXXXXX?text=";
  return url + encodeURIComponent(texto);
};
window.open(pedido("Perfume nicho", "Santo Domingo"));`,
  },
};
