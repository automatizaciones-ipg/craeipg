import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  ChevronLeft, PlayCircle, Eye, ScanSearch, PenLine, Brain,
  CheckCircle2, Download, Sparkles, BookOpen, Lightbulb
} from 'lucide-react';

export default function ComprensionLectora({ onBack }: { onBack: () => void }) {
  const [activeStep, setActiveStep] = useState(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const steps = [
    {
      icon: <Eye size={22} />,
      title: 'Pre-lectura',
      color: 'from-indigo-500 to-purple-500',
      desc: 'Antes de leer, revisa el título, subtítulos, imágenes y el primer párrafo. Formula 3 preguntas sobre lo que esperas encontrar. Activar el conocimiento previo mejora la retención hasta un 40%.',
      action: 'Formula: ¿De qué trata? ¿Qué ya sé? ¿Qué quiero aprender?',
    },
    {
      icon: <ScanSearch size={22} />,
      title: 'Lectura Exploratoria',
      color: 'from-purple-500 to-pink-500',
      desc: 'Lee solo la primera y última oración de cada párrafo. En 5 minutos tendrás la estructura completa del texto y podrás identificar dónde está la información que buscas.',
      action: 'Resultado esperado: conoces la estructura antes de profundizar.',
    },
    {
      icon: <PenLine size={22} />,
      title: 'Lectura Activa',
      color: 'from-blue-500 to-indigo-500',
      desc: 'Subraya solo la idea principal de cada párrafo (máximo 1). Escribe en los márgenes: "¿Por qué?", "Ejemplo", "No entendí" o "Importante". El bolígrafo activa la atención.',
      action: 'Regla: subrayar más del 20% del texto anula el efecto de subrayar.',
    },
    {
      icon: <Brain size={22} />,
      title: 'Inferencias',
      color: 'from-teal-500 to-emerald-400',
      desc: 'Ve más allá del texto explícito. Pregúntate: ¿qué no dice pero implica? ¿Qué perspectiva o sesgo tiene el autor? ¿Con qué otra cosa que sé conecta esta información?',
      action: 'Las inferencias son el puente entre la lectura y el pensamiento crítico.',
    },
    {
      icon: <CheckCircle2 size={22} />,
      title: 'Síntesis',
      color: 'from-indigo-500 to-blue-600',
      desc: 'Cierra el texto y escribe en 5 líneas (y solo 5) qué aprendiste. Si no puedes sintetizar en 5 líneas, vuelve a leer la parte donde perdiste la comprensión.',
      action: 'La síntesis es la prueba de fuego de la comprensión real.',
    },
  ];

  const quickTips = [
    { icon: <Eye size={22} className="text-indigo-500" />, title: 'Foco antes que velocidad', text: '20 minutos enfocado equivale a más de 1 hora con distracciones. Calidad sobre cantidad.' },
    { icon: <BookOpen size={22} className="text-purple-500" />, title: 'Vocabulario en contexto', text: 'Si encuentras una palabra desconocida, deduce por contexto antes de buscarla. Entrena la inferencia léxica.' },
    { icon: <PenLine size={22} className="text-teal-500" />, title: 'Subrayado preciso', text: 'El subrayado excesivo anula su efecto. Máximo 1 idea clave por párrafo para que el énfasis tenga sentido.' },
    { icon: <Brain size={22} className="text-blue-500" />, title: 'Recall sobre relectura', text: 'Releer es pasivo y poco efectivo. Si no recuerdas, practica el recall activo antes de volver al texto.' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-2 text-slate-500 hover:text-purple-600 transition-colors mb-8 group font-medium bg-transparent border-none cursor-pointer"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-purple-100 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver a Técnicas de Estudio
      </motion.button>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-12">

        {/* HERO */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-950 shadow-2xl shadow-purple-900/30 text-white"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/20 mb-6 uppercase tracking-wider text-purple-100">
              <BookOpen size={16} /> Habilidad Fundamental
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              Comprensión{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                Lectora
              </span>
            </h1>
            <p className="text-lg text-purple-100/90 leading-relaxed max-w-2xl">
              Desarrolla la capacidad de extraer ideas clave, hacer inferencias y evaluar
              críticamente cualquier texto académico. Una habilidad que impacta todas tus asignaturas.
            </p>
          </div>
        </motion.div>

        {/* VIDEO */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 shadow-sm border border-purple-100">
              <PlayCircle size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Video IPG: Técnicas de Comprensión Lectora</h2>
              <p className="text-slate-500 text-sm">Material audiovisual oficial del CRAI IPG</p>
            </div>
          </div>
          <div className="w-full aspect-video rounded-3xl overflow-hidden bg-slate-900 shadow-xl shadow-slate-200/50 border border-slate-200">
            <iframe
              className="w-full h-full"
              src="https://drive.google.com/file/d/15ZPOYIyWxZx84lgHXItHcfKFVyQgXKqS/preview"
              title="Comprensión Lectora IPG"
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* 5 PASOS — stepper interactivo */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 shadow-sm border border-purple-100">
              <Sparkles size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">5 Pasos de la Lectura Activa</h2>
              <p className="text-slate-500 text-sm">Selecciona cada paso para explorar la técnica</p>
            </div>
          </div>

          {/* Tab selector */}
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all border ${
                  activeStep === i
                    ? 'bg-purple-600 text-white border-purple-600 shadow-md'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-purple-300 hover:text-purple-600'
                }`}
              >
                <span className="text-xs opacity-60">{String(i + 1).padStart(2, '0')}</span>
                {step.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 overflow-hidden relative"
            >
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${steps[activeStep].color}`}></div>
              <div className="flex items-start gap-6 pl-4">
                <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${steps[activeStep].color} text-white shadow-lg`}>
                  {steps[activeStep].icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    <span className="text-slate-300 mr-2">{String(activeStep + 1).padStart(2, '0')}.</span>
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{steps[activeStep].desc}</p>
                  <div className="flex items-start gap-2 bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                    <Lightbulb size={16} className="text-indigo-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-indigo-800 leading-relaxed">{steps[activeStep].action}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* QUICK TIPS */}
        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Lo que la Investigación Dice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickTips.map((tip, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3 hover:border-purple-200 transition-colors">
                {tip.icon}
                <h4 className="font-bold text-slate-800 text-sm">{tip.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* DESCARGA */}
        <motion.div variants={itemVariants}>
          <div className="flex flex-col bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 overflow-hidden">
            <div className="p-6 md:p-8 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-md">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Material de Apoyo</h2>
                <p className="text-slate-500 text-sm font-medium mt-1">Guía oficial del CRAI IPG en formato PDF</p>
              </div>
            </div>
            <div className="p-6 bg-slate-50/50">
              <a
                href="/api/download?id=1kd0aNYEKF2pPeXnsxmQghfQhIvOdfd9z"
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-purple-400/50 hover:shadow-md transition-all group/file cursor-pointer decoration-transparent"
              >
                <div className="flex items-center gap-4 overflow-hidden">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-red-50 text-red-600 border border-red-100 font-bold text-xs">
                    PDF
                  </div>
                  <div className="truncate">
                    <h4 className="text-slate-700 font-bold text-sm truncate group-hover/file:text-purple-600 transition-colors">
                      Guía Aprende+ CRAI IPG
                    </h4>
                    <span className="text-xs text-slate-400 font-medium">1.4 MB</span>
                  </div>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/file:bg-purple-600 group-hover/file:text-white transition-colors shadow-sm ml-2">
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
