export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'photography' | 'branding' | 'web' | 'multimedia';
  categoryLabel: string;
  projectId?: string;
  projectMission?: string;
  thumbUrl: string;
  fullUrl: string;
  type: 'image' | 'video';
  videoUrl?: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  tags: string[];
  description?: string;
}

export interface ProjectMission {
  id: string;
  missionNumber: string;
  title: string;
  subtitle: string;
  category: 'photography' | 'branding' | 'web' | 'multimedia';
  categoryLabel: string;
  coverImage: string;
  summary: string;
  client?: string;
  tools: string[];
  deliverables: string[];
  itemCount: number;
  itemIds: string[];
}

export interface SoftwareTool {
  name: string;
  category: string;
  level: string;
  color: string;
  description: string;
}

// Full array of photography items (Photos 1 to 20)
const photographyItems: GalleryItem[] = Array.from({ length: 20 }, (_, i) => {
  const num = i + 1;
  return {
    id: `photo-${num}`,
    title: `Fotografía Editorial #${String(num).padStart(2, '0')}`,
    subtitle: 'Portfolio Premium Series',
    category: 'photography',
    categoryLabel: 'Fotografía',
    projectId: 'mission-002',
    projectMission: 'MISSION 002',
    thumbUrl: `/projects/thumbs/foto${num}.webp`,
    fullUrl: `/projects/optimized/foto${num}.webp`,
    type: 'image',
    aspectRatio: [2, 4, 5, 8, 20].includes(num) ? 'portrait' : 'landscape',
    tags: ['Fotografía', 'Color Grading', 'Retoque Digital', 'Composición'],
    description: `Captura profesional en alta resolución, optimizada con procesado digital y balance cromático cinemático.`
  };
});

// Branding items
const brandingItems: GalleryItem[] = [
  {
    id: 'branding-1',
    title: 'Manual de Identidad MC Arquitectura',
    subtitle: 'Branding & Retícula Corporativa',
    category: 'branding',
    categoryLabel: 'Branding',
    projectId: 'mission-001',
    projectMission: 'MISSION 001',
    thumbUrl: '/projects/thumbs/branding1.webp',
    fullUrl: '/projects/optimized/branding1.webp',
    type: 'image',
    aspectRatio: 'landscape',
    tags: ['Branding', 'Manual de Marca', 'Tipografía', 'Arquitectura'],
    description: 'Definición de lineamientos visuales, paleta cromática, zona de seguridad y tipografías principales para estudio arquitectónico.'
  },
  {
    id: 'branding-2',
    title: 'Moodboard & Despliegue de Marca MC',
    subtitle: 'Sistemas Visuales y Papelería',
    category: 'branding',
    categoryLabel: 'Branding',
    projectId: 'mission-001',
    projectMission: 'MISSION 001',
    thumbUrl: '/projects/thumbs/branding2.webp',
    fullUrl: '/projects/optimized/branding2.webp',
    type: 'image',
    aspectRatio: 'landscape',
    tags: ['Papelería', 'Mockups', 'Corporate Identity'],
    description: 'Aplicación integral de marca en soportes físicos y digitales con acabados sobrios y minimalistas.'
  }
];

