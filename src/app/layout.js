import { Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "Dev Portfolio | Full Stack Engineer",
  description: "Ingeniero de Software. Especialista en Backend, Arquitectura y Performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} bg-neutral-950 text-neutral-200 antialiased selection:bg-emerald-500/30 selection:text-emerald-200`}>
        {children}
        <footer className="py-8 text-center text-neutral-600 text-sm font-mono border-t border-neutral-900 mt-20">
          <p>Built with Next.js + Tailwind. No cookies, no trackers.</p>
        </footer>
      </body>
    </html>
  );
}