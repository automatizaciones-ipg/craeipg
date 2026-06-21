import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ChevronLeft, AlignLeft, Clock, RefreshCw, Zap, Lightbulb, Brain,
  Download, Sparkles, Volume2
} from 'lucide-react';

export default function EstrategiasEstudio({ onBack }: { onBack: () => void }) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const strategies = [
    {
      num: '01',
      icon: <AlignLeft size={22} />,
      title: 'Método Cornell',
      color: 'from-blue-500 to-indigo-600',
      desc: 'Divide tus apuntes en 3 zonas: preguntas clave (izquierda), notas de clase (derecha) y resumen al pie. Activa el procesamiento activo durante la clase.',
      tip: 'Redacta las preguntas al finalizar la clase, no durante — así procesas la información dos veces.',
    },
    {
      num: '02',
      icon: <Clock size={22} />,
      title: 'Técnica Pomodoro',
      color: 'from-indigo-500 to-purple-500',
      desc: 'Estudia 25 minutos sin interrupciones, luego descansa 5 minutos. Cada 4 ciclos, toma 15–30 min de descanso real. Mantiene la concentración sin agotamiento.',
      tip: 'Silencia el teléfono completamente durante los 25 minutos. Modo avión, no modo silencio.',
    },
    {
      num: '03',
      icon: <RefreshCw size={22} />,
      title: 'Repetición Espaciada',
      color: 'from-teal-500 to-cyan-500',
      desc: 'Repasa el material en intervalos crecientes: 1 día, 3 días, 1 semana, 2 semanas. El olvido parcial es parte del proceso de consolidación neuronal.',
      tip: 'Usa flashcards digitales como Anki para automatizar los intervalos de repaso.',
    },
    {
      num: '04',
      icon: <Zap size={22} />,
      title: 'Aprendizaje Activo',
      color: 'from-amber-500 to-orange-500',
      desc: 'Transforma la información: crea mapas mentales, explica en voz alta, enseña a otros. Procesar activamente es aprender; solo leer es solo leer.',
      tip: 'Después de cada sección, cierra el libro y escribe sin mirar todo lo que recuerdas.',
    },
    {
      num: '05',
      icon: <Lightbulb size={22} />,
      title: 'Técnica de Feynman',
      color: 'from-rose-500 to-pink-500',
      desc: 'Explica el concepto como si fuera para alguien sin conocimientos previos. Donde no puedas explicarlo claramente, ahí está el vacío real de conocimiento.',
      tip: 'Usa lenguaje cotidiano y evita jerga técnica en tu explicación. Si necesitas jerga, no lo dominaste aún.',
    },
    {
      num: '06',
      icon: <Brain size={22} />,
      title: 'Active Recall',
      color: 'from-blue-600 to-indigo-600',
      desc: 'En lugar de releer, cierra el texto e intenta recordar la información. Recuperar activamente crea conexiones neuronales más fuertes que el reconocimiento pasivo.',
      tip: 'Hazlo incómodo: si no recuerdas, espera 30 segundos antes de revisar. La tensión cognitiva es la señal de que estás aprendiendo.',
    },
  ];

  const quickTips = [
    { icon: <Volume2 size={22} className="text-indigo-500" />, title: 'Sin música con letra', text: 'Estudiar con música con letra reduce la comprensión hasta un 30%. Usa música instrumental o silencio.' },
    { icon: <Clock size={22} className="text-purple-500" />, title: 'Estudia antes de dormir', text: 'Repasar el material 30 min antes de dormir mejora la consolidación: el sueño consolida la memoria.' },
    { icon: <RefreshCw size={22} className="text-teal-500" />, title: 'Varía el lugar de estudio', text: 'Cambiar de lugar de estudio ocasionalmente mejora la retención al crear múltiples asociaciones contextuales.' },
    { icon: <Brain size={22} className="text-blue-500" />, title: 'Los errores son datos', text: 'No evites los ejercicios difíciles. Analiza qué fallaste y por qué — eso es lo más valioso del estudio.' },
  ];

  const downloads = [
    { name: 'Estrategias de Estudio IPG', size: '850 KB', format: 'PDF', driveId: '1hRi0RTpFRDu_Se4AvV3t86qgRD5EuvkK' },
    { name: 'Guía Aprende+ CRAI IPG', size: '1.4 MB', format: 'PDF', driveId: '1kd0aNYEKF2pPeXnsxmQghfQhIvOdfd9z' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors mb-8 group font-medium bg-transparent border-none cursor-pointer"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-indigo-100 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver a Técnicas de Estudio
      </motion.button>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-12">

        {/* HERO */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-blue-900 via-indigo-900 to-indigo-950 shadow-2xl shadow-indigo-900/30 text-white"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/20 mb-6 uppercase tracking-wider text-indigo-100">
              <Brain size={16} /> Aprendizaje Activo
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              Estrategias de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                Estudio Efectivas
              </span>
            </h1>
            <p className="text-lg text-indigo-100/90 leading-relaxed max-w-2xl">
              Descubre los métodos científicamente validados para mejorar tu retención, comprensión
              y rendimiento académico en IPG. Cada técnica es aplicable desde hoy mismo.
            </p>
          </div>
        </motion.div>

        {/* 6 ESTRATEGIAS */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100">
              <Sparkles size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">6 Estrategias Clave</h2>
              <p className="text-slate-500 text-sm">Técnicas respaldadas por neurociencia y pedagogía activa</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {strategies.map((s) => (
              <div
                key={s.num}
                className="group bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:border-indigo-300/50 transition-all overflow-hidden relative"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${s.color} opacity-5 rounded-bl-[60px] pointer-events-none group-hover:opacity-10 transition-opacity`}></div>

                <div className="flex items-start gap-4 relative z-10">
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center bg-gradient-to-br ${s.color} text-white shadow-md`}>
                      {s.icon}
                    </div>
                    <span className="text-[10px] font-black text-slate-300 tracking-widest">{s.num}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors">{s.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-3">{s.desc}</p>
                    <div className="flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-xl p-3">
                      <Lightbulb size={14} className="text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-amber-800 leading-relaxed"><strong>Tip:</strong> {s.tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* QUICK TIPS */}
        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Datos que Cambian tu Estudio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickTips.map((tip, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3 hover:border-indigo-200 transition-colors">
                {tip.icon}
                <h4 className="font-bold text-slate-800 text-sm">{tip.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* DESCARGAS */}
        <motion.div variants={itemVariants}>
          <div className="flex flex-col bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 overflow-hidden">
            <div className="p-6 md:p-8 border-b border-slate-100 relative overflow-hidden bg-gradient-to-r from-slate-50 to-white">
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Material Descargable</h2>
                  <p className="text-slate-500 text-sm font-medium mt-1">Guías oficiales del CRAI IPG en formato PDF</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-slate-50/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {downloads.map((item, idx) => (
                  <a
                    key={idx}
                    href={`/api/download?id=${item.driveId}`}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400/50 hover:shadow-md transition-all group/file cursor-pointer decoration-transparent"
                  >
                    <div className="flex items-center gap-4 overflow-hidden">
                      <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-red-50 text-red-600 border border-red-100 font-bold text-xs">
                        {item.format}
                      </div>
                      <div className="truncate">
                        <h4 className="text-slate-700 font-bold text-sm truncate group-hover/file:text-indigo-600 transition-colors">{item.name}</h4>
                        <span className="text-xs text-slate-400 font-medium">{item.size}</span>
                      </div>
                    </div>
                    <div className="shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/file:bg-indigo-600 group-hover/file:text-white transition-colors shadow-sm ml-2">
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
