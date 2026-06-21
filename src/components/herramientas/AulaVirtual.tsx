import React, { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  ChevronLeft, Laptop, PlayCircle, FileText, Download, Sparkles, 
  User, Lock, AlertCircle, MessageCircle, UploadCloud, CheckSquare, 
  Settings, BarChart, ExternalLink 
} from 'lucide-react';

export default function AulaVirtual({ onBack }: { onBack: () => void }) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const [moodlePassword, setMoodlePassword] = useState('••••••••');
  useEffect(() => {
    fetch('/api/platform-info')
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data?.moodle?.password) setMoodlePassword(data.moodle.password); })
      .catch(() => {});
  }, []);

  const pdfResources = [
    { name: "Cómo ingresar a la Plataforma Virtual IPG", size: "710 KB", driveId: "1gv5LyoTrfbnYoxNEQrM50xYr9ez4Fhp6" },
    { name: "Configuración de página personal (Perfil)", size: "788 KB", driveId: "1OGYnnscr9caU0mPqxUZ0idC3aS6pCqjb" },
    { name: "Cómo subir un encargo (Archivo PDF)", size: "900 KB", driveId: "1QmChARaZ-by6p_ulTtkeoL_Zr8biGPxm" },
    { name: "Cómo revisar el libro de calificaciones", size: "562 KB", driveId: "1hnRfWvIWD0YNSzxAK6oRtmp6Jbp_nMkV" },
    { name: "Cómo responder una POL (Cuestionario)", size: "639 KB", driveId: "1NaFxnIUX0EQMS-vUdgC3mGTaYxp86jvS" },
    { name: "Cómo responder una evaluación integradora", size: "681 KB", driveId: "1htHQV7kQgDUhainfnjojaCn6XHWyRZop" },
    { name: "Cómo responder una evaluación formativa", size: "645 KB", driveId: "1N-J0JKEN4cjLskk-uvTA9i0bHU3j_wj-" },
    { name: "Cómo participar en un foro sumativo", size: "1.0 MB", driveId: "1k83KG77o935YFoWv8kylCNhvA8f74MiA" },
    { name: "Cómo participar en el foro de interacción", size: "683 KB", driveId: "110szDxWaQwm8OSDJENdmDs-VAGi8NT9L" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
      
      {/* ⬅️ Botón Volver */}
      <motion.button 
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors mb-8 group font-medium bg-transparent border-none cursor-pointer"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-indigo-100 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver a Herramientas
      </motion.button>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-12">
        
        {/* 🚀 CABECERA DE LA SECCIÓN (HERO) */}
        <motion.div variants={itemVariants} className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 shadow-2xl shadow-indigo-900/20 text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/20 mb-6 uppercase tracking-wider text-indigo-100">
              <Laptop size={16} /> Entorno de Aprendizaje Moodle
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
              Domina tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">Aula Virtual</span>
            </h1>
            <p className="text-lg text-indigo-100/90 leading-relaxed max-w-2xl mb-8">
              Tu salón de clases digital 24/7. Ingresa a tus asignaturas, entrega tus encargos a tiempo, rinde tus cuestionarios (POL) y participa activamente en los foros sumativos junto a tus docentes.
            </p>

            <a 
              href="https://virtual.ipg.cl/login/index.php" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-indigo-500/30"
            >
              Ir a la Plataforma Virtual <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>

        {/* 🔑 CREDENCIALES MOODLE */}
        <motion.div variants={itemVariants} className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
          
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Acceso a Moodle</h3>
            <p className="text-slate-500 text-sm">Credenciales exclusivas para la plataforma virtual de clases.</p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-slate-400 font-bold uppercase text-xs tracking-wider">
                <User size={14} /> Usuario (RUT)
              </div>
              <p className="text-slate-800 font-medium font-mono text-lg tracking-wide">
                12345678<span className="text-indigo-600 font-bold">-9</span>
              </p>
              <p className="text-xs text-slate-500">Sin puntos y <strong>con guion</strong>.</p>
            </div>
            
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-slate-400 font-bold uppercase text-xs tracking-wider">
                <Lock size={14} /> Contraseña
              </div>
              <p className="text-slate-800 font-medium font-mono text-lg tracking-wide">
                {moodlePassword}
              </p>
              <p className="text-xs text-slate-500">Clave estándar de acceso a plataforma.</p>
            </div>
          </div>
        </motion.div>

        {/* 📺 VIDEO DE INDUCCIÓN (Google Drive Embed) */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100">
              <PlayCircle size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Inducción al Aula Virtual</h2>
              <p className="text-slate-500 text-sm">Revisa este video oficial para aprender a navegar por tus cursos.</p>
            </div>
          </div>

          <div className="w-full aspect-video rounded-3xl overflow-hidden bg-slate-900 shadow-xl shadow-slate-200/50 border border-slate-200 relative group">
            <iframe 
              className="w-full h-full"
              src="https://drive.google.com/file/d/1zlRGii7iHBJJAaI4qKWsxMX8NazkUsVg/preview" 
              title="Inducción Aula Virtual"
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* 💡 TIPS RÁPIDOS BASADOS EN LOS INSTRUCTIVOS */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3 hover:border-indigo-300 transition-colors">
            <UploadCloud className="text-indigo-500" size={24} />
            <h4 className="font-bold text-slate-800 text-sm">Subir Encargos</h4>
            <p className="text-xs text-slate-500">Todos los trabajos deben subirse en <strong>formato PDF</strong>, salvo que el docente exija planillas Excel u otro formato.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3 hover:border-purple-300 transition-colors">
            <CheckSquare className="text-purple-500" size={24} />
            <h4 className="font-bold text-slate-800 text-sm">Cuestionarios (POL)</h4>
            <p className="text-xs text-slate-500">Las pruebas formativas duran <strong>30 minutos</strong>. Al finalizar siempre debes presionar <em>"Enviar todo y terminar"</em>.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3 hover:border-pink-300 transition-colors">
            <MessageCircle className="text-pink-500" size={24} />
            <h4 className="font-bold text-slate-800 text-sm">Foros Sumativos</h4>
            <p className="text-xs text-slate-500">Una vez publicado tu aporte, solo tienes <strong>30 minutos</strong> para editar el mensaje. Revisa tu ortografía.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3 hover:border-blue-300 transition-colors">
            <BarChart className="text-blue-500" size={24} />
            <h4 className="font-bold text-slate-800 text-sm">Calificaciones</h4>
            <p className="text-xs text-slate-500">Todas las evaluaciones se miden en una escala de <strong>100 puntos</strong>. Revisa la tabla de conversión en las instrucciones.</p>
          </div>
        </motion.div>

        {/* 🗂️ CONTENEDOR DE DESCARGAS (9 PDFs) */}
        <motion.div variants={itemVariants} className="mt-4">
          <div className="flex flex-col bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 overflow-hidden group">
            
            <div className="p-6 md:p-8 border-b border-slate-100 relative overflow-hidden bg-gradient-to-r from-slate-50 to-white">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-5 rounded-bl-[100px] pointer-events-none"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-md">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Manuales y Guías Paso a Paso</h2>
                  <p className="text-slate-500 text-sm font-medium mt-1">
                    Colección de {pdfResources.length} instructivos oficiales para dominar la plataforma.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {pdfResources.map((item, idx) => (
                  <a 
                    href={`/api/download?id=${item.driveId}`}
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400/50 hover:shadow-md transition-all group/file cursor-pointer decoration-transparent"
                  >
                    <div className="flex items-center gap-4 overflow-hidden">
                      <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-50 text-indigo-600 border border-indigo-100">
                        <FileText size={22} />
                      </div>
                      <div className="truncate">
                        <h4 className="text-slate-700 font-bold text-sm truncate group-hover/file:text-indigo-600 transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-xs text-slate-400 font-medium">{item.size} • PDF</span>
                      </div>
                    </div>
                    <div className="shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/file:bg-indigo-600 group-hover/file:text-white transition-colors ml-2 shadow-sm">
                      <Download size={18} />
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}