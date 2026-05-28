import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  ChevronLeft, LayoutDashboard, Laptop, Calendar, 
  Library, FileSignature, Mail, Cloud, FileText, 
  FolderOpen, ArrowRight
} from 'lucide-react';

// 🔌 Importación de las 8 subpáginas independientes (Clean Architecture)
import PortalEstudiantil from './herramientas/PortalEstudiantil';
import AulaVirtual from './herramientas/AulaVirtual';
import CalendariosAcademicos from './herramientas/CalendariosAcademicos';
import CraiPlataforma from './herramientas/CraiPlataforma';
import RematriculaGuia from './herramientas/RematriculaGuia';
import CorreoInstitucional from './herramientas/CorreoInstitucional';
import GoogleDriveManual from './herramientas/GoogleDriveManual';
import MicrosoftWordManual from './herramientas/MicrosoftWordManual';

// Interfaces de tipado estricto
type ResourceType = 'pdf' | 'video';

interface Resource {
  name: string;
  type: ResourceType;
  size: string;
  driveId: string;
}

interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  lightColor: string;
  itemCount: number;
}

// 📂 Catálogo estructurado para renderizar las tarjetas del menú principal
const categories: Category[] = [
  { id: "correo", title: "Correo Institucional", icon: <Mail size={24} />, color: "from-blue-600 to-indigo-600", lightColor: "text-blue-700", itemCount: 1 },
  { id: "portal", title: "Portal Estudiantil", icon: <LayoutDashboard size={24} />, color: "from-blue-500 to-cyan-400", lightColor: "text-blue-600", itemCount: 3 },
  { id: "aula", title: "Aula Virtual", icon: <Laptop size={24} />, color: "from-indigo-500 to-purple-500", lightColor: "text-indigo-600", itemCount: 10 },
  { id: "calendarios", title: "Calendarios Académicos", icon: <Calendar size={24} />, color: "from-emerald-400 to-teal-500", lightColor: "text-teal-600", itemCount: 2 },
  { id: "crai", title: "CRAI", icon: <Library size={24} />, color: "from-amber-400 to-orange-500", lightColor: "text-orange-600", itemCount: 1 },
  { id: "rematricula", title: "Rematrícula", icon: <FileSignature size={24} />, color: "from-rose-400 to-pink-500", lightColor: "text-rose-600", itemCount: 1 },
  { id: "drive", title: "Google Drive", icon: <Cloud size={24} />, color: "from-[#00a86b] to-[#008f5a]", lightColor: "text-green-700", itemCount: 2 },
  { id: "word", title: "Microsoft Word", icon: <FileText size={24} />, color: "from-blue-400 to-blue-600", lightColor: "text-blue-600", itemCount: 1 }
];

