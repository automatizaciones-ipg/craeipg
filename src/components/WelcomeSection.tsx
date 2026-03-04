import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Play, Sparkles, MonitorPlay, Compass, ArrowRight, Library } from 'lucide-react';

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
      desc: "Descubre dónde están tus asignaturas y calificaciones."
    },
    {
      icon: <Library className="w-5 h-5 text-[#0077ff]" />,
      title: "Recursos CRAE",
      desc: "Aprende a integrar la biblioteca virtual en tus tareas."
    },
    {
      icon: <MonitorPlay className="w-5 h-5 text-[#0077ff]" />,
      title: "Clases Sincrónicas",
      desc: "Cómo unirte a tus sesiones en vivo sin problemas."
    }
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
          
          <div className="relative aspect-video bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
            {/* Imagen de portada (Placeholder - Puedes cambiar la URL por tu miniatura) */}
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop" 
              alt="Video introductorio CRAE" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105 transform"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

            {/* Etiqueta flotante superior */}
            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              ¿Qué es el CRAE?
            </div>

            {/* Botón de Play Central */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
                <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-75"></div>
                <div className="relative bg-white/90 backdrop-blur-sm w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-[#003399] ml-1.5" fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Duración abajo a la derecha */}
            <div className="absolute bottom-4 right-4 bg-slate-900/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-md">
              02:45
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
            Domina tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003399] to-[#0077ff]">Aula Virtual</span> en minutos
          </motion.h2>

          <motion.p variants={itemVariants} className="text-slate-500 text-lg leading-relaxed">
            Hemos preparado un recorrido paso a paso para que aproveches al máximo la plataforma IPG. Olvídate de perderte entre menús y enfócate en lo que importa: tu aprendizaje.
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
              
              <span>Iniciar recorrido virtual</span>
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