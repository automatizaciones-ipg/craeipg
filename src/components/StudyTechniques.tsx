import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  BrainCircuit, BookOpen, Clock, Download, 
  ImageIcon, FileText, Network, Sparkles, ChevronLeft 
} from 'lucide-react';

const StudyTechniques: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const strategies = [
    { title: "Mapas Conceptuales", icon: <Network size={24} />, desc: "Aprende a estructurar jerárquicamente la información para una comprensión profunda.", color: "from-blue-500 to-cyan-400" },
    { title: "Cuadros Sinópticos", icon: <FileText size={24} />, desc: "Organiza ideas principales y secundarias de forma visual y resumida.", color: "from-indigo-500 to-blue-500" },
    { title: "Lectura Comprensiva", icon: <BookOpen size={24} />, desc: "Técnicas de subrayado, sumillado y análisis crítico de textos académicos.", color: "from-violet-500 to-purple-400" },
    { title: "Repaso Espaciado", icon: <Clock size={24} />, desc: "Combate la curva del olvido repasando en intervalos de tiempo estratégicos.", color: "from-[#003399] to-[#0077ff]" },
    { title: "Mnemotecnia", icon: <BrainCircuit size={24} />, desc: "Crea asociaciones mentales fuertes para recordar listas, fórmulas y conceptos.", color: "from-sky-500 to-blue-400" },
  ];

  const downloads = [
    { name: "Plantilla Mapa Mental (Word)", size: "1.2 MB", format: "DOCX" },
    { name: "Planner de Estudio Semanal", size: "850 KB", format: "PDF" },
    { name: "Guía Práctica: Método Cornell", size: "2.1 MB", format: "PDF" },
    { name: "Fichas de Memorización (Flashcards)", size: "3.4 MB", format: "PPTX" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
      
      {/* Botón Volver */}
      <motion.a 
        href="/"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-2 text-slate-500 hover:text-[#003399] transition-colors mb-8 group font-medium"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-[#0077ff]/10 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver al inicio
      </motion.a>

      {/* CABECERA DE LA PÁGINA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 border border-white bg-white/60 backdrop-blur-xl shadow-xl shadow-slate-200/50 mb-16"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077ff]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-[#0077ff] px-3 py-1 rounded-full text-sm font-bold border border-blue-100 mb-4 uppercase tracking-wider">
            <BrainCircuit size={16} /> Área de Desarrollo Académico
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Técnicas y <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003399] to-[#0077ff]">Estrategias de Estudio</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Optimiza tu tiempo y mejora tu rendimiento académico con metodologías probadas. Explora nuestras guías, descarga material práctico y descubre cómo aprende tu cerebro.
          </p>
        </div>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-20">
        
        {/* SECCIÓN 1: MÉTODOS Y ESTRATEGIAS (Bento Grid) */}
        <section>
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
            <Sparkles className="text-[#0077ff] w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-800">Metodologías Destacadas</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategies.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 0.98 }}
                className="group relative bg-white border border-slate-200 rounded-3xl p-6 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-[#0077ff]/30 transition-all cursor-pointer overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 rounded-bl-full group-hover:scale-110 transition-transform duration-500`}></div>
                
                <div className={`w-12 h-12 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${item.color} text-white shadow-md`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#003399] transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 2: MATERIAL DESCARGABLE */}
        <section>
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Download className="text-[#0077ff] w-6 h-6" />
                <h2 className="text-2xl font-bold text-slate-800">Material Descargable</h2>
              </div>
              <p className="text-slate-500 text-sm">Plantillas listas para usar en tus asignaturas.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {downloads.map((file, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#0077ff]/40 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0077ff] font-bold text-xs border border-blue-100">
                    {file.format}
                  </div>
                  <div>
                    <h4 className="text-slate-700 font-semibold text-sm group-hover:text-[#003399] transition-colors">{file.name}</h4>
                    <span className="text-xs text-slate-400">{file.size}</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#0077ff] group-hover:text-white transition-colors">
                  <Download size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 3: INFOGRAFÍAS */}
        <section className="pb-10">
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
            <ImageIcon className="text-[#0077ff] w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-800">Infografías Rápidas</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "El Método Pomodoro", url: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop" },
              { title: "Cómo estructurar apuntes", url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop" },
              { title: "Curva del Olvido de Ebbinghaus", url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop" }
            ].map((img, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              >
                {/* Imagen de fondo (Usamos placeholders hermosos de Unsplash para la demo) */}
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white/20 backdrop-blur-md w-fit px-3 py-1 rounded-full text-white text-xs font-medium mb-3 border border-white/30">
                    Infografía
                  </div>
                  <h3 className="text-white font-bold text-lg">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </motion.div>
    </div>
  );
};

export default StudyTechniques;