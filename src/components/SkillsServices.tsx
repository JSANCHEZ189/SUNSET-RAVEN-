import React from 'react';
import { 
  Code2, 
  Palette, 
  Film, 
  Sparkles, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Monitor, 
  Wrench,
  Camera
} from 'lucide-react';
import { softwareTools } from '../data/portfolioData';

export const SkillsServices: React.FC = () => {
  const skillsList = [
    { name: 'Adaptabilidad Estratégica', level: 100, tag: 'Soluciones a medida para cada industria' },
    { name: 'Branding & Identidad Corporativa', level: 92, tag: 'Manuales de marca, logotipos, retículas' },
    { name: 'Fotografía & Retoque Digital', level: 90, tag: 'Revelado RAW, color grading y piel' },
    { name: 'Edición Audiovisual & Motion Graphics', level: 88, tag: 'Premiere Pro, After Effects, Reels' },
    { name: 'Desarrollo Frontend & UI/UX', level: 85, tag: 'HTML5, CSS3/Tailwind, React, JavaScript' },
  ];

  const services = [
    {
      number: '01',
      title: 'Adaptabilidad Estratégica',
      description: 'Me integro a equipos multidisciplinarios y desafíos cambiantes, desarrollando soluciones visuales y de producto que responden con exactitud a los objetivos comerciales del cliente.',
      icon: Sparkles,
      color: '#00d9ff',
    },
    {
      number: '02',
      title: 'Desarrollo Web Frontend',
      description: 'Construcción de landing pages y sitios web modernos, responsivos y optimizados para ultra velocidad de carga, experiencia de usuario fluida y alta tasa de conversión.',
      icon: Code2,
      color: '#ff4655',
    },
    {
      number: '03',
      title: 'Branding & Identidad Visual',
      description: 'Diseño integral de marca: creación de logotipo, arquitectura visual, tipografía, paleta cromática, manual corporativo y plantillas cohesivas para medios digitales.',
      icon: Palette,
      color: '#00d9ff',
    },
    {
      number: '04',
      title: 'Edición Multimedia & Reels',
      description: 'Postproducción cinematográfica de video, motion graphics dinámicos, reels para TikTok/Instagram con subtítulos animados y storytelling visual que retiene audiencia.',
      icon: Film,
      color: '#ff4655',
    },
  ];

  return (
    <div id="skills">
      {/* ========================================================
          SKILLS SECTION
      ======================================================== */}
      <section className="py-24 relative bg-[#050608] cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#ff4655] font-bold">
              // SKILL SET & COMPETENCIES
            </span>
            <h2 className="font-cyber font-black text-3xl sm:text-5xl text-white tracking-tight">
              Mis <span className="text-[#00d9ff]">Habilidades</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#00d9ff] to-[#ff4655] mx-auto rounded-full"></div>
            <p className="text-zinc-400 text-sm sm:text-base">
              Nivel de dominio y especialización en el ecosistema multimedia y digital.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Animated Progress Bars */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0b1018] border border-white/10 space-y-6">
                <h3 className="font-cyber font-bold text-lg text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-[#00d9ff]" />
                  <span>Capacidades Operativas</span>
                </h3>

                <div className="space-y-5">
                  {skillsList.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="font-mono text-[#00d9ff] font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 w-full bg-[#050608] rounded-full overflow-hidden p-0.5 border border-white/10">
                        <div
                          className="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-[#ff4655] to-[#00d9ff]"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className="text-[11px] font-mono text-zinc-400">
                        {skill.tag}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Key Competencies Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#0b1018] border border-white/10 hover:border-[#00d9ff]/50 transition-all space-y-2">
                <div className="w-10 h-10 rounded-lg bg-[#00d9ff]/10 text-[#00d9ff] flex items-center justify-center">
                  <Palette className="w-5 h-5" />
                </div>
                <h4 className="font-cyber font-bold text-sm text-white">Diseño Visual</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Identidad corporativa, balance cromático, tipografía y composición con estética moderna.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0b1018] border border-white/10 hover:border-[#ff4655]/50 transition-all space-y-2">
                <div className="w-10 h-10 rounded-lg bg-[#ff4655]/10 text-[#ff4655] flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="font-cyber font-bold text-sm text-white">Frontend Web</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Interfaces interactivas con maquetación limpia, responsive design y rendimiento optimizado.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0b1018] border border-white/10 hover:border-[#00d9ff]/50 transition-all space-y-2">
                <div className="w-10 h-10 rounded-lg bg-[#00d9ff]/10 text-[#00d9ff] flex items-center justify-center">
                  <Camera className="w-5 h-5" />
                </div>
                <h4 className="font-cyber font-bold text-sm text-white">Fotografía Digital</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Fotografía de producto, retratos editoriales y postprocesamiento con perfiles de color cinemáticos.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0b1018] border border-white/10 hover:border-[#ff4655]/50 transition-all space-y-2">
                <div className="w-10 h-10 rounded-lg bg-[#ff4655]/10 text-[#ff4655] flex items-center justify-center">
                  <Film className="w-5 h-5" />
                </div>
                <h4 className="font-cyber font-bold text-sm text-white">Video & Motion</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Edición comercial de video, micro-formatos para redes y motion graphics de alto impacto.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          SERVICES SECTION
      ======================================================== */}
      <section id="services" className="py-24 relative bg-[#070b10] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00d9ff] font-bold">
              // SPECIAL ABILITIES & DELIVERABLES
            </span>
            <h2 className="font-cyber font-black text-3xl sm:text-5xl text-white tracking-tight">
              Mis <span className="text-[#ff4655]">Servicios</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#ff4655] to-[#00d9ff] mx-auto rounded-full"></div>
            <p className="text-zinc-400 text-sm sm:text-base">
              Soluciones integrales de alto estándar para marcas, empresas y creadores que buscan destacar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0b1018] border border-white/10 hover:border-white/30 transition-all group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                        style={{
                          backgroundColor: `${service.color}15`,
                          color: service.color,
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-cyber font-black text-3xl text-zinc-800 group-hover:text-zinc-700 transition-colors">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="font-cyber font-bold text-lg text-white group-hover:text-[#00d9ff] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">
                    <span>STATUS: DISPONIBLE</span>
                    <span className="text-[#ff4655]">● READY</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================
          SOFTWARE ARSENAL (HERRAMIENTAS)
      ======================================================== */}
      <section className="py-20 relative bg-[#050608] cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#ff4655] font-bold">
              // SOFTWARE ARSENAL
            </span>
            <h2 className="font-cyber font-black text-2xl sm:text-4xl text-white tracking-tight">
              Mi <span className="text-[#00d9ff]">Arsenal Tecnológico</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#00d9ff] to-[#ff4655] mx-auto rounded-full"></div>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Herramientas de software profesionales dominadas para la producción multimedia de alto nivel.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {softwareTools.map((tool, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0b1018] border border-white/10 hover:border-[#00d9ff]/50 transition-all group flex flex-col justify-between space-y-3 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: tool.color }}
                  ></div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400">
                    {tool.level}
                  </span>
                </div>

                <div>
                  <h4 className="font-cyber font-bold text-sm text-white group-hover:text-[#00d9ff] transition-colors">
                    {tool.name}
                  </h4>
                  <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                    {tool.category}
                  </p>
                </div>

                <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
