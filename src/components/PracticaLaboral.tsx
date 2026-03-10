import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  Briefcase, ChevronLeft, ChevronRight, FileText,
  Download, CheckCircle2, Scale, Coffee, Clock,
  PlayCircle, Star, Zap, Target, Award, Users,
  BookOpen, ClipboardList, Building2, GraduationCap,
  TrendingUp, AlertCircle, Calendar, ArrowRight,
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

// 1. Etapas del proceso — card con stepper interactivo
const stages = [
  {
    id: 'busqueda',
    name: 'Búsqueda y Postulación',
    icon: <Target size={24} />,
    color: 'from-blue-600 to-cyan-500',
    tag: 'Etapa 1',
    desc: 'Estrategias para encontrar empresas, preparar tu CV académico y destacar en el proceso de selección.',
    steps: [
      'Actualiza tu perfil LinkedIn con foto profesional y extracto académico',
      'Filtra empresas en el Portal de Prácticas IPG por carrera y región',
      'Adapta tu carta de presentación al rubro de cada empresa postulada',
      'Confirma que la empresa esté habilitada en el registro IPG antes de firmar',
    ],
    duration: '07:15',
  },
  {
    id: 'informe',
    name: 'Informe de Práctica',
    icon: <FileText size={24} />,
    color: 'from-indigo-500 to-purple-500',
    tag: 'Etapa 2',
    desc: 'Estructura, formato y contenido obligatorio del informe final. Aprende qué evalúa el supervisor académico.',
    steps: [
      'La portada debe incluir: nombre, RUT, carrera, empresa y período de práctica',
      'El marco teórico no debe superar el 30% del informe total',
      'Usa APA 7 para todas las citas y referencias bibliográficas',
      'Adjunta carta de término firmada por el supervisor de empresa en anexo',
    ],
    duration: '12:40',
  },
  {
    id: 'titulo',
    name: 'Proyecto de Título',
    icon: <GraduationCap size={24} />,
    color: 'from-teal-500 to-emerald-400',
    tag: 'Etapa 3',
    desc: 'Desde la propuesta hasta la defensa. Hoja de ruta completa para tu proyecto de titulación exitoso.',
    steps: [
      'La propuesta debe ser aprobada por tu docente guía antes de iniciar',
      'Define el problema, objetivo general y al menos 3 objetivos específicos',
      'El cronograma de Gantt es obligatorio y debe incluir hitos de revisión',
      'Solicita feedback intermedio antes de la entrega final para correcciones',
    ],
    duration: '15:20',
  },
];

