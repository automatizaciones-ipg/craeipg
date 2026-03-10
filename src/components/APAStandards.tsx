import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  BookOpen, Download, ChevronLeft,
  PlayCircle, Scale, Quote,
  CheckCircle2, Globe, Video,
  AlignLeft, Library, Copy, Check, Star,
  Clock, Coffee, BookMarked,
} from 'lucide-react';

// ─── VARIANTS — COPIA EXACTA de TimeManagement.tsx ───────────────────────────
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

// 1. Guías de cita — misma estructura que "tutorials" en TimeManagement
//    IMPORTANTE: colores son EXACTAMENTE los de TimeManagement para garantizar que Tailwind los tenga en CSS
const citationTypes = [
  {
    title: "Citar un Libro",
    icon: <BookOpen size={24} />,
    desc: "Estructura base para libros físicos y digitales con o sin edición.",
    example: 'Hernández, R. (2014). <em>Metodología de la investigación</em> (6.ª ed.). McGraw-Hill.',
    color: "from-blue-600 to-cyan-500",   // ← mismo que TimeManagement tutorial 1
  },
  {
    title: "Citar un Artículo",
    icon: <AlignLeft size={24} />,
    desc: "Para revistas científicas, journals y publicaciones académicas con DOI.",
    example: 'García, M. (2021). Impacto digital. <em>Rev. de Psicología, 18</em>(2), 45–62.',
    color: "from-indigo-500 to-purple-500", // ← mismo que TimeManagement tutorial 2
  },
  {
    title: "Citar un Sitio Web",
    icon: <Globe size={24} />,
    desc: "Para páginas web, artículos en línea y contenido de organizaciones.",
    example: 'MINEDUC. (2023, 15 marzo). <em>Marco curricular</em>. https://www.mineduc.cl',
    color: "from-teal-500 to-emerald-400", // ← mismo que TimeManagement tutorial 3
  },
  {
    title: "Citar un Video",
    icon: <Video size={24} />,
    desc: "Para videos de YouTube, conferencias grabadas y contenido audiovisual.",
    example: 'Psych2Go [Psych2Go]. (2022, 10 jun.). <em>APA 7th edition</em> [Video]. YouTube.',
    color: "from-blue-600 to-cyan-500",   // ← reutiliza color ya en CSS
  },
];

// 2. Descargas — misma estructura que "downloads" en TimeManagement
const downloads = [
  { name: "Manual APA 7ma Edición (Completo)",  size: "8.4 MB",  format: "PDF"   },
  { name: "Plantilla Word con Formato APA",      size: "1.2 MB",  format: "DOCX"  },
  { name: "Guía Rápida de Citas (Resumen)",      size: "540 KB",  format: "PDF"   },
  { name: "Tracker de Referencias en Excel",     size: "3.1 MB",  format: "EXCEL" },
  { name: "Checklist de Revisión APA",           size: "420 KB",  format: "PDF"   },
  { name: "Comparativa APA 6 vs APA 7",          size: "1.8 MB",  format: "EXCEL" },
];

// 3. Recursos visuales — misma estructura que "balanceResources" en TimeManagement
const visualResources = [
  {
    title: "Infografía: Estructura de una Cita APA",
    tag: "Infografía",
    url: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Guía Visual: Márgenes y Formato APA",
    tag: "Guía",
    url: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Zotero y Mendeley: Gestores Gratuitos",
    tag: "Tutorial",
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
  },
];

