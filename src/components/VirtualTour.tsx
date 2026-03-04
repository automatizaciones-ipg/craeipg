import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Lock, ChevronRight, ChevronLeft, 
  Sparkles, CheckCircle2, AlertCircle, Info,
  MousePointer2
} from 'lucide-react';

const VirtualTour: React.FC = () => {
  const [step, setStep] = useState(1);
  const [usuario, setUsuario] = useState('');
  const [pass, setPass] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showTooltip, setShowTooltip] = useState(true);

  const handleLoginSim = (e: React.FormEvent) => {
    e.preventDefault();
    if (usuario.length > 5 && pass.length > 3) {
      setStatus('success');
      setTimeout(() => setStep(2), 1500);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2000);
    }
  };

  // NUEVA FUNCIÓN: Reinicia absolutamente todo a su estado original
  const resetSimulation = () => {
    setStep(1);
    setUsuario('');
    setPass('');
    setStatus('idle');
    setShowTooltip(true);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 min-h-[80vh] flex flex-col items-center">
      
      {/* HEADER DEL TUTORIAL */}
      <div className="text-center mb-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-[#0077ff]/10 text-[#003399] px-4 py-1.5 rounded-full text-sm font-bold mb-4 border border-[#0077ff]/20"
        >
          <Sparkles className="w-4 h-4" />
          ENTRENAMIENTO INTERACTIVO
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">
          Aprende a navegar <br/>tu <span className="text-[#0077ff]">Aula Virtual</span>
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto">
          Sigue esta guía interactiva para dominar el acceso a tus clases y recursos. No te preocupes, esto es un simulador seguro.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* LADO IZQUIERDO: INSTRUCCIONES DINÁMICAS */}
        <div className="space-y-6">
          <AnimatePresence mode='wait'>
            {step === 1 ? (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100"
              >
                <div className="w-12 h-12 bg-[#003399] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#003399]/20">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Paso 1: Inicio de Sesión</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Para ingresar, debes utilizar tus credenciales institucionales. 
                  <br/><br/>
                  <strong className="text-[#003399]">💡 Tip del CRAE:</strong> Tu usuario suele ser tu RUT sin puntos ni guión, o el correo institucional asignado por IPG.
                </p>
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl text-blue-700 text-sm border border-blue-100">
                  <Info className="w-5 h-5 shrink-0" />
                  Interactúa con el formulario de la derecha para practicar.
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-green-50 p-8 rounded-[2rem] shadow-xl border border-green-100"
              >
                <div className="w-12 h-12 bg-green-500 text-white rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-4">¡Excelente ingreso!</h3>
                <p className="text-green-800 mb-6">
                  Has superado el primer obstáculo. Ahora que estás dentro, verás tu tablero principal con todas tus asignaturas.
                </p>
                <button 
                  onClick={resetSimulation} // <-- APLICAMOS LA NUEVA FUNCIÓN AQUÍ
                  className="flex items-center gap-2 text-green-700 font-bold hover:underline"
                >
                  <ChevronLeft className="w-4 h-4" /> Reiniciar simulación
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* LADO DERECHO: EL SIMULADOR (Mockup de la imagen) */}
        <div className="relative">
          {/* Tooltip de ayuda flotante */}
          <AnimatePresence>
            {showTooltip && step === 1 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 bg-slate-800 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-2xl flex items-center gap-2 whitespace-nowrap"
              >
                <MousePointer2 className="w-3 h-3 animate-bounce" />
                Escribe algo para probar el simulador
              </motion.div>
            )}
          </AnimatePresence>

          {/* MARCO DEL LOGIN (Basado en tu imagen) */}
          <motion.div 
            className="w-full max-w-[400px] mx-auto bg-[#4e5673] rounded-[2.5rem] shadow-2xl overflow-hidden border-[8px] border-slate-800 relative"
            whileHover={{ y: -5 }}
          >
            <div className="p-8 pt-12 pb-16 flex flex-col items-center text-center">
              
              {/* Header Logos */}
              <div className="mb-10 w-full flex flex-col items-center">
                 <img 
                  src="https://www.ipg.cl/wp-content/uploads/2021/04/Logo-IPG-Blanco.png" 
                  alt="IPG Logo" 
                  className="h-14 mb-2 object-contain filter brightness-200"
                />
                <p className="text-white/60 text-[10px] tracking-widest uppercase font-medium">Portal de Estudiantes</p>
              </div>

              {/* Formulario de simulación */}
              <form onSubmit={handleLoginSim} className="w-full space-y-8">
                <div className="relative group">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-white/70">
                    <User size={20} />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Usuario"
                    className="w-full bg-transparent border-b border-white/30 pt-2 pb-2 pl-8 text-white placeholder:text-white/50 outline-none focus:border-white transition-colors"
                    value={usuario}
                    onChange={(e) => {setUsuario(e.target.value); setShowTooltip(false)}}
                  />
                </div>

                <div className="relative group">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-white/70">
                    <span className="text-xl font-bold">*</span>
                  </div>
                  <input 
                    type="password" 
                    placeholder="Contraseña"
                    className="w-full bg-transparent border-b border-white/30 pt-2 pb-2 pl-8 text-white placeholder:text-white/50 outline-none focus:border-white transition-colors"
                    value={pass}
                    onChange={(e) => {setPass(e.target.value); setShowTooltip(false)}}
                  />
                </div>

                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className={`w-full py-3.5 rounded-sm font-bold transition-all duration-300 ${status === 'success' ? 'bg-green-500 text-white' : 'bg-white text-[#4e5673] hover:bg-slate-100'}`}
                >
                  {status === 'success' ? 'Ingresando...' : 'Iniciar sesión'}
                </motion.button>

                <p className="text-white/70 text-sm cursor-pointer hover:text-white transition-colors">
                  Olvidaste tu contraseña
                </p>
              </form>

              {/* Footer Mockup */}
              <div className="mt-16 flex items-center justify-center gap-4 opacity-60 grayscale group-hover:grayscale-0 transition-all">
                <div className="text-white text-xl font-black italic">U+</div>
                <div className="w-[1px] h-4 bg-white/30"></div>
                <div className="text-white text-xs font-bold tracking-tighter">bettersoft</div>
              </div>
            </div>

            {/* Efectos de éxito/error */}
            <AnimatePresence>
              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-red-500/20 backdrop-blur-sm flex items-center justify-center p-6 text-center"
                >
                  <div className="bg-white p-4 rounded-2xl shadow-xl">
                    <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <p className="text-slate-800 text-sm font-bold">Datos insuficientes para la simulación</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Decoración de fondo del mockup */}
          <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-[#0077ff]/20 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-[#003399]/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;