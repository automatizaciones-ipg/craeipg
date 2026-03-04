import React from 'react';
import { motion, type Variants } from 'framer-motion'; // <-- La magia está en añadir 'type'
import { MapPin, Mail, Phone, ExternalLink, ChevronRight, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  // Tipado explícito con 'Variants' 
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200/60 pt-16 pb-8 mt-20 relative overflow-hidden">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[#0077ff]/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16"
        >
          
          {/* COLUMNA 1: Branding */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3 cursor-default">
              <div className="h-10 w-10 bg-gradient-to-tr from-[#003399] to-[#0077ff] rounded-xl flex items-center justify-center font-extrabold text-white shadow-md text-base">
                IPG
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-800">
                CRA<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003399] to-[#0077ff]">E</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed pr-4">
              Centro de Recursos Estudiantiles del Instituto Profesional IPG. Tu plataforma integral para el desarrollo académico, investigación y normativas institucionales.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#0077ff] hover:border-[#0077ff]/30 hover:bg-[#0077ff]/5 transition-all duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#0077ff] hover:border-[#0077ff]/30 hover:bg-[#0077ff]/5 transition-all duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#0077ff] hover:border-[#0077ff]/30 hover:bg-[#0077ff]/5 transition-all duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </motion.div>

          {/* COLUMNA 2: Enlaces Rápidos */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-slate-800 font-bold mb-6 flex items-center gap-2">
              <BookOpen size={18} className="text-[#0077ff]" />
              Recursos
            </h4>
            <ul className="flex flex-col gap-3">
              {['Biblioteca Virtual', 'Normativas APA 7ª Ed.', 'Plantillas Institucionales', 'Reglamentos y Políticas', 'Software Académico'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-500 text-sm hover:text-[#003399] transition-colors flex items-center group">
                    <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 text-[#0077ff] transition-all duration-300 mr-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMNA 3: Enlaces Institucionales */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-slate-800 font-bold mb-6">IPG</h4>
            <ul className="flex flex-col gap-3">
              {['Portal Principal', 'Aula Virtual', 'Centro de Ayuda'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-500 text-sm hover:text-[#003399] transition-colors flex items-center gap-1 group">
                    {item}
                    {i < 3 && <ExternalLink size={12} className="text-slate-300 group-hover:text-[#0077ff] transition-colors" />}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMNA 4: Contacto */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-slate-800 font-bold mb-6">Soporte Técnico</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <Mail size={16} className="text-[#0077ff] mt-0.5 shrink-0" />
                <a href="mailto:soporte.crae@ipg.cl" className="hover:text-[#003399] transition-colors">
                  soporte.crae@ipg.cl
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <Phone size={16} className="text-[#0077ff] mt-0.5 shrink-0" />
                <span>+56 2 2123 4567<br/><span className="text-xs text-slate-400">Lun - Vie, 09:00 - 18:00</span></span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <MapPin size={16} className="text-[#0077ff] mt-0.5 shrink-0" />
                <span>Sede Central IPG<br/><span className="text-xs text-slate-400">Providencia, Santiago</span></span>
              </li>
            </ul>
          </motion.div>

        </motion.div>

        {/* LÍNEA DIVISORIA Y COPYRIGHT */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-slate-400 text-xs text-center md:text-left">
            © {currentYear} Instituto Profesional IPG. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <a href="#" className="hover:text-[#003399] transition-colors">Políticas de Privacidad</a>
            <a href="#" className="hover:text-[#003399] transition-colors">Términos de Uso</a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;