// Identidad Visual items (Marca 1 to 6)
const identidadItems: GalleryItem[] = [
  {
    id: 'marca-1',
    title: 'Diseño de Marca & Símbolo',
    subtitle: 'Identidad Visual Corporativa',
    category: 'branding',
    categoryLabel: 'Identidad Visual',
    projectId: 'mission-004',
    projectMission: 'MISSION 004',
    thumbUrl: '/projects/thumbs/marca1.webp',
    fullUrl: '/projects/optimized/marca1.webp',
    type: 'image',
    aspectRatio: 'landscape',
    tags: ['Logo Design', 'Vector', 'Identidad'],
    description: 'Construcción geométrica de isotipo con proporciones áureas y versatilidad monocromática.'
  },
  {
    id: 'marca-2',
    title: 'Identidad Visual - Variación Secundaria',
    subtitle: 'Versiones de Contraste y Fondos Oscuros',
    category: 'branding',
    categoryLabel: 'Identidad Visual',
    projectId: 'mission-004',
    projectMission: 'MISSION 004',
    thumbUrl: '/projects/thumbs/marca2.webp',
    fullUrl: '/projects/optimized/marca2.webp',
    type: 'image',
    aspectRatio: 'landscape',
    tags: ['Modo Oscuro', 'Colorimetría', 'Branding'],
    description: 'Adaptación de contrastes altos para aplicaciones en interfaces oscuras y packaging de lujo.'
  },
  {
    id: 'marca-3',
    title: 'Despliegue de Marca en Materiales',
    subtitle: 'Texturas & Acabados Gráficos',
    category: 'branding',
    categoryLabel: 'Identidad Visual',
    projectId: 'mission-004',
    projectMission: 'MISSION 004',
    thumbUrl: '/projects/thumbs/marca3.webp',
    fullUrl: '/projects/optimized/marca3.webp',
    type: 'image',
    aspectRatio: 'landscape',
    tags: ['Texturas', 'Visual Asset', 'Impresión'],
    description: 'Detalle de acabados en relieve, tintas especiales y consistencia en soportes publicitarios.'
  },
  {
    id: 'marca-4',
    title: 'Composición Tipográfica de Marca',
    subtitle: 'Jerarquía y Legibilidad',
    category: 'branding',
    categoryLabel: 'Identidad Visual',
    projectId: 'mission-004',
    projectMission: 'MISSION 004',
    thumbUrl: '/projects/thumbs/marca4.webp',
    fullUrl: '/projects/optimized/marca4.webp',
    type: 'image',
    aspectRatio: 'landscape',
    tags: ['Tipografía', 'Manual', 'Retícula'],
    description: 'Familia tipográfica seleccionada para titulares de impacto y cuerpos de lectura confortables.'
  },
  {
    id: 'marca-5',
    title: 'Kit de Redes Sociales & Social Media',
    subtitle: 'Templates de Impacto Visual',
    category: 'branding',
    categoryLabel: 'Identidad Visual',
    projectId: 'mission-004',
    projectMission: 'MISSION 004',
    thumbUrl: '/projects/thumbs/marca5.webp',
    fullUrl: '/projects/optimized/marca5.webp',
    type: 'image',
    aspectRatio: 'square',
    tags: ['Social Media', 'Templates', 'Instagram'],
    description: 'Pautas para publicaciones y stories en plataformas sociales manteniendo un feed cohesionado.'
  },
  {
    id: 'marca-6',
    title: 'Guía de Color y Usos Correctos',
    subtitle: 'Especificaciones Técnicas HEX / CMYK',
    category: 'branding',
    categoryLabel: 'Identidad Visual',
    projectId: 'mission-004',
    projectMission: 'MISSION 004',
    thumbUrl: '/projects/thumbs/marca6.webp',
    fullUrl: '/projects/optimized/marca6.webp',
    type: 'image',
    aspectRatio: 'landscape',
    tags: ['Especificaciones', 'CMYK', 'RGB'],
    description: 'Normativa gráfica para evitar deformaciones, distorsiones de color o alteraciones no autorizadas.'
  }
];

// Web Design / Landing Page items (Diseño 1 to 9)
const webItems: GalleryItem[] = Array.from({ length: 9 }, (_, i) => {
  const num = i + 1;
  const titles = [
    'Coffee House Landing Page - Hero Section',
    'Catálogo Gourmet & Sección Menú Digital',
    'Experiencia Móvil Responsiva Coffee House',
    'Checkout & Carrito de Compra Optimizado',
    'Sección de Historia & Tueste Artesanal',
    'Componentes UI & Guía de Estilos Web',
    'Sistema de Reservas & Ubicaciones',
    'Integración con Redes y Newsletter',
    'Dashboard y Vista de Pedidos Especiales'
  ];
  return {
    id: `web-${num}`,
    title: titles[i] || `Diseño Web UI #${num}`,
    subtitle: 'Coffee House & Modern Web Projects',
    category: 'web',
    categoryLabel: 'Desarrollo Web & UI',
    projectId: 'mission-005',
    projectMission: 'MISSION 005',
    thumbUrl: `/projects/thumbs/diseño${num}.webp`,
    fullUrl: `/projects/optimized/diseño${num}.webp`,
    type: 'image',
    aspectRatio: [1, 2, 6].includes(num) ? 'landscape' : 'portrait',
    tags: ['UI/UX', 'Figma', 'Responsive', 'HTML5', 'CSS3'],
    description: `Diseño de interfaz centrado en el usuario con alta fidelidad gráfica, optimizado para conversión y navegación fluida.`
  };
});

