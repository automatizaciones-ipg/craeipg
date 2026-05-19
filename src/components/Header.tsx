import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Menu, X, ChevronRight, LogOut, Loader2 } from 'lucide-react';
// Importamos la función de cierre de sesión segura del cliente de auth-astro
import { signOut } from 'auth-astro/client';

// Definimos los enlaces de navegación del CRAE (100% alineados con el Grid)
const navLinks = [
  { name: 'Técnicas de Estudio', href: '/tecnicas-estudio' },
  { name: 'Gestión del Tiempo', href: '/gestion-tiempo' },
  { name: 'Normas APA', href: '/normas-apa' },
  { name: 'Herramientas Digitales', href: '/herramientas-digitales' },
  { name: 'Bienestar y Apoyo', href: '/bienestar-apoyo' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);

  useEffect(() => {
    // Patrón de optimización para no saturar la memoria
    const handleScroll = (): void => {
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
      });
    };
    
    // El { passive: true } es vital para mejorar el rendimiento del scroll en móviles
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función asíncrona para manejar el cierre de sesión de forma segura
  const handleSignOut = async () => {
    setIsLoggingOut(true);
    try {
      // 1. Destruimos la sesión de forma segura y estricta (sin pasar parámetros para evitar el error de TypeScript)
      await signOut();
      
      // 2. Forzamos la redirección nativa al inicio
      window.location.href = '/';
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      setIsLoggingOut(false); // Restauramos el botón si falla
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 md:px-8">
        
        {/* BARRA DE NAVEGACIÓN PRINCIPAL */}
        <nav className={`relative z-50 glass-header-light rounded-2xl transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'shadow-lg bg-white/90 backdrop-blur-xl' : 'bg-white/60 backdrop-blur-md'}`}>
          <div className="flex items-center justify-between h-16 px-4 md:px-6">
            
            {/* 1. LOGO & BRANDING */}
            <motion.a 
              href="/"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 md:gap-3 cursor-pointer group shrink-0"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#003399] to-[#0077ff] rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="h-12 w-12 bg-gradient-to-tr from-[#003399] to-[#0077ff] rounded-xl flex items-center justify-center font-extrabold text-white shadow-md text-base">
                 IPG<span className="text-cyan-300 font-black ml-[1px]">+</span>
               </div>
              </div>
              <div className="hidden md:block h-6 w-[2px] bg-slate-200 mx-1"></div>
              <span className="text-xl md:text-2xl font-black tracking-tight text-slate-800">
                APRENDE<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003399] to-[#0077ff]">+</span>
              </span>
            </motion.a>

            {/* 2. ENLACES CENTRALES (Solo Desktop) */}
            <div className="hidden xl:flex items-center justify-center flex-1 mx-4 gap-4 xl:gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group text-xs xl:text-sm font-semibold text-slate-600 hover:text-[#003399] transition-colors py-2 whitespace-nowrap"
                >
                  {link.name}
                  {/* Animación de subrayado premium */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0077ff] transition-all duration-300 group-hover:w-full rounded-full"></span>
                </motion.a>
              ))}
            </div>

            {/* 3. ACCIONES Y MENÚ HAMBURGUESA (Derecha) */}
            <div className="flex items-center gap-3 shrink-0">
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center gap-2 p-2 text-slate-500 hover:text-[#003399] transition-colors"
                title="Centro de Ayuda"
              >
                <HelpCircle size={20} strokeWidth={2.5} />
              </motion.button>

              <div className="h-6 w-[2px] bg-slate-200 hidden sm:block"></div>

              {/* Botón Cerrar Sesión (Desktop y Tablets) */}
              <motion.button 
                onClick={handleSignOut}
                disabled={isLoggingOut}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className={`hidden sm:flex relative group overflow-hidden items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 disabled:opacity-75 disabled:cursor-wait
                  ${isLoggingOut 
                    ? 'bg-slate-100 text-slate-500 shadow-inner' 
                    : 'bg-slate-800 text-white shadow-[0_4px_14px_0_rgba(15,23,42,0.39)] hover:shadow-[0_6px_20px_rgba(225,29,72,0.25)] hover:bg-rose-600'
                  }`}
              >
                {!isLoggingOut && (
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                )}
                <span>{isLoggingOut ? 'Saliendo...' : 'Cerrar Sesión'}</span>
                
                {/* Animación de icono al salir */}
                <AnimatePresence mode="wait">
                  {isLoggingOut ? (
                    <motion.div
                      key="loader"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <Loader2 size={14} className="sm:w-4 sm:h-4 animate-spin" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="icon"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="group-hover:translate-x-0.5 transition-transform"
                    >
                      <LogOut size={14} className="sm:w-4 sm:h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Botón Menú Hamburguesa (Mobile, Tablet & pantallas < xl) */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 text-slate-700 bg-slate-100/80 hover:bg-[#0077ff]/10 hover:text-[#0077ff] rounded-xl transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>

            </div>

          </div>
        </nav>

        {/* 4. MENÚ MÓVIL DESPLEGABLE */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-20 left-4 right-4 z-40 xl:hidden"
            >
              <div className="bg-white/95 backdrop-blur-xl border border-slate-200/60 shadow-2xl rounded-2xl p-4 flex flex-col gap-1 overflow-y-auto max-h-[80vh]">
                
                {/* Enlaces Móviles */}
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                    className="flex items-center justify-between p-3 rounded-xl text-slate-700 font-semibold hover:bg-[#0077ff]/5 hover:text-[#003399] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                    <ChevronRight size={18} className="text-slate-400" />
                  </motion.a>
                ))}

                <div className="h-[1px] bg-slate-100 my-2"></div>

                {/* Botón Móvil "Cerrar Sesión" */}
                <motion.button
                  onClick={handleSignOut}
                  disabled={isLoggingOut}
                  className={`flex items-center justify-center gap-2 w-full p-3 rounded-xl font-semibold shadow-sm transition-colors ${
                    isLoggingOut 
                    ? 'bg-slate-100 text-slate-500' 
                    : 'bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white'
                  }`}
                >
                  <span>{isLoggingOut ? 'Cerrando sesión...' : 'Cerrar Sesión'}</span>
                  {isLoggingOut ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <LogOut size={16} />
                  )}
                </motion.button>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay oscuro para fondo en móvil */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-30 xl:hidden"
            />
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};

export default Header;