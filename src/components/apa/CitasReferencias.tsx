import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ChevronLeft, Quote, BookOpen, FileText, Globe, Video,
  Copy, Check, AlertCircle, CheckCircle2, Sparkles,
} from 'lucide-react';

// ─── CopyButton ────────────────────────────────────────────────────────────────
const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text.replace(/<[^>]*>/g, '').replace(/\*/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
        copied
          ? 'bg-teal-500 text-white'
          : 'bg-slate-100 text-slate-500 hover:bg-blue-100 hover:text-blue-700'
      }`}
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
      {copied ? 'Copiado' : 'Copiar'}
    </button>
  );
};

// ─── Reference Card ───────────────────────────────────────────────────────────
const RefCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  formato: string;
  ejemplo: string;
  nota: string;
}> = ({ title, icon, colorClass, formato, ejemplo, nota }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left gap-4 hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${colorClass} text-white shadow-sm shrink-0`}>
            {icon}
          </div>
          <span className="font-bold text-slate-800 text-lg">{title}</span>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${open ? 'rotate-180 bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
          <ChevronLeft size={16} className="rotate-90" />
        </div>
      </button>

      {open && (
        <div className="px-5 pb-6 border-t border-slate-100 pt-4 space-y-4">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Formato</p>
            <p className="text-sm text-slate-600 font-mono leading-relaxed">{formato}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Ejemplo</p>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex items-start justify-between gap-3">
              <p className="text-sm text-slate-700 font-mono leading-relaxed flex-1">{ejemplo}</p>
              <CopyButton text={ejemplo} />
            </div>
          </div>
          {nota && (
            <div className="flex items-start gap-2 bg-blue-50 rounded-xl p-3 border border-blue-100">
              <AlertCircle size={15} className="text-blue-500 shrink-0 mt-0.5" />
              <p className="text-xs text-blue-700">{nota}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function CitasReferencias({ onBack }: { onBack: () => void }) {
  const containerVariants: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const refs = [
    {
      title: 'Libro',
      icon: <BookOpen size={20} />,
      colorClass: 'bg-gradient-to-br from-blue-500 to-blue-700',
      formato: 'Apellido, N. (Año). Título del libro (N.ª ed.). Editorial.',
      ejemplo: 'Hernández, R., Fernández, C., & Baptista, P. (2014). Metodología de la investigación (6.ª ed.). McGraw-Hill.',
      nota: 'APA 7 ya no incluye ciudad de publicación. Solo el nombre de la editorial.',
    },
    {
      title: 'Artículo de Revista',
      icon: <FileText size={20} />,
      colorClass: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
      formato: 'Apellido, N. (Año). Título del artículo. Nombre de la Revista, volumen(número), páginas. https://doi.org/XXXXX',
      ejemplo: 'García, M. (2021). Impacto del aprendizaje en línea en el rendimiento estudiantil. Revista de Psicología Educativa, 18(2), 45–62. https://doi.org/10.1234/rpe.2021.18.2.45',
      nota: 'El DOI siempre va en formato de hipervínculo activo. Ya no se escribe "Recuperado de".',
    },
    {
      title: 'Sitio Web',
      icon: <Globe size={20} />,
      colorClass: 'bg-gradient-to-br from-teal-500 to-teal-700',
      formato: 'Apellido, N. (Año, día mes). Título de la página. Nombre del sitio. URL',
      ejemplo: 'MINEDUC. (2023, 15 marzo). Marco curricular nacional de educación superior. Ministerio de Educación de Chile. https://www.mineduc.cl/marco-curricular',
      nota: 'Si no hay autor individual, usa el nombre de la organización. Si no hay fecha, escribe (s.f.).',
    },
    {
      title: 'Video de YouTube',
      icon: <Video size={20} />,
      colorClass: 'bg-gradient-to-br from-purple-500 to-purple-700',
      formato: 'Autor del canal [Nombre del canal]. (Año, día mes). Título del video [Video]. YouTube. URL',
      ejemplo: 'Psych2Go [Psych2Go]. (2022, 10 junio). Cómo aplicar APA 7ª edición en tus trabajos [Video]. YouTube. https://www.youtube.com/watch?v=XXXXX',
      nota: 'El nombre entre corchetes es el nombre del canal si difiere del autor real del video.',
    },
  ];

  const tips = [
    { text: 'El & (ampersand) se usa SOLO dentro de paréntesis. Fuera, escribe "y": "Hernández y García (2020) afirman..."' },
    { text: 'Et al. aparece desde el PRIMER USO cuando son 3 o más autores. Ej: "Ruiz et al. (2019)".' },
    { text: 'Ibíd., Op. cit., Idem: NO existen en APA. Cada cita debe ser autosuficiente.' },
    { text: 'El año va siempre inmediatamente después del nombre del autor, entre paréntesis.' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">

      {/* Volver */}
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors mb-8 group font-medium bg-transparent border-none cursor-pointer"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-indigo-50 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver a Normas APA
      </motion.button>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-12">

        {/* HERO */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 shadow-2xl text-white"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/20 mb-6 uppercase tracking-wider text-purple-100">
              <Quote size={16} /> Guía de Citación
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              Tipos de Citas y <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">Referencias APA 7</span>
            </h1>
            <p className="text-lg text-purple-100/90 leading-relaxed max-w-2xl">
              Aprende a citar correctamente cada tipo de fuente. Con ejemplos reales listos para copiar y adaptar en tus trabajos académicos.
            </p>
          </div>
        </motion.div>

        {/* SECCIÓN 1: Citas en el Texto */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100">
              <Quote size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Citas en el Texto</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Cita Directa */}
            <div className="bg-white rounded-3xl border border-indigo-200 shadow-lg overflow-hidden">
              <div className="p-5 bg-gradient-to-r from-indigo-600 to-purple-700">
                <h3 className="text-white font-bold text-lg mb-1">Cita Textual (Directa)</h3>
                <p className="text-indigo-100 text-sm">Reproducción literal de las palabras del autor.</p>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-teal-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600">Va entre comillas dobles</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-teal-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600">SIEMPRE incluye número de página: <code className="bg-slate-100 px-1 rounded text-xs">(p. 45)</code> o párrafo <code className="bg-slate-100 px-1 rounded text-xs">(párr. 3)</code></p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mt-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Ejemplo</p>
                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    Según Hernández (2014), "la investigación cualitativa se enfoca en comprender los fenómenos" (p. 358).
                  </p>
                </div>
              </div>
            </div>

            {/* Cita Parafraseada */}
            <div className="bg-white rounded-3xl border border-teal-200 shadow-lg overflow-hidden">
              <div className="p-5 bg-gradient-to-r from-teal-600 to-cyan-700">
                <h3 className="text-white font-bold text-lg mb-1">Cita Parafraseada (Indirecta)</h3>
                <p className="text-teal-100 text-sm">La idea reformulada con tus propias palabras.</p>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-teal-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600">NO lleva comillas ni número de página</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-teal-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600">SIEMPRE lleva autor y año: <code className="bg-slate-100 px-1 rounded text-xs">(Hernández, 2014)</code></p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mt-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Ejemplo</p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    La investigación cualitativa busca entender los fenómenos desde la perspectiva del sujeto (Hernández, 2014).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SECCIÓN 2: Formatos de Referencias */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100">
              <Sparkles size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Formatos de Referencias por Tipo de Fuente</h2>
          </div>
          <p className="text-slate-500 text-sm mb-5">Haz clic en cada tipo para ver el formato y copiar el ejemplo.</p>
          <div className="space-y-4">
            {refs.map((ref, idx) => (
              <RefCard key={idx} {...ref} />
            ))}
          </div>
        </motion.div>

        {/* SECCIÓN 3: Quick Tips */}
        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-bold text-slate-800 mb-5">Reglas que Nunca Debes Olvidar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <CheckCircle2 size={18} className="text-indigo-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-600 leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