// Multimedia and Video items
const multimediaItems: GalleryItem[] = [
  {
    id: 'multimedia-1',
    title: 'Campaña Audiovisual Promocional',
    subtitle: 'Edición en Premiere & After Effects',
    category: 'multimedia',
    categoryLabel: 'Multimedia & Video',
    projectId: 'mission-003',
    projectMission: 'MISSION 003',
    thumbUrl: '/projects/optimized/multimedia1_poster.webp',
    fullUrl: '/projects/optimized/multimedia1_poster.webp',
    type: 'video',
    videoUrl: '/projects/videos/multimedia1.mp4',
    aspectRatio: 'portrait',
    tags: ['Premiere Pro', 'After Effects', 'Reels', 'Color Grading'],
    description: 'Edición dinámica para contenido de formato vertical con cortes de ritmo musical y efectos cinemáticos.'
  },
  {
    id: 'multimedia-2',
    title: 'Spot Publicitario Digital',
    subtitle: 'Producción de Contenido para Redes',
    category: 'multimedia',
    categoryLabel: 'Multimedia & Video',
    projectId: 'mission-003',
    projectMission: 'MISSION 003',
    thumbUrl: '/projects/optimized/multimedia2_poster.webp',
    fullUrl: '/projects/optimized/multimedia2_poster.webp',
    type: 'video',
    videoUrl: '/projects/videos/multimedia2.mp4',
    aspectRatio: 'portrait',
    tags: ['Motion Graphics', 'Animación', 'Sound Design'],
    description: 'Video publicitario de alto impacto visual con diseño sonoro envolvente y transiciones fluidas.'
  },
  {
    id: 'multimedia-3',
    title: 'Showreel Audiovisual & Producción',
    subtitle: 'Síntesis de Proyectos Audiovisuales',
    category: 'multimedia',
    categoryLabel: 'Multimedia & Video',
    projectId: 'mission-003',
    projectMission: 'MISSION 003',
    thumbUrl: '/projects/optimized/multimedia3_poster.webp',
    fullUrl: '/projects/optimized/multimedia3_poster.webp',
    type: 'video',
    videoUrl: '/projects/videos/multimedia3.mp4',
    aspectRatio: 'portrait',
    tags: ['Showreel', 'Dirección de Arte', 'Postproducción'],
    description: 'Demostración de capacidades de edición de video, motion design y montaje profesional.'
  },
  {
    id: 'edicion-1',
    title: 'Edición Profesional & Reels',
    subtitle: 'Ritmo Dinámico y Titulación Animada',
    category: 'multimedia',
    categoryLabel: 'Multimedia & Video',
    projectId: 'mission-006',
    projectMission: 'MISSION 006',
    thumbUrl: '/projects/optimized/edicion1_poster.webp',
    fullUrl: '/projects/optimized/edicion1_poster.webp',
    type: 'video',
    videoUrl: '/projects/videos/edicion1.mp4',
    aspectRatio: 'portrait',
    tags: ['CapCut Pro', 'After Effects', 'Social Media'],
    description: 'Montaje orientado a engagement en TikTok e Instagram Reels con subtítulos sincronizados y efectos de aceleración.'
  }
];

export const allGalleryItems: GalleryItem[] = [
  ...photographyItems,
  ...brandingItems,
  ...identidadItems,
  ...webItems,
  ...multimediaItems
];

