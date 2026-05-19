import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, Info, MousePointer2, LogIn, 
  Search, LayoutGrid, Download, LifeBuoy, 
  ArrowRight, ChevronRight, Mail, RotateCcw
} from 'lucide-react';

const VirtualTour: React.FC = () => {
  const [step, setStep] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [isSimulating, setIsSimulating] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  // Funciones de control de la simulación
  const nextStep = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setStep(prev => prev + 1);
      setIsSimulating(false);
    }, 800);
  };

  const resetSimulation = () => {
    setStep(1);
    setSearchValue('');
    setDownloaded(false);
  };

  // Información dinámica de los pasos (Lado Izquierdo)
  const tourSteps = [
    {
      id: 1,
      icon: <LogIn className="w-6 h-6" />,
      color: "bg-[#0077ff]",
      title: "Paso 1: Inicio de Sesión",
      description: "El acceso a Aprende+ es exclusivo para la comunidad IPG. Ya no necesitas recordar contraseñas extrañas.",
      tip: "Haz clic en el botón de Google en el simulador para ingresar con tu correo @ipg.cl o @alumnos.ipg.cl"
    },
    {
      id: 2,
      icon: <Search className="w-6 h-6" />,
      color: "bg-indigo-500",
      title: "Paso 2: Buscador Inteligente",
      description: "Desde la pantalla principal, puedes buscar exactamente lo que necesitas sin dar vueltas.",
      tip: "Escribe algo en el buscador y presiona 'Enter' o el botón de buscar."
    },
    {
      id: 3,
      icon: <LayoutGrid className="w-6 h-6" />,
      color: "bg-[#003399]",
      title: "Paso 3: Explora las Secciones",
      description: "Hemos organizado los recursos en categorías clave: Técnicas de Estudio, Normas APA, Herramientas, etc.",
      tip: "Haz clic en una de las tarjetas del simulador para entrar a esa categoría."
    },
    {
      id: 4,
      icon: <Download className="w-6 h-6" />,
      color: "bg-cyan-500",
      title: "Paso 4: Descarga Material",
      description: "Encontrarás plantillas de Word, Excel, resúmenes y guías prácticas listas para ser utilizadas en tus asignaturas.",
      tip: "Haz clic en el botón de descarga del archivo mostrado a la derecha."
    },
    {
      id: 5,
      icon: <LifeBuoy className="w-6 h-6" />,
      color: "bg-green-500",
      title: "¡Todo Listo!",
      description: "Ya sabes cómo moverte por Aprende+. Si alguna vez te pierdes o la plataforma falla, nuestro equipo está para ayudarte.",
      tip: "Puedes contactar a consejero.estudiante@ipg.cl en cualquier momento."
    }
  ];

  const currentInfo = tourSteps.find(s => s.id === step) || tourSteps[0];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 min-h-[80vh] flex flex-col items-center">
      
      {/* HEADER DEL TUTORIAL */}
      <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-[#0077ff]/10 text-[#003399] px-4 py-1.5 rounded-full text-sm font-bold mb-4 border border-[#0077ff]/20"
        >
          <Info className="w-4 h-4" />
          TUTORIAL INTERACTIVO
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">
          Domina <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003399] to-[#0077ff]">Aprende+</span> en minutos
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto text-lg">
          Sigue esta guía paso a paso para descubrir cómo acceder, buscar y descargar todos tus recursos académicos.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* LADO IZQUIERDO: INSTRUCCIONES DINÁMICAS */}
        <div className="space-y-6 relative">
          
          {/* Indicador de progreso */}
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden relative">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: step >= i ? '100%' : '0%' }}
                  className={`absolute top-0 left-0 h-full ${step === i ? 'bg-[#0077ff]' : step > i ? 'bg-green-500' : ''}`}
                />
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
            >
              <div className={`w-14 h-14 ${currentInfo.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                {currentInfo.icon}
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">{currentInfo.title}</h3>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                {currentInfo.description}
              </p>
              
              <div className="flex items-start gap-3 p-5 bg-blue-50/80 rounded-2xl text-[#003399] text-sm border border-blue-100/50">
                <MousePointer2 className="w-5 h-5 shrink-0 mt-0.5 animate-pulse" />
                <span className="font-medium leading-relaxed">{currentInfo.tip}</span>
              </div>

              {step === 5 && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={resetSimulation}
                  className="mt-8 flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
                >
                  <RotateCcw className="w-5 h-5" />
                  Reiniciar Tutorial
                </motion.button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* LADO DERECHO: EL SIMULADOR INTERACTIVO */}
        <div className="relative flex justify-center">
          
          <motion.div 
            className="w-full max-w-[460px] aspect-[4/5] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,51,153,0.1)] border border-slate-200 overflow-hidden relative"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Barra superior del navegador simulado */}
            <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-4 flex-1 h-6 bg-white border border-slate-200 rounded-md flex items-center px-3">
                <span className="text-[10px] text-slate-400 font-mono">aprende.ipg.cl</span>
              </div>
            </div>

            <div className="p-8 h-[calc(100%-2.5rem)] flex flex-col justify-center items-center relative overflow-hidden bg-slate-50">
              
              <AnimatePresence mode="wait">
                
                {/* MOCKUP PASO 1: LOGIN */}
                {step === 1 && (
                  <motion.div key="mock1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-tr from-[#003399] to-[#0077ff] rounded-2xl flex items-center justify-center text-white font-black text-xl mb-6 shadow-md">
                      IPG<span className="text-cyan-300">+</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Ingresar a Aprende+</h4>
                    <p className="text-sm text-slate-500 mb-8 text-center">Autentícate utilizando tu correo institucional</p>
                    
                    <button 
                      onClick={nextStep}
                      disabled={isSimulating}
                      className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 hover:border-[#0077ff] hover:bg-blue-50 py-3.5 rounded-xl text-slate-700 font-semibold transition-all shadow-sm group"
                    >
                      {isSimulating ? <div className="w-5 h-5 border-2 border-[#0077ff] border-t-transparent rounded-full animate-spin"></div> : (
                        <>
                          <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                          Continuar con cuenta Google
                        </>
                      )}
                    </button>

                    <div className="mt-6 w-full bg-blue-50/50 border border-blue-100 p-4 rounded-xl flex items-start gap-2">
                      <Info className="w-4 h-4 text-[#0077ff] mt-0.5" />
                      <p className="text-xs text-slate-600">Acceso exclusivo para cuentas <span className="bg-white px-1 py-0.5 rounded text-[#003399] font-medium border border-blue-100">@ipg.cl</span> o <span className="bg-white px-1 py-0.5 rounded text-[#003399] font-medium border border-blue-100">@alumnos.ipg.cl</span></p>
                    </div>
                  </motion.div>
                )}

                {/* MOCKUP PASO 2: BUSCADOR */}
                {step === 2 && (
                  <motion.div key="mock2" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full flex flex-col items-center text-center">
                    <h4 className="text-2xl font-black text-slate-800 mb-2">Bienvenido a <span className="text-[#0077ff]">APREN</span><span className="text-[#003399]">DE+</span></h4>
                    <p className="text-xs text-slate-500 mb-8 px-4">Encuentra guías, normativas y herramientas digitales.</p>
                    
                    <form 
                      onSubmit={(e) => { e.preventDefault(); nextStep(); }}
                      className="w-full relative group"
                    >
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#0077ff] transition-colors" />
                      <input 
                        type="text" 
                        placeholder="Busca guías, plantillas..."
                        className="w-full pl-12 pr-20 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:border-[#0077ff] focus:ring-4 focus:ring-[#0077ff]/10 transition-all text-sm"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        autoFocus
                      />
                      <button 
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-xl text-xs font-bold hover:bg-[#0077ff] transition-colors"
                      >
                        Buscar
                      </button>
                    </form>
                  </motion.div>
                )}

                {/* MOCKUP PASO 3: SECCIONES */}
                {step === 3 && (
                  <motion.div key="mock3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-4 h-4 text-[#0077ff]" />
                      <h4 className="text-sm font-bold text-slate-800">Recursos Destacados</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3">
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        onClick={nextStep}
                        className="bg-[#003399] p-5 rounded-2xl text-white cursor-pointer shadow-md group relative overflow-hidden"
                      >
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#003399] transition-all">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <div className="w-10 h-10 bg-white/20 rounded-xl mb-3 flex items-center justify-center">
                          <LayoutGrid className="w-5 h-5" />
                        </div>
                        <h5 className="font-bold mb-1">Técnicas de Estudio</h5>
                        <p className="text-[10px] text-blue-200 w-3/4">Mapas conceptuales, lectura comprensiva y más.</p>
                      </motion.div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white border border-slate-200 p-4 rounded-2xl opacity-60 pointer-events-none">
                          <div className="w-8 h-8 bg-slate-100 rounded-lg mb-2"></div>
                          <div className="h-3 bg-slate-200 rounded w-full mb-2"></div>
                          <div className="h-2 bg-slate-100 rounded w-2/3"></div>
                        </div>
                        <div className="bg-[#0077ff] p-4 rounded-2xl opacity-60 pointer-events-none">
                          <div className="w-8 h-8 bg-white/20 rounded-lg mb-2"></div>
                          <div className="h-3 bg-white/40 rounded w-full mb-2"></div>
                          <div className="h-2 bg-white/20 rounded w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* MOCKUP PASO 4: DESCARGAS */}
                {step === 4 && (
                  <motion.div key="mock4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="w-full">
                    <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-4">
                      <Download className="w-4 h-4 text-[#0077ff]" />
                      Material Descargable
                    </h4>
                    
                    <div 
                      onClick={() => {
                        setDownloaded(true);
                        setTimeout(nextStep, 1000);
                      }}
                      className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between group ${downloaded ? 'bg-green-50 border-green-200' : 'bg-white border-blue-100 hover:border-[#0077ff] hover:shadow-md'}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs ${downloaded ? 'bg-green-100 text-green-600' : 'bg-blue-50 text-[#0077ff]'}`}>
                          DOCX
                        </div>
                        <div>
                          <h5 className={`text-sm font-bold ${downloaded ? 'text-green-800' : 'text-slate-700'}`}>Plantilla Mapa Mental</h5>
                          <p className="text-[10px] text-slate-400">1.2 MB</p>
                        </div>
                      </div>
                      
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${downloaded ? 'bg-green-500 text-white' : 'bg-[#0077ff] text-white group-hover:scale-110'}`}>
                        {downloaded ? <CheckCircle2 className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                      </div>
                    </div>

                    <div className="mt-3 p-4 rounded-xl border border-slate-200 bg-white opacity-50 flex items-center justify-between">
                       <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-400">PDF</div>
                        <div>
                          <h5 className="text-sm font-bold text-slate-600">Guía Método Cornell</h5>
                          <p className="text-[10px] text-slate-400">2.1 MB</p>
                        </div>
                      </div>
                      <Download className="w-4 h-4 text-slate-300" />
                    </div>
                  </motion.div>
                )}

                {/* MOCKUP PASO 5: SOPORTE */}
                {step === 5 && (
                  <motion.div key="mock5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full flex flex-col items-center justify-center text-center h-full">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-2">¡Completado!</h4>
                    <p className="text-sm text-slate-500 mb-8">Estás listo para potenciar tu estudio.</p>

                    <div className="w-full bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                      <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-left">Soporte Técnico IPG</h5>
                      
                      <a href="mailto:consejero.estudiante@ipg.cl" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer border border-transparent hover:border-slate-200 text-left">
                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-[#0077ff] group-hover:bg-[#0077ff] group-hover:text-white transition-colors">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-700 group-hover:text-[#0077ff] transition-colors">Correo Soporte</p>
                          <p className="text-xs text-slate-500">consejero.estudiante@ipg.cl</p>
                        </div>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Decoraciones del Mockup */}
            <div className="absolute -z-10 -bottom-20 -right-20 w-60 h-60 bg-[#0077ff]/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -top-20 -left-20 w-60 h-60 bg-[#003399]/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Componente helper interno (Si quieres usar la estrellita)
const Sparkles = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4M3 5h4"/>
  </svg>
)

export default VirtualTour;