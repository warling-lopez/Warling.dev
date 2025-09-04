"use client";
import React, { useState } from "react";
import {
  Camera,
  Sparkles,
  Wand2,
  Users,
  Check,
  Globe,
  Mail,
  ArrowRight,
  Star,
  Zap,
  Crown,
  Gift,
  Bell,
  TrendingUp,
} from "lucide-react";

export default function AIPhotoEditorWaitlist() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [language, setLanguage] = useState("en");
  const [waitlistCount, setWaitlistCount] = useState(24);

  const translations = {
    en: {
      hero: {
        badge: "🚀 Exclusive Early Access",
        title: "Professional AI Product Photography",
        subtitle:
          "Transform any product image into stunning, high-quality professional photos in seconds.",
        cta: "Join the Waitlist - It's Free",
        emailPlaceholder: "Enter your email for early access",
        urgency: "⚡ Limited beta spots available",
      },
      features: {
        title: "Why This Tool Is Different",
        subtitle:
          "The only AI photo editor designed for e-commerce and product photography professionals.",
        list: [
          {
            icon: Crown,
            title: "Professional Studio Quality",
            description:
              "Get $500+ studio photography results for any product. From semi-professional to luxury commercial styles.",
          },
          {
            icon: Users,
            title: "Smart Scene Composition with AI",
            description:
              "Add lifestyle models, branded text, or isolated product shots with our powerful AI-powered scene understanding.",
          },
          {
            icon: Zap,
            title: "10x Faster Than Competitors",
            description:
              "While others take 5-10 minutes, we deliver professional product photos in under 30 seconds.",
          },
          {
            icon: Globe,
            title: "Built for Global Businesses",
            description:
              "Full English & Spanish support. Made for international e-commerce, marketing, and creative teams.",
          },
        ],
      },
      comparison: {
        title: "See the Difference: Our AI Editor vs. the Competition",
        subtitle:
          "Compare our tool with PhotoRoom, Pixlr, and other product photography alternatives.",
        items: [
          {
            feature: "Professional Photography Styles",
            us: true,
            others: "Basic",
          },
          {
            feature: "Lifestyle Model Integration",
            us: true,
            others: false,
          },
          {
            feature: "Commercial-Grade Output",
            us: true,
            others: "Limited",
          },
          {
            feature: "Ultra-Fast Processing (30 seconds)",
            us: true,
            others: "5-10 min",
          },
          {
            feature: "Multilingual Interface",
            us: true,
            others: false,
          },
          {
            feature: "Advanced Enterprise Templates",
            us: true,
            others: "Basic",
          },
        ],
      },
      social_proof: {
        title: "What Industry Experts Are Saying",
        testimonials: [
          {
            name: "Sarah Martinez",
            role: "E-commerce Director",
            content:
              "Finally, an AI editor that understands product photography. Can't wait for launch!",
            rating: 5,
          },
          {
            name: "David Chen",
            role: "Marketing Agency Owner",
            content:
              "This will revolutionize how we create product content for clients. Game changer.",
            rating: 5,
          },
          {
            name: "Maria Rodriguez",
            role: "Small Business Owner",
            content:
              "Professional photography was too expensive. This is exactly what I needed.",
            rating: 5,
          },
        ],
      },
      pricing_preview: {
        title: "Exclusive Launch Pricing",
        subtitle: "Waitlist members get special discounts",
        plans: [
          {
            name: "Starter",
            price: "$9",
            originalPrice: "$19",
            period: "/month",
            badge: "50% OFF",
            features: [
              "100 AI photos/month",
              "Professional styles",
              "Basic templates",
            ],
          },
          {
            name: "Pro",
            price: "$19",
            originalPrice: "$39",
            period: "/month",
            badge: "MOST POPULAR",
            features: [
              "500 AI photos/month",
              "All professional styles",
              "Lifestyle models",
              "Priority processing",
            ],
          },
          {
            name: "Business",
            price: "$49",
            originalPrice: "$99",
            period: "/month",
            badge: "ENTERPRISE",
            features: [
              "Unlimited photos",
              "Custom branding",
              "API access",
              "Dedicated support",
            ],
          },
        ],
      },
      benefits: {
        title: "Join the Waitlist & Get",
        list: [
          {
            icon: Crown,
            title: "VIP Early Access",
            description:
              "Be one of the first to try our exclusive beta version.",
          },
          {
            icon: Gift,
            title: "50% Launch Discount",
            description: "Exclusive pricing for waitlist members only.",
          },
          {
            icon: Star,
            title: "Free Premium Photography Templates",
            description:
              "$200+ worth of professional product photography templates.",
          },
          {
            icon: Bell,
            title: "Priority Support",
            description:
              "Direct line to our team for feedback and new feature suggestions.",
          },
        ],
      },
      urgency: {
        title: "Limited Beta Access",
        subtitle:
          "We're only accepting a limited number of users for the beta version. Secure your spot now.",
        countdown: "Join before spots fill up.",
      },
      waitlist: {
        title: "Ready to Revolutionize Your Product Photography?",
        subtitle:
          "Be among the first to experience the future of AI product photography.",
        success: {
          title: "🎉 Welcome to the VIP List!",
          message:
            "Your spot is secured. We'll notify you the moment we launch with your exclusive 50% discount code.",
          social: "Share with friends and help us grow:",
        },
      },
      footer: {
        copyright: "© 2025 AI Product Photography. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
    },
    es: {
      hero: {
        badge: "🚀 Acceso Anticipado Exclusivo",
        title: "Fotografía de Producto con IA de Nivel Profesional",
        subtitle:
          "Transforma cualquier imagen de producto en fotografía profesional de alta calidad en segundos.",
        cta: "Unirse a la Lista de Espera - Es Gratis",
        emailPlaceholder: "Introduce tu email para acceso anticipado",
        urgency: "⚡ Plazas beta limitadas",
      },
      features: {
        title: "Por Qué Esta Herramienta es Diferente",
        subtitle:
          "El único editor de fotos con IA diseñado para profesionales de la fotografía de producto y e-commerce.",
        list: [
          {
            icon: Crown,
            title: "Calidad de Estudio Profesional",
            description:
              "Obtén resultados de estudio valorados en más de 500 € por producto. Estilos de fotografía semiprofesional, comercial y de lujo.",
          },
          {
            icon: Users,
            title: "Composición de Escenas Inteligente",
            description:
              "Añade modelos lifestyle, texto de marca o tomas de producto aisladas con la inteligencia artificial que comprende la escena.",
          },
          {
            icon: Zap,
            title: "10 Veces Más Rápido que la Competencia",
            description:
              "Mientras otros tardan de 5 a 10 minutos, nosotros entregamos fotografías profesionales en menos de 30 segundos.",
          },
          {
            icon: Globe,
            title: "Preparado para Negocios Globales",
            description:
              "Soporte completo en español e inglés. Creado para equipos de e-commerce, marketing y agencias digitales internacionales.",
          },
        ],
      },
      comparison: {
        title:
          "Descubre la Diferencia: Nuestro Editor de IA vs. la Competencia",
        subtitle:
          "Compara nuestra herramienta con PhotoRoom, Pixlr y otras alternativas para fotografía de producto.",
        items: [
          {
            feature: "Estilos de Fotografía Profesional",
            us: true,
            others: "Basic",
          },
          {
            feature: "Integración de Modelos Lifestyle",
            us: true,
            others: false,
          },
          {
            feature: "Resultados de Calidad Comercial",
            us: true,
            others: "Limited",
          },
          {
            feature: "Procesamiento Ultra-Rápido (30 segundos)",
            us: true,
            others: "5-10 min",
          },
          {
            feature: "Interfaz Multilingüe",
            us: true,
            others: false,
          },
          {
            feature: "Plantillas Avanzadas para Empresas",
            us: true,
            others: "Basic",
          },
        ],
      },
      social_proof: {
        title: "Lo que Dicen los Expertos de la Industria",
        testimonials: [
          {
            name: "Sarah Martinez",
            role: "Directora de E-commerce",
            content:
              "Finalmente, un editor de IA que entiende la fotografía de productos. ¡No puedo esperar al lanzamiento!",
            rating: 5,
          },
          {
            name: "David Chen",
            role: "Propietario de Agencia de Marketing",
            content:
              "Esto revolucionará la forma en que creamos contenido de producto para los clientes. Un cambio total.",
            rating: 5,
          },
          {
            name: "Maria Rodriguez",
            role: "Dueña de Pequeño Negocio",
            content:
              "La fotografía profesional era demasiado cara. Esto es exactamente lo que necesitaba.",
            rating: 5,
          },
        ],
      },
      pricing_preview: {
        title: "Precios Exclusivos de Lanzamiento",
        subtitle:
          "Los miembros de la lista de espera obtienen descuentos especiales",
        plans: [
          {
            name: "Starter",
            price: "$9",
            originalPrice: "$19",
            period: "/mes",
            badge: "50% DESCUENTO",
            features: [
              "100 fotos con IA/mes",
              "Estilos profesionales",
              "Plantillas básicas",
            ],
          },
          {
            name: "Pro",
            price: "$19",
            originalPrice: "$39",
            period: "/mes",
            badge: "MÁS POPULAR",
            features: [
              "500 fotos con IA/mes",
              "Todos los estilos profesionales",
              "Modelos Lifestyle",
              "Procesamiento prioritario",
            ],
          },
          {
            name: "Business",
            price: "$49",
            originalPrice: "$99",
            period: "/mes",
            badge: "EMPRESARIAL",
            features: [
              "Fotos ilimitadas",
              "Branding personalizado",
              "Acceso a la API",
              "Soporte dedicado",
            ],
          },
        ],
      },

      benefits: {
        title: "Únete a la Lista de Espera y Recibe",
        list: [
          {
            icon: Crown,
            title: "Acceso VIP Anticipado",
            description:
              "Sé uno de los primeros en probar nuestra versión beta exclusiva.",
          },
          {
            icon: Gift,
            title: "50% de Descuento de Lanzamiento",
            description:
              "Precios exclusivos para miembros de la lista de espera.",
          },
          {
            icon: Star,
            title: "Plantillas Premium de Fotografía Gratis",
            description:
              "$200+ worth of professional product photography templates.",
          },
          {
            icon: Bell,
            title: "Soporte Prioritario",
            description:
              "Línea directa con nuestro equipo para feedback y sugerencias de nuevas funciones.",
          },
        ],
      },
      urgency: {
        title: "Acceso Beta Limitado",
        subtitle:
          "Solo aceptaremos un número limitado de usuarios para la versión beta. Asegura tu plaza ahora.",
        countdown: "Únete antes de que se agoten las plazas.",
      },
      waitlist: {
        title: "Ready to Revolutionize Your Product Photography?",
        subtitle:
          "Sé de los primeros en experimentar el futuro de la fotografía de producto con IA.",
        success: {
          title: "🎉 ¡Bienvenido a la Lista VIP!",
          message:
            "Tu plaza está asegurada. Te notificaremos el momento en que lancemos con tu código de descuento del 50% exclusivo.",
          social: "Share with friends and help us grow:",
        },
      },
      footer: {
        copyright: "© 2025 AI Product Photography. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
    },
  };

  const t = translations[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setWaitlistCount((prev) => prev + 1);
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Selector de idioma */}
      <div className="fixed top-6 right-6 z-50">
        {/* Versión móvil: solo bandera */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-white/10 border border-white/20 rounded-lg px-2 py-2 text-sm text-white backdrop-blur-sm hover:bg-white/20 transition-all sm:hidden"
        >
          <option value="en">🇺🇸</option>
          <option value="es">🇪🇸</option>
        </select>

        {/* Versión escritorio: bandera + texto */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm text-white backdrop-blur-sm hover:bg-white/20 transition-all hidden sm:block"
        >
          <option value="en">🇺🇸 Inglés</option>
          <option value="es">🇪🇸 Español</option>
        </select>
      </div>

      {/* Sección principal */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>

        <div className="container mx-auto px-4 pt-24 pb-40 relative z-10">
          <div className="text-center flex flex-col items-center max-w-5xl mx-auto">
            <div className="fixed inline-flex items-center space-x-2 bg-gradient-to-r z-50 top-10 from-green-400/20 to-blue-400/20 border border-green-400/30 rounded-full px-6 py-3 backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-green-400 animate-pulse" />
              <span className="text-sm font-semibold text-green-400">
                {t.hero.badge}
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent leading-tight">
              {t.hero.title}
            </h1>

            <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed max-w-4xl mx-auto">
              {t.hero.subtitle}
            </p>

            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-400/30 rounded-full px-4 py-2 text-yellow-400 font-medium">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">{t.hero.urgency}</span>
              </div>
            </div>

            {!isSubmitted ? (
              <div className="max-w-lg mx-auto">
                <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="flex flex-col space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.hero.emailPlaceholder}
                      className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 text-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                      required
                    />
                    <button
                      onClick={handleSubmit}
                      className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl font-bold text-lg text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105"
                    >
                      <span>{t.hero.cta}</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-purple-200 text-sm mt-4 text-center">
                    {waitlistCount.toLocaleString()} personas ya se han unido
                  </p>
                </div>
              </div>
            ) : (
              <div className="max-w-lg mx-auto bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-3xl p-10 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-green-400 mb-4">
                  {t.waitlist.success.title}
                </h3>
                <p className="text-green-100 text-lg mb-6">
                  {t.waitlist.success.message.replace(
                    "{{count}}",
                    waitlistCount.toString()
                  )}
                </p>
                <p className="text-green-200 text-sm">
                  {t.waitlist.success.social}
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Compartir en Twitter
                  </button>
                  <button className="bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Compartir en Facebook
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sección de características */}
      <div className="py-24 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {t.features.title}
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.list.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6">{feature.title}</h3>
                <p className="text-purple-100 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabla comparativa */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {t.comparison.title}
            </h2>
            <p className="text-xl text-purple-200">{t.comparison.subtitle}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 text-lg font-semibold">
                      Característica
                    </th>
                    <th className="text-center py-4 text-lg font-semibold text-purple-400">
                      Nuestra aplicación
                    </th>
                    <th className="text-center py-4 text-lg font-semibold text-gray-400">
                      Otras
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {t.comparison.items.map((item, index) => (
                    <tr key={index} className="border-b border-white/5">
                      <td className="py-4 text-purple-100">{item.feature}</td>
                      <td className="text-center py-4">
                        {item.us === true ? (
                          <Check className="h-6 w-6 text-green-400 mx-auto" />
                        ) : (
                          <span className="text-purple-400 font-semibold">
                            {item.us}
                          </span>
                        )}
                      </td>
                      <td className="text-center py-4">
                        {item.others === false ? (
                          <span className="text-red-400">✗</span>
                        ) : (
                          <span className="text-gray-400">{item.others}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Prueba social */}
      <div className="py-24 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {t.social_proof.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.social_proof.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm border border-white/10"
              >
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-purple-100 text-lg mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-purple-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vista previa de precios */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {t.pricing_preview.title}
            </h2>
            <p className="text-xl text-purple-200">
              {t.pricing_preview.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {t.pricing_preview.plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 rounded-3xl p-8 backdrop-blur-sm border border-white/10 relative ${
                  index === 1 ? "ring-2 ring-purple-400 scale-105" : ""
                }`}
              >
                {plan.badge && (
                  <div
                    className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-xs font-bold ${
                      index === 1
                        ? "bg-purple-500"
                        : "bg-gradient-to-r from-green-500 to-emerald-500"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-lg text-purple-300">
                      {plan.period}
                    </span>
                    <div className="text-sm text-gray-400 line-through">
                      {plan.originalPrice}
                      {plan.period}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-purple-100">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección de beneficios */}
      <div className="py-24 bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {t.benefits.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {t.benefits.list.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-purple-100 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección de urgencia */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-3xl p-12 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-400">
                {t.urgency.title}
              </h2>
              <p className="text-xl text-red-200 mb-8">{t.urgency.subtitle}</p>
              <div className="text-2xl font-bold text-orange-400">
                {t.urgency.countdown}
              </div>
              <div className="bg-red-500/20 rounded-full h-4 mt-6">
                <div
                  className="bg-gradient-to-r from-red-500 to-orange-500 h-4 rounded-full"
                  style={{ width: "4.9%" }}
                ></div>
              </div>
              <p className="text-red-200 text-sm mt-2">
                {waitlistCount.toLocaleString()} / 500 espacios llenos
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA final */}
      <div className="py-24 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              {t.waitlist.title}
            </h2>
            <p className="text-xl text-purple-200 mb-12">
              {t.waitlist.subtitle}
            </p>

            {!isSubmitted && (
              <div className="max-w-md mx-auto">
                <div className="flex flex-col space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.hero.emailPlaceholder}
                    className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 text-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                  />
                  <button
                    onClick={handleSubmit}
                    className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl font-bold text-lg text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105"
                  >
                    <span>{t.hero.cta}</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <footer className="py-16 bg-black/30 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-2xl flex items-center justify-center">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Fotografía de Producto con IA
              </span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-purple-300 hover:text-white transition-colors"
              >
                {t.footer.privacy}
              </a>
              <a
                href="#"
                className="text-purple-300 hover:text-white transition-colors"
              >
                {t.footer.terms}
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-purple-200 mb-4">{t.footer.copyright}</p>
            <div className="flex justify-center space-x-6 text-purple-300">
              <a href="#" className="hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
