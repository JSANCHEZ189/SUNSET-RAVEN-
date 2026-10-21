import React, { useEffect, useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Tag, 
  ExternalLink, 
  Sparkles,
  Info,
  Layers,
  Play
} from 'lucide-react';
import { GalleryItem } from '../data/portfolioData';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelectIndex: (index: number) => void;
  onOpenProject?: (projectId: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  onSelectIndex,
  onOpenProject,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    setImageLoaded(false);
  }, [item?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'i' || e.key === 'I') setShowInfo(prev => !prev);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-xl transition-all">
      
      {/* Top Bar: Title, Counter & Controls */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 bg-gradient-to-b from-black/80 to-transparent z-20">
        <div className="flex items-center gap-3">
          <div className="px-2.5 py-1 rounded bg-[#ff4655]/20 border border-[#ff4655]/40 text-[#ff4655] font-cyber text-xs font-bold uppercase tracking-wider">
            {item.projectMission || 'MISSION ARCHIVE'}
          </div>
          <div className="hidden sm:block">
            <h3 className="font-cyber font-bold text-sm text-white truncate max-w-md">
              {item.title}
            </h3>
            <p className="text-xs text-zinc-400 font-mono">
              {item.categoryLabel} • {item.subtitle}
            </p>
          </div>
        </div>

        {/* Counter & Action Buttons */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-zinc-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <span className="text-[#00d9ff] font-bold">{currentIndex + 1}</span> / {items.length}
          </span>

          <button
            onClick={() => setShowInfo(!showInfo)}
            className={`p-2 rounded-lg border transition-colors ${
              showInfo ? 'bg-[#00d9ff]/20 border-[#00d9ff] text-[#00d9ff]' : 'bg-white/5 border-white/10 text-zinc-300 hover:text-white'
            }`}
            title="Alternar ficha técnica (I)"
          >
            <Info className="w-5 h-5" />
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-[#ff4655] text-white border border-white/10 hover:border-[#ff4655] transition-colors"
            title="Cerrar (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main View Area (Image or Video) */}
      <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
        
        {/* Navigation Prev Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-6 z-30 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[#ff4655] text-white border border-white/10 hover:border-[#ff4655] transition-all hover:scale-110 shadow-lg backdrop-blur-md"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Navigation Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-6 z-30 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[#00d9ff] text-white border border-white/10 hover:border-[#00d9ff] transition-all hover:scale-110 shadow-lg backdrop-blur-md"
          aria-label="Siguiente imagen"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Media Container */}
        <div className="relative max-h-full max-w-full flex items-center justify-center">
          {item.type === 'video' && item.videoUrl ? (
            <div className="relative max-h-[75vh] aspect-[9/16] sm:aspect-auto sm:max-h-[70vh] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <video
                src={item.videoUrl}
                poster={item.thumbUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>
          ) : (
            <div className="relative flex items-center justify-center">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center min-w-[200px] min-h-[200px]">
                  <div className="w-10 h-10 border-2 border-[#00d9ff] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={item.fullUrl}
                alt={item.title}
                onLoad={() => setImageLoaded(true)}
                className={`max-h-[72vh] max-w-[92vw] object-contain rounded-lg transition-opacity duration-300 shadow-2xl ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                decoding="async"
              />
            </div>
          )}
        </div>

        {/* Side / Bottom Info Drawer when toggled */}
        {showInfo && (
          <div className="absolute bottom-20 sm:bottom-24 left-4 right-4 sm:left-auto sm:right-8 sm:max-w-sm p-4 rounded-xl bg-[#0b1018]/95 border border-white/10 backdrop-blur-xl shadow-2xl space-y-2.5 z-20 transition-all">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#00d9ff] uppercase tracking-wider font-bold">
                {item.categoryLabel}
              </span>
              {item.projectId && onOpenProject && (
                <button
                  onClick={() => onOpenProject(item.projectId!)}
                  className="text-[11px] font-mono text-[#ff4655] hover:text-[#ff6b77] flex items-center gap-1 font-bold"
                >
                  <span>Ver Misión Completa</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              )}
            </div>

            <h4 className="font-cyber font-bold text-sm text-white">
              {item.title}
            </h4>

            {item.description && (
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                {item.description}
              </p>
            )}

            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Bottom Thumbnail Strip */}
      <div className="px-4 py-3 bg-black/90 border-t border-white/10 z-20">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
          {items.map((it, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={it.id}
                onClick={() => onSelectIndex(idx)}
                className={`relative shrink-0 w-14 h-14 rounded-lg overflow-hidden border transition-all duration-200 ${
                  isActive
                    ? 'border-[#00d9ff] ring-2 ring-[#00d9ff]/50 scale-105'
                    : 'border-white/10 opacity-50 hover:opacity-90'
                }`}
              >
                <img
                  src={it.thumbUrl}
                  alt={it.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {it.type === 'video' && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
