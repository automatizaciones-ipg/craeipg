import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  BrainCircuit, Clock, BookOpenCheck, MonitorSmartphone,
  HeartHandshake, ArrowRight
} from 'lucide-react';
import { TOTAL_RESOURCES } from '../data/resources';

interface CategoryCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  colSpan: string;
  gradient: string;
  dark: boolean;
  delay: number;
  href: string;
  accentColor: string;
}

const categories: CategoryCard[] = [
  {
    title: "Técnicas y Estrategias de Estudio",
    description: "Cornell, Pomodoro, Active Recall y métodos científicamente validados para mejorar tu rendimiento académico.",
    icon: <BrainCircuit size={28} className="text-white" />,
    colSpan: "md:col-span-2 lg:col-span-2",
    gradient: "linear-gradient(145deg, #001155 0%, #003399 50%, #0055cc 80%)",
    dark: true,
    delay: 0.05,
    href: "/tecnicas-estudio",
    accentColor: "#003399",
  },
  {
    title: "Gestión del Tiempo",
    description: "Planners semanales, claves de productividad y estrategias para equilibrar estudio, trabajo y vida personal.",
    icon: <Clock size={26} className="text-emerald-600" />,
    colSpan: "md:col-span-1 lg:col-span-1",
    gradient: "linear-gradient(145deg, #f0fdf4 0%, #dcfce7 50%, #ecfdf5 100%)",
    dark: false,
    delay: 0.10,
    href: "/gestion-tiempo",
    accentColor: "#10B981",
  },
  {
    title: "Normas y Estándares APA",
    description: "Manual APA 7ma edición, guías de citación, formatos de referencias y video tutorial oficial IPG.",
    icon: <BookOpenCheck size={26} className="text-blue-600" />,
    colSpan: "md:col-span-1 lg:col-span-1",
    gradient: "linear-gradient(145deg, #eff6ff 0%, #dbeafe 50%, #f0f9ff 100%)",
    dark: false,
    delay: 0.15,
    href: "/normas-apa",
    accentColor: "#3B82F6",
  },
  {
    title: "Herramientas Digitales",
    description: "Aula virtual, Google Drive, Microsoft Word, correo institucional, calendarios y portal estudiantil.",
    icon: <MonitorSmartphone size={26} className="text-sky-600" />,
    colSpan: "md:col-span-1 lg:col-span-1",
    gradient: "linear-gradient(145deg, #f0f9ff 0%, #e0f2fe 50%, #f0fdf4 100%)",
    dark: false,
    delay: 0.20,
    href: "/herramientas-digitales",
    accentColor: "#0EA5E9",
  },
  {
    title: "Bienestar y Apoyo Estudiantil",
    description: "Programa ¿No Solo A?, recursos de autocuidado, trípticos de bienestar y podcast institucional.",
    icon: <HeartHandshake size={28} className="text-white" />,
    colSpan: "md:col-span-2 lg:col-span-1",
    gradient: "linear-gradient(145deg, #4c0519 0%, #9f1239 45%, #f43f5e 100%)",
    dark: true,
    delay: 0.25,
    href: "/bienestar-apoyo",
    accentColor: "#F43F5E",
  },
];

/* ─── Tarjeta 3D con mouse tracking ─── */
const TiltCard: React.FC<{ cat: CategoryCard }> = ({ cat }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [over, setOver]  = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = (e.clientX - rect.left)  / rect.width  - 0.5;
    const dy = (e.clientY - rect.top)   / rect.height - 0.5;
    setTilt({ x: dy * -10, y: dx * 10 });
  };

  const cardStyle: React.CSSProperties = {
    transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${over ? 1.035 : 1})`,
    transition: over ? 'transform 0.08s ease, box-shadow 0.3s ease' : 'transform 0.6s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s ease',
    background: cat.gradient,
    boxShadow: over
      ? `0 28px 70px ${cat.accentColor}28, 0 8px 20px rgba(0,0,0,0.1)`
      : `0 4px 20px rgba(0,0,0,0.05)`,
  };

  return (
    <motion.a
      ref={ref}
      href={cat.href}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: cat.delay, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={() => setOver(true)}
      onMouseMove={onMove}
      onMouseLeave={() => { setOver(false); setTilt({ x: 0, y: 0 }); }}
      style={cardStyle}
      className={`group relative overflow-hidden rounded-3xl p-7 cursor-pointer border ${
        cat.dark ? 'border-white/10' : 'border-slate-200/60'
      } ${cat.colSpan} block`}
    >
      {/* Shimmer de luz interior al hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at ${over ? '50% 30%' : '50% 50%'}, ${cat.accentColor}18 0%, transparent 60%)`,
        }}
      ></div>

      {/* Círculo decorativo */}
      <div
        className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full group-hover:scale-125 transition-transform duration-700"
        style={{ background: cat.dark ? 'rgba(255,255,255,0.06)' : `${cat.accentColor}10` }}
      ></div>

      <div className="relative z-10 flex flex-col h-full gap-5">
        <div className="flex items-start justify-between">
          <div className={`p-3.5 rounded-2xl ${cat.dark ? 'bg-white/15' : 'bg-white border border-slate-100 shadow-sm'}`}>
            {cat.icon}
          </div>
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
              cat.dark
                ? 'bg-white/15 text-white group-hover:bg-white/30'
                : 'bg-white text-slate-400 border border-slate-200 group-hover:text-white group-hover:border-transparent'
            }`}
            style={!cat.dark && over ? { background: cat.accentColor } : {}}
          >
            <ArrowRight size={17} className="transform group-hover:-rotate-45 transition-transform duration-300"/>
          </div>
        </div>

        <div>
          <h3 className={`text-xl font-bold mb-2 leading-snug ${cat.dark ? 'text-white' : 'text-slate-900'}`}>
            {cat.title}
          </h3>
          <p className={`text-sm leading-relaxed ${cat.dark ? 'text-white/65' : 'text-slate-500'}`}>
            {cat.description}
          </p>
        </div>
      </div>
    </motion.a>
  );
};

const ResourceGrid: React.FC = () => (
  <div className="w-full max-w-7xl mx-auto mt-6 px-4 md:px-8 lg:px-12 pb-24 relative z-10">

    {/* Título de sección — sin íconos, sin burbujas */}
    <div className="mb-10">
      <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
        Recursos de <span className="text-gradient-brand">APRENDE+</span>
      </h2>
      <p className="text-slate-400 text-sm font-medium mt-2">
        {categories.length} secciones · {TOTAL_RESOURCES} recursos disponibles
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
      {categories.map((cat, i) => (
        <TiltCard key={i} cat={cat} />
      ))}
    </div>
  </div>
);

export default ResourceGrid;
