import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  LayoutGrid, 
  Layers, 
  Search, 
  ExternalLink, 
  Eye, 
  Play, 
  Sparkles, 
  Filter, 
  ArrowUpRight, 
  Camera, 
  Zap, 
  CheckCircle,
  Film,
  Palette,
  Globe
} from 'lucide-react';
import { 
  allGalleryItems, 
  projectMissions, 
  GalleryItem, 
  ProjectMission 
} from '../data/portfolioData';
import { LightboxModal } from './LightboxModal';
import { ProjectDetailModal } from './ProjectDetailModal';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'projects' | 'vault'>('projects');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Modals state
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<GalleryItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectMission | null>(null);

  // Filter Categories
  const categories = [
    { id: 'all', label: 'Todo', icon: Sparkles, count: allGalleryItems.length },
    { id: 'photography', label: 'Fotografía', icon: Camera, count: 20 },
    { id: 'branding', label: 'Branding & Identidad', icon: Palette, count: 8 },
    { id: 'web', label: 'Web & UI', icon: Globe, count: 9 },
    { id: 'multimedia', label: 'Multimedia & Video', icon: Film, count: 4 },
  ];

  // Filtered gallery items
  const filteredItems = useMemo(() => {
    return allGalleryItems.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;
      const matchesQuery = 
        item.title.toLowerCase().includes(query) ||
        item.subtitle.toLowerCase().includes(query) ||
        item.tags.some(t => t.toLowerCase().includes(query)) ||
        (item.projectMission && item.projectMission.toLowerCase().includes(query));
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projectMissions.filter(proj => {
      const matchesCategory = activeCategory === 'all' || proj.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;
      return (
        proj.title.toLowerCase().includes(query) ||
        proj.subtitle.toLowerCase().includes(query) ||
        proj.tools.some(t => t.toLowerCase().includes(query)) ||
        proj.missionNumber.toLowerCase().includes(query)
      );
    });
  }, [activeCategory, searchQuery]);

  // Handle lightbox navigation
  const currentLightboxIndex = useMemo(() => {
    if (!selectedLightboxItem) return -1;
    return filteredItems.findIndex(it => it.id === selectedLightboxItem.id);
  }, [selectedLightboxItem, filteredItems]);

  const handlePrevLightbox = () => {
    if (filteredItems.length === 0 || currentLightboxIndex === -1) return;
    const prevIndex = (currentLightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedLightboxItem(filteredItems[prevIndex]);
  };

  const handleNextLightbox = () => {
    if (filteredItems.length === 0 || currentLightboxIndex === -1) return;
    const nextIndex = (currentLightboxIndex + 1) % filteredItems.length;
    setSelectedLightboxItem(filteredItems[nextIndex]);
  };

  return (
    <section id="portfolio" className="py-24 relative bg-[#050608] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00d9ff] font-bold">
            // MISSION ARCHIVE & VAULT
          </span>
          <h2 className="font-cyber font-black text-3xl sm:text-5xl text-white tracking-tight">
            Galería y <span className="text-[#ff4655]">Proyectos</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#ff4655] to-[#00d9ff] mx-auto rounded-full"></div>
          <p className="text-zinc-400 text-sm sm:text-base">
            Explora las misiones concluidas, colecciones fotográficas y obras multimedia organizadas por categoría y optimizadas para máxima velocidad de carga.
          </p>

          {/* Performance Optimization Banner */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Zap className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>FORMATO WEBP OPTIMIZADO // 98% MENOS PESO // CARGA INSTANTÁNEA</span>
          </div>
        </div>

        {/* View Mode Switch & Filter Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0b1018] border border-white/10 mb-10 space-y-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-cyber tracking-wider uppercase transition-all ${
                      isActive
                        ? 'bg-[#ff4655] text-white shadow-[0_0_15px_rgba(255,70,85,0.4)] font-bold'
                        : 'bg-[#050608] text-zinc-400 hover:text-white hover:bg-white/5 border border-white/5'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-black/30 text-white' : 'bg-white/10 text-zinc-400'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle: Missions vs All Assets Vault */}
            <div className="flex items-center justify-between w-full lg:w-auto gap-3">
              <div className="flex items-center p-1 rounded-xl bg-[#050608] border border-white/10">
                <button
                  onClick={() => setViewMode('projects')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    viewMode === 'projects'
                      ? 'bg-[#00d9ff] text-black font-bold shadow-[0_0_10px_rgba(0,217,255,0.4)]'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Proyectos ({filteredProjects.length})</span>
                </button>

                <button
                  onClick={() => setViewMode('vault')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    viewMode === 'vault'
                      ? 'bg-[#00d9ff] text-black font-bold shadow-[0_0_10px_rgba(0,217,255,0.4)]'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Todas las Obras ({filteredItems.length})</span>
                </button>
              </div>

              {/* Search input */}
              <div className="relative shrink-0 w-44 sm:w-56">
                <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filtrar por nombre..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#050608] border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#00d9ff]"
                />
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================
            MODE 1: PROJECTS / MISSIONS VIEW
        ========================================================= */}
        {viewMode === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group rounded-2xl bg-[#0b1018] border border-white/10 hover:border-[#ff4655]/60 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
              >
                {/* Project Image Cover */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-[16/10] overflow-hidden bg-black cursor-pointer"
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1018] via-transparent to-transparent opacity-80"></div>
                  
                  {/* Mission Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-[#00d9ff]/40 text-[#00d9ff] font-cyber text-[10px] font-bold uppercase tracking-wider">
                    {project.missionNumber}
                  </div>

                  {/* Item Count Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#ff4655]/90 text-white font-mono text-[10px] font-bold flex items-center gap-1">
                    <Camera className="w-3 h-3" />
                    <span>{project.itemCount} archivos</span>
                  </div>

                  {/* Hover Inspect CTA */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-lg bg-[#00d9ff] text-black font-cyber text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-4 h-4" />
                      <span>Inspeccionar Galería</span>
                    </span>
                  </div>
                </div>

                {/* Project Info Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#00d9ff]">
                      <span>{project.categoryLabel}</span>
                      <span className="text-zinc-500 font-sans">{project.client}</span>
                    </div>

                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="font-cyber font-bold text-xl text-white group-hover:text-[#ff4655] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs text-zinc-400 font-sans line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/5">
                    {/* Tools used */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#050608] text-zinc-400 border border-white/5"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Action button */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2.5 px-4 rounded bg-white/5 hover:bg-[#ff4655] text-zinc-200 hover:text-white font-cyber text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-white/10 group-hover:border-[#ff4655]"
                    >
                      <span>Ver Galería Completa</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* =========================================================
            MODE 2: VAULT / ALL ASSETS DIRECT GRID (41 ITEMS)
        ========================================================= */}
        {viewMode === 'vault' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Mostrando {filteredItems.length} obras optimizadas en WebP</span>
              <span>Haz clic para abrir visor lightbox en pantalla completa</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedLightboxItem(item)}
                  className="group relative rounded-xl overflow-hidden bg-[#0b1018] border border-white/10 hover:border-[#00d9ff] cursor-pointer transition-all hover:scale-[1.02] shadow-md flex flex-col"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-black">
                    <img
                      src={item.thumbUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Category pill */}
                    <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[9px] font-mono text-[#00d9ff]">
                      {item.categoryLabel}
                    </div>

                    {item.type === 'video' && (
                      <div className="absolute top-2 right-2 p-1.5 rounded-full bg-[#ff4655] text-white shadow-lg">
                        <Play className="w-3.5 h-3.5 fill-white" />
                      </div>
                    )}

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5">
                      <span className="text-[11px] font-cyber font-bold text-white leading-tight truncate">
                        {item.title}
                      </span>
                      <span className="text-[9px] font-mono text-[#00d9ff] mt-0.5">
                        Ver alta resolución →
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#0b1018] border-t border-white/5 space-y-1">
                    <h4 className="text-xs font-medium text-white truncate group-hover:text-[#00d9ff] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[10px] font-mono text-zinc-400 truncate">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {selectedLightboxItem && (
        <LightboxModal
          item={selectedLightboxItem}
          items={filteredItems}
          currentIndex={currentLightboxIndex}
          onClose={() => setSelectedLightboxItem(null)}
          onPrev={handlePrevLightbox}
          onNext={handleNextLightbox}
          onSelectIndex={(idx) => setSelectedLightboxItem(filteredItems[idx])}
          onOpenProject={(projId) => {
            const p = projectMissions.find(m => m.id === projId);
            if (p) {
              setSelectedLightboxItem(null);
              setSelectedProject(p);
            }
          }}
        />
      )}

      {/* Project Deep-Dive Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          items={allGalleryItems}
          onClose={() => setSelectedProject(null)}
          onOpenLightbox={(item) => setSelectedLightboxItem(item)}
        />
      )}
    </section>
  );
};
