import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import { profileDetails } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#home' },
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Servicios', href: '#services' },
    { label: 'Galería', href: '#portfolio', badge: '40+' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050608]/90 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded border border-[#00d9ff]/40 bg-[#0b1018] flex items-center justify-center font-cyber font-black text-[#00d9ff] group-hover:border-[#ff4655] group-hover:text-[#ff4655] transition-colors shadow-[0_0_15px_rgba(0,217,255,0.25)]">
              JS
            </div>
            <div className="flex flex-col">
              <span className="font-cyber font-bold tracking-wider text-sm sm:text-base text-white group-hover:text-[#00d9ff] transition-colors">
                SUNSET<span className="text-[#ff4655]"> RAVERS</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#8f98b2] font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                MULTIMEDIA
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium tracking-wide text-zinc-300 hover:text-white transition-colors py-1 group"
              >
                {link.label}
                {link.badge && (
                  <span className="ml-1.5 text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#ff4655]/20 text-[#ff4655] border border-[#ff4655]/40 font-bold">
                    {link.badge}
                  </span>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#ff4655] to-[#00d9ff] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Direct WhatsApp Call to Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${profileDetails.phoneClean}?text=${encodeURIComponent(profileDetails.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-cyber uppercase tracking-wider font-bold bg-[#ff4655] hover:bg-[#ff6b77] text-white transition-all shadow-[0_0_15px_rgba(255,70,85,0.4)] clip-corner-sm hover:scale-[1.02]"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Hablemos Directo</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded border border-white/10 text-zinc-300 hover:text-white hover:border-[#00d9ff]/50 bg-[#0b1018] transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#ff4655]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0b1018]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center gap-2 px-3 py-1.5 mb-2 rounded bg-white/5 border border-white/10 text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            AGENT READY // DISPONIBLE PARA PROYECTOS
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 text-base font-medium text-zinc-200 hover:text-white hover:bg-white/5 rounded border-l-2 border-transparent hover:border-[#00d9ff] transition-all"
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#ff4655]/20 text-[#ff4655] border border-[#ff4655]/40 font-bold">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={`https://wa.me/${profileDetails.phoneClean}?text=${encodeURIComponent(profileDetails.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded text-xs font-cyber uppercase tracking-wider font-bold bg-[#ff4655] text-white shadow-[0_0_15px_rgba(255,70,85,0.4)]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
