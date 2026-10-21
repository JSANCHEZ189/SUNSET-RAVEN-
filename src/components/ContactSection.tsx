import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Send,
  Linkedin,
  Github,
  Instagram,
  ArrowRight
} from 'lucide-react';
import { profileDetails } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const projectTopics = [
    {
      title: 'Desarrollo Web Frontend',
      desc: 'Landing page moderna, catálogo responsivo o sitio corporativo.',
      message: 'Hola Juan Diego, me gustaría cotizar el desarrollo de un sitio web frontend para mi proyecto.',
      color: '#00d9ff',
    },
    {
      title: 'Branding e Identidad Visual',
      desc: 'Diseño de logotipo, isotipo, manual de marca y papelería.',
      message: 'Hola Juan Diego, estoy interesado en el diseño de identidad visual y branding corporativo.',
      color: '#ff4655',
    },
    {
      title: 'Edición Audiovisual & Reels',
      desc: 'Producción de video comercial, reels dinámicos y motion design.',
      message: 'Hola Juan Diego, requiero apoyo en edición de video y contenido audiovisual para redes.',
      color: '#00d9ff',
    },
    {
      title: 'Fotografía Editorial & Retoque',
      desc: 'Fotografía de producto, retratos y tratamiento de color.',
      message: 'Hola Juan Diego, quiero consultar por una producción fotográfica y retoque digital.',
      color: '#ff4655',
    },
  ];

  return (
    <section id="contact" className="py-24 relative bg-[#070b10] border-t border-white/5 cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#ff4655] font-bold">
            // COMMUNICATION TERMINAL & DIRECT CONTACT
          </span>
          <h2 className="font-cyber font-black text-3xl sm:text-5xl text-white tracking-tight">
            Contacto <span className="text-[#00d9ff]">Profesional</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d9ff] to-[#ff4655] mx-auto rounded-full"></div>
          <p className="text-zinc-300 text-sm sm:text-base">
            Canales de comunicación directa sin intermediarios ni formularios demorados. Contacta al instante por WhatsApp, correo o llamada.
          </p>
        </div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* WhatsApp Priority Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0b1018] to-[#0e1623] border border-emerald-500/30 hover:border-emerald-500/60 transition-all shadow-[0_0_30px_rgba(16,185,129,0.1)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none"></div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10">
                        CANAL MÁS RÁPIDO // TIEMPO REAL
                      </span>
                    </div>
                    <h3 className="font-cyber font-bold text-lg text-white mt-1">
                      WhatsApp Directo
                    </h3>
                    <p className="font-mono text-zinc-300 text-sm mt-0.5">
                      {profileDetails.phone}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(profileDetails.phone, 'phone')}
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-colors"
                    title="Copiar teléfono"
                  >
                    {copiedType === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  <a
                    href={`https://wa.me/${profileDetails.phoneClean}?text=${encodeURIComponent(profileDetails.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-cyber text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02]"
                  >
                    <span>Abrir Chat</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0b1018] border border-white/10 hover:border-[#00d9ff]/50 transition-all shadow-md group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00d9ff]/15 text-[#00d9ff] flex items-center justify-center shrink-0 border border-[#00d9ff]/30">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#00d9ff] font-bold">
                      CORREO ELECTRÓNICO OFICIAL
                    </span>
                    <h3 className="font-cyber font-bold text-lg text-white mt-1">
                      Mensaje Formal / Cotización
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-zinc-300 mt-0.5 break-all">
                      {profileDetails.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(profileDetails.email, 'email')}
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-colors"
                    title="Copiar correo"
                  >
                    {copiedType === 'email' ? (
                      <Check className="w-4 h-4 text-[#00d9ff]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  <a
                    href={`mailto:${profileDetails.email}?subject=Cotización%20de%20Proyecto%20Multimedia`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#00d9ff] hover:bg-[#6ee8ff] text-black font-cyber text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
                  >
                    <span>Enviar Correo</span>
                    <Send className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {copiedType === 'email' && (
                <div className="mt-3 p-2 rounded bg-[#00d9ff]/10 border border-[#00d9ff]/30 text-xs font-mono text-[#00d9ff] flex items-center gap-2 animate-fadeIn">
                  <Check className="w-4 h-4" />
                  <span>¡Correo copiado al portapapeles exitosamente!</span>
                </div>
              )}
            </div>

            {/* Direct Call & Location Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#0b1018] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#ff4655]/15 text-[#ff4655] flex items-center justify-center border border-[#ff4655]/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-zinc-400 uppercase">Llamada Telefónica</h4>
                    <p className="text-xs font-bold text-white font-mono mt-0.5">{profileDetails.phone}</p>
                  </div>
                </div>
                <a
                  href={`tel:${profileDetails.phoneClean}`}
                  className="p-2 rounded bg-white/5 hover:bg-[#ff4655] text-zinc-300 hover:text-white transition-colors"
                  title="Llamar"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>

              <div className="p-5 rounded-xl bg-[#0b1018] border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 text-zinc-300 flex items-center justify-center border border-white/10">
                  <MapPin className="w-5 h-5 text-[#00d9ff]" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-zinc-400 uppercase">Ubicación & Horario</h4>
                  <p className="text-xs font-bold text-white mt-0.5">Colombia (UTC-5)</p>
                  <span className="text-[10px] text-emerald-400 font-mono">● Proyectos Globales</span>
                </div>
              </div>
            </div>

            {/* Social Channels Network */}
            <div className="p-5 rounded-xl bg-[#0b1018] border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Redes Profesionales Verificadas:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={profileDetails.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-[#0077b5] text-zinc-300 hover:text-white transition-colors border border-white/5"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={profileDetails.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-[#e1306c] text-zinc-300 hover:text-white transition-colors border border-white/5"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={profileDetails.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-[#333] text-zinc-300 hover:text-white transition-colors border border-white/5"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Instant Project Inquiry Triggers */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0b1018] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#00d9ff] uppercase tracking-wider font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>CONSULTA INMEDIATA POR TEMA</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                  RESPUESTA &lt; 24H
                </span>
              </div>

              <h3 className="font-cyber font-bold text-lg text-white">
                ¿Qué tipo de proyecto deseas iniciar?
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Haz clic en el área de tu interés para abrir automáticamente un mensaje personalizado en WhatsApp:
              </p>

              {/* Inquiry Topic Buttons */}
              <div className="space-y-3 pt-2">
                {projectTopics.map((topic, idx) => (
                  <a
                    key={idx}
                    href={`https://wa.me/${profileDetails.phoneClean}?text=${encodeURIComponent(topic.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3.5 rounded-xl bg-[#0e1623] hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-cyber font-bold text-white group-hover:text-[#00d9ff] transition-colors">
                        {topic.title}
                      </h4>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1 font-sans">
                      {topic.desc}
                    </p>
                  </a>
                ))}
              </div>

              {/* Guarantees */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-2 text-[11px] font-mono text-zinc-400">
                <div className="flex items-center gap-2 text-zinc-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sin compromisos: cotización transparente y asesoría técnica.</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <Clock className="w-4 h-4 text-[#00d9ff] shrink-0" />
                  <span>Disponibilidad inmediata para nuevos proyectos este mes.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
