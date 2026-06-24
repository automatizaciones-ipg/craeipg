import React from 'react';
import { motion } from 'framer-motion';
import {
  BrainCircuit, Clock, BookOpenCheck, MonitorSmartphone,
  HeartHandshake, ArrowRight, Sparkles
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
  badge?: string;
}

const categories: CategoryCard[] = [
  {
    title: "Técnicas y Estrategias de Estudio",
    description: "Cornell, Pomodoro, Active Recall y métodos científicamente validados para mejorar tu rendimiento académico.",
    icon: <BrainCircuit size={32} className="text-white" />,
    colSpan: "md:col-span-2 lg:col-span-2",
    gradient: "from-[#003399] via-[#0052cc] to-[#0077ff]",
    dark: true,
    delay: 0.05,
    href: "/tecnicas-estudio",
  },
  {
    title: "Gestión del Tiempo",
    description: "Planners semanales, claves de productividad y estrategias para equilibrar estudio, trabajo y vida personal.",
    icon: <Clock size={28} className="text-teal-600" />,
    colSpan: "md:col-span-1 lg:col-span-1",
    gradient: "from-teal-50 via-cyan-50 to-white",
    dark: false,
    delay: 0.1,
    href: "/gestion-tiempo",
  },
  {
    title: "Normas y Estándares APA",
    description: "Manual APA 7ma edición, guías de citación, formatos de referencias y video tutorial oficial IPG.",
    icon: <BookOpenCheck size={28} className="text-[#003399]" />,
    colSpan: "md:col-span-1 lg:col-span-1",
    gradient: "from-white via-blue-50/40 to-slate-50",
    dark: false,
    delay: 0.15,
    href: "/normas-apa",
  },
  {
    title: "Herramientas Digitales",
    description: "Aula virtual, Google Drive, Microsoft Word, correo institucional, calendarios y portal estudiantil.",
    icon: <MonitorSmartphone size={28} className="text-[#0077ff]" />,
    colSpan: "md:col-span-1 lg:col-span-1",
    gradient: "from-sky-50 via-blue-50/30 to-white",
    dark: false,
    delay: 0.2,
    href: "/herramientas-digitales",
  },
  {
    title: "Bienestar y Apoyo Estudiantil",
    description: "Programa ¿No Solo A?, recursos de autocuidado, trípticos de bienestar y podcast institucional.",
    icon: <HeartHandshake size={32} className="text-white" />,
    colSpan: "md:col-span-2 lg:col-span-1",
    gradient: "from-rose-500 via-pink-500 to-rose-400",
    dark: true,
    delay: 0.25,
    href: "/bienestar-apoyo",
  },
];

const ResourceGrid: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-12 px-4 md:px-8 relative z-10">

      <div className="flex items-center gap-2 mb-8">
        <Sparkles className="text-[#0077ff] w-5 h-5" />
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Recursos de APRENDE+</h2>
        <span className="ml-auto text-xs text-slate-400 font-medium hidden sm:block">{categories.length} secciones · {TOTAL_RESOURCES} recursos</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {categories.map((cat, index) => (
          <motion.a
            href={cat.href}
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: cat.delay, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -5, transition: { type: "spring", stiffness: 400, damping: 25 } }}
            whileTap={{ scale: 0.98 }}
            className={`group relative overflow-hidden rounded-3xl p-7 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border ${cat.dark ? 'border-white/10 hover:border-white/20' : 'border-slate-200/80 hover:border-blue-300/40'} ${cat.colSpan} bg-gradient-to-br ${cat.gradient} block`}
          >
            {/* Hover overlay */}
            <div className={`absolute inset-0 ${cat.dark ? 'bg-white/0 group-hover:bg-white/8' : 'bg-[#0077ff]/0 group-hover:bg-[#0077ff]/3'} transition-colors duration-300 z-0`} />

            {/* Decorative circle */}
            <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full ${cat.dark ? 'bg-white/8' : 'bg-[#0077ff]/5'} group-hover:scale-110 transition-transform duration-500`} />

            <div className="relative z-10 flex flex-col h-full gap-5">
              <div className="flex items-start justify-between">
                <div className={`p-3.5 rounded-2xl shadow-sm ${cat.dark ? 'bg-white/15 backdrop-blur-sm' : 'bg-white border border-slate-100/80'}`}>
                  {cat.icon}
                </div>
                <div className="flex items-center gap-2">
                  {cat.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                      {cat.badge}
                    </span>
                  )}
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${cat.dark ? 'bg-white/15 text-white group-hover:bg-white/25' : 'bg-slate-100 text-slate-400 group-hover:bg-[#003399] group-hover:text-white'}`}>
                    <ArrowRight size={18} className="transform group-hover:-rotate-45 transition-transform duration-200" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className={`text-xl font-bold mb-2 leading-snug ${cat.dark ? 'text-white' : 'text-slate-800'}`}>
                  {cat.title}
                </h3>
                <p className={`text-sm leading-relaxed ${cat.dark ? 'text-white/70' : 'text-slate-500'}`}>
                  {cat.description}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ResourceGrid;
