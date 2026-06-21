import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ChevronLeft, Sun, Download, Sparkles, CheckCircle2,
  Moon, Dumbbell, Apple, BrainCircuit, Heart,
} from 'lucide-react';

export default function CuidarMejor({ onBack }: { onBack: () => void }) {
  const containerVariants: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const pillars = [
    {
      icon: <Moon size={22} />,
      title: 'Sueño de Calidad',
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
      tips: [
        'Duerme entre 7 y 9 horas diarias — el sueño consolida el aprendizaje.',
        'Mantén un horario regular de sueño, incluso los fines de semana.',
        'Evita pantallas 45 minutos antes de dormir.',
        'La privación de sueño reduce la memoria hasta un 40%.',
      ],
    },
    {
      icon: <Dumbbell size={22} />,
      title: 'Actividad Física',
      color: 'text-teal-600 bg-teal-50 border-teal-100',
      tips: [
        'El ejercicio aeróbico 3 veces/semana mejora la concentración y la memoria.',
        'Caminar 20 minutos activa el hipocampo, clave para aprender.',
        'No necesitas un gimnasio: subir escaleras, bailar y caminar cuentan.',
        'El movimiento regula el estrés y la ansiedad.',
      ],
    },
    {
      icon: <Apple size={22} />,
      title: 'Nutrición e Hidratación',
      color: 'text-amber-600 bg-amber-50 border-amber-100',
      tips: [
        'No estudies en ayunas — el cerebro necesita glucosa para rendir.',
        'Bebe al menos 2 L de agua al día. La deshidratación reduce la concentración.',
        'Prefiere frutos secos, frutas y cereales integrales como snacks de estudio.',
        'Limita el azúcar refinado: produce picos de energía seguidos de caídas bruscas.',
      ],
    },
    {
      icon: <BrainCircuit size={22} />,
      title: 'Gestión del Estrés',
      color: 'text-rose-600 bg-rose-50 border-rose-100',
      tips: [
        'Respiración 4-7-8 (inhala 4s, sostén 7s, exhala 8s) reduce el cortisol.',
        'Mindfulness de 10 minutos diarios mejora el enfoque y reduce la ansiedad.',
        'Escribe tus preocupaciones antes de estudiar para "vaciar" la mente.',
        'Identificar tus estresores con claridad ya reduce su impacto emocional.',
      ],
    },
  ];

  const dailyChecklist = [
    { icon: <Moon size={16} />,        color: 'text-indigo-500', text: '7-9 horas de sueño' },
    { icon: <Dumbbell size={16} />,    color: 'text-teal-500',   text: '20 min de movimiento' },
    { icon: <Apple size={16} />,       color: 'text-amber-500',  text: 'Desayuno antes de estudiar' },
    { icon: <Sun size={16} />,         color: 'text-yellow-500', text: '10 min de sol o aire libre' },
    { icon: <BrainCircuit size={16} />,color: 'text-rose-500',   text: '5 min de respiración o meditación' },
    { icon: <Heart size={16} />,       color: 'text-pink-500',   text: 'Conexión social (hablar con alguien)' },
  ];

  const quotes = [
    { text: 'El autocuidado no es egoísmo — es la condición para rendir al máximo de forma sostenida.', attr: 'CRAI IPG' },
    { text: 'Los estudiantes que duermen bien retienen hasta un 40% más que los que se trasnochan estudiando.', attr: 'Investigación sobre sueño y aprendizaje' },
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
        Volver a Bienestar
      </motion.button>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-12">

        {/* Hero */}
        <motion.div variants={itemVariants} className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-teal-900 via-emerald-900 to-teal-950 shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/20 mb-6 uppercase tracking-wider text-emerald-100">
              <Sun size={16} /> Bienestar Integral · CRAI IPG
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              Cuídate para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">
                Estudiar Mejor
              </span>
            </h1>
            <p className="text-lg text-teal-100/90 leading-relaxed max-w-2xl">
              Tu rendimiento académico depende de cómo cuidas tu cuerpo y tu mente. Conoce los 4 pilares de bienestar que marcan la diferencia.
            </p>
          </div>
        </motion.div>

        {/* 4 Pilares */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 border border-teal-100">
              <Sun size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Los 4 Pilares del Bienestar Académico</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
                <div className="p-5 flex items-center gap-4 border-b border-slate-100">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${pillar.color}`}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">{pillar.title}</h3>
                </div>
                <ul className="p-5 space-y-3">
                  {pillar.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-teal-500 shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Checklist Diario */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
              <CheckCircle2 size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Tu Checklist de Bienestar Diario</h2>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6">
            <p className="text-sm text-slate-500 mb-5">Hábitos mínimos para mantener tu rendimiento al máximo:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {dailyChecklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className={item.color}>{item.icon}</span>
                  <span className="text-sm text-slate-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Citas */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {quotes.map((q, idx) => (
              <div key={idx} className="bg-gradient-to-br from-teal-600 to-emerald-700 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
                <p className="text-white/90 text-base font-medium leading-relaxed italic mb-3">"{q.text}"</p>
                <span className="text-teal-100 text-xs font-bold uppercase tracking-wider">— {q.attr}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Descarga */}
        <motion.div variants={itemVariants}>
          <div className="flex flex-col bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="p-6 md:p-8 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-md">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Infografía Descargable</h2>
                <p className="text-slate-500 text-sm font-medium mt-1">Cuídate para Estudiar Mejor — recurso oficial IPG</p>
              </div>
            </div>
            <div className="p-6 bg-slate-50/50">
              <a
                href="/api/download?id=1HI4_72xuXpalJ13TxTKxqRxAAyl8VJR3"
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-400/50 hover:shadow-md transition-all group decoration-transparent cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-red-50 text-red-600 border border-red-100 font-bold text-xs">
                    PDF
                  </div>
                  <div>
                    <h4 className="text-slate-700 font-bold text-sm group-hover:text-teal-600 transition-colors">Cuídate para Estudiar Mejor — IPG</h4>
                    <span className="text-xs text-slate-400 font-medium">Infografía · PDF</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-teal-600 group-hover:text-white transition-colors shadow-sm">
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
