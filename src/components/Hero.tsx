import React from 'react';
import { ArrowDown, Sparkles, Zap, Shield, Eye, Send, Award, CheckCircle2 } from 'lucide-react';
import { profileDetails } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden cyber-grid">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff4655]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#00d9ff]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Information */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Terminal Mission Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#0b1018] border border-[#00d9ff]/30 text-xs font-mono text-[#00d9ff] shadow-[0_0_15px_rgba(0,217,255,0.15)]">
              <Zap className="w-3.5 h-3.5 text-[#ff4655] animate-pulse" />
              <span>VALORANT AESTHETIC // MULTIMEDIA DESIGNER</span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-1">
              <h1 className="font-cyber font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white leading-none">
                JUAN DIEGO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4655] via-[#ff6b77] to-[#00d9ff] text-glow-red">
                  SÁNCHEZ
                </span>
              </h1>
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="font-mono text-xs tracking-widest text-emerald-400 font-bold uppercase">
                  AGENT STATUS: ONLINE // LISTO PARA DESPLEGAR
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Tecnólogo en <strong className="text-white">Producción Multimedia</strong> especializado en{' '}
              <span className="text-[#00d9ff]">desarrollo web frontend</span>, branding corporativo,{' '}
              <span className="text-[#ff4655]">fotografía editorial</span> y producción audiovisual de alto impacto.{' '}
              Optimizado para carga ultra rápida y máxima conversión.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#ff4655] hover:bg-[#ff6b77] text-white font-cyber text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,70,85,0.4)] clip-corner-sm hover:translate-y-[-2px]"
              >
                <Eye className="w-4 h-4" />
                <span>Explorar Galería Organizada</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0b1018] hover:bg-white/10 text-zinc-200 hover:text-white border border-white/20 hover:border-[#00d9ff]/60 font-cyber text-xs sm:text-sm font-bold uppercase tracking-wider transition-all clip-corner-sm hover:translate-y-[-2px]"
              >
                <Send className="w-4 h-4 text-[#00d9ff]" />
                <span>Canales de Contacto</span>
              </a>
            </div>

            {/* Hero Stats Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
              {profileDetails.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded bg-[#0b1018]/80 border border-white/5 text-center lg:text-left">
                  <div className="font-cyber font-black text-2xl sm:text-3xl text-white">
                    <span className={idx % 2 === 0 ? 'text-[#00d9ff]' : 'text-[#ff4655]'}>{stat.value}</span>
                    <span className="text-sm font-mono text-zinc-400">{stat.suffix}</span>
                  </div>
                  <div className="text-[11px] font-mono text-zinc-400 tracking-wider uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Cyber Agent Character Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] flex items-center justify-center">
              
              {/* Outer Energy Rings */}
              <div className="absolute inset-0 rounded-3xl border border-[#00d9ff]/20 animate-[spin_24s_linear_infinite] pointer-events-none"></div>
              <div className="absolute -inset-4 rounded-3xl border border-dashed border-[#ff4655]/20 animate-[spin_36s_linear_infinite_reverse] pointer-events-none"></div>
              
              {/* Tech Corner HUD Marks */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#ff4655]"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#00d9ff]"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#00d9ff]"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#ff4655]"></div>

              {/* Main Character Frame */}
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-[#0e1623] to-[#070b10] border border-white/10 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] group">
                <img
                  src="/assets/avatar/hero.webp"
                  onError={(e) => {
                    // Fallback to external original link if local asset isn't resolved
                    (e.target as HTMLImageElement).src =
                      'https://r2.fivemanage.com/8VFrqu9NjACEUGsTVrRfq/ChatGPTImage16jul202606_33_43p.m..png';
                  }}
                  alt="Juan Diego Sánchez - Multimedia Designer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  decoding="async"
                />

                {/* Cyber Scanline and Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-80"></div>
                <div className="absolute inset-x-0 bottom-0 p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#00d9ff] font-bold tracking-widest flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      ID: {profileDetails.agentCode}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      ACTIVE
                    </span>
                  </div>
                  <h3 className="font-cyber font-bold text-lg text-white">
                    Juan Diego Sánchez
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    Producción Multimedia & Desarrollo Frontend
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-[#00d9ff] transition-colors animate-bounce"
        aria-label="Ir a la siguiente sección"
      >
        <ArrowDown className="w-4 h-4" />
      </a>
    </section>
  );
};
