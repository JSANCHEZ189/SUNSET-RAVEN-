import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Terminal, Sparkles, Shield } from 'lucide-react';
import { profileDetails } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050608] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          
          {/* Logo & Tagline */}
          <div className="space-y-2 text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 group">
              <div className="w-9 h-9 rounded border border-[#00d9ff]/40 bg-[#0b1018] flex items-center justify-center font-cyber font-black text-[#00d9ff]">
                JS
              </div>
              <span className="font-cyber font-bold text-lg text-white">
                JUAN DIEGO <span className="text-[#ff4655]">SÁNCHEZ</span>
              </span>
            </a>
            <p className="text-xs text-zinc-400 font-mono">
              Tecnólogo en Producción Multimedia • SENA Colombia
            </p>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400">
            <a href="#home" className="hover:text-white transition-colors">Inicio</a>
            <a href="#about" className="hover:text-white transition-colors">Sobre Mí</a>
            <a href="#skills" className="hover:text-white transition-colors">Habilidades</a>
            <a href="#services" className="hover:text-white transition-colors">Servicios</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Galería (40+)</a>
            <a href="#contact" className="hover:text-[#00d9ff] transition-colors">Contacto Directo</a>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>DISPONIBLE PARA FREELANCE</span>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>
            © {new Date().getFullYear()} Juan Diego Sánchez. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Optimizado para carga ultra veloz con WebP & React</span>
          </p>
        </div>

      </div>

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-[#ff4655] hover:bg-[#ff6b77] text-white shadow-[0_0_20px_rgba(255,70,85,0.4)] border border-[#ff4655]/40 transition-all hover:scale-110"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};
