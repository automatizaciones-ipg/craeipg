import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Play, Sparkles, ArrowRight, Library, Compass, Layers } from 'lucide-react';
import { TOTAL_RESOURCES } from '../data/resources';

const TOUR_VIDEO_ID = '';

// 6 categorías en hexágono: órbita de radio 60, centro en (200, 100) del viewBox 400×225
const CX = 200, CY = 100, R = 60;
const HUB_NODES = [
  { label: 'Técnicas',  color: '#818cf8', angle: -90 },
  { label: 'Tiempo',    color: '#34d399', angle: -30 },
  { label: 'APA',       color: '#60a5fa', angle:  30 },
  { label: 'Bienestar', color: '#f87171', angle:  90 },
  { label: 'Digital',   color: '#38bdf8', angle: 150 },
  { label: 'Práctica',  color: '#fbbf24', angle: 210 },
].map(n => ({
  ...n,
  x: CX + R * Math.cos(n.angle * Math.PI / 180),
  y: CY + R * Math.sin(n.angle * Math.PI / 180),
}));

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const features = [
  {
    icon: <Compass className="w-5 h-5 text-[#0077ff]" />,
    title: 'Navegación Intuitiva',
    desc: '6 secciones temáticas con contenido interactivo, tutoriales y recursos descargables.',
  },
  {
    icon: <Library className="w-5 h-5 text-[#0077ff]" />,
    title: `${TOTAL_RESOURCES} Recursos Disponibles`,
    desc: 'PDFs, infografías, planners, videos y guías oficiales del CRAI IPG.',
  },
  {
    icon: <Layers className="w-5 h-5 text-[#0077ff]" />,
    title: 'Busca al Instante',
    desc: 'Usa el buscador para encontrar cualquier recurso en segundos, sin navegar.',
  },
];

