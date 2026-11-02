import "@fontsource/anton/400.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/caveat/700.css";
import "../globals.css";

export const metadata = {
  title: "Warling | Desarrollador Web",
  description:
    "Portafolio de Warling, desarrollador web independiente. Páginas rápidas, limpias y hechas a código.",
};

// Activa la animación de "construcción" antes de que se pinte la página
// (se desactiva sola si el visitante pidió menos movimiento en su sistema,
// y si algo falla, a los 6 s todo se muestra igual).
const fxBoot = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){var d=document.documentElement;d.classList.add('fx-on');setTimeout(function(){if(!d.classList.contains('fx-ready'))d.classList.remove('fx-on')},6000)}}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: fxBoot }} />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
