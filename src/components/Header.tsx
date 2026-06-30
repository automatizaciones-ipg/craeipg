import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, LogOut, Loader2, HelpCircle } from 'lucide-react';
import HelpModal from './HelpModal';

const navLinks = [
  { name: 'Técnicas de Estudio',    href: '/tecnicas-estudio' },
  { name: 'Gestión del Tiempo',     href: '/gestion-tiempo' },
  { name: 'Normas APA',             href: '/normas-apa' },
  { name: 'Herramientas Digitales', href: '/herramientas-digitales' },
  { name: 'Bienestar y Apoyo',      href: '/bienestar-apoyo' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut]     = useState(false);
  const [isHelpOpen, setIsHelpOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => window.requestAnimationFrame(() => setIsScrolled(window.scrollY > 20));
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSignOut = () => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);
    // Navegación directa al endpoint server-side de cierre de sesión.
    // /api/signout responde con 302 + múltiples Set-Cookie de borrado.
    // La navegación completa (no fetch) garantiza que el browser aplique
    // todos los Set-Cookie correctamente — con fetch redirect:'manual'
    // el browser recibe una respuesta opaca y OMITE los Set-Cookie.
    window.location.replace('/api/signout');
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-400 ${isScrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto px-4 md:px-6">

        <nav className={`relative z-50 rounded-2xl transition-all duration-400
          ${isScrolled || isMobileMenuOpen
            ? 'glass-header-light shadow-[0_2px_40px_rgba(0,0,0,0.08)]'
            : 'bg-white/70 backdrop-blur-md'
          }`}>

          <div className="flex items-center justify-between h-14 px-4 md:px-5">

            {/* Logo */}
            <motion.a
              href="/inicio"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              className="shrink-0"
            >
              <img
                src="https://ipg.cl/wp-content/uploads/2026/06/ipg-aurora-lockup-dark-text.webp"
                alt="Instituto Profesional IPG"
                className="h-16 w-auto object-contain"
                loading="eager"
              />
            </motion.a>

            {/* Links desktop */}
            <div className="hidden xl:flex items-center justify-center flex-1 mx-4 gap-0.5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="relative group px-3.5 py-2 rounded-xl text-[13px] font-semibold text-slate-600 hover:text-[#003399] hover:bg-blue-50/60 transition-all duration-200 whitespace-nowrap"
                >
                  {link.name}
                  <span
                    className="absolute bottom-1.5 left-3.5 right-3.5 h-[1.5px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ background: 'linear-gradient(90deg, #003399, #0EA5E9)' }}
                  ></span>
                </motion.a>
              ))}
            </div>

            {/* Acciones */}
            <div className="flex items-center gap-2 shrink-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsHelpOpen(true)}
                className="hidden sm:flex p-2 rounded-xl text-slate-400 hover:text-[#003399] hover:bg-blue-50 transition-all"
              >
                <HelpCircle size={18} strokeWidth={2} />
              </motion.button>

              <div className="h-5 w-px bg-slate-200 hidden sm:block"></div>

              <motion.button
                onClick={handleSignOut}
                disabled={isLoggingOut}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-wait
                  ${isLoggingOut
                    ? 'bg-slate-100 text-slate-400'
                    : 'bg-slate-900 text-white hover:bg-rose-600 shadow-sm hover:shadow-[0_4px_16px_rgba(225,29,72,0.25)]'
                  }`}
              >
                <span>{isLoggingOut ? 'Saliendo…' : 'Salir'}</span>
                <AnimatePresence mode="wait">
                  {isLoggingOut
                    ? <motion.div key="spin" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Loader2 size={13} className="animate-spin" /></motion.div>
                    : <motion.div key="icon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><LogOut size={13} /></motion.div>
                  }
                </AnimatePresence>
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </nav>

        {/* Menú móvil */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="absolute top-[68px] left-4 right-4 z-40 xl:hidden"
            >
              <div className="bg-white border border-slate-200/80 shadow-[0_20px_60px_rgba(0,0,0,0.12)] rounded-2xl p-3 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 + 0.05 }}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 font-semibold text-sm hover:bg-blue-50 hover:text-[#003399] transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                    <ChevronRight size={15} className="text-slate-300" />
                  </motion.a>
                ))}
                <div className="h-px bg-slate-100 my-1.5"></div>
                <motion.button
                  onClick={handleSignOut}
                  disabled={isLoggingOut}
                  className={`flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                    isLoggingOut ? 'bg-slate-100 text-slate-400' : 'bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white'
                  }`}
                >
                  <span>{isLoggingOut ? 'Cerrando sesión…' : 'Cerrar Sesión'}</span>
                  {isLoggingOut ? <Loader2 size={14} className="animate-spin" /> : <LogOut size={14} />}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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

      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
    </header>
  );
};

export default Header;
