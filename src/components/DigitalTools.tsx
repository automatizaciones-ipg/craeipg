import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  Monitor, ChevronLeft, ChevronRight, Mail, Video,
  Cloud, Users, FileText, Smartphone, Wifi, Lock,
  PlayCircle, CheckCircle2, Star, Download, Scale,
  Coffee, Clock, ExternalLink, Zap, Globe, Layers,
  BookOpen, Target, Award, ArrowRight, Calendar,
  MessageSquare, Share2, Settings, HardDrive, Search,
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

// 1. Plataformas principales — card grande con tabs interactivos
const platforms = [
  {
    id: 'gmail',
    name: 'Gmail Institucional',
    icon: <Mail size={24} />,
    color: 'from-blue-600 to-cyan-500',
    tag: 'Correo',
    desc: 'Tu correo oficial IPG. Aprende a organizar carpetas, usar filtros automáticos y gestionar múltiples cuentas.',
    tips: [
      'Activa la verificación en dos pasos desde Configuración → Seguridad',
      'Crea etiquetas por asignatura para organizar correos de profesores',
      'Usa "Posponer" para recordar responder correos importantes',
      'El alias @ipg.cl es tu identidad académica oficial',
    ],
    duration: '06:30',
  },
  {
    id: 'meet',
    name: 'Google Meet',
    icon: <Video size={24} />,
    color: 'from-indigo-500 to-purple-500',
    tag: 'Videollamadas',
    desc: 'Clases sincrónicas, tutorías virtuales y reuniones de grupo. Domina las funciones avanzadas para sacar el máximo.',
    tips: [
      'Usa "Levantar la mano" para participar sin interrumpir la clase',
      'Activa los subtítulos en tiempo real desde la barra inferior',
      'Comparte solo una ventana específica, no toda la pantalla',
      'El modo "Compañero" conecta tu teléfono como segunda cámara',
    ],
    duration: '08:45',
  },
  {
    id: 'drive',
    name: 'Google Drive',
    icon: <Cloud size={24} />,
    color: 'from-teal-500 to-emerald-400',
    tag: 'Almacenamiento',
    desc: 'Almacena, organiza y colabora en documentos en tiempo real. Espacio ilimitado con tu cuenta institucional.',
    tips: [
      'Organiza por carpetas: Semestre → Asignatura → Tipo de archivo',
      'Click derecho → "Hacer disponible sin conexión" para trabajar offline',
      'Usa @ en Docs para mencionar compañeros y asignar tareas',
      'Historial de versiones guarda todos los cambios de los últimos 30 días',
    ],
    duration: '10:20',
  },
];

// 2. Herramientas de productividad — grid de cards medianas
const productivityTools = [
  {
    title: 'Google Docs',
    icon: <FileText size={24} />,
    desc: 'Redacción colaborativa en tiempo real. Ideal para trabajos grupales con comentarios y sugerencias.',
    color: 'from-blue-600 to-cyan-500',
    badge: 'Escritura',
  },
  {
    title: 'Google Slides',
    icon: <Monitor size={24} />,
    desc: 'Presentaciones profesionales en línea. Colabora con compañeros simultáneamente sin conflictos de versión.',
    color: 'from-indigo-500 to-purple-500',
    badge: 'Presentaciones',
  },
  {
    title: 'Google Calendar',
    icon: <Calendar size={24} />,
    desc: 'Sincroniza tus clases, certámenes y entregas. Configura recordatorios automáticos para nunca olvidar nada.',
    color: 'from-teal-500 to-emerald-400',
    badge: 'Organización',
  },
  {
    title: 'Google Chat',
    icon: <MessageSquare size={24} />,
    desc: 'Mensajería instantánea con tus compañeros y profesores. Crea espacios de trabajo por asignatura.',
    color: 'from-blue-600 to-cyan-500',
    badge: 'Comunicación',
  },
  {
    title: 'Google Forms',
    icon: <CheckCircle2 size={24} />,
    desc: 'Crea encuestas y formularios para recopilar información. Resultados automáticos en hojas de cálculo.',
    color: 'from-indigo-500 to-purple-500',
    badge: 'Formularios',
  },
  {
    title: 'Google Sites',
    icon: <Globe size={24} />,
    desc: 'Crea portafolios digitales y sitios web académicos sin saber programar. Perfecto para proyectos de título.',
    color: 'from-teal-500 to-emerald-400',
    badge: 'Portafolio',
  },
];