export const projectMissions: ProjectMission[] = [
  {
    id: 'mission-001',
    missionNumber: 'MISSION 001',
    title: 'MC Arquitectura',
    subtitle: 'Branding • Manual Corporativo • Diseño UI',
    category: 'branding',
    categoryLabel: 'Branding',
    coverImage: '/projects/covers/branding_cover.webp',
    summary: 'Desarrollo de identidad corporativa integral para estudio arquitectónico de vanguardia, incluyendo retículas de isotipo, manual de marca y visuales institucionales.',
    client: 'MC Arquitectura',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    deliverables: ['Isotipo y Logotipo', 'Manual de Identidad', 'Papelería Comercial', 'Piezas Digitales'],
    itemCount: 2,
    itemIds: ['branding-1', 'branding-2']
  },
  {
    id: 'mission-002',
    missionNumber: 'MISSION 002',
    title: 'Portfolio Premium',
    subtitle: 'Fotografía Editorial & Retoque Digital',
    category: 'photography',
    categoryLabel: 'Fotografía',
    coverImage: '/projects/covers/portfolio_cover_opt.webp',
    summary: 'Colección de 20 fotografías profesionales capturadas en alta resolución con tratamiento tonal profundo, control de iluminación y revelado digital minucioso.',
    client: 'Producción Propia',
    tools: ['Adobe Lightroom', 'Adobe Photoshop', 'Cámara Profesional'],
    deliverables: ['20 Fotografías de Alta Calidad', 'Tratamiento de Color', 'Retoque de Piel y Escena'],
    itemCount: 20,
    itemIds: photographyItems.map(p => p.id)
  },
  {
    id: 'mission-003',
    missionNumber: 'MISSION 003',
    title: 'Contenido Multimedia',
    subtitle: 'Premiere Pro • After Effects • Audiovisual',
    category: 'multimedia',
    categoryLabel: 'Multimedia & Video',
    coverImage: '/projects/optimized/multimedia1_poster.webp',
    summary: 'Piezas audiovisuales con edición de alta velocidad, motion graphics sincronizados y corrección de color para canales digitales y marcas comerciales.',
    client: 'Clientes Varios & Campañas',
    tools: ['Adobe Premiere Pro', 'Adobe After Effects', 'DaVinci Resolve'],
    deliverables: ['Videos Promocionales', 'Cortes para Redes (9:16)', 'Diseño Sonoro'],
    itemCount: 3,
    itemIds: ['multimedia-1', 'multimedia-2', 'multimedia-3']
  },
  {
    id: 'mission-004',
    missionNumber: 'MISSION 004',
    title: 'Identidad Visual',
    subtitle: 'Diseño de Marca & Sistemas Visuales',
    category: 'branding',
    categoryLabel: 'Branding',
    coverImage: '/projects/covers/identidad_cover.webp',
    summary: 'Creación de lenguaje visual corporativo con énfasis en legibilidad, impacto moderno en modo oscuro y adaptabilidad en diferentes plataformas.',
    client: 'Innovación de Marca',
    tools: ['Adobe Illustrator', 'Photoshop', 'Canva Pro'],
    deliverables: ['Guía de Estilos', 'Logometría', 'Plantillas de Redes', 'Paleta Cromática'],
    itemCount: 6,
    itemIds: identidadItems.map(m => m.id)
  },
  {
    id: 'mission-005',
    missionNumber: 'MISSION 005',
    title: 'Coffee House & Web UI',
    subtitle: 'Landing Page & Responsive Experience',
    category: 'web',
    categoryLabel: 'Desarrollo Web',
    coverImage: '/projects/covers/landing_cover.webp',
    summary: 'Diseño y maquetación de interfaz web interactiva para cafetería de especialidad, con catálogo dinámico, navegación responsive y estética inmersiva.',
    client: 'Coffee House Specialty',
    tools: ['Figma', 'HTML5', 'CSS3 / Tailwind', 'JavaScript'],
    deliverables: ['Prototipo UI/UX', 'Diseño Responsive Mobile & Desktop', 'Catálogo Interactivo'],
    itemCount: 9,
    itemIds: webItems.map(w => w.id)
  },
  {
    id: 'mission-006',
    missionNumber: 'MISSION 006',
    title: 'Edición Profesional',
    subtitle: 'Reels • Motion Graphics • Social Content',
    category: 'multimedia',
    categoryLabel: 'Multimedia & Video',
    coverImage: '/projects/covers/edicion_cover.webp',
    summary: 'Estrategia y producción de micro-contenido dinámico para Instagram Reels y TikTok, combinando subtítulos con diseño cinemático y transiciones de impacto.',
    client: 'Creadores Digitales',
    tools: ['Premiere Pro', 'CapCut Pro', 'After Effects'],
    deliverables: ['Reels de Alta Retención', 'Efectos Visuales', 'Subtítulos Animados'],
    itemCount: 1,
    itemIds: ['edicion-1']
  }
];