// 2. Documentos clave — cards medianas con estado de requerimiento
const keyDocs = [
  {
    title: 'Convenio de Práctica',
    icon: <ClipboardList size={24} />,
    desc: 'Documento legal firmado entre IPG, el alumno y la empresa. Requisito previo obligatorio para iniciar.',
    color: 'from-blue-600 to-cyan-500',
    badge: 'Obligatorio',
    badgeStyle: 'bg-red-50 text-red-600 border-red-100',
  },
  {
    title: 'Bitácora Semanal',
    icon: <BookOpen size={24} />,
    desc: 'Registro de actividades realizadas cada semana. Se entrega junto al informe final como evidencia.',
    color: 'from-indigo-500 to-purple-500',
    badge: 'Obligatorio',
    badgeStyle: 'bg-red-50 text-red-600 border-red-100',
  },
  {
    title: 'Evaluación del Supervisor',
    icon: <Star size={24} />,
    desc: 'Formulario completado por el supervisor de empresa. Vale el 40% de la nota de práctica.',
    color: 'from-teal-500 to-emerald-400',
    badge: 'Obligatorio',
    badgeStyle: 'bg-red-50 text-red-600 border-red-100',
  },
  {
    title: 'Carta de Presentación',
    icon: <Award size={24} />,
    desc: 'Documento IPG que acredita al alumno ante la empresa. Solicítala con 5 días hábiles de anticipación.',
    color: 'from-blue-600 to-cyan-500',
    badge: 'Recomendado',
    badgeStyle: 'bg-amber-50 text-amber-600 border-amber-100',
  },
  {
    title: 'Informe de Avance',
    icon: <TrendingUp size={24} />,
    desc: 'Reporte de mitad de práctica. Permite al docente guía detectar problemas a tiempo.',
    color: 'from-indigo-500 to-purple-500',
    badge: 'Según carrera',
    badgeStyle: 'bg-blue-50 text-blue-700 border-blue-100',
  },
  {
    title: 'Proyecto de Título',
    icon: <GraduationCap size={24} />,
    desc: 'Documento final de titulación con estructura IMRD: Introducción, Metodología, Resultados, Discusión.',
    color: 'from-teal-500 to-emerald-400',
    badge: 'Titulación',
    badgeStyle: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
];

// 3. Descargas — misma estructura que TimeManagement
const downloads = [
  { name: 'Plantilla Informe de Práctica (Word)',      size: '2.4 MB', format: 'DOCX'  },
  { name: 'Plantilla Proyecto de Título (Word)',       size: '3.1 MB', format: 'DOCX'  },
  { name: 'Formulario Evaluación Supervisor',          size: '420 KB', format: 'PDF'   },
  { name: 'Bitácora Semanal Editable',                 size: '980 KB', format: 'EXCEL' },
  { name: 'Rúbrica de Evaluación Informe Final',       size: '560 KB', format: 'PDF'   },
  { name: 'Guía de Normas IPG para Práctica',          size: '1.8 MB', format: 'PDF'   },
];

// 4. Recursos visuales — misma estructura que TimeManagement
const visualResources = [
  {
    title: 'Cómo redactar un informe de práctica impecable',
    tag: 'Guía',
    url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Del aula a la empresa: tu primera práctica profesional',
    tag: 'Artículo',
    url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Cómo defender tu proyecto de título con confianza',
    tag: 'Infografía',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  },
];

// ─── STAGE CARD con stepper interactivo ───────────────────────────────────────
const StageCard: React.FC<{ item: typeof stages[0] }> = ({ item }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, scale: 0.98 }}
      className="group relative bg-white border border-slate-200 rounded-3xl p-6 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-[#0077ff]/30 transition-all overflow-hidden"
    >
      {/* Accent bar — COPIA EXACTA */}
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

      {/* Pasos interactivos */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
        <div className="flex border-b border-slate-200">
          {item.steps.map((_, i) => (
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
              <p className="text-slate-600 text-sm leading-relaxed">{item.steps[activeStep]}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-1.5 text-sm font-semibold text-[#0077ff] opacity-0 group-hover:opacity-100 transition-opacity mt-4">
        Ver guía completa <ChevronLeft size={16} className="rotate-180" />
      </div>
    </motion.div>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const PracticaLaboral: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">

      {/* ── BOTÓN VOLVER — COPIA EXACTA ── */}
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

      {/* ── HERO — COPIA EXACTA de TimeManagement ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 border border-white bg-white/60 backdrop-blur-xl shadow-xl shadow-slate-200/50 mb-16"
      >
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-20 w-64 h-64 bg-[#0077ff]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-bold border border-blue-100 mb-4 uppercase tracking-wider">
            <Briefcase size={16} /> Práctica Profesional y Titulación
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Práctica Laboral y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003399] to-blue-500">
              Proyecto de Título
            </span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Todo lo que necesitas para tu proceso de práctica profesional y titulación. Desde la búsqueda de empresa hasta la defensa final, con plantillas, rúbricas y orientaciones paso a paso.
          </p>
        </div>
      </motion.div>

      {/* ── SECCIONES ── */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-20">

        {/* ════════════════════════════════════════
            SECCIÓN 1: ETAPAS DEL PROCESO
            3 cards con stepper interactivo
        ════════════════════════════════════════ */}
        <section>
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
            <PlayCircle className="text-[#0077ff] w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-800">Etapas del Proceso</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stages.map(item => (
              <StageCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECCIÓN 2: DOCUMENTOS CLAVE
            Grid 2×3, misma estructura que productivityTools
        ════════════════════════════════════════ */}
        <section>
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ClipboardList className="text-[#0077ff] w-6 h-6" />
                <h2 className="text-2xl font-bold text-slate-800">Documentos Clave</h2>
              </div>
              <p className="text-slate-500 text-sm">Conoce cada documento del proceso, su función y cuándo debes entregarlo.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyDocs.map((item, idx) => (
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
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${item.badgeStyle}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#003399] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.desc}</p>

                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#0077ff] opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver plantilla <ChevronLeft size={16} className="rotate-180" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECCIÓN 3: DESCARGAS
            COPIA EXACTA de TimeManagement
        ════════════════════════════════════════ */}
        <section>
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="text-teal-500 w-6 h-6" />
                <h2 className="text-2xl font-bold text-slate-800">Plantillas y Formularios</h2>
              </div>
              <p className="text-slate-500 text-sm">Documentos oficiales IPG listos para completar y entregar.</p>
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
                      : file.format === 'DOCX'
                        ? 'bg-blue-50 text-blue-700 border-blue-100'
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
            COPIA EXACTA de balanceResources TimeManagement
        ════════════════════════════════════════ */}
        <section className="pb-10">
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
            <Scale className="text-[#003399] w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-800">Orientación y Consejos</h2>
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

export default PracticaLaboral;