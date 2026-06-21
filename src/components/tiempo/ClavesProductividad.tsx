import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  ChevronLeft, Timer, LayoutGrid, Cpu,
  CheckSquare, TrendingUp, Download,
  Sparkles, ChevronDown, ChevronUp,
  Zap, AlertCircle, Clock, Star,
} from 'lucide-react';

export default function ClavesProductividad({ onBack }: { onBack: () => void }) {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const containerVariants: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const tecnicas = [
    {
      title: 'Técnica Pomodoro',
      icon: <Timer size={22} />,
      color: 'from-indigo-500 to-purple-500',
      desc: '25 minutos de trabajo profundo + 5 de descanso = 1 Pomodoro. Después de 4 ciclos, descansa 20–30 min. Ideal para tareas largas que tiendes a posponer.',
      insight: 'Por qué funciona: la fecha límite artificial del temporizador activa el sentido de urgencia sin la presión del pánico real. El cerebro trabaja mejor con plazos cortos visibles.',
    },
    {
      title: 'Matriz de Eisenhower',
      icon: <LayoutGrid size={22} />,
      color: 'from-purple-500 to-pink-500',
      desc: 'Divide tus tareas en 4 cuadrantes: Urgente+Importante (hacer ya), No urgente+Importante (agendar), Urgente+No importante (delegar), No urgente+No importante (eliminar).',
      insight: 'Insight clave: la mayoría de la procrastinación viene de confundir "urgente" con "importante". Los urgentes gritan, los importantes susurran — aprende a escuchar lo importante.',
    },
    {
      title: 'Deep Work (Trabajo Profundo)',
      icon: <Cpu size={22} />,
      color: 'from-blue-600 to-indigo-600',
      desc: 'Bloques de 90 min sin interrupciones para trabajos cognitivos exigentes: informes, análisis, lecturas complejas. Prepara todo antes: agua, silencio, materiales.',
      insight: '"La capacidad de trabajo profundo es la habilidad más valiosa de la era digital." — Cal Newport. Los estudiantes que la dominan entregan trabajos de calidad significativamente mayor.',
    },
    {
      title: 'Getting Things Done (GTD)',
      icon: <CheckSquare size={22} />,
      color: 'from-teal-500 to-cyan-500',
      desc: 'Captura TODAS las tareas en una lista externa (no en tu cabeza). Procesa cada item: ¿requiere acción? → ¿cuándo? Libera la mente para pensar, no para recordar.',
      insight: 'La ansiedad académica suele ser tareas no capturadas que flotan en tu mente sin fecha ni contexto. Sacarlas de la cabeza reduce el estrés inmediatamente.',
    },
    {
      title: 'Regla del 1% Diario',
      icon: <TrendingUp size={22} />,
      color: 'from-emerald-500 to-teal-500',
      desc: 'Mejorar un 1% cada día en algo de tu carrera → 37 veces mejor en un año. No busques grandes cambios repentinos: busca constancia en pasos pequeños y sostenibles.',
      insight: 'En la práctica: leer 10 páginas al día = 3.650 páginas al año = más de 10 libros de tu carrera. La constancia supera siempre a la intensidad esporádica.',
    },
  ];

  const quickTips = [
    { icon: <Zap size={18} className="text-indigo-500" />, text: 'La productividad no es hacer más — es hacer lo correcto con la energía disponible en ese momento.' },
    { icon: <AlertCircle size={18} className="text-purple-500" />, text: 'Revisa correo y mensajes en horarios fijos (3 veces al día), no de forma constante.' },
    { icon: <Clock size={18} className="text-blue-500" />, text: 'Di "no" más rápido: cada sí que das a algo menor es un no implícito a algo más importante.' },
    { icon: <Star size={18} className="text-teal-500" />, text: 'El cansancio cognitivo es real: las decisiones difíciles van en la mañana, no a las 11 pm.' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">

      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors mb-8 group font-medium bg-transparent border-none cursor-pointer"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-indigo-50 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver a Gestión del Tiempo
      </motion.button>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-12">

        {/* HERO */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 shadow-2xl text-white"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-300/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/20 mb-6 uppercase tracking-wider text-indigo-100">
              <Zap size={16} /> Productividad Académica
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              Claves de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">Productividad</span>
              <br />para Estudiantes IPG
            </h1>
            <p className="text-lg text-indigo-100/90 leading-relaxed max-w-2xl">
              Producir más en menos tiempo no es magia, es método. Estas técnicas son usadas por los estudiantes más exitosos del programa IPG y están validadas por la ciencia del aprendizaje.
            </p>
          </div>
        </motion.div>

        {/* TÉCNICAS — ACCORDION INTERACTIVO */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold text-slate-800 mb-5">5 Técnicas de Productividad</h2>
          <div className="flex flex-col gap-3">
            {tecnicas.map((tec, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenItem(openItem === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tec.color} text-white flex items-center justify-center shadow-sm`}>
                      {tec.icon}
                    </div>
                    <span className="font-bold text-slate-800 text-base">{tec.title}</span>
                  </div>
                  <div className="text-slate-400">
                    {openItem === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openItem === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 flex flex-col gap-3 border-t border-slate-100 pt-4">
                        <p className="text-slate-600 text-sm leading-relaxed">{tec.desc}</p>
                        <div className="flex items-start gap-2 bg-indigo-50 rounded-xl px-4 py-3 border border-indigo-100">
                          <Sparkles size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                          <p className="text-xs text-indigo-700 leading-relaxed">{tec.insight}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* QUICK TIPS */}
        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Principios Clave</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickTips.map((tip, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3 hover:border-indigo-300 transition-colors">
                {tip.icon}
                <p className="text-xs text-slate-600 leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* DESCARGA */}
        <motion.div variants={itemVariants}>
          <div className="flex flex-col bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="p-6 md:p-8 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-md">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800">Recurso Descargable</h2>
                <p className="text-slate-400 text-sm font-medium mt-1">PDF oficial del CRAI IPG</p>
              </div>
            </div>
            <div className="p-6 bg-slate-50/50">
              <a
                href="/api/download?id=1ilmqOq_Z3PR3krkPjLwjIIlhVNq4uWlK"
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400/50 hover:shadow-md transition-all group/file cursor-pointer decoration-transparent"
              >
                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-red-50 text-red-600 border border-red-100 font-bold text-xs">PDF</div>
                  <div>
                    <h4 className="text-slate-700 font-bold text-sm group-hover/file:text-indigo-600 transition-colors">Claves de Productividad IPG</h4>
                    <span className="text-xs text-slate-400 font-medium">620 KB</span>
                  </div>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/file:bg-indigo-600 group-hover/file:text-white transition-colors shadow-sm">
                  <Download size={18} />
                </div>
              </a>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