const WelcomeSection: React.FC = () => (
  <section className="relative w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
    <div className="absolute top-0 right-0 -mr-20 w-72 h-72 bg-[#0077ff]/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 -ml-20 w-72 h-72 bg-[#003399]/5 rounded-full blur-3xl pointer-events-none" />

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

      {/* ─── IZQUIERDA: HUB DE RECURSOS / REPRODUCTOR ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative group cursor-pointer w-full"
      >
        {/* Halo exterior */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#003399] to-[#0077ff] rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-700" />

        <div className="relative aspect-video bg-gradient-to-br from-[#091124] via-[#0f1d40] to-[#003399] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">

          {/* Aurora blobs */}
          <div className="absolute -top-12 -left-12 w-56 h-56 bg-gradient-to-br from-[#0052cc] to-[#003380] rounded-full blur-[80px] opacity-60 animate-[blob_12s_ease-in-out_infinite]" />
          <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-gradient-to-tr from-[#00bfff] to-[#0052cc] rounded-full blur-[80px] opacity-50 animate-[blob_16s_ease-in-out_infinite_2s]" />

          {TOUR_VIDEO_ID ? (
            <iframe
              src={`https://drive.google.com/file/d/${TOUR_VIDEO_ID}/preview`}
              className="absolute inset-0 w-full h-full z-10"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Tutorial APRENDE+ — Recorrido Virtual"
              style={{ border: 'none' }}
            />
          ) : (
            <>
              {/* ── Hub SVG: centralización visual de recursos ── */}
              <svg
                viewBox="0 0 400 225"
                className="absolute inset-0 w-full h-full z-10"
                aria-hidden="true"
              >
                <defs>
                  <filter id="glow-node" x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <filter id="glow-center" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <radialGradient id="center-grad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0077ff" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#003399" stopOpacity="0.05" />
                  </radialGradient>
                </defs>

                {/* Anillo de órbita */}
                <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="4 4" />
                {/* Anillo exterior suave */}
                <circle cx={CX} cy={CY} r={R + 18} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

                {/* Líneas de conexión centro → nodos */}
                {HUB_NODES.map((n, i) => (
                  <line
                    key={i}
                    x1={CX} y1={CY} x2={n.x} y2={n.y}
                    stroke={n.color}
                    strokeWidth="0.75"
                    strokeOpacity="0.22"
                    strokeDasharray="3 3"
                  />
                ))}

                {/* Puntos viajando de cada nodo al centro (recursos fluyendo al hub) */}
                {HUB_NODES.map((n, i) => (
                  <circle key={i} r="2.5" fill={n.color} filter="url(#glow-node)">
                    <animate
                      attributeName="cx"
                      values={`${n.x};${CX}`}
                      dur={`${2.4 + i * 0.32}s`}
                      repeatCount="indefinite"
                      begin={`${i * 0.42}s`}
                      calcMode="spline"
                      keySplines="0.42 0 0.58 1"
                    />
                    <animate
                      attributeName="cy"
                      values={`${n.y};${CY}`}
                      dur={`${2.4 + i * 0.32}s`}
                      repeatCount="indefinite"
                      begin={`${i * 0.42}s`}
                      calcMode="spline"
                      keySplines="0.42 0 0.58 1"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;0.95;0"
                      dur={`${2.4 + i * 0.32}s`}
                      repeatCount="indefinite"
                      begin={`${i * 0.42}s`}
                    />
                  </circle>
                ))}

                {/* Halo pulsante del centro */}
                <circle cx={CX} cy={CY} r="46" fill="url(#center-grad)">
                  <animate attributeName="r" values="44;50;44" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" />
                  <animate attributeName="opacity" values="0.45;0.65;0.45" dur="4s" repeatCount="indefinite" />
                </circle>

                {/* Círculo central */}
                <circle cx={CX} cy={CY} r="28" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" strokeWidth="1" filter="url(#glow-center)" />
                <circle cx={CX} cy={CY} r="21" fill="rgba(0,100,210,0.35)" />

                {/* Texto del hub */}
                <text x={CX} y={CY - 4} textAnchor="middle" dominantBaseline="middle"
                  fill="white" fontSize="7.5" fontWeight="800"
                  fontFamily="system-ui,-apple-system,sans-serif" letterSpacing="0.6">
                  APRENDE+
                </text>
                <text x={CX} y={CY + 6.5} textAnchor="middle" dominantBaseline="middle"
                  fill="rgba(147,197,253,0.65)" fontSize="5.2"
                  fontFamily="system-ui,-apple-system,sans-serif" letterSpacing="0.2">
                  CRAI · IPG
                </text>

                {/* Nodos de categoría */}
                {HUB_NODES.map((n, i) => (
                  <g key={i}>
                    <circle cx={n.x} cy={n.y} r="17" fill={n.color} fillOpacity="0.1" />
                    <circle cx={n.x} cy={n.y} r="13" fill={n.color} fillOpacity="0.1" stroke={n.color} strokeOpacity="0.45" strokeWidth="0.75" />
                    <text
                      x={n.x} y={n.y}
                      textAnchor="middle" dominantBaseline="middle"
                      fill={n.color} fontSize="5.5" fontWeight="700"
                      fontFamily="system-ui,-apple-system,sans-serif"
                    >
                      {n.label}
                    </text>
                  </g>
                ))}

                {/* Contador de recursos — esquina inferior izquierda del SVG */}
                <rect x="10" y="196" width="72" height="20" rx="10" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.75" />
                <text x="46" y="206" textAnchor="middle" dominantBaseline="middle"
                  fill="white" fontSize="6" fontWeight="700"
                  fontFamily="system-ui,-apple-system,sans-serif">
                  {TOTAL_RESOURCES} recursos · 100% gratis
                </text>
              </svg>

              {/* Enlace Recorrido Virtual */}
              <div className="absolute bottom-4 right-4 z-20">
                <a
                  href="/recorrido-virtual"
                  className="flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 hover:bg-white/25 transition-all group"
                >
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-2.5 h-2.5 text-[#003399] ml-0.5" fill="currentColor" />
                  </div>
                  <span className="text-white text-[11px] font-semibold">Ver tour</span>
                </a>
              </div>
            </>
          )}

          {/* Badge top-left — siempre visible */}
          <div className="absolute top-4 left-4 bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 z-20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            APRENDE+ · CRAI IPG
          </div>
        </div>
      </motion.div>

      {/* ─── DERECHA: TEXTO Y CARACTERÍSTICAS ─── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col gap-6"
      >
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-1.5 bg-[#0077ff]/10 text-[#003399] px-3 py-1 rounded-full text-sm font-bold border border-[#0077ff]/20">
            <Sparkles className="w-4 h-4" />
            <span>Guía Interactiva</span>
          </div>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-800 leading-tight"
        >
          Domina{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003399] to-[#0077ff]">
            APRENDE+
          </span>{' '}
          en minutos
        </motion.h2>

        <motion.p variants={itemVariants} className="text-slate-500 text-lg leading-relaxed">
          Hemos preparado un recorrido paso a paso para que aproveches al máximo la plataforma
          APRENDE+. Olvídate de perderte entre menús y enfócate en lo que importa: tu aprendizaje.
        </motion.p>

        <div className="flex flex-col gap-4 mt-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.8)' }}
              className="flex items-start gap-4 p-3 rounded-2xl transition-colors cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.12, rotate: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 mt-0.5"
              >
                {feature.icon}
              </motion.div>
              <div>
                <h4 className="font-bold text-slate-700">{feature.title}</h4>
                <p className="text-sm text-slate-500 mt-1">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-4">
          <motion.a
            href="/recorrido-virtual"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-fit group relative flex items-center gap-3 bg-slate-800 text-white px-6 py-3.5 rounded-xl font-bold text-base shadow-xl shadow-slate-800/20 hover:bg-slate-900 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
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

export default WelcomeSection;
