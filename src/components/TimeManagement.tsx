import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  Clock, CalendarDays, Download, ChevronLeft, 
  PlayCircle, Scale, BatteryCharging, Target, 
  CheckCircle2, Coffee 
} from 'lucide-react';

const TimeManagement: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  // 1. Tutoriales interactivos
  const tutorials = [
    { title: "Planificación Mensual (Macro)", duration: "05:20", icon: <CalendarDays size={24} />, desc: "Aprende a mapear tu semestre completo, identificando hitos, certámenes y entregas clave.", color: "from-blue-600 to-cyan-500" },
    { title: "Planificación Semanal (Micro)", duration: "08:15", icon: <Target size={24} />, desc: "Técnicas de Time Blocking para asignar horas específicas a tareas concretas cada semana.", color: "from-indigo-500 to-purple-500" },
    { title: "Gestión de la Procrastinación", duration: "06:40", icon: <BatteryCharging size={24} />, desc: "Estrategias prácticas para vencer la resistencia inicial y empezar a estudiar.", color: "from-teal-500 to-emerald-400" },
  ];

  // 2. Descargas
  const downloads = [
    { name: "Planner Semanal IPG (Imprimible)", size: "1.5 MB", format: "PDF" },
    { name: "Organizador Mensual de Certámenes", size: "850 KB", format: "PDF" },
    { name: "Tracker de Hábitos y Estudio", size: "2.1 MB", format: "EXCEL" },
    { name: "Calculadora de Tiempo Disponible", size: "540 KB", format: "EXCEL" },
  ];

  // 3. Recursos de Equilibrio
  const balanceResources = [
    { title: "Estudio y Trabajo: Cómo no morir en el intento", tag: "Guía", url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" },
    { title: "La importancia del descanso activo", tag: "Artículo", url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop" },
    { title: "Técnicas de desconexión digital", tag: "Infografía", url: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
      
      {/* Botón Volver */}
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

      {/* CABECERA (HERO INTERNO) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 border border-white bg-white/60 backdrop-blur-xl shadow-xl shadow-slate-200/50 mb-16"
      >
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-20 w-64 h-64 bg-[#0077ff]/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-600 px-3 py-1 rounded-full text-sm font-bold border border-teal-100 mb-4 uppercase tracking-wider">
            <Clock size={16} /> Productividad y Bienestar
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Gestión del Tiempo y <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003399] to-teal-500">Autogestión</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            El éxito académico no se trata de estudiar todo el día, sino de estudiar inteligentemente. Encuentra las herramientas para planificar tu semana y equilibrar tu vida personal, laboral y estudiantil.
          </p>
        </div>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-20">
        
        {/* SECCIÓN 1: TUTORIALES DE PLANIFICACIÓN */}
        <section>
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
            <PlayCircle className="text-[#0077ff] w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-800">Tutoriales de Organización</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tutorials.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 0.98 }}
                className="group relative bg-white border border-slate-200 rounded-3xl p-6 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-[#0077ff]/30 transition-all cursor-pointer overflow-hidden"
              >
                {/* Overlay de color suave al hover */}
                <div className={`absolute top-0 right-0 w-full h-2 bg-gradient-to-r ${item.color} opacity-80`}></div>
                
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${item.color} text-white shadow-md`}>
                    {item.icon}
                  </div>
                  <div className="bg-slate-100 text-slate-500 text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                    <PlayCircle size={12} /> {item.duration}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#003399] transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                
                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#0077ff] opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver tutorial <ChevronLeft size={16} className="rotate-180" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 2: PLANTILLAS DESCARGABLES */}
        <section>
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="text-teal-500 w-6 h-6" />
                <h2 className="text-2xl font-bold text-slate-800">Organizadores y Plantillas</h2>
              </div>
              <p className="text-slate-500 text-sm">Formatos listos para imprimir o usar en digital.</p>
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
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs border ${file.format === 'PDF' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-emerald-50 text-emerald-600 border-emerald-100'}`}>
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

        {/* SECCIÓN 3: EQUILIBRIO Y SALUD MENTAL */}
        <section className="pb-10">
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
            <Scale className="text-[#003399] w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-800">Equilibrio Personal y Académico</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {balanceResources.map((res, idx) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium border border-white/30 flex items-center gap-1.5">
                    {res.tag === "Artículo" ? <Coffee size={12}/> : <Scale size={12}/>}
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

export default TimeManagement;