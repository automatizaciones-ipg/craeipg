import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  Heart, ChevronLeft, Sun, Moon, Wind,
  Download, CheckCircle2, Scale, Coffee, Clock,
  PlayCircle, Star, Zap, Phone, Users,
  MessageCircle, BookOpen, Smile, AlertTriangle,
  Headphones, Activity, Shield, HandHeart,
} from 'lucide-react';

// ─── VARIANTS — COPIA EXACTA de TimeManagement.tsx ───────────────────────────
const containerVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

// 1. Pilares de bienestar — cards con stepper interactivo (igual que DigitalTools/PracticaLaboral)
const pillars = [
  {
    id: 'estres',
    name: 'Manejo del Estrés',
    icon: <Wind size={24} />,
    color: 'from-blue-600 to-cyan-500',
    tag: 'Urgente',
    desc: 'Técnicas validadas clínicamente para reducir el estrés académico y recuperar el equilibrio mental en momentos de alta exigencia.',
    tips: [
      'La técnica 4-7-8: inhala 4 seg, retén 7 seg, exhala 8 seg. Repite 4 veces.',
      'Divide las tareas abrumadoras en bloques de 25 minutos (técnica Pomodoro)',
      'Identifica tus "detonadores" de estrés escribiéndolos en un diario breve',
      'El ejercicio de 20 minutos reduce el cortisol más que cualquier otra técnica',
    ],
    duration: '08:30',
  },
  {
    id: 'autocuidado',
    name: 'Rutinas de Autocuidado',
    icon: <Sun size={24} />,
    color: 'from-indigo-500 to-purple-500',
    tag: 'Diario',
    desc: 'Hábitos pequeños y sostenibles que, practicados consistentemente, generan un impacto enorme en tu rendimiento y estado de ánimo.',
    tips: [
      'Los primeros 10 minutos del día sin pantalla marcan el tono de todo el día',
      'Hidratación: 8 vasos de agua diarios mejoran la concentración un 14%',
      'Agenda al menos un bloque de 30 min de actividad que disfrutes de verdad',
      'El sueño de 7-9 horas no es opcional: consolida la memoria y regula el ánimo',
    ],
    duration: '06:15',
  },
  {
    id: 'apoyo',
    name: 'Canales de Apoyo IPG',
    icon: <HandHeart size={24} />,
    color: 'from-teal-500 to-emerald-400',
    tag: 'Disponible',
    desc: 'IPG cuenta con una red de apoyo profesional y entre pares. Conoce todos los canales disponibles y cómo acceder sin barreras.',
    tips: [
      'La Unidad de Apoyo Estudiantil atiende de lunes a viernes 9:00–18:00 hrs',
      'Las consultas son 100% confidenciales y no afectan tu historial académico',
      'El chat de apoyo en línea responde en menos de 2 horas hábiles',
      'Los grupos de apoyo entre pares se reúnen cada 15 días — no necesitas inscripción previa',
    ],
    duration: '05:00',
  },
];

// 2. Recursos de bienestar — grid 2×3
const wellnessResources = [
  {
    title: 'Meditación Guiada',
    icon: <Headphones size={24} />,
    desc: 'Audios de 5, 10 y 20 minutos para practicar mindfulness entre clases o antes de un certamen.',
    color: 'from-blue-600 to-cyan-500',
    badge: 'Audio',
  },
  {
    title: 'Test de Bienestar',
    icon: <Activity size={24} />,
    desc: 'Evaluación breve y validada que mide tu nivel de estrés, ansiedad y bienestar general. Resultados inmediatos.',
    color: 'from-indigo-500 to-purple-500',
    badge: 'Interactivo',
  },
  {
    title: 'Círculos de Escucha',
    icon: <Users size={24} />,
    desc: 'Espacios virtuales y presenciales facilitados por profesionales donde puedes hablar con otros estudiantes.',
    color: 'from-teal-500 to-emerald-400',
    badge: 'Grupal',
  },
  {
    title: 'Psicología Individual',
    icon: <MessageCircle size={24} />,
    desc: 'Sesiones de atención psicológica individual con profesionales de IPG. Agenda tu hora directamente en línea.',
    color: 'from-blue-600 to-cyan-500',
    badge: 'Presencial',
  },
  {
    title: 'Cápsulas de Bienestar',
    icon: <BookOpen size={24} />,
    desc: 'Lecturas cortas de 3 minutos con evidencia científica sobre salud mental, sueño, alimentación y ejercicio.',
    color: 'from-indigo-500 to-purple-500',
    badge: 'Lectura',
  },
  {
    title: 'Línea de Crisis 24/7',
    icon: <Shield size={24} />,
    desc: 'Si estás en un momento muy difícil, este canal de atención inmediata está disponible las 24 horas, todos los días.',
    color: 'from-teal-500 to-emerald-400',
    badge: 'Urgente',
  },
];

// 3. Descargas
const downloads = [
  { name: 'Guía de Técnicas Anti-Estrés Académico',   size: '1.8 MB', format: 'PDF'   },
  { name: 'Planner de Autocuidado Semanal',            size: '980 KB', format: 'PDF'   },
  { name: 'Tracker de Hábitos de Bienestar',           size: '2.1 MB', format: 'EXCEL' },
  { name: 'Fichas de Respiración y Mindfulness',       size: '640 KB', format: 'PDF'   },
  { name: 'Guía para Hablar con un Profesional',       size: '420 KB', format: 'PDF'   },
  { name: 'Calendario de Actividades de Bienestar IPG',size: '1.1 MB', format: 'EXCEL' },
];