const DigitalTools: React.FC = () => {
  // 🕹️ Estado maestro de enrutamiento interno
  const [activeSection, setActiveSection] = useState<string>('menu');

  // Variaciones de animación Premium para transiciones fluidas de pantallas
  const pageTransition: Variants = {
    hidden: { opacity: 0, x: 15, scale: 0.99 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, x: -15, scale: 0.99, transition: { duration: 0.3, ease: "easeIn" } }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const handleBack = () => setActiveSection('menu');

  return (
    <div className="w-full min-h-screen bg-slate-50/30 text-slate-800 antialiased selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        
        {/* ================= ENRUTADOR DINÁMICO DE SUBPÁGINAS ================= */}
        {activeSection === 'portal' && (
          <motion.div key="portal" variants={pageTransition} initial="hidden" animate="visible" exit="exit">
            <PortalEstudiantil onBack={handleBack} />
          </motion.div>
        )}

        {activeSection === 'aula' && (
          <motion.div key="aula" variants={pageTransition} initial="hidden" animate="visible" exit="exit">
            <AulaVirtual onBack={handleBack} />
          </motion.div>
        )}

        {activeSection === 'calendarios' && (
          <motion.div key="calendarios" variants={pageTransition} initial="hidden" animate="visible" exit="exit">
            <CalendariosAcademicos onBack={handleBack} />
          </motion.div>
        )}

        {activeSection === 'crai' && (
          <motion.div key="crai" variants={pageTransition} initial="hidden" animate="visible" exit="exit">
            <CraiPlataforma onBack={handleBack} />
          </motion.div>
        )}

        {activeSection === 'rematricula' && (
          <motion.div key="rematricula" variants={pageTransition} initial="hidden" animate="visible" exit="exit">
            <RematriculaGuia onBack={handleBack} />
          </motion.div>
        )}

        {activeSection === 'correo' && (
          <motion.div key="correo" variants={pageTransition} initial="hidden" animate="visible" exit="exit">
            <CorreoInstitucional onBack={handleBack} />
          </motion.div>
        )}

        {activeSection === 'drive' && (
          <motion.div key="drive" variants={pageTransition} initial="hidden" animate="visible" exit="exit">
            <GoogleDriveManual onBack={handleBack} />
          </motion.div>
        )}

        {activeSection === 'word' && (
          <motion.div key="word" variants={pageTransition} initial="hidden" animate="visible" exit="exit">
            <MicrosoftWordManual onBack={handleBack} />
          </motion.div>
        )}

        {/* ================= VISTA HOME PRINCIPAL (MENÚ) ================= */}
        {activeSection === 'menu' && (
          <motion.div 
            key="menu" 
            variants={pageTransition} 
            initial="hidden" 
            animate="visible" 
            exit="exit"
            className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12"
          >
            {/* Botón Volver al Ecosistema/Sitio Principal */}
            <motion.a 
              href="/"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 text-slate-500 hover:text-[#003399] transition-colors mb-8 group font-medium decoration-transparent cursor-pointer"
            >
              <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-[#0077ff]/10 transition-colors">
                <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
              </div>
              Volver al inicio
            </motion.a>

            {/* Cabecera Hero Premium con Efecto Glassmorphism */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 border border-white bg-white/70 backdrop-blur-xl shadow-xl shadow-slate-200/40 mb-12 md:mb-16"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#0077ff]/8 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-400/8 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0077ff] px-3 py-1.5 rounded-full text-sm font-bold border border-blue-100 mb-6 uppercase tracking-wider">
                  <FolderOpen size={16} /> Ecosistema Digital IPG
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-none md:leading-tight">
                  Tus Herramientas <br className="hidden sm:inline"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003399] via-[#0077ff] to-cyan-500">
                    Digitales e Instructivos
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Accede de manera directa y dinámica a todos los manuales, tutoriales multimedia y guías paso a paso de las plataformas institucionales. Diseñado de forma accesible para simplificar tu vida académica.
                </p>
              </div>
            </motion.div>

            {/* Cuadrícula de Navegación de Carpetas Premium */}
            <motion.div 
              variants={containerVariants} 
              initial="hidden" 
              animate="visible" 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {categories.map((category) => (
                <motion.div 
                  key={category.id}
                  variants={itemVariants}
                  onClick={() => setActiveSection(category.id)}
                  className="flex flex-col bg-white rounded-3xl border border-slate-200 shadow-md shadow-slate-200/20 overflow-hidden cursor-pointer hover:shadow-xl hover:border-blue-400/40 transition-all duration-300 group relative"
                  whileHover={{ y: -5 }}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-[0.03] rounded-bl-[80px] group-hover:scale-110 transition-transform duration-500 pointer-events-none`}></div>
                  
                  <div className="p-6 flex flex-col justify-between h-full min-h-[180px] relative z-10">
                    <div>
                      {/* Contenedor del Ícono con degradado de fondo */}
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${category.color} text-white shadow-sm mb-4`}>
                        {category.icon}
                      </div>
                      
                      <h2 className="text-xl font-bold text-slate-800 group-hover:text-[#0077ff] transition-colors leading-snug">
                        {category.title}
                      </h2>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-4">
                      <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                        {category.itemCount} {category.itemCount === 1 ? 'Recurso' : 'Recursos'}
                      </span>
                      
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DigitalTools;