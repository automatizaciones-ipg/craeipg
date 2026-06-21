import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ChevronLeft, Video, CheckCircle2, Download,
  Sparkles, PlayCircle, Lightbulb,
} from 'lucide-react';

export default function VideoTutorialAPA({ onBack }: { onBack: () => void }) {
  const containerVariants: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const learningPoints = [
    'Cómo configurar márgenes y tipografía correcta en Word',
    'Estructura completa de la portada APA 7 paso a paso',
    'Diferencia entre cita directa e indirecta con ejemplos reales',
    'Cómo formatear la sección de Referencias correctamente',
    'Los cambios más importantes entre APA 6 y APA 7',
    'Cómo usar Zotero para generar referencias automáticamente',
  ];

  const tips = [
    'Pausa el video cuando aparezca un ejemplo y reproduce el formato tú mismo en tu documento.',
    'Comparte el video con tu grupo de trabajo — todos deben citar de la misma forma.',
    'El video y el Manual APA IPG se complementan: usa ambos recursos juntos.',
    'Si tienes dudas después del video, consulta el Manual descargable para los detalles exactos.',
  ];

  const downloads = [
    { name: 'Normas APA 7° Edición (Presentación)', size: '4.1 MB', format: 'PPTX', driveId: '1CX_tBMx_GW8e4ZVmh9W2xf4uwQdc7iAc' },
    { name: 'Manual Norma APA 7ma Edición (Actualizado)', size: '3.2 MB', format: 'PDF',  driveId: '1ndAjEVKJloQszvyqpPP8us96dxku0YjX' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">

      {/* Volver */}
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors mb-8 group font-medium bg-transparent border-none cursor-pointer"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-teal-50 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver a Normas APA
      </motion.button>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-12">

        {/* HERO */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-teal-900 via-cyan-900 to-teal-950 shadow-2xl text-white"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/20 mb-6 uppercase tracking-wider text-cyan-100">
              <Video size={16} /> Tutorial en Video · APA 7
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              Video Tutorial:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                Normas APA 7ª Edición
              </span>
            </h1>
            <p className="text-lg text-teal-100/90 leading-relaxed max-w-2xl">
              Tutorial oficial IPG que explica paso a paso cómo aplicar las Normas APA 7 en tus trabajos académicos, con ejemplos reales.
            </p>
          </div>
        </motion.div>

        {/* SECCIÓN 1: Video */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 border border-teal-100">
              <PlayCircle size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Tutorial Oficial APA IPG</h2>
              <p className="text-slate-500 text-sm">Video completo del CRAI IPG sobre Normas APA 7</p>
            </div>
          </div>
          <div className="w-full aspect-video rounded-3xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200">
            <iframe
              className="w-full h-full"
              src="https://drive.google.com/file/d/1HhBEhjZKZzuTbsQ8qL2gFVDS01u-m5ur/preview"
              title="Video Tutorial Normas APA 7 IPG"
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* SECCIÓN 2: Qué aprenderás */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100">
              <CheckCircle2 size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Qué Aprenderás en Este Video</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {learningPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-teal-300 transition-colors">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {idx + 1}
                </div>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SECCIÓN 3: Consejos para sacarle partido al video */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-100">
              <Lightbulb size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Cómo Aprovechar el Video al Máximo</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <CheckCircle2 size={18} className="text-teal-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-600 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SECCIÓN 4: Descargas complementarias */}
        <motion.div variants={itemVariants}>
          <div className="flex flex-col bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="p-6 md:p-8 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-md">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Material Complementario</h2>
                <p className="text-slate-500 text-sm font-medium mt-1">
                  Descarga los recursos para seguir el video con ejemplos en papel.
                </p>
              </div>
            </div>
            <div className="p-6 bg-slate-50/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {downloads.map((item, idx) => (
                  <a
                    key={idx}
                    href={`/api/download?id=${item.driveId}`}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-400/50 hover:shadow-md transition-all group/file decoration-transparent cursor-pointer"
                  >
                    <div className="flex items-center gap-4 overflow-hidden">
                      <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xs border ${
                        item.format === 'PDF'
                          ? 'bg-red-50 text-red-600 border-red-100'
                          : 'bg-orange-50 text-orange-600 border-orange-100'
                      }`}>
                        {item.format}
                      </div>
                      <div className="truncate">
                        <h4 className="text-slate-700 font-bold text-sm truncate group-hover/file:text-teal-600 transition-colors">{item.name}</h4>
                        <span className="text-xs text-slate-400 font-medium">{item.size} · {item.format}</span>
                      </div>
                    </div>
                    <div className="shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/file:bg-teal-600 group-hover/file:text-white transition-colors shadow-sm ml-2">
                      <Download size={18} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
