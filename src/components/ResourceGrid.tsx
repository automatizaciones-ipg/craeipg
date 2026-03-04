import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Clock, BookOpenCheck, MonitorSmartphone, Briefcase, HeartHandshake, ArrowRight, Sparkles } from 'lucide-react';

interface CategoryCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  colSpan: string;
  gradient: string;
  delay: number;
  href: string; 
}

// Información extraída directamente del Plan de Implementación del CRAE
const categories: CategoryCard[] = [
  {
    title: "Técnicas y Estrategias de Estudio",
    description: "Mapas conceptuales, lectura comprensiva y métodos efectivos de memorización.",
    icon: <BrainCircuit size={32} className="text-white" />,
    colSpan: "md:col-span-2 lg:col-span-2",
    gradient: "from-[#003399] to-[#0077ff]",
    delay: 0.05,
    href: "/tecnicas-estudio" // <-- Listo
  },
  {
    title: "Gestión del Tiempo",
    description: "Plantillas de horarios y recursos para equilibrar estudio, trabajo y vida personal.",
    icon: <Clock size={28} className="text-[#0077ff]" />,
    colSpan: "md:col-span-1 lg:col-span-1",
    gradient: "from-blue-50 to-white",
    delay: 0.1,
    href: "/gestion-tiempo" // <-- Ajustado quirúrgicamente (removí /crae/)
  },
  {
    title: "Normas y Estándares (APA)",
    description: "Guías de uso de normas APA, tutoriales para citar y gestores bibliográficos.",
    icon: <BookOpenCheck size={28} className="text-[#003399]" />,
    colSpan: "md:col-span-1 lg:col-span-1",
    gradient: "from-white to-slate-50",
    delay: 0.15,
    href: "/normas-apa" // Te sugiero ajustarlos todos de una vez
  },
  {
    title: "Herramientas Digitales",
    description: "Tutoriales sobre plataforma institucional, Google Workspace y herramientas colaborativas.",
    icon: <MonitorSmartphone size={28} className="text-[#0077ff]" />,
    colSpan: "md:col-span-2 lg:col-span-1",
    gradient: "from-blue-50 to-white",
    delay: 0.2,
    href: "/herramientas-digitales"
  },
  {
    title: "Práctica Laboral",
    description: "Manuales, guías y orientaciones para informes de práctica y proyectos de título.",
    icon: <Briefcase size={28} className="text-[#003399]" />,
    colSpan: "md:col-span-1 lg:col-span-1",
    gradient: "from-white to-slate-50",
    delay: 0.25,
    href: "/practica-laboral"
  },
  {
    title: "Bienestar y Apoyo",
    description: "Recursos de manejo del estrés, autocuidado y canales de apoyo socioemocional de IPG.",
    icon: <HeartHandshake size={32} className="text-white" />,
    colSpan: "md:col-span-3 lg:col-span-1",
    gradient: "from-[#0077ff] to-[#00aaff]",
    delay: 0.3,
    href: "/bienestar-apoyo"
  }
];

const ResourceGrid: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-12 relative z-10">
      
      <div className="flex items-center gap-2 mb-8 px-2">
        <Sparkles className="text-[#0077ff] w-5 h-5" />
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Recursos del CRAE</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <motion.a 
            href={cat.href}
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: cat.delay, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -6, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 25 } }}
            whileTap={{ scale: 0.98 }}
            className={`group relative overflow-hidden rounded-3xl p-8 cursor-pointer shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-[#0077ff]/15 transition-shadow duration-300 border border-white/60 ${cat.colSpan} bg-gradient-to-br ${cat.gradient} block`}
          >
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-200 z-0"></div>
            
            <div className="relative z-10 flex flex-col h-full justify-between gap-6">
              
              <div className="flex items-start justify-between">
                <div className={`p-4 rounded-2xl shadow-sm ${(index === 0 || index === 5) ? 'bg-white/20 backdrop-blur-md' : 'bg-white border border-slate-100'}`}>
                  {cat.icon}
                </div>
                <motion.div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${(index === 0 || index === 5) ? 'bg-white/20 text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-[#0077ff]/10 group-hover:text-[#0077ff]'} transition-colors duration-200`}
                >
                  <ArrowRight size={20} className="transform group-hover:-rotate-45 transition-transform duration-200 ease-out" />
                </motion.div>
              </div>

              <div>
                <h3 className={`text-2xl font-bold mb-2 ${(index === 0 || index === 5) ? 'text-white' : 'text-slate-800'}`}>
                  {cat.title}
                </h3>
                <p className={`text-sm leading-relaxed ${(index === 0 || index === 5) ? 'text-blue-100' : 'text-slate-500'}`}>
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