// 4. Recursos visuales
const visualResources = [
  {
    title: 'Cómo sobrevivir la época de certámenes sin quemarte',
    tag: 'Guía',
    url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'El sueño es tu superpoder académico',
    tag: 'Artículo',
    url: 'https://images.unsplash.com/photo-1531353826977-0941b4779a1c?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Pedir ayuda es un acto de inteligencia',
    tag: 'Infografía',
    url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop',
  },
];

// ─── PILLAR CARD con stepper ──────────────────────────────────────────────────
const PillarCard: React.FC<{ item: typeof pillars[0] }> = ({ item }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, scale: 0.98 }}
      className="group relative bg-white border border-slate-200 rounded-3xl p-6 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-[#0077ff]/30 transition-all overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-full h-2 bg-gradient-to-r ${item.color} opacity-80`} />

      <div className="flex justify-between items-start mb-6">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${item.color} text-white shadow-md`}>
          {item.icon}
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-slate-100 text-slate-500 text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
            <PlayCircle size={12} /> {item.duration}
          </div>
          <div className="bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-md border border-blue-100">
            {item.tag}
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#003399] transition-colors">
        {item.name}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-5">{item.desc}</p>

      <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
        <div className="flex border-b border-slate-200">
          {item.tips.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`flex-1 py-2 text-xs font-bold transition-all ${
                activeStep === i
                  ? 'bg-white text-[#003399] border-b-2 border-[#003399]'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="p-4"
          >
            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Zap size={11} />
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{item.tips[activeStep]}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-1.5 text-sm font-semibold text-[#0077ff] opacity-0 group-hover:opacity-100 transition-opacity mt-4">
        Explorar recursos <ChevronLeft size={16} className="rotate-180" />
      </div>
    </motion.div>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const Bienestar: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">

      {/* ── BOTÓN VOLVER ── */}
      <motion.a
        href="/"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0077ff] transition-colors mb-8 group font-medium"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-[#0077ff]/10 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver al inicio
      </motion.a>

      {/* ── HERO ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 border border-white bg-white/60 backdrop-blur-xl shadow-xl shadow-slate-200/50 mb-16"
      >
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-20 w-64 h-64 bg-[#0077ff]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-600 px-3 py-1 rounded-full text-sm font-bold border border-teal-100 mb-4 uppercase tracking-wider">
            <Heart size={16} /> Bienestar y Apoyo Estudiantil
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Tu Bienestar es{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003399] to-teal-500">
              Prioridad IPG
            </span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Estudiar es exigente. IPG lo sabe. Aquí encontrarás técnicas de manejo del estrés, rutinas de autocuidado y todos los canales de apoyo profesional disponibles para ti — sin costo, sin burocracia.
          </p>
        </div>
      </motion.div>

      {/* ── SECCIONES ── */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-20">

        {/* ════════════════════════════════════════
            SECCIÓN 1: PILARES DE BIENESTAR
        ════════════════════════════════════════ */}
        <section>
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
            <PlayCircle className="text-[#0077ff] w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-800">Tres Pilares del Bienestar</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map(item => (
              <PillarCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECCIÓN 2: RED DE RECURSOS
        ════════════════════════════════════════ */}
        <section>
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Smile className="text-[#0077ff] w-6 h-6" />
                <h2 className="text-2xl font-bold text-slate-800">Red de Apoyo y Recursos</h2>
              </div>
              <p className="text-slate-500 text-sm">Todos los servicios disponibles para estudiantes IPG, gratuitos y confidenciales.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wellnessResources.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 0.98 }}
                className="group relative bg-white border border-slate-200 rounded-3xl p-6 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-[#0077ff]/30 transition-all cursor-pointer overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-full h-2 bg-gradient-to-r ${item.color} opacity-80`} />

                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${item.color} text-white shadow-md`}>
                    {item.icon}
                  </div>
                  <div className="bg-slate-100 text-slate-500 text-xs font-bold px-2.5 py-1 rounded-md">
                    {item.badge}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#003399] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.desc}</p>

                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#0077ff] opacity-0 group-hover:opacity-100 transition-opacity">
                  Acceder <ChevronLeft size={16} className="rotate-180" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECCIÓN 3: DESCARGAS
        ════════════════════════════════════════ */}
        <section>
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="text-teal-500 w-6 h-6" />
                <h2 className="text-2xl font-bold text-slate-800">Material de Apoyo</h2>
              </div>
              <p className="text-slate-500 text-sm">Guías y planners para incorporar el autocuidado en tu rutina de estudio.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {downloads.map((file, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-400/40 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs border ${
                    file.format === 'PDF'
                      ? 'bg-red-50 text-red-600 border-red-100'
                      : 'bg-emerald-50 text-emerald-600 border-emerald-100'
                  }`}>
                    {file.format}
                  </div>
                  <div>
                    <h4 className="text-slate-700 font-semibold text-sm group-hover:text-teal-600 transition-colors">{file.name}</h4>
                    <span className="text-xs text-slate-400">{file.size}</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  <Download size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECCIÓN 4: RECURSOS VISUALES
        ════════════════════════════════════════ */}
        <section className="pb-10">
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
            <Scale className="text-[#003399] w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-800">Lecturas y Perspectivas</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visualResources.map((res, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  src={res.url}
                  alt={res.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium border border-white/30 flex items-center gap-1.5">
                    {res.tag === 'Artículo' ? <Coffee size={12} /> : <Scale size={12} />}
                    {res.tag}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg md:text-xl leading-snug">{res.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </motion.div>
    </div>
  );
};

export default Bienestar;