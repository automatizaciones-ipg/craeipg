import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { MapPin, Mail, Phone, ExternalLink, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  const cV: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
  };
  const iV: Variants = {
    hidden:  { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const resourceLinks = [
    { label: 'Técnicas de Estudio',    href: '/tecnicas-estudio' },
    { label: 'Gestión del Tiempo',     href: '/gestion-tiempo' },
    { label: 'Normas APA',             href: '/normas-apa' },
    { label: 'Herramientas Digitales', href: '/herramientas-digitales' },
    { label: 'Bienestar y Apoyo',      href: '/bienestar-apoyo' },
  ];
  const ipgLinks = [
    { label: 'Portal Principal IPG',  href: 'https://www.ipg.cl',             external: true },
    { label: 'Aula Virtual',          href: 'https://virtual.ipg.cl/login/index.php',     external: true },
    { label: 'Portal Estudiantil',    href: 'https://ipg.umas.cl/Alumnos/Login', external: true },
    { label: 'Recorrido Virtual',     href: '/recorrido-virtual',             external: false },
  ];

  return (
    <footer className="relative overflow-hidden pt-16 pb-8 mt-0" style={{ background: '#0A0E1A' }}>

      {/* Línea de separación superior */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,51,153,0.4) 30%, rgba(14,165,233,0.4) 70%, transparent)' }}></div>

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse at center, rgba(0,51,153,0.12) 0%, transparent 70%)' }}></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={cV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-14"
        >

          {/* Branding */}
          <motion.div variants={iV} className="lg:col-span-4 flex flex-col gap-6">
            <a href="/inicio" className="w-fit group">
              <img
                src="https://ipg.cl/wp-content/uploads/2026/06/ipg-aurora-lockup-white-text.webp"
                alt="Instituto Profesional IPG"
                className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </a>

            <p className="text-slate-500 text-[13px] leading-relaxed pr-4">
              Centro de Recursos Estudiantiles del Instituto Profesional IPG. Plataforma integral para el desarrollo académico, competencias digitales y apoyo estudiantil.
            </p>

            <div className="flex items-center gap-2.5">
              {[
                { href: 'https://www.facebook.com/IPGChile', label: 'Facebook', d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
                { href: 'https://www.instagram.com/ipg_chile', label: 'Instagram', d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z' },
                { href: 'https://www.linkedin.com/school/ipg-chile', label: 'LinkedIn', d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                   className="w-9 h-9 rounded-xl bg-white/4 border border-white/8 flex items-center justify-center text-slate-600 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/8 transition-all duration-300">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d={s.d} clipRule="evenodd"/>
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Recursos */}
          <motion.div variants={iV} className="lg:col-span-3">
            <h4 className="text-slate-300 font-bold mb-5 text-[13px]">Recursos APRENDE+</h4>
            <ul className="flex flex-col gap-2.5">
              {resourceLinks.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-slate-500 text-[13px] hover:text-slate-200 transition-colors flex items-center group">
                    <ChevronRight size={12} className="opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 text-blue-400 transition-all duration-200 mr-1.5"/>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Portal */}
          <motion.div variants={iV} className="lg:col-span-2">
            <h4 className="text-slate-300 font-bold mb-5 text-[13px]">Portal IPG</h4>
            <ul className="flex flex-col gap-2.5">
              {ipgLinks.map((l, i) => (
                <li key={i}>
                  <a href={l.href} target={l.external ? '_blank' : undefined} rel={l.external ? 'noopener noreferrer' : undefined}
                     className="text-slate-500 text-[13px] hover:text-slate-200 transition-colors flex items-center gap-1.5 group">
                    {l.label}
                    {l.external && <ExternalLink size={10} className="text-slate-700 group-hover:text-blue-400 transition-colors shrink-0"/>}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div variants={iV} className="lg:col-span-3">
            <h4 className="text-slate-300 font-bold mb-5 text-[13px]">Contacto</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-[13px] text-slate-500">
                <Mail size={14} className="text-blue-400 mt-0.5 shrink-0"/>
                <a href="mailto:consejero.estudiante@ipg.cl" className="hover:text-slate-200 transition-colors break-all">
                  consejero.estudiante@ipg.cl
                </a>
              </li>
              <li className="flex items-start gap-3 text-[13px] text-slate-500">
                <Phone size={14} className="text-blue-400 mt-0.5 shrink-0"/>
                <div>
                  <a href="tel:+56984707929" className="hover:text-slate-200 transition-colors">+56 9 8470 7929</a>
                  <br/><span className="text-[11px] text-slate-600">Lun – Vie, 09:00 – 18:00</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-[13px] text-slate-500">
                <MapPin size={14} className="text-blue-400 mt-0.5 shrink-0"/>
                <div>
                  <a href="https://maps.google.com/?q=Instituto+Profesional+IPG+Santiago" target="_blank" rel="noopener noreferrer" className="hover:text-slate-200 transition-colors">
                    Sede Central IPG
                  </a>
                  <br/><span className="text-[11px] text-slate-600">Providencia, Santiago de Chile</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <div className="pt-7 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-[11px] text-center md:text-left">
            © 2026 Instituto Profesional IPG · APRENDE+ — Centro de Recursos Estudiantiles.
          </p>
          <div className="flex items-center gap-5 text-[11px] text-slate-600">
            <a href="https://www.ipg.cl/politicas-de-privacidad" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Privacidad</a>
            <a href="https://www.ipg.cl/terminos-de-uso" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Términos</a>
            <a href="https://www.ipg.cl" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors flex items-center gap-1">
              ipg.cl <ExternalLink size={9}/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
