import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ChevronLeft, Star, CalendarDays, Square,
  BatteryCharging, RefreshCw, Download,
  Sparkles, Clock, AlertCircle,
} from 'lucide-react';

export default function CincoClavesOrganizar({ onBack }: { onBack: () => void }) {
  const containerVariants: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const claves = [
    {
      num: 1,
      title: 'Identifica tus Prioridades',
      icon: <Star size={22} />,
      color: 'from-teal-500 to-cyan-500',
      border: 'border-teal-200',
      body: 'Cada domingo anota las 3 cosas más importantes de la semana. No todo lo que urge es importante, y no todo lo que es importante urge. Aprende a distinguirlo.',
      tool: 'La Matriz de Eisenhower divide las tareas en Urgente/Importante — úsala para decidir qué va primero.',
    },
    {
      num: 2,
      title: 'Planifica por Semanas',
      icon: <CalendarDays size={22} />,
      color: 'from-cyan-500 to-blue-500',
      border: 'border-cyan-200',
      body: 'La planificación semanal (no diaria) te permite redistribuir tareas si aparecen imprevistos. Una vista de 7 días revela patrones y evita acumulación de pendientes.',
      tool: 'Usa el Planner Semanal IPG descargable — diseñado específicamente para el ritmo de un estudiante IPG.',
    },
    {
      num: 3,
      title: 'Usa Bloques de Tiempo (Time Boxing)',
      icon: <Square size={22} />,
      color: 'from-blue-500 to-indigo-600',
      border: 'border-blue-200',
      body: 'Asigna bloques fijos de tiempo a tareas específicas: "Lunes 18:00–19:30: Metodología". El tiempo con nombre se usa mejor que el tiempo libre sin estructura.',
      tool: 'Regla de oro: no mezcles asignaturas en el mismo bloque de 90 min — la transición cognitiva cuesta más de lo que ahorras.',
    },
    {
      num: 4,
      title: 'Descansa de Forma Activa',
      icon: <BatteryCharging size={22} />,
      color: 'from-indigo-500 to-purple-500',
      border: 'border-indigo-200',
      body: 'Cada 25–50 min de trabajo, descansa 5–10 min activamente: camina, estira, bebe agua. El descanso no es procrastinación — es mantenimiento cognitivo obligatorio.',
      tool: 'Evita scrollear redes sociales durante el descanso: aumenta la fatiga mental en lugar de reducirla.',
    },
    {
      num: 5,
      title: 'Revisa y Ajusta Cada Semana',
      icon: <RefreshCw size={22} />,
      color: 'from-teal-500 to-emerald-500',
      border: 'border-teal-200',
      body: 'Cada domingo dedica 10 min a revisar lo que completaste y lo que quedó pendiente. Ajusta las estimaciones de tiempo — así aprendes cuánto tardas realmente.',
      tool: 'Reflexión clave: ¿Qué te quitó más tiempo del esperado esta semana? La respuesta es donde está la mejora.',
    },
  ];

  const quickTips = [
    { icon: <Clock size={18} className="text-teal-500" />, text: 'Agrega un 30% extra a cada estimación de tiempo — el margen te salva de las crisis.' },
    { icon: <AlertCircle size={18} className="text-cyan-500" />, text: 'Las reuniones de equipo duran lo que dure el tiempo asignado — ponles límite explícito.' },
    { icon: <Star size={18} className="text-blue-500" />, text: 'Primero lo difícil: trabaja la tarea más exigente cuando tu energía cognitiva está en su pico.' },
    { icon: <BatteryCharging size={18} className="text-indigo-500" />, text: 'Apagar el teléfono no es opcional — es la herramienta de productividad #1 disponible hoy.' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">

      {/* ⬅️ Botón Volver */}
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

        {/* 🚀 HERO */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-teal-900 via-cyan-900 to-teal-950 shadow-2xl text-white"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-300/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/20 mb-6 uppercase tracking-wider text-teal-100">
              <Star size={16} /> Organización · IPG
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              5 Claves para <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">Organizar tu Tiempo</span>
            </h1>
            <p className="text-lg text-teal-100/90 leading-relaxed max-w-2xl">
              El éxito académico no viene de estudiar más horas, sino de elegir inteligentemente en qué dedicar cada hora. Estas 5 claves resumen lo que separa a los estudiantes organizados del resto.
            </p>
          </div>
        </motion.div>

        {/* 🔑 LAS 5 CLAVES */}
        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Las 5 Claves</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {claves.map((clave) => (
              <div
                key={clave.num}
                className={`relative bg-white rounded-3xl border ${clave.border} shadow-md hover:shadow-lg transition-all overflow-hidden p-6 flex flex-col gap-4`}
              >
                <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${clave.color}`}></div>
                <div className="flex items-start gap-4 pl-4">
                  <div className={`shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${clave.color} text-white flex items-center justify-center shadow-md`}>
                    {clave.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Clave {clave.num}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{clave.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">{clave.body}</p>
                    <div className="flex items-start gap-2 bg-slate-50 rounded-xl px-3 py-2.5 border border-slate-100">
                      <Sparkles size={14} className="text-teal-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-500 leading-relaxed">{clave.tool}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 💡 QUICK TIPS */}
        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Tips Rápidos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickTips.map((tip, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3 hover:border-teal-300 transition-colors">
                {tip.icon}
                <p className="text-xs text-slate-600 leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 📥 DESCARGA */}
        <motion.div variants={itemVariants}>
          <div className="flex flex-col bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="p-6 md:p-8 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white flex items-center justify-center shadow-md">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800">Recurso Descargable</h2>
                <p className="text-slate-400 text-sm font-medium mt-1">PDF oficial del CRAI IPG</p>
              </div>
            </div>
            <div className="p-6 bg-slate-50/50">
              <a
                href="/api/download?id=1z0sqG1U8vAsm9LHAu8j68lfuPINspaPU"
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-400/50 hover:shadow-md transition-all group/file cursor-pointer decoration-transparent"
              >
                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-red-50 text-red-600 border border-red-100 font-bold text-xs">PDF</div>
                  <div>
                    <h4 className="text-slate-700 font-bold text-sm group-hover/file:text-teal-600 transition-colors">5 Claves para Organizar tu Tiempo IPG</h4>
                    <span className="text-xs text-slate-400 font-medium">850 KB</span>
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
