import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Play, Sparkles, Compass, ArrowRight, Library, BookOpen, Layers } from 'lucide-react';
import { TOTAL_RESOURCES } from '../data/resources';

// Pega aquí el ID del video de Google Drive cuando lo subas (ej: "1HhBEhjZKZzuTbsQ8qL2gFVDS01u-m5ur")
const TOUR_VIDEO_ID = '';

const WelcomeSection: React.FC = () => {
  // Variantes para animación en cascada del texto y características
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const features = [
    {
      icon: <Compass className="w-5 h-5 text-[#0077ff]" />,
      title: "Navegación Intuitiva",
      desc: "6 secciones temáticas con contenido interactivo, tutoriales y recursos descargables.",
    },
    {
      icon: <Library className="w-5 h-5 text-[#0077ff]" />,
      title: `${TOTAL_RESOURCES} Recursos Disponibles`,
      desc: "PDFs, infografías, planners, videos y guías oficiales del CRAI IPG.",
    },
    {
      icon: <Layers className="w-5 h-5 text-[#0077ff]" />,
      title: "Busca al Instante",
      desc: "Usa el buscador para encontrar cualquier recurso en segundos, sin navegar.",
    },
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 -mr-20 w-72 h-72 bg-[#0077ff]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 w-72 h-72 bg-[#003399]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* LADO IZQUIERDO: REPRODUCTOR DE VIDEO PREMIUM */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative group cursor-pointer w-full"
        >
          {/* Brillo de fondo que se expande al hacer hover */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#003399] to-[#0077ff] rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
          
          <div className="relative aspect-video bg-gradient-to-br from-[#091124] via-[#0f1d40] to-[#003399] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
            {/* Aurora blobs — siempre visibles */}
            <div className="absolute -top-12 -left-12 w-56 h-56 bg-gradient-to-br from-[#0052cc] to-[#003380] rounded-full blur-[80px] opacity-60 animate-[blob_12s_ease-in-out_infinite]" />
            <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-gradient-to-tr from-[#00bfff] to-[#0052cc] rounded-full blur-[80px] opacity-50 animate-[blob_16s_ease-in-out_infinite_2s]" />

            {TOUR_VIDEO_ID ? (
              /* ── Video de Drive: pegar ID arriba cuando esté listo ── */
              <iframe
                src={`https://drive.google.com/file/d/${TOUR_VIDEO_ID}/preview`}
                className="absolute inset-0 w-full h-full z-10"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Tutorial APRENDE+ — Recorrido Virtual"
                style={{ border: 'none' }}
              />
            ) : (
              /* ── Placeholder: grid de stats mientras subes el video ── */
              <>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 z-10">
                  <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                    {[
                      { value: String(TOTAL_RESOURCES), label: 'Recursos' },
                      { value: '6',  label: 'Secciones' },
                      { value: '100%', label: 'Gratuito' },
                      { value: 'IPG', label: 'Oficial' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 text-center">
                        <div className="text-2xl font-black text-white tracking-tight">{stat.value}</div>
                        <div className="text-[11px] font-semibold text-blue-200/80 uppercase tracking-wider mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Play button linking to recorrido virtual */}
                <div className="absolute inset-0 flex items-end justify-center pb-6 z-10">
                  <a href="/recorrido-virtual" className="flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 hover:bg-white/25 transition-all">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <Play className="w-3 h-3 text-[#003399] ml-0.5" fill="currentColor" />
                    </div>
                    <span className="text-white text-xs font-semibold">Recorrido Virtual APRENDE+</span>
                  </a>
                </div>
              </>
            )}

            {/* Badge top — siempre visible */}
            <div className="absolute top-4 left-4 bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 z-20">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              APRENDE+ · CRAI IPG
            </div>
          </div>
        </motion.div>

        {/* LADO DERECHO: TEXTOS E INSTRUCCIONES */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6"
        >
          {/* Badge de Novedad */}
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <div className="inline-flex items-center gap-1.5 bg-[#0077ff]/10 text-[#003399] px-3 py-1 rounded-full text-sm font-bold border border-[#0077ff]/20">
              <Sparkles className="w-4 h-4" />
              <span>Guía Interactiva</span>
            </div>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-800 leading-tight">
            Domina <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003399] to-[#0077ff]">APRENDE+</span> en minutos
          </motion.h2>

          <motion.p variants={itemVariants} className="text-slate-500 text-lg leading-relaxed">
            Hemos preparado un recorrido paso a paso para que aproveches al máximo la plataforma APRENDE+. Olvídate de perderte entre menús y enfócate en lo que importa: tu aprendizaje.
          </motion.p>

          {/* Lista de características animadas */}
          <div className="flex flex-col gap-4 mt-2">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                className="flex items-start gap-4 p-3 rounded-2xl transition-colors cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-700">{feature.title}</h4>
                  <p className="text-sm text-slate-500 mt-1">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Botón Call to Action (AHORA ES UN ENLACE) */}
          <motion.div variants={itemVariants} className="mt-4">
            <motion.a 
              href="/recorrido-virtual" 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-fit group relative flex items-center gap-3 bg-slate-800 text-white px-6 py-3.5 rounded-xl font-bold text-base shadow-xl shadow-slate-800/20 hover:bg-slate-900 transition-all overflow-hidden"
            >
              {/* Brillo animado (Shimmer) dentro del botón */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              <span>Iniciar recorrido virtual de APRENDE+</span>
              <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default WelcomeSection;