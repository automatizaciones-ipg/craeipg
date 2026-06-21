import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ChevronLeft, CalendarDays, Download,
  Sparkles, Printer, Sliders, Clock,
  CheckCircle2, AlertCircle, Star,
} from 'lucide-react';

export default function PlannerSemanal({ onBack }: { onBack: () => void }) {
  const containerVariants: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const steps = [
    {
      num: 1,
      title: 'Llena las Clases Fijas',
      body: 'Anota primero tus horarios de clases obligatorias. Son el esqueleto inamovible de tu semana. Usa el mismo color para todas para identificarlas de un vistazo.',
    },
    {
      num: 2,
      title: 'Marca las Entregas y Evaluaciones',
      body: 'Agrega con color destacado las fechas de entrega y certámenes del mes. Ver la presión visual en el planner te ayuda a distribuir el tiempo de estudio con anticipación.',
    },
    {
      num: 3,
      title: 'Bloquea Tiempo de Estudio',
      body: 'Por cada hora de clase, planifica al menos 1 hora de estudio autónomo. Distribúyelas en los días libres entre clases, no todas el día antes del certamen.',
    },
    {
      num: 4,
      title: 'Incluye Actividades Personales',
      body: 'Trabajo, deporte, familia. Si no los incluyes en el planner, el estudio los invadirá o viceversa. El equilibrio real requiere planificación explícita, no intención.',
    },
    {
      num: 5,
      title: 'Añade Buffer al Final',
      body: 'Reserva 2–3 horas al final de la semana como buffer. Las emergencias académicas existen. Tener margen es profesional, no perezoso: es gestión de riesgo real.',
    },
  ];

  const infoCards = [
    {
      color: 'from-blue-600 to-indigo-700',
      icon: <Printer size={26} className="text-white" />,
      badge: 'Formato A4',
      title: 'Imprimible y Tangible',
      desc: 'El Planner IPG está diseñado en formato A4 para impresión. Un planner en papel es más efectivo que uno digital para muchos estudiantes: elimina las distracciones de pantalla.',
    },
    {
      color: 'from-indigo-600 to-purple-700',
      icon: <Sliders size={26} className="text-white" />,
      badge: 'Flexible',
      title: 'Adaptable a tu Vida',
      desc: 'Úsalo para una semana tipo o personalízalo con tus propios colores y bloques. El sistema funciona cuando lo adaptas a tu vida real, no cuando intentas adaptarte a él.',
    },
    {
      color: 'from-teal-600 to-cyan-700',
      icon: <Clock size={26} className="text-white" />,
      badge: '10 min/semana',
      title: 'Inversión Mínima, Resultado Máximo',
      desc: 'Dedica 10 minutos cada domingo a planificar la semana. Esa única inversión de tiempo multiplica tu productividad durante toda la semana siguiente.',
    },
  ];

  const quickTips = [
    { icon: <AlertCircle size={18} className="text-blue-500" />, text: 'Un planner físico elimina la distracción de abrir el celular "solo para revisar la agenda".' },
    { icon: <CheckCircle2 size={18} className="text-teal-500" />, text: 'Planifica también qué NO vas a hacer esta semana — los límites conscientes son productividad.' },
    { icon: <Star size={18} className="text-indigo-500" />, text: 'Si fallas un día, no esperes el lunes para retomar — sigue el mismo día cuando puedas.' },
    { icon: <Sliders size={18} className="text-purple-500" />, text: 'El planner es una guía, no un contrato — la flexibilidad informada es parte del sistema.' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">

      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 group font-medium bg-transparent border-none cursor-pointer"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-blue-50 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver a Gestión del Tiempo
      </motion.button>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-12">

        {/* HERO */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950 shadow-2xl text-white"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/20 mb-6 uppercase tracking-wider text-blue-100">
              <CalendarDays size={16} /> Herramienta Descargable
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              Planner Semanal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">IPG</span>
            </h1>
            <p className="text-lg text-blue-100/90 leading-relaxed max-w-2xl">
              Una herramienta visual para organizar tus 7 días: clases, trabajos, entregas, descanso y tiempo personal en una sola vista clara y estructurada.
            </p>
          </div>
        </motion.div>

        {/* CÓMO USAR — STEPPER */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Cómo Usar el Planner en 5 Pasos</h2>
          <div className="flex flex-col gap-0">
            {steps.map((step, idx) => (
              <div key={step.num} className="flex gap-6 relative">
                {/* Línea vertical conectora */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-[27px] top-[52px] w-0.5 h-[calc(100%-20px)] bg-gradient-to-b from-blue-300 to-indigo-200"></div>
                )}
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex flex-col items-center justify-center shadow-md font-black text-lg z-10">
                  {step.num}
                </div>
                <div className={`flex-1 pb-8 ${idx === steps.length - 1 ? 'pb-0' : ''}`}>
                  <h3 className="font-bold text-slate-800 text-lg mb-1">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* INFO CARDS */}
        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-bold text-slate-800 mb-5">Por qué Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {infoCards.map((card, idx) => (
              <div key={idx} className={`relative rounded-3xl overflow-hidden p-7 bg-gradient-to-br ${card.color} text-white shadow-xl`}>
                <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-5">{card.icon}</div>
                  <div className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30 mb-3">{card.badge}</div>
                  <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* QUICK TIPS */}
        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Tips de Uso</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickTips.map((tip, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3 hover:border-blue-300 transition-colors">
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
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800">Descarga tu Planner</h2>
                <p className="text-slate-400 text-sm font-medium mt-1">PDF imprimible oficial CRAI IPG</p>
              </div>
            </div>
            <div className="p-6 bg-slate-50/50">
              <a
                href="/api/download?id=1kWxYnkyphtogOMEvVTfyJgKeyGAeKusH"
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400/50 hover:shadow-md transition-all group/file cursor-pointer decoration-transparent"
              >
                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-red-50 text-red-600 border border-red-100 font-bold text-xs">PDF</div>
                  <div>
                    <h4 className="text-slate-700 font-bold text-sm group-hover/file:text-blue-600 transition-colors">Planner Semanal IPG (Imprimible)</h4>
                    <span className="text-xs text-slate-400 font-medium">760 KB</span>
                  </div>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/file:bg-blue-600 group-hover/file:text-white transition-colors shadow-sm">
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