export const softwareTools: SoftwareTool[] = [
  {
    name: 'Adobe Illustrator',
    category: 'Diseño Vectorial & Branding',
    level: 'Avanzado (95%)',
    color: '#FF9A00',
    description: 'Creación de identidades de marca, isotipos, retículas y piezas gráficas vectoriales.'
  },
  {
    name: 'Adobe Photoshop',
    category: 'Retoque Digital & Composición',
    level: 'Avanzado (92%)',
    color: '#31A8FF',
    description: 'Edición fotográfica profesional, fotomontaje, texturizado y arte conceptual.'
  },
  {
    name: 'Adobe Premiere Pro',
    category: 'Edición Audiovisual',
    level: 'Profesional (88%)',
    color: '#9999FF',
    description: 'Montaje cinematográfico, narrativa visual, mezcla de audio y cortes comerciales.'
  },
  {
    name: 'Adobe After Effects',
    category: 'Motion Graphics & VFX',
    level: 'Intermedio-Avanzado (80%)',
    color: '#9999FF',
    description: 'Animación tipográfica, transiciones dinámicas, efectos visuales y rotoscopia.'
  },
  {
    name: 'Figma',
    category: 'UI/UX & Prototipado',
    level: 'Avanzado (90%)',
    color: '#0ACF83',
    description: 'Diseño de sistemas de diseño, interfaces web y mobile, wireframing interactivo.'
  },
  {
    name: 'HTML5 & CSS3',
    category: 'Desarrollo Frontend',
    level: 'Avanzado (85%)',
    color: '#E34F26',
    description: 'Maquetación semántica, estilos modernos con Tailwind CSS y animaciones fluidas.'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Interactividad Web',
    level: 'Intermedio (75%)',
    color: '#F7DF1E',
    description: 'Lógica del cliente, manipulación del DOM, componentes dinámicos y consumo de APIs.'
  },
  {
    name: 'VS Code & Git',
    category: 'Entorno de Desarrollo',
    level: 'Avanzado (85%)',
    color: '#007ACC',
    description: 'Flujo de trabajo con control de versiones Git, extensiones de productividad y despliegue.'
  },
  {
    name: 'CapCut & Canva Pro',
    category: 'Producción Rápida',
    level: 'Experto (95%)',
    color: '#00C4CC',
    description: 'Creación acelerada de contenido publicitario y micro-videos optimizados para redes.'
  }
];

export const profileDetails = {
  name: 'Juan Diego Sánchez',
  tagline: 'Multimedia Designer & Frontend Developer',
  agentCode: 'JS-AGENT-07',
  badgeStatus: 'DISPONIBLE PARA PROYECTOS',
  email: 'juandiegosanchezgarcia37@gmail.com',
  phone: '+57 305 459 0981',
  phoneClean: '573054590981',
  location: 'Colombia (Disponible Remoto / Presencial)',
  timezone: 'UTC-5 (Bogotá, Colombia)',
  education: 'SENA — Tecnólogo en Producción Multimedia',
  whatsappMessage: 'Hola Juan Diego, vi tu portafolio y me gustaría hablar sobre un proyecto profesional.',
  socials: {
    github: 'https://github.com/juandiegosanchez',
    linkedin: 'https://linkedin.com/in/juandiegosanchez',
    instagram: 'https://instagram.com/juandiego_designer',
    behance: 'https://behance.net/juandiegosanchez'
  },
  stats: [
    { label: 'Proyectos Finalizados', value: 40, suffix: '+' },
    { label: 'Clientes Satisfechos', value: 15, suffix: '+' },
    { label: 'Años de Experiencia', value: 3, suffix: ' Años' },
    { label: 'Optimización de Carga', value: 98, suffix: '%' }
  ]
};
