import React, { useRef, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { TOTAL_RESOURCES } from '../data/resources';

const TOUR_VIDEO_ID = '';

const CX = 200, CY = 105, R = 64;
const HUB_NODES = [
  { label: 'Técnicas',  color: '#6366F1', angle: -90 },
  { label: 'Tiempo',    color: '#10B981', angle: -18 },
  { label: 'APA',       color: '#3B82F6', angle:  54 },
  { label: 'Bienestar', color: '#F43F5E', angle: 126 },
  { label: 'Digital',   color: '#0EA5E9', angle: 198 },
].map(n => ({
  ...n,
  x: CX + R * Math.cos(n.angle * Math.PI / 180),
  y: CY + R * Math.sin(n.angle * Math.PI / 180),
}));

/* ─── 3D Tilt card ─── */
const TiltCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [over, setOver]  = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = (e.clientX - rect.left) / rect.width  - 0.5;
    const dy = (e.clientY - rect.top)  / rect.height - 0.5;
    setTilt({ x: dy * -12, y: dx * 12 });
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setOver(true)}
      onMouseMove={onMove}
      onMouseLeave={() => { setOver(false); setTilt({ x: 0, y: 0 }); }}
      style={{
        transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${over ? 1.025 : 1})`,
        transition: over ? 'transform 0.08s ease' : 'transform 0.55s cubic-bezier(0.23,1,0.32,1)',
      }}
      className={className}
    >
      {children}
    </div>
  );
};

const containerVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const itemVariants: Variants = {
  hidden:  { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

const features = [
  {
    title: 'Navegación Intuitiva',
    desc: '5 secciones temáticas con contenido interactivo, tutoriales y recursos descargables.',
    accent: '#003399',
  },
  {
    title: `${TOTAL_RESOURCES} Recursos Disponibles`,
    desc: 'PDFs, infografías, planners, videos y guías oficiales del CRAI IPG.',
    accent: '#0EA5E9',
  },
  {
    title: 'Búsqueda Instantánea',
    desc: 'Encuentra cualquier recurso en segundos usando el buscador inteligente.',
    accent: '#6366F1',
  },
];

const WelcomeSection: React.FC = () => (
  <section className="relative w-full px-4 md:px-8 lg:px-12 py-20 md:py-28 overflow-hidden bg-[#F8F9FF]">

    {/* Separadores */}
    <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
    <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

    <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* ─── IZQUIERDA: Hub con 3D tilt ─── */}
      <TiltCard className="relative w-full">
        {/* Sombra flotante */}
        <div className="absolute -inset-4 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
             style={{ background: 'radial-gradient(ellipse at center, rgba(0,51,153,0.1) 0%, transparent 70%)' }}></div>

        <div
          className="relative aspect-video rounded-[2rem] overflow-hidden border border-slate-200/80 shadow-[0_24px_80px_rgba(0,51,153,0.12)]"
          style={{ background: 'linear-gradient(145deg, #001a66 0%, #003399 50%, #0055cc 80%, #1a7fff 100%)' }}
        >
          {/* Rings decorativos */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-56 h-56 rounded-full border border-white/8" style={{ animation: 'ambient-rotate 20s linear infinite' }}></div>
            <div className="absolute w-40 h-40 rounded-full border border-white/5" style={{ animation: 'ambient-rotate 14s linear infinite reverse' }}></div>
          </div>

          {TOUR_VIDEO_ID ? (
            <iframe
              src={`https://drive.google.com/file/d/${TOUR_VIDEO_ID}/preview`}
              className="absolute inset-0 w-full h-full z-10"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Tutorial APRENDE+"
              style={{ border: 'none' }}
            />
          ) : (
            <>
              <svg viewBox="0 0 400 225" className="absolute inset-0 w-full h-full z-10" aria-hidden="true">
                <defs>
                  <filter id="gn" x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  <filter id="gc" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="5" result="b" /><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  <radialGradient id="cg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.05"/>
                  </radialGradient>
                </defs>

                <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="4 4"/>
                <circle cx={CX} cy={CY} r={R+22} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>

                {HUB_NODES.map((n, i) => (
                  <line key={i} x1={CX} y1={CY} x2={n.x} y2={n.y}
                    stroke={n.color} strokeWidth="0.7" strokeOpacity="0.2" strokeDasharray="3 3"/>
                ))}

                {HUB_NODES.map((n, i) => (
                  <circle key={i} r="2.5" fill={n.color} filter="url(#gn)">
                    <animate attributeName="cx" values={`${n.x};${CX}`} dur={`${2.4+i*0.3}s`} repeatCount="indefinite" begin={`${i*0.42}s`} calcMode="spline" keySplines="0.42 0 0.58 1"/>
                    <animate attributeName="cy" values={`${n.y};${CY}`} dur={`${2.4+i*0.3}s`} repeatCount="indefinite" begin={`${i*0.42}s`} calcMode="spline" keySplines="0.42 0 0.58 1"/>
                    <animate attributeName="opacity" values="0;0.9;0" dur={`${2.4+i*0.3}s`} repeatCount="indefinite" begin={`${i*0.42}s`}/>
                  </circle>
                ))}

                <circle cx={CX} cy={CY} r="46" fill="url(#cg)">
                  <animate attributeName="r" values="44;50;44" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
                  <animate attributeName="opacity" values="0.4;0.65;0.4" dur="4s" repeatCount="indefinite"/>
                </circle>

                <circle cx={CX} cy={CY} r="28" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" strokeWidth="1" filter="url(#gc)"/>
                <circle cx={CX} cy={CY} r="20" fill="rgba(59,130,246,0.35)"/>

                <text x={CX} y={CY-4} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="7.5" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="0.5">APRENDE+</text>
                <text x={CX} y={CY+6.5} textAnchor="middle" dominantBaseline="middle" fill="rgba(147,197,253,0.6)" fontSize="4.8" fontFamily="system-ui,sans-serif">CRAI · IPG</text>

                {HUB_NODES.map((n, i) => (
                  <g key={i}>
                    <circle cx={n.x} cy={n.y} r="16" fill={n.color} fillOpacity="0.08"/>
                    <circle cx={n.x} cy={n.y} r="12" fill={n.color} fillOpacity="0.1" stroke={n.color} strokeOpacity="0.45" strokeWidth="0.75"/>
                    <text x={n.x} y={n.y} textAnchor="middle" dominantBaseline="middle" fill={n.color} fontSize="5.5" fontWeight="700" fontFamily="system-ui,sans-serif">{n.label}</text>
                  </g>
                ))}

                <rect x="10" y="198" width="78" height="19" rx="9.5" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.75"/>
                <text x="49" y="207.5" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.7)" fontSize="5.6" fontWeight="700" fontFamily="system-ui,sans-serif">
                  {TOTAL_RESOURCES} recursos · gratis
                </text>
              </svg>

              {/* CTA Recorrido */}
              <div className="absolute bottom-4 right-4 z-20">
                <a
                  href="/recorrido-virtual"
                  className="flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 rounded-full px-3.5 py-1.5 hover:bg-white/20 transition-all group"
                >
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-2.5 h-2.5 text-blue-700 ml-0.5" fill="currentColor"/>
                  </div>
                  <span className="text-white text-[11px] font-semibold">Ver tour</span>
                </a>
              </div>
            </>
          )}

          {/* Badge top-left */}
          <div className="absolute top-4 left-4 bg-white/10 backdrop-blur border border-white/15 text-white text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 z-20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse"></span>
            APRENDE+ · CRAI IPG
          </div>
        </div>
      </TiltCard>

      {/* ─── DERECHA: Texto sin burbujas, sin íconos en títulos ─── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="flex flex-col gap-8"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.08]">
            Domina{' '}
            <span className="text-gradient-brand animate-text-gradient">APRENDE+</span>{' '}
            en minutos
          </h2>
        </motion.div>

        <motion.p variants={itemVariants} className="text-slate-500 text-[16px] leading-relaxed">
          Un recorrido paso a paso para que aproveches al máximo la plataforma
          y te enfoques en lo que importa: tu aprendizaje.
        </motion.p>

        {/* Features — sin íconos en título, línea de acento izquierda */}
        <div className="flex flex-col gap-3 mt-1">
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ x: 6, transition: { type: 'spring', stiffness: 500, damping: 30 } }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-200 cursor-default"
            >
              <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: f.accent }}></div>
              <div>
                <h4 className="font-bold text-slate-800 text-[14px] mb-1">{f.title}</h4>
                <p className="text-[13px] text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div variants={itemVariants}>
          <motion.a
            href="/recorrido-virtual"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group w-fit relative flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold text-[14px] overflow-hidden text-white shadow-[0_4px_20px_rgba(0,51,153,0.3)] hover:shadow-[0_8px_32px_rgba(0,51,153,0.4)] transition-shadow duration-300"
            style={{ background: 'linear-gradient(135deg, #003399, #0055cc)' }}
          >
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.3s_ease-in-out] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
            <span>Iniciar recorrido virtual</span>
            <div className="bg-white/15 p-1.5 rounded-lg group-hover:bg-white/25 transition-colors">
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"/>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>

    </div>
  </section>
);

export default WelcomeSection;
