import React, { useState } from 'react';

// --- Contenido de Texto (Inglés y Español) ---
const translations = {
  en: {
    appName: "StellarShot AI",
    headline: "Your AI-Powered Photo Studio. Instantly.",
    subheadline: "Transform your product photos into professional, high-converting images in seconds. No expensive equipment or photoshoots required.",
    cta_prompt: "Be the first to experience the future of product photography.",
    placeholder: "Enter your email address",
    cta_button: "Join the Waitlist",
    incentive: "Join now and get an exclusive 50% discount at launch!",
    feature1_title: "AI Scene Generation",
    feature1_desc: "Place your product in any environment imaginable. From clean studio backdrops to lifestyle scenes, just describe it and let our AI create it.",
    feature2_title: "Comprehensive Editor",
    feature2_desc: "Go beyond backgrounds. Effortlessly add text, logos, realistic shadows, and even AI-generated people to create the perfect shot.",
    feature3_title: "One-Click Styles",
    feature3_desc: "Apply professionally designed styles and templates to ensure brand consistency across all your product listings.",
    success_message: "Success! You're on the list. We'll be in touch soon.",
    error_message: "Please enter a valid email address.",
    language_toggle: "Ver en Español",
  },
  es: {
    appName: "StellarShot AI",
    headline: "Tu Estudio Fotográfico con IA. Al Instante.",
    subheadline: "Transforma las fotos de tus productos en imágenes profesionales de alta conversión en segundos. Sin equipos costosos ni sesiones de fotos.",
    cta_prompt: "Sé el primero en experimentar el futuro de la fotografía de productos.",
    placeholder: "Ingresa tu correo electrónico",
    cta_button: "Únete a la Lista de Espera",
    incentive: "¡Únete ahora y obtén un 50% de descuento exclusivo en el lanzamiento!",
    feature1_title: "Generación de Escenas con IA",
    feature1_desc: "Coloca tu producto en cualquier entorno imaginable. Desde fondos de estudio limpios hasta escenas cotidianas, solo descríbelo y nuestra IA lo creará.",
    feature2_title: "Editor Completo",
    feature2_desc: "Ve más allá de los fondos. Añade sin esfuerzo texto, logos, sombras realistas e incluso personas generadas por IA para crear la toma perfecta.",
    feature3_title: "Estilos con un Clic",
    feature3_desc: "Aplica estilos y plantillas de diseño profesional para asegurar la consistencia de tu marca en todos tus productos.",
    success_message: "¡Éxito! Estás en la lista. Nos pondremos en contacto pronto.",
    error_message: "Por favor, ingresa un correo electrónico válido.",
    language_toggle: "View in English",
  }
};

// --- Componente de la Waitlist ---
export default function WaitlistPage() {
  const [language, setLanguage] = useState('en');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const t = translations[language];

  const handleLanguageToggle = () => {
    setLanguage(lang => lang === 'en' ? 'es' : 'en');
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError(t.error_message);
      return;
    }

    // --- Simulación de envío a un API ---
    // En una aplicación real, aquí llamarías a tu backend:
    // fetch('/api/waitlist', { method: 'POST', body: JSON.stringify({ email }) });
    console.log(`Email submitted: ${email}`);
    setSuccess(true);
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.appName}>{t.appName}</h1>
        <button onClick={handleLanguageToggle} style={styles.langButton}>
          {t.language_toggle}
        </button>
      </header>

      <main style={styles.mainContent}>
        <section style={styles.hero}>
          <h2 style={styles.headline}>{t.headline}</h2>
          <p style={styles.subheadline}>{t.subheadline}</p>

          {!success ? (
            <form onSubmit={handleSubmit} style={styles.form}>
              <p style={styles.ctaPrompt}>{t.cta_prompt}</p>
              <div style={styles.inputGroup}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.placeholder}
                  style={styles.input}
                  aria-label="Email Address"
                />
                <button type="submit" style={styles.button}>
                  {t.cta_button}
                </button>
              </div>
              {error && <p style={styles.errorMessage}>{error}</p>}
              <p style={styles.incentive}>{t.incentive}</p>
            </form>
          ) : (
            <div style={styles.successMessage}>
              <h3>🚀 {t.success_message}</h3>
            </div>
          )}
        </section>

        <section style={styles.features}>
          <div style={styles.feature}>
            <h3 style={styles.featureTitle}>🎨 {t.feature1_title}</h3>
            <p>{t.feature1_desc}</p>
          </div>
          <div style={styles.feature}>
            <h3 style={styles.featureTitle}>🛠️ {t.feature2_title}</h3>
            <p>{t.feature2_desc}</p>
          </div>
          <div style={styles.feature}>
            <h3 style={styles.featureTitle}>✨ {t.feature3_title}</h3>
            <p>{t.feature3_desc}</p>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} {t.appName}. All rights reserved.</p>
      </footer>
    </div>
  );
}

// --- Estilos en línea para mantener todo en un archivo ---
const styles = {
  page: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: '#121212',
    color: '#E0E0E0',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
  },
  header: {
    width: '100%',
    maxWidth: '1100px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0',
  },
  appName: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  langButton: {
    background: 'none',
    border: '1px solid #444',
    color: '#E0E0E0',
    padding: '8px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  mainContent: {
    maxWidth: '800px',
    width: '100%',
  },
  hero: {
    padding: '60px 0',
  },
  headline: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: '16px',
    lineHeight: 1.2,
  },
  subheadline: {
    fontSize: '20px',
    color: '#B0B0B0',
    maxWidth: '600px',
    margin: '0 auto 32px auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  },
  ctaPrompt: {
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: '8px',
  },
  inputGroup: {
    display: 'flex',
    gap: '10px',
  },
  input: {
    padding: '12px 16px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #444',
    backgroundColor: '#222',
    color: '#E0E0E0',
    minWidth: '300px',
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#3F51B5', // Un azul vibrante para el CTA
    color: '#FFFFFF',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  incentive: {
    fontSize: '14px',
    color: '#888',
    marginTop: '8px',
  },
  errorMessage: {
    color: '#FF7B7B',
    fontSize: '14px',
  },
  successMessage: {
    padding: '30px',
    backgroundColor: 'rgba(46, 204, 113, 0.1)',
    border: '1px solid #2ECC71',
    borderRadius: '8px',
    color: '#2ECC71',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    padding: '60px 0',
  },
  feature: {
    backgroundColor: '#1E1E1E',
    padding: '24px',
    borderRadius: '12px',
    border: '1px solid #333',
  },
  featureTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: '12px',
  },
  footer: {
    padding: '40px 0 20px 0',
    color: '#888',
    fontSize: '14px',
  },
};