// ─── COPY BUTTON ──────────────────────────────────────────────────────────────
const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text.replace(/<[^>]*>/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <motion.button
      onClick={e => { e.stopPropagation(); handleCopy(); }}
      whileTap={{ scale: 0.92 }}
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-700 text-slate-500 hover:text-white text-xs font-semibold border border-slate-200 transition-all duration-200"
    >
      {copied
        ? <><Check size={11} className="text-emerald-400" /> Copiado</>
        : <><Copy size={11} /> Copiar</>}
    </motion.button>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const APAStandards: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">

      {/* ── BOTÓN VOLVER — COPIA EXACTA de TimeManagement ── */}
      <motion.a
        href="/"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0077ff] transition-colors mb-8 group font-medium"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-[#0077ff]/10 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver al inicio
      </motion.a>

      {/* ── HERO — COPIA EXACTA de TimeManagement, mismas clases ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 border border-white bg-white/60 backdrop-blur-xl shadow-xl shadow-slate-200/50 mb-16"
      >
        {/* Blobs — COPIA EXACTA, swapea teal→blue para tema APA */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-20 w-64 h-64 bg-[#0077ff]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-bold border border-blue-100 mb-4 uppercase tracking-wider">
            <BookMarked size={16} /> Normas y Estándares Académicos
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Normas APA y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003399] to-cyan-500">
              Estándares Académicos
            </span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Citar correctamente es más fácil con las herramientas adecuadas. Aquí encontrarás guías, tutoriales, plantillas y gestores bibliográficos para que tus trabajos cumplan los estándares de IPG.
          </p>
        </div>
      </motion.div>

      {/* ── SECCIONES — COPIA EXACTA del wrapper de TimeManagement ── */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-20">

        {/* ══════════════════════════════════════════════════
            SECCIÓN 1: GUÍAS DE CITA
            Estructura IDÉNTICA a la sección de tutoriales
            de TimeManagement. Grid 1→2→4, mismas clases.
        ══════════════════════════════════════════════════ */}
        <section>
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
            <PlayCircle className="text-[#0077ff] w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-800">Cómo Citar: Guías Rápidas</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {citationTypes.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 0.98 }}
                className="group relative bg-white border border-slate-200 rounded-3xl p-6 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-[#0077ff]/30 transition-all cursor-pointer overflow-hidden"
              >
                {/* Accent bar — COPIA EXACTA */}
                <div className={`absolute top-0 right-0 w-full h-2 bg-gradient-to-r ${item.color} opacity-80`}></div>

                <div className="flex justify-between items-start mb-6">
                  {/* Ícono — COPIA EXACTA de TimeManagement */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${item.color} text-white shadow-md`}>
                    {item.icon}
                  </div>
                  <div className="bg-slate-100 text-slate-500 text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                    <BookOpen size={12} /> APA 7
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#003399] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.desc}</p>

                {/* Bloque de ejemplo */}
                <div className="bg-slate-50 rounded-xl px-3 py-2.5 border border-slate-200 mb-4">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Star size={10} className="text-amber-400" /> Ejemplo
                  </p>
                  <p
                    className="font-mono text-xs text-slate-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.example }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-[#0077ff] opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver guía <ChevronLeft size={16} className="rotate-180" />
                  </div>
                  <CopyButton text={item.example} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECCIÓN 2: DESCARGAS
            COPIA EXACTA de la sección de downloads de
            TimeManagement. Mismas clases, mismo layout.
        ══════════════════════════════════════════════════ */}
        <section>
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="text-teal-500 w-6 h-6" />
                <h2 className="text-2xl font-bold text-slate-800">Material Descargable</h2>
              </div>
              <p className="text-slate-500 text-sm">Plantillas, manuales y herramientas listas para usar en tus trabajos.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {downloads.map((file, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-400/40 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  {/* COPIA EXACTA del badge de formato de TimeManagement */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs border ${
                    file.format === 'PDF'
                      ? 'bg-red-50 text-red-600 border-red-100'
                      : file.format === 'DOCX'
                        ? 'bg-blue-50 text-blue-700 border-blue-100'
                        : 'bg-emerald-50 text-emerald-600 border-emerald-100'
                  }`}>
                    {file.format}
                  </div>
                  <div>
                    <h4 className="text-slate-700 font-semibold text-sm group-hover:text-teal-600 transition-colors">{file.name}</h4>
                    <span className="text-xs text-slate-400">{file.size}</span>
                  </div>
                </div>
                {/* COPIA EXACTA del botón de descarga de TimeManagement */}
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  <Download size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECCIÓN 3: RECURSOS VISUALES APA
            COPIA EXACTA de la sección de imágenes de
            TimeManagement (balanceResources).
        ══════════════════════════════════════════════════ */}
        <section className="pb-10">
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
            <Scale className="text-[#003399] w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-800">Recursos Visuales y Gestores</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visualResources.map((res, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  src={res.url}
                  alt={res.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay — COPIA EXACTA */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

                {/* Tag badge — COPIA EXACTA */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium border border-white/30 flex items-center gap-1.5">
                    {res.tag === "Tutorial" ? <Clock size={12} /> : res.tag === "Guía" ? <Scale size={12} /> : <Coffee size={12} />}
                    {res.tag}
                  </div>
                </div>

                {/* Título — COPIA EXACTA */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg md:text-xl leading-snug">{res.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </motion.div>
    </div>
  );
};

export default APAStandards;