import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ChevronLeft, Clock, GraduationCap, BookOpenCheck,
  BarChart2, Download, Sparkles, RefreshCw,
  CheckCircle2, AlertCircle, Lightbulb, Target,
} from 'lucide-react';

export default function PlanificarEstudio({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<'curto' | 'medio' | 'largo'>('curto');

  const containerVariants: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const principios = [
    {
      title: 'Distribuye en el Tiempo',
      icon: <RefreshCw size={22} />,
      color: 'from-teal-500 to-emerald-500',
      body: 'Estudia en sesiones espaciadas durante varios días en lugar de una maratón la víspera. La memoria a largo plazo se construye con repetición distribuida, no con intensidad única.',
    },
    {
      title: 'Define Objetivos por Sesión',
      icon: <Target size={22} />,
      color: 'from-cyan-500 to-blue-500',
      body: 'Antes de cada sesión de estudio define qué quieres saber al terminar. "Estudiar Capítulo 3" no es un objetivo — "Explicar las 4 fases del proceso administrativo" sí lo es.',
    },
    {
      title: 'Relaciona con lo que ya Sabes',
      icon: <BookOpenCheck size={22} />,
      color: 'from-blue-500 to-indigo-600',
      body: 'El aprendizaje profundo ocurre cuando conectas nueva información con conceptos que ya manejas. Cada vez que estudies algo nuevo, pregúntate: ¿dónde ya he visto esto?',
    },
    {
      title: 'Mide tu Avance',
      icon: <BarChart2 size={22} />,
      color: 'from-indigo-500 to-purple-500',
      body: 'Usa listas de verificación o porcentajes para medir el avance real. "Siento que estoy avanzando" no es medición — "Complete el 60% del temario del certamen 2" sí lo es.',
    },
  ];

  const horizonte = {
    curto: {
      label: 'Corto Plazo (1–7 días)',
      color: 'from-teal-600 to-emerald-600',
      items: [
        { title: 'Revisa los apuntes del día en las primeras 24h', body: 'La curva del olvido es más agresiva en las primeras horas. Una revisión de 10 min el mismo día vale más que 30 min una semana después.' },
        { title: 'Identifica las dudas pendientes', body: 'Marca en tus apuntes lo que no entendiste. Cada duda no resuelta en el corto plazo se convierte en un hoyo de comprensión en el certamen.' },
        { title: 'Define qué estudiar mañana', body: 'La noche anterior planifica brevemente la sesión del día siguiente. Ahorras energía de decisión al despertar y entras al estudio directamente.' },
      ],
    },
    medio: {
      label: 'Mediano Plazo (1–4 semanas)',
      color: 'from-blue-600 to-indigo-600',
      items: [
        { title: 'Mapea el temario completo desde el inicio', body: 'Revisa el programa de la asignatura en la primera semana. Saber qué viene después te permite distribuir el esfuerzo y no llevarte sorpresas.' },
        { title: 'Planifica por certámenes, no por clases', body: 'Organiza tu estudio en función de las evaluaciones. Trabaja hacia atrás desde la fecha del certamen para definir cuándo estudiar cada bloque.' },
        { title: 'Repite el material difícil en varios días', body: 'Identifica los temas que te cuestan más y prográmalos en al menos 3 sesiones separadas por días. La dificultad requiere repetición, no intensidad.' },
      ],
    },
    largo: {
      label: 'Largo Plazo (mes y más)',
      color: 'from-indigo-600 to-purple-600',
      items: [
        { title: 'Define metas por asignatura al inicio del semestre', body: 'No solo "aprobar", sino "entender el modelo de negocio completo para el caso de gestión". Las metas específicas orientan el estudio con un propósito claro.' },
        { title: 'Revisa y ajusta tu estrategia a mitad de semestre', body: 'En la semana 6–8 evalúa qué está funcionando y qué no. Cambiar de método a tiempo es inteligente; insistir en lo que no funciona es stubbornness.' },
        { title: 'Integra el aprendizaje con tu trabajo actual', body: 'Busca conexiones entre lo que estudias y tu realidad laboral. Los conceptos aplicados se recuerdan exponencialmente mejor que los teóricos aislados.' },
      ],
    },
  };

  const quickTips = [
    { icon: <Lightbulb size={18} className="text-teal-500" />, text: 'El estudio en grupos es efectivo para verificar comprensión — no para aprender por primera vez.' },
    { icon: <CheckCircle2 size={18} className="text-emerald-500" />, text: 'Enseñarle algo a alguien más es la prueba más rigurosa de si realmente lo entendiste.' },
    { icon: <AlertCircle size={18} className="text-blue-500" />, text: 'Si después de 20 min sigues sin entender algo, detente y busca otra fuente — no insistas.' },
    { icon: <Clock size={18} className="text-indigo-500" />, text: 'El descanso nocturno consolida la memoria: estudiar la noche anterior al examen tiene efecto real.' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">

      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors mb-8 group font-medium bg-transparent border-none cursor-pointer"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-teal-50 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver a Gestión del Tiempo
      </motion.button>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-12">

        {/* HERO */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-teal-900 via-emerald-900 to-teal-950 shadow-2xl text-white"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-300/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/20 mb-6 uppercase tracking-wider text-teal-100">
              <GraduationCap size={16} /> Planificación Académica
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              Cómo Planificar tu{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">Estudio</span>
            </h1>
            <p className="text-lg text-teal-100/90 leading-relaxed max-w-2xl">
              Planificar el estudio no es un lujo de los organizados — es una habilidad que distingue a quienes logran equilibrar IPG con trabajo y vida personal sin vivir en crisis permanente.
            </p>
          </div>
        </motion.div>

        {/* 4 PRINCIPIOS */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold text-slate-800 mb-5">4 Principios del Estudio Planificado</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {principios.map((p, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-lg transition-all overflow-hidden p-6 flex gap-4 items-start">
                <div className={`shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} text-white flex items-center justify-center shadow-md`}>
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{p.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* HORIZONTES DE PLANIFICACIÓN — TABS INTERACTIVOS */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold text-slate-800 mb-5">Planifica en 3 Horizontes</h2>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {(['curto', 'medio', 'largo'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all border ${
                  activeTab === tab
                    ? 'bg-teal-600 text-white border-teal-600 shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-teal-400 hover:text-teal-600'
                }`}
              >
                {horizonte[tab].label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex flex-col gap-4">
            {horizonte[activeTab].items.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex gap-4 items-start hover:border-teal-300 transition-colors">
                <div className={`shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${horizonte[activeTab].color} text-white flex items-center justify-center shadow-sm text-sm font-black`}>
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1.5">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* QUICK TIPS */}
        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Lo que los Mejores Hacen Diferente</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickTips.map((tip, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3 hover:border-teal-300 transition-colors">
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
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-600 text-white flex items-center justify-center shadow-md">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800">Recurso Descargable</h2>
                <p className="text-slate-400 text-sm font-medium mt-1">PDF oficial del CRAI IPG</p>
              </div>
            </div>
            <div className="p-6 bg-slate-50/50">
              <a
                href="/api/download?id=1DZxRJoMqvv5b1F_Stu2bOnQCCCEEjNwW"
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-400/50 hover:shadow-md transition-all group/file cursor-pointer decoration-transparent"
              >
                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-red-50 text-red-600 border border-red-100 font-bold text-xs">PDF</div>
                  <div>
                    <h4 className="text-slate-700 font-bold text-sm group-hover/file:text-teal-600 transition-colors">Cómo Planificar tu Estudio — CRAI IPG</h4>
                    <span className="text-xs text-slate-400 font-medium">780 KB</span>
                  </div>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/file:bg-teal-600 group-hover/file:text-white transition-colors shadow-sm">
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