// 3. Recursos descargables
const downloads = [
  { name: 'Guía completa Google Workspace IPG',      size: '4.2 MB', format: 'PDF'   },
  { name: 'Atajos de teclado Google Docs y Slides',  size: '850 KB', format: 'PDF'   },
  { name: 'Plantilla portafolio digital (Sites)',    size: '1.4 MB', format: 'PDF'   },
  { name: 'Checklist de seguridad cuenta IPG',       size: '320 KB', format: 'PDF'   },
  { name: 'Guía de colaboración en tiempo real',     size: '2.1 MB', format: 'EXCEL' },
  { name: 'Calendario académico editable',           size: '980 KB', format: 'EXCEL' },
];

// 4. Recursos visuales (misma estructura que balanceResources de TimeManagement)
const visualResources = [
  {
    title: 'Cómo dominar Google Workspace en 30 días',
    tag: 'Guía',
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Productividad digital para estudiantes',
    tag: 'Artículo',
    url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Seguridad y privacidad en tu cuenta IPG',
    tag: 'Infografía',
    url: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800&auto=format&fit=crop',
  },
];

// ─── PLATFORM CARD con tabs de tips ───────────────────────────────────────────
const PlatformCard: React.FC<{ item: typeof platforms[0] }> = ({ item }) => {
  const [activeTip, setActiveTip] = useState(0);

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, scale: 0.98 }}
      className="group relative bg-white border border-slate-200 rounded-3xl p-6 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-[#0077ff]/30 transition-all overflow-hidden"
    >
      {/* Accent bar — COPIA EXACTA de TimeManagement */}
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

      {/* Tips interactivos */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
        {/* Selector de tips */}
        <div className="flex border-b border-slate-200">
          {item.tips.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveTip(i)}
              className={`flex-1 py-2 text-xs font-bold transition-all ${
                activeTip === i
                  ? 'bg-white text-[#003399] border-b-2 border-[#003399]'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        {/* Tip activo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTip}
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
              <p className="text-slate-600 text-sm leading-relaxed">{item.tips[activeTip]}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-1.5 text-sm font-semibold text-[#0077ff] opacity-0 group-hover:opacity-100 transition-opacity mt-4">
        Ver tutorial completo <ChevronLeft size={16} className="rotate-180" />
      </div>
    </motion.div>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const DigitalTools: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">

      {/* ── BOTÓN VOLVER — COPIA EXACTA de TimeManagement ── */}
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
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-20 w-64 h-64 bg-[#0077ff]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold border border-indigo-100 mb-4 uppercase tracking-wider">
            <Monitor size={16} /> Tecnología e Innovación
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Herramientas Digitales y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003399] to-indigo-500">
              Google Workspace
            </span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Domina las plataformas que IPG pone a tu disposición. Desde el correo institucional hasta herramientas de colaboración avanzada — todo lo que necesitas para tu vida académica digital.
          </p>
        </div>
      </motion.div>

      {/* ── SECCIONES ── */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-20">

        {/* ════════════════════════════════════════
            SECCIÓN 1: PLATAFORMAS PRINCIPALES
            Cards interactivas con tips numerados
        ════════════════════════════════════════ */}
        <section>
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
            <PlayCircle className="text-[#0077ff] w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-800">Plataformas Principales IPG</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((item) => (
              <PlatformCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECCIÓN 2: HERRAMIENTAS DE PRODUCTIVIDAD
            Grid 2×3 con las mismas cards de tutoriales
        ════════════════════════════════════════ */}
        <section>
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
            <Target className="text-[#0077ff] w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-800">Suite de Productividad</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productivityTools.map((item, idx) => (
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
                  Explorar herramienta <ChevronLeft size={16} className="rotate-180" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECCIÓN 3: MATERIAL DESCARGABLE
            COPIA EXACTA de TimeManagement downloads
        ════════════════════════════════════════ */}
        <section>
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="text-teal-500 w-6 h-6" />
                <h2 className="text-2xl font-bold text-slate-800">Guías y Recursos</h2>
              </div>
              <p className="text-slate-500 text-sm">Manuales y checklists listos para descargar y consultar cuando los necesites.</p>
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
            COPIA EXACTA de balanceResources de TimeManagement
        ════════════════════════════════════════ */}
        <section className="pb-10">
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
            <Scale className="text-[#003399] w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-800">Aprende y Explora</h2>
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

export default DigitalTools;