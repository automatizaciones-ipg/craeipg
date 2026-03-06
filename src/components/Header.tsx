import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ExternalLink, Menu, X, ChevronRight } from 'lucide-react';

// Definimos los enlaces de navegación del CRAE (100% alineados con el Grid)
const navLinks = [
  { name: 'Técnicas de Estudio', href: '/tecnicas-estudio' },
  { name: 'Gestión del Tiempo', href: '/gestion-tiempo' },
  { name: 'Normas APA', href: '/normas-apa' },
  { name: 'Herramientas Digitales', href: '/herramientas-digitales' },
  { name: 'Práctica Laboral', href: '/practica-laboral' },
  { name: 'Bienestar y Apoyo', href: '/bienestar-apoyo' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    // Patrón de optimización para no saturar la memoria
    const handleScroll = (): void => {
      // Usamos requestAnimationFrame para sincronizar la lectura del scroll con el refresco de pantalla
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
      });
    };
    
    // El { passive: true } es vital para mejorar el rendimiento del scroll en móviles
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                <div className="relative h-8 w-8 md:h-9 md:w-9 bg-gradient-to-tr from-[#003399] to-[#0077ff] rounded-xl flex items-center justify-center font-extrabold text-white shadow-md text-xs md:text-base">
                  IPG
                </div>
              </div>
              <div className="hidden md:block h-6 w-[2px] bg-slate-200 mx-1"></div>
              <span className="text-xl md:text-2xl font-black tracking-tight text-slate-800">
                CRA<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003399] to-[#0077ff]">E</span>
              </span>
            </motion.a>

            {/* 2. ENLACES CENTRALES (Solo Desktop) */}
            {/* Nota: Al tener más enlaces, en pantallas medianas (lg) podría verse un poco apretado, 
                pero el menú hamburguesa cubrirá las pantallas más pequeñas (md/sm). */}
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

              {/* Botón Ir a IPG (Desktop y Tablets) */}
              <motion.a 
                href="https://ipg.umas.cl/Alumnos"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:flex relative group overflow-hidden items-center gap-1.5 sm:gap-2 bg-[#003399] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold shadow-[0_4px_14px_0_rgba(0,51,153,0.39)] hover:shadow-[0_6px_20px_rgba(0,51,153,0.23)] hover:bg-[#002266] transition-all duration-300"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <span>Aula Virtual IPG</span>
                <ExternalLink size={14} className="sm:w-4 sm:h-4" />
              </motion.a>

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

        {/* 4. MENÚ MÓVIL DESPLEGABLE (Animado con AnimatePresence) */}
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

                {/* Botón Móvil "Ir a IPG" */}
                <motion.a
                  href="https://ipg.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#003399] text-white p-3 rounded-xl font-semibold shadow-md"
                >
                  <span>Ir a IPG</span>
                  <ExternalLink size={16} />
                </motion.a>

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