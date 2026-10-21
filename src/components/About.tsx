import React from 'react';
import { User, Award, MapPin, GraduationCap, CheckCircle, Flame, Layers, Sparkles } from 'lucide-react';
import { profileDetails } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#070b10] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00d9ff] font-bold">
            // AGENT PROFILE
          </span>
          <h2 className="font-cyber font-black text-3xl sm:text-5xl text-white tracking-tight">
            Sobre <span className="text-[#ff4655]">Mí</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#ff4655] to-[#00d9ff] mx-auto rounded-full"></div>
          <p className="text-zinc-400 text-sm sm:text-base">
            Conoce el enfoque técnico, la visión artística y la pasión detrás de cada proyecto multimedia.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait with Cyber frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-[#0b1018] group shadow-[0_0_30px_rgba(0,0,0,0.7)]">
              <img
                src="/assets/avatar/about.webp"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://r2.fivemanage.com/8VFrqu9NjACEUGsTVrRfq/ChatGPTImage16jul202606_37_22p.m..png';
                }}
                alt="Juan Diego Sánchez"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-75"></div>
              
              {/* Floating Status Pill */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#050608]/80 border border-[#00d9ff]/40 backdrop-blur-md text-[11px] font-mono text-[#00d9ff] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#00d9ff]" />
                <span>MULTIMEDIA CREATOR</span>
              </div>

              {/* Bottom Quote Badge */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-[#0b1018]/90 border border-white/10 backdrop-blur-md">
                <p className="text-xs text-zinc-300 italic font-sans leading-relaxed">
                  "El diseño no es solo cómo se ve, sino cómo comunica, interactúa y genera resultados tangibles."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Feature Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b1018]/90 border border-white/10 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff4655]/5 rounded-bl-full pointer-events-none"></div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#ff4655] font-bold uppercase tracking-wider">
                <Flame className="w-4 h-4" />
                <span>IDENTIDAD PROFESIONAL</span>
              </div>

              <h3 className="font-cyber font-bold text-2xl text-white">
                Juan Diego Sánchez
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Soy <strong className="text-white">Tecnólogo en Producción Multimedia</strong> egresado del SENA,
                apasionado por construir experiencias visuales futuristas, limpias y de alto rendimiento.
                Combino la sensibilidad artística del diseño gráfico con la precisión técnica del desarrollo web frontend.
              </p>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Mi experiencia abarca desde el desarrollo de marcas completas (branding, manual corporativo, isotipos)
                hasta la edición cinematográfica de video para redes y la maquetación de interfaces web modernas y responsivas.
              </p>
            </div>

            {/* Profile Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#0b1018] border border-white/5 hover:border-[#00d9ff]/40 transition-colors flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#00d9ff]/10 border border-[#00d9ff]/30 flex items-center justify-center text-[#00d9ff] shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Perfil Técnico</h4>
                  <p className="text-sm font-bold text-white mt-0.5">Multimedia Designer & Developer</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0b1018] border border-white/5 hover:border-[#ff4655]/40 transition-colors flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#ff4655]/10 border border-[#ff4655]/30 flex items-center justify-center text-[#ff4655] shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Especialidad Principal</h4>
                  <p className="text-sm font-bold text-white mt-0.5">Branding, UI & Audiovisual</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0b1018] border border-white/5 hover:border-[#00d9ff]/40 transition-colors flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#00d9ff]/10 border border-[#00d9ff]/30 flex items-center justify-center text-[#00d9ff] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Ubicación y Cobertura</h4>
                  <p className="text-sm font-bold text-white mt-0.5">Colombia (Remoto Internacional)</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0b1018] border border-white/5 hover:border-[#ff4655]/40 transition-colors flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#ff4655]/10 border border-[#ff4655]/30 flex items-center justify-center text-[#ff4655] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Formación Académica</h4>
                  <p className="text-sm font-bold text-white mt-0.5">SENA - Producción Multimedia</p>
                </div>
              </div>
            </div>

            {/* Quality Checklist */}
            <div className="p-4 rounded-xl bg-[#0e1623]/60 border border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-300">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle className="w-4 h-4" /> Optimización WebP y Carga Rápida
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle className="w-4 h-4" /> Diseño 100% Responsivo
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle className="w-4 h-4" /> Comunicación Directa Sin Fricción
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
