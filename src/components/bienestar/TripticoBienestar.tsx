import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ChevronLeft, Heart, Brain, Users, Activity, AlertTriangle,
  Download, Sparkles, FileText, CheckCircle2,
} from 'lucide-react';

export default function TripticoBienestar({ onBack }: { onBack: () => void }) {
  const containerVariants: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const dimensions = [
    {
      icon: <Brain size={26} />,
      color: 'from-blue-600 to-indigo-700',
      title: 'Bienestar Mental',
      desc: 'Gestión del estrés académico, hábitos de pensamiento positivo, mindfulness y conexión con recursos de salud mental. La salud mental afecta directamente la capacidad de aprender y retener información.',
    },
    {
      icon: <Heart size={26} />,
      color: 'from-rose-600 to-pink-700',
      title: 'Bienestar Emocional',
      desc: 'Reconocer y gestionar emociones difíciles: ansiedad ante evaluaciones, miedo al fracaso, frustración con el ritmo académico. Las emociones son información, no obstáculos.',
    },
    {
      icon: <Users size={26} />,
      color: 'from-teal-600 to-emerald-700',
      title: 'Bienestar Social',
      desc: 'Construcción de redes de apoyo entre pares, relación con docentes y participación en la comunidad IPG. El aislamiento es uno de los principales factores de deserción universitaria.',
    },
    {
      icon: <Activity size={26} />,
      color: 'from-indigo-600 to-purple-700',
      title: 'Bienestar Físico',
      desc: 'Sueño adecuado (7-9 horas), alimentación nutritiva y actividad física regular. El cuerpo y la mente no son separables — uno impacta directamente al otro.',
    },
  ];

  const alertas = [
    {
      tipo: 'Académicas',
      desc: 'Calificaciones en caída sostenida, inasistencias frecuentes, entrega tardía o no entrega de trabajos evaluados.',
    },
    {
      tipo: 'Emocionales',
      desc: 'Irritabilidad persistente, sensación de vacío o desmotivación, llanto frecuente sin causa clara, dificultad para concentrarse.',
    },
    {
      tipo: 'Conductuales',
      desc: 'Aislamiento de compañeros y familia, cambios en patrones de sueño o alimentación, descuido de actividades que antes disfrutabas.',
    },
  ];

  const tips = [
    'El bienestar no es ausencia de dificultades — es la capacidad de afrontarlas.',
    'Comparte este tríptico con compañeros que notes en dificultades: puede ser el empujón que necesitan.',
    'Agenda al menos 30 minutos al día para una actividad no académica que genuinamente disfrutes.',
    'La desconexión digital programada (sin teléfono después de las 10 pm) mejora significativamente el sueño.',
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-2 text-slate-500 hover:text-rose-600 transition-colors mb-8 group font-medium bg-transparent border-none cursor-pointer"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-rose-50 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver a Bienestar
      </motion.button>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-12">

        {/* Hero */}
        <motion.div variants={itemVariants} className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-rose-900 via-pink-900 to-rose-950 shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/20 mb-6 uppercase tracking-wider text-rose-100">
              <Heart size={16} /> Recursos de Bienestar · IPG
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Tríptico de Bienestar Estudiantil IPG
            </h1>
            <p className="text-lg text-rose-100/90 leading-relaxed max-w-2xl">
              Una guía completa sobre los recursos, dimensiones y estrategias de bienestar disponibles para estudiantes IPG. Descárgala y compártela.
            </p>
          </div>
        </motion.div>

        {/* 4 Dimensiones */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-6">
            <Heart className="text-rose-500 w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-800">Las 4 Dimensiones del Bienestar Estudiantil</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {dimensions.map((dim, i) => (
              <div key={i} className={`relative rounded-3xl overflow-hidden p-7 bg-gradient-to-br ${dim.color} text-white shadow-xl`}>
                <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                    {dim.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{dim.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{dim.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Señales de Alerta */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="text-amber-500 w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-800">Señales de Alerta que No Debes Ignorar</h2>
          </div>
          <div className="flex flex-col gap-4">
            {alertas.map((a, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-amber-50 rounded-2xl border border-amber-200">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <AlertTriangle size={20} className="text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-amber-900 mb-1">⚠️ {a.tipo}</h4>
                  <p className="text-amber-800 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500 bg-slate-50 rounded-2xl border border-slate-200 p-4">
            Si reconoces 3 o más señales de alerta en ti o en un compañero, es el momento de buscar apoyo. El programa <strong>¿No Solo A?</strong> está disponible para acompañarte.
          </p>
        </motion.div>

        {/* Tips */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tips.map((tip, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3 hover:border-rose-300 transition-colors">
              <div className="shrink-0 w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center mt-0.5">
                <CheckCircle2 size={14} className="text-rose-600" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{tip}</p>
            </div>
          ))}
        </motion.div>

        {/* Descarga */}
        <motion.div variants={itemVariants} className="flex flex-col bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="p-6 md:p-8 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-white shadow-md">
              <Sparkles size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">Tríptico Oficial</h2>
              <p className="text-slate-400 text-sm font-medium mt-1">Comparte con compañeros que lo necesiten</p>
            </div>
          </div>
          <div className="p-6 bg-slate-50/50">
            <a
              href="/api/download?id=1vtIn_8VFkIeU3anp9tzHOdZ2AI-Mpqxe"
              className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-400/50 hover:shadow-md transition-all group decoration-transparent cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-red-50 text-red-600 border border-red-100">
                  <FileText size={22} />
                </div>
                <div>
                  <h4 className="text-slate-700 font-bold text-sm group-hover:text-rose-600 transition-colors">Tríptico de Bienestar Estudiantil IPG</h4>
                  <span className="text-xs text-slate-400 font-medium">1.1 MB • PDF</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-rose-600 group-hover:text-white transition-colors shadow-sm">
                <Download size={18} />
              </div>
            </a>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
