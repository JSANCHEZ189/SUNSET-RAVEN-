import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Wrench, 
  Eye, 
  Play, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ProjectMission, GalleryItem } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: ProjectMission | null;
  items: GalleryItem[];
  onClose: () => void;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  items,
  onClose,
  onOpenLightbox,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  const projectItems = items.filter(it => project.itemIds.includes(it.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0b1018] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden my-auto">
        
        {/* Modal Header Cover */}
        <div className="relative h-48 sm:h-64 w-full bg-[#050608] overflow-hidden shrink-0">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1018] via-[#0b1018]/60 to-transparent"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 hover:bg-[#ff4655] text-white border border-white/10 transition-colors z-20"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Mission Info Overlay */}
          <div className="absolute bottom-4 left-6 right-6 space-y-1">
            <span className="font-cyber text-xs font-bold text-[#00d9ff] tracking-widest uppercase">
              // {project.missionNumber}
            </span>
            <h2 className="font-cyber font-black text-2xl sm:text-3xl text-white">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 font-mono">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto flex-1">
          
          {/* Summary and Client */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-3">
              <h3 className="font-cyber text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#ff4655]" />
                <span>Resumen de la Misión</span>
              </h3>
              <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                {project.summary}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0e1623] border border-white/5 space-y-3">
              <div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">Cliente / Contexto</span>
                <span className="text-xs font-bold text-white font-mono">{project.client || 'Confidencial'}</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">Categoría</span>
                <span className="text-xs font-bold text-[#00d9ff] font-mono">{project.categoryLabel}</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">Recursos en Galería</span>
                <span className="text-xs font-bold text-[#ff4655] font-mono">{project.itemCount} archivos optimizados</span>
              </div>
            </div>
          </div>

          {/* Deliverables and Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/5">
            <div className="space-y-3">
              <h4 className="font-cyber text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Entregables Clave</span>
              </h4>
              <ul className="space-y-1.5">
                {project.deliverables.map((d, idx) => (
                  <li key={idx} className="text-xs text-zinc-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff4655]"></span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-cyber text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#00d9ff]" />
                <span>Herramientas Empleadas</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded bg-[#050608] border border-white/10 text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Items Grid inside Project Modal */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <div className="flex items-center justify-between">
              <h4 className="font-cyber text-sm font-bold text-white flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#00d9ff]" />
                <span>Archivos & Piezas del Proyecto ({projectItems.length})</span>
              </h4>
              <span className="text-xs font-mono text-zinc-400">
                Haz clic en cualquier imagen para abrir en alta resolución
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {projectItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onOpenLightbox(item);
                  }}
                  className="group relative aspect-square rounded-lg overflow-hidden bg-black border border-white/10 hover:border-[#00d9ff] cursor-pointer transition-all hover:scale-[1.02]"
                >
                  <img
                    src={item.thumbUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5">
                    <span className="text-[11px] font-cyber font-bold text-white truncate">
                      {item.title}
                    </span>
                    <span className="text-[9px] font-mono text-[#00d9ff]">
                      Ver en grande →
                    </span>
                  </div>
                  {item.type === 'video' && (
                    <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/70 text-white">
                      <Play className="w-3.5 h-3.5 fill-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#070b10] border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-400">
            {project.title} // Portfolio Juan Diego Sánchez
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded text-xs font-cyber uppercase tracking-wider font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            Cerrar Ventana
          </button>
        </div>

      </div>
    </div>
  );
};
