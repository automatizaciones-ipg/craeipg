import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  CheckCircle2, Info, MousePointer2, LogIn,
  Search, LayoutGrid, Download, Mail, Phone,
  ArrowRight, ChevronRight, RotateCcw,
  Brain, Clock, BookOpenCheck, MonitorSmartphone,
  Heart, Briefcase, FileText, FileImage, AlignLeft,
  Target, BrainCircuit, StickyNote, ExternalLink,
  HelpCircle, Sparkles,
} from 'lucide-react';

/* ─── Types ─────────────────────────────────────────────── */
type Part = 1 | 2;

interface StepMeta {
  id: number;
  icon: React.ReactNode;
  badgeColor: string;
  title: string;
  description: string;
  tip: string;
}

/* ─── Part 1 — Inicio de Sesión (2 steps) ──────────────── */
const part1Steps: StepMeta[] = [
  {
    id: 1,
    icon: <LogIn className="w-6 h-6" />,
    badgeColor: 'bg-[#0077ff]',
    title: 'Ingresa a APRENDE+',
    description: 'El acceso es exclusivo para la comunidad IPG. No necesitas contraseña especial — usas tu cuenta Google institucional de forma segura y rápida.',
    tip: 'Haz clic en el botón de Google del simulador para ver cómo funciona el inicio de sesión.',
  },
  {
    id: 2,
    icon: <Sparkles className="w-6 h-6" />,
    badgeColor: 'bg-indigo-500',
    title: '¡Bienvenido/a a APRENDE+!',
    description: 'Tras ingresar, llegas directo a tu panel principal. Desde aquí puedes buscar cualquier recurso o explorar las 6 secciones temáticas disponibles.',
    tip: 'Explora el simulador: usa el buscador o haz clic en una sección para continuar.',
  },
];

/* ─── Part 2 — Navegar, Descargar y Contacto (4 steps) ── */
const part2Steps: StepMeta[] = [
  {
    id: 1,
    icon: <LayoutGrid className="w-6 h-6" />,
    badgeColor: 'bg-teal-500',
    title: 'Navega por las Secciones',
    description: 'APRENDE+ tiene 6 secciones temáticas. Cada una agrupa recursos por área: estudio, tiempo, APA, herramientas digitales, bienestar y práctica laboral.',
    tip: 'Haz clic en la tarjeta "Técnicas de Estudio" del simulador para entrar a esa sección.',
  },
  {
    id: 2,
    icon: <Brain className="w-6 h-6" />,
    badgeColor: 'bg-indigo-600',
    title: 'Entra a un Módulo',
    description: 'Dentro de cada sección encontrarás módulos específicos. Por ejemplo, "Técnicas de Estudio" tiene 4 módulos: Estrategias, Comprensión Lectora, Ortografía y Concentración.',
    tip: 'Haz clic en "Estrategias de Estudio" del simulador para ver el contenido interactivo.',
  },
  {
    id: 3,
    icon: <Download className="w-6 h-6" />,
    badgeColor: 'bg-emerald-500',
    title: 'Descarga tu Material',
    description: 'Al final de cada módulo encontrarás los archivos para descargar: PDFs, infografías, planners y presentaciones, todo alojado en Google Drive de IPG de forma segura.',
    tip: 'Haz clic en el botón de descarga del primer archivo en el simulador.',
  },
  {
    id: 4,
    icon: <HelpCircle className="w-6 h-6" />,
    badgeColor: 'bg-rose-500',
    title: 'Centro de Apoyo',
    description: 'Si tienes dudas, el equipo CRAE IPG está disponible de lunes a viernes. También puedes usar el botón "?" de la barra superior para abrir esta guía en cualquier momento.',
    tip: 'Contacta al consejero en consejero.estudiante@ipg.cl o al +56 9 8470 7929.',
  },
];

/* ─── Animation variants ────────────────────────────────── */
const slideIn: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit:   { opacity: 0, x: 20,  transition: { duration: 0.2 } },
};

const mockFade: Variants = {
  hidden:  { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit:    { opacity: 0, scale: 0.97, transition: { duration: 0.2 } },
};

/* ══════════════════════════════════════════════════════════
   PART 1 MOCKUPS
══════════════════════════════════════════════════════════ */

function P1_LoginMock({ onNext, simulating }: { onNext: () => void; simulating: boolean }) {
  return (
    <motion.div key="p1m1" variants={mockFade} initial="hidden" animate="visible" exit="exit" className="w-full flex flex-col items-center">
      <div className="w-14 h-14 bg-gradient-to-tr from-[#003399] to-[#0077ff] rounded-2xl flex items-center justify-center text-white font-black text-lg mb-5 shadow-md">
        IPG<span className="text-cyan-300">+</span>
      </div>
      <h4 className="text-lg font-bold text-slate-800 mb-1">Ingresar a Aprende+</h4>
      <p className="text-xs text-slate-500 mb-6 text-center">Autentícate con tu correo institucional</p>

      <button
        onClick={onNext}
        disabled={simulating}
        className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 hover:border-[#0077ff] hover:bg-blue-50 py-3 rounded-xl text-slate-700 font-semibold transition-all shadow-sm text-sm"
      >
        {simulating ? (
          <div className="w-4 h-4 border-2 border-[#0077ff] border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continuar con cuenta Google
          </>
        )}
      </button>

      <div className="mt-4 w-full bg-blue-50 border border-blue-100 p-3 rounded-xl flex items-start gap-2">
        <Info className="w-3.5 h-3.5 text-[#0077ff] mt-0.5 shrink-0" />
        <p className="text-[11px] text-slate-600">
          Solo cuentas <span className="font-semibold text-[#003399]">@ipg.cl</span> o <span className="font-semibold text-[#003399]">@alumnos.ipg.cl</span>
        </p>
      </div>
    </motion.div>
  );
}

function P1_WelcomeMock({ onNext }: { onNext: () => void }) {
  const sections = [
    { label: 'Técnicas de Estudio', icon: <BrainCircuit className="w-3 h-3" />, color: 'from-[#003399] to-[#0077ff]', dark: true },
    { label: 'Gestión del Tiempo',  icon: <Clock className="w-3 h-3" />,        color: 'from-teal-50 to-white',       dark: false },
    { label: 'Normas APA',          icon: <BookOpenCheck className="w-3 h-3" />, color: 'from-white to-slate-50',      dark: false },
  ];
  return (
    <motion.div key="p1m2" variants={mockFade} initial="hidden" animate="visible" exit="exit" className="w-full flex flex-col gap-2.5">
      {/* Welcome banner */}
      <div className="flex items-center gap-2.5 bg-emerald-50 border border-emerald-200 rounded-2xl p-3 mb-1">
        <div className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-xs font-bold text-emerald-800">¡Sesión iniciada correctamente!</p>
          <p className="text-[10px] text-emerald-600">alumno@alumnos.ipg.cl</p>
        </div>
      </div>

      {/* Search bar mini */}
      <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm">
        <Search className="w-3 h-3 text-slate-400" />
        <span className="text-[11px] text-slate-400 flex-1">Busca guías, planners, recursos...</span>
      </div>

      {/* Section cards preview */}
      <div className="flex flex-col gap-2">
        {sections.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ x: 3 }}
            onClick={i === 0 ? onNext : undefined}
            className={`flex items-center gap-2.5 bg-gradient-to-br ${s.color} rounded-xl p-2.5 border ${s.dark ? 'border-white/10' : 'border-slate-200'} ${i === 0 ? 'cursor-pointer ring-2 ring-[#0077ff]/30' : 'opacity-60 pointer-events-none'}`}
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${s.dark ? 'bg-white/20 text-white' : 'bg-white border border-slate-100 text-[#003399]'}`}>
              {s.icon}
            </div>
            <p className={`text-[11px] font-bold ${s.dark ? 'text-white' : 'text-slate-700'}`}>{s.label}</p>
            {i === 0 && <ArrowRight className={`w-3 h-3 ml-auto ${s.dark ? 'text-white/70' : 'text-slate-400'}`} />}
          </motion.div>
        ))}
        <p className="text-[9px] text-slate-400 text-center">+ 3 secciones más disponibles</p>
      </div>
      <p className="text-[10px] text-center text-[#0077ff] font-semibold animate-pulse mt-1">↑ Haz clic en "Técnicas de Estudio"</p>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════
   PART 2 MOCKUPS
══════════════════════════════════════════════════════════ */

function P2_GridMock({ onNext }: { onNext: () => void }) {
  const sections = [
    { label: 'Técnicas de Estudio',   icon: <BrainCircuit className="w-3 h-3" />, color: 'from-[#003399] to-[#0077ff]', dark: true, clickable: true },
    { label: 'Gestión del Tiempo',    icon: <Clock className="w-3 h-3" />,        color: 'from-teal-50 to-white',       dark: false, clickable: false },
    { label: 'Normas APA',            icon: <BookOpenCheck className="w-3 h-3" />, color: 'from-white to-slate-50',     dark: false, clickable: false },
    { label: 'Herramientas Digitales',icon: <MonitorSmartphone className="w-3 h-3" />, color: 'from-sky-50 to-white',  dark: false, clickable: false },
    { label: 'Bienestar y Apoyo',     icon: <Heart className="w-3 h-3" />,         color: 'from-rose-500 to-pink-500', dark: true,  clickable: false },
    { label: 'Práctica Laboral',      icon: <Briefcase className="w-3 h-3" />,    color: 'from-amber-50 to-white',    dark: false, clickable: false, badge: 'Próx.' },
  ];
  return (
    <motion.div key="p2m1" variants={mockFade} initial="hidden" animate="visible" exit="exit" className="w-full flex flex-col gap-2.5">
      <div className="flex items-center gap-2 mb-0.5">
        <div className="w-7 h-7 bg-gradient-to-tr from-[#003399] to-[#0077ff] rounded-lg flex items-center justify-center text-white text-[9px] font-black">IPG+</div>
        <span className="text-xs font-black text-slate-800">APRENDE<span className="text-[#0077ff]">+</span></span>
      </div>
      <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-1.5 shadow-sm mb-1">
        <Search className="w-3 h-3 text-slate-400" />
        <span className="text-[11px] text-slate-400">Busca guías, planners...</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {sections.map((s, i) => (
          <motion.div
            key={i}
            whileHover={s.clickable ? { y: -2 } : {}}
            onClick={s.clickable ? onNext : undefined}
            className={`bg-gradient-to-br ${s.color} rounded-2xl p-2.5 border ${s.dark ? 'border-white/10' : 'border-slate-200'} ${s.clickable ? 'cursor-pointer ring-2 ring-[#0077ff]/30 shadow-md' : 'pointer-events-none opacity-65'}`}
          >
            <div className={`w-6 h-6 rounded-lg flex items-center justify-center mb-1.5 ${s.dark ? 'bg-white/20 text-white' : 'bg-white border border-slate-100 text-[#0077ff]'}`}>
              {s.icon}
            </div>
            <div className="flex items-center gap-1">
              <p className={`text-[10px] font-bold leading-tight ${s.dark ? 'text-white' : 'text-slate-700'}`}>{s.label}</p>
              {s.badge && <span className="text-[8px] bg-amber-100 text-amber-700 px-1 py-0.5 rounded font-bold ml-auto">{s.badge}</span>}
            </div>
          </motion.div>
        ))}
      </div>
      <p className="text-[10px] text-center text-[#0077ff] font-semibold animate-pulse mt-0.5">↑ Haz clic en "Técnicas de Estudio"</p>
    </motion.div>
  );
}

function P2_HubMock({ onNext }: { onNext: () => void }) {
  const mods = [
    { icon: <Brain className="w-3.5 h-3.5" />, color: 'from-blue-600 to-indigo-600', label: 'Estrategias de Estudio', count: '2 Recursos', clickable: true },
    { icon: <BookOpenCheck className="w-3.5 h-3.5" />, color: 'from-indigo-500 to-purple-500', label: 'Comprensión Lectora', count: '2 Recursos', clickable: false },
    { icon: <AlignLeft className="w-3.5 h-3.5" />, color: 'from-teal-500 to-emerald-400', label: 'Tips de Ortografía', count: '1 Recurso', clickable: false },
    { icon: <Target className="w-3.5 h-3.5" />, color: 'from-blue-600 to-cyan-500', label: 'Tips de Concentración', count: '1 Recurso', clickable: false },
  ];
  return (
    <motion.div key="p2m2" variants={mockFade} initial="hidden" animate="visible" exit="exit" className="w-full flex flex-col gap-2.5">
      <button className="flex items-center gap-1 text-[10px] text-slate-500 font-medium mb-0.5 hover:text-slate-700 transition-colors cursor-default">
        <ChevronRight className="w-3 h-3 rotate-180" /> Volver al inicio
      </button>
      <div className="relative rounded-2xl overflow-hidden p-3 bg-white/90 border border-slate-200 shadow-sm mb-0.5">
        <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-400/10 rounded-full blur-xl" />
        <span className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full text-[9px] font-bold border border-indigo-100 mb-1.5">
          <BookOpenCheck className="w-2.5 h-2.5" /> Técnicas de Estudio
        </span>
        <h4 className="text-sm font-black text-slate-900 leading-tight">Técnicas de Estudio y Aprendizaje</h4>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {mods.map((m, i) => (
          <motion.div
            key={i}
            whileHover={m.clickable ? { y: -2 } : {}}
            onClick={m.clickable ? onNext : undefined}
            className={`bg-white rounded-2xl border p-2.5 flex flex-col gap-1.5 ${m.clickable ? 'border-indigo-300 cursor-pointer shadow-md ring-2 ring-indigo-200' : 'border-slate-200 opacity-55 pointer-events-none'}`}
          >
            <div className={`w-7 h-7 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center text-white`}>{m.icon}</div>
            <p className="text-[10px] font-bold text-slate-800 leading-tight">{m.label}</p>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-slate-400">{m.count}</span>
              <ArrowRight className="w-3 h-3 text-slate-300" />
            </div>
          </motion.div>
        ))}
      </div>
      <p className="text-[10px] text-center text-indigo-600 font-semibold animate-pulse">↑ Haz clic en "Estrategias de Estudio"</p>
    </motion.div>
  );
}

function P2_DownloadMock({ onNext }: { onNext: () => void }) {
  const [done, setDone] = useState(false);
  const files = [
    { name: 'Estrategias de Estudio IPG', size: '850 KB', fmt: 'PDF', badgeClass: 'bg-red-50 text-red-600 border-red-100', active: true },
    { name: 'Guía Aprende+ CRAI IPG',     size: '1.4 MB', fmt: 'PDF', badgeClass: 'bg-red-50 text-red-600 border-red-100', active: false },
    { name: 'Infografía Tips de Estudio', size: '380 KB', fmt: 'PNG', badgeClass: 'bg-violet-50 text-violet-600 border-violet-100', active: false },
  ];
  return (
    <motion.div key="p2m3" variants={mockFade} initial="hidden" animate="visible" exit="exit" className="w-full flex flex-col gap-2">
      <button className="flex items-center gap-1 text-[10px] text-slate-500 font-medium hover:text-slate-700 transition-colors cursor-default">
        <ChevronRight className="w-3 h-3 rotate-180" /> Volver a Técnicas
      </button>
      {/* mini dark hero */}
      <div className="rounded-xl bg-gradient-to-br from-blue-900 via-indigo-900 to-indigo-950 p-2.5 text-white mb-1">
        <p className="text-[10px] font-black">Estrategias de Estudio Efectivas</p>
        <p className="text-[9px] text-blue-300 mt-0.5">Métodos validados para retención y comprensión</p>
      </div>
      <p className="text-[10px] font-bold text-slate-700 flex items-center gap-1">
        <Download className="w-3 h-3 text-teal-500" /> Recursos Descargables
      </p>
      {files.map((f, i) => (
        <div
          key={i}
          onClick={f.active && !done ? () => { setDone(true); setTimeout(onNext, 900); } : undefined}
          className={`flex items-center gap-2.5 p-2.5 rounded-xl border-2 transition-all ${
            f.active && !done ? 'cursor-pointer border-blue-200 bg-white hover:border-[#0077ff] hover:shadow-sm'
            : f.active && done ? 'border-green-200 bg-green-50'
            : 'border-slate-100 bg-white opacity-40 pointer-events-none'
          }`}
        >
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${i === 0 && done ? 'bg-green-100' : 'bg-slate-50 border border-slate-100'}`}>
            {i === 0 && done ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <FileText className="w-4 h-4 text-slate-400" />}
          </div>
          <div className="flex-1 min-w-0">
            <p className={`text-[10px] font-bold truncate ${i === 0 && done ? 'text-green-800' : 'text-slate-700'}`}>{f.name}</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className={`text-[9px] font-bold px-1 py-0.5 rounded border ${f.badgeClass}`}>{f.fmt}</span>
              <span className="text-[9px] text-slate-400">{f.size}</span>
            </div>
          </div>
          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${i === 0 && done ? 'bg-green-500 text-white' : f.active ? 'bg-[#0077ff] text-white' : 'bg-slate-100 text-slate-300'}`}>
            {i === 0 && done ? <CheckCircle2 className="w-3 h-3" /> : <Download className="w-3 h-3" />}
          </div>
        </div>
      ))}
      {!done && <p className="text-[10px] text-center text-[#0077ff] font-semibold animate-pulse">↑ Haz clic en el botón de descarga</p>}
      <p className="text-[9px] text-slate-400 text-center mt-0.5">Descarga automática. Compatible con todos los dispositivos.</p>
    </motion.div>
  );
}

function P2_SupportMock() {
  return (
    <motion.div key="p2m4" variants={mockFade} initial="hidden" animate="visible" exit="exit" className="w-full flex flex-col gap-2.5">
      {/* Completion badge */}
      <div className="flex items-center gap-2.5 bg-gradient-to-br from-[#003399] to-[#0077ff] rounded-2xl p-3.5 text-white mb-1">
        <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-xs font-black">¡Tutorial completado!</p>
          <p className="text-[10px] text-blue-200 mt-0.5">Ya conoces APRENDE+ de arriba a abajo.</p>
        </div>
      </div>

      {/* Contact cards */}
      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Centro de Apoyo CRAE IPG</p>

      <div className="flex flex-col gap-2">
        <a href="mailto:consejero.estudiante@ipg.cl" className="flex items-center gap-2.5 p-2.5 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all group cursor-pointer">
          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-[#0077ff] group-hover:bg-[#0077ff] group-hover:text-white transition-colors shrink-0">
            <Mail className="w-3.5 h-3.5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold text-slate-700">Correo Consejero</p>
            <p className="text-[9px] text-[#0077ff] truncate">consejero.estudiante@ipg.cl</p>
          </div>
          <ExternalLink className="w-3 h-3 text-slate-300" />
        </a>

        <a href="tel:+56984707929" className="flex items-center gap-2.5 p-2.5 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all group cursor-pointer">
          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-[#0077ff] group-hover:bg-[#0077ff] group-hover:text-white transition-colors shrink-0">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold text-slate-700">+56 9 8470 7929</p>
            <p className="text-[9px] text-slate-400">Lun – Vie · 09:00 – 18:00</p>
          </div>
          <ExternalLink className="w-3 h-3 text-slate-300" />
        </a>

        <div className="flex items-center gap-2 p-2.5 bg-amber-50 border border-amber-100 rounded-xl">
          <HelpCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <p className="text-[10px] text-amber-800">El botón <strong>"?"</strong> en la barra superior abre esta guía en cualquier momento.</p>
        </div>
      </div>

      <a href="/inicio" className="flex items-center justify-center gap-2 bg-[#003399] text-white py-2.5 rounded-xl text-xs font-bold hover:bg-[#0052cc] transition-colors mt-1">
        Ir a Aprende+ <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════ */
const VirtualTour: React.FC = () => {
  const [activePart, setActivePart] = useState<Part>(1);
  const [step, setStep] = useState(1);
  const [simulating, setSimulating] = useState(false);

  const switchPart = (p: Part) => {
    setActivePart(p);
    setStep(1);
    setSimulating(false);
  };

  const nextStep = () => {
    setSimulating(true);
    setTimeout(() => {
      setStep(s => s + 1);
      setSimulating(false);
    }, 600);
  };

  const resetPart = () => {
    setStep(1);
    setSimulating(false);
  };

  const steps = activePart === 1 ? part1Steps : part2Steps;
  const current = steps.find(s => s.id === step) ?? steps[0];
  const total = steps.length;
  const isLast = step === total;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 flex flex-col items-center">

      {/* ── Section header ────────────────────────────────── */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-[#0077ff]/10 text-[#003399] px-4 py-1.5 rounded-full text-sm font-bold mb-4 border border-[#0077ff]/20"
        >
          <Info className="w-4 h-4" />
          TUTORIAL INTERACTIVO
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">
          Domina <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003399] to-[#0077ff]">Aprende+</span> en minutos
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto text-lg">
          Guía interactiva paso a paso para estudiantes IPG. Sin tecnicismos, directa al punto.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start w-full">

        {/* ── LEFT: Instructions ────────────────────────────── */}
        <div className="space-y-5">

          {/* Part selector */}
          <div className="bg-slate-100 rounded-2xl p-1 flex gap-1">
            <button
              onClick={() => switchPart(1)}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${activePart === 1 ? 'bg-[#003399] text-white shadow-md' : 'text-slate-600 hover:text-slate-800'}`}
            >
              <LogIn className="w-4 h-4" />
              <span className="hidden sm:inline">01 ·</span> Inicio de Sesión
            </button>
            <button
              onClick={() => switchPart(2)}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${activePart === 2 ? 'bg-teal-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-800'}`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">02 ·</span> Navegar y Descargar
            </button>
          </div>

          {/* Part label */}
          <div className={`text-xs font-bold uppercase tracking-widest px-1 ${activePart === 1 ? 'text-[#003399]' : 'text-teal-600'}`}>
            {activePart === 1 ? '— Acceso al Sistema' : '— Exploración · Descargas · Apoyo'}
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: total }, (_, i) => (
              <div key={i} className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <motion.div
                  animate={{ width: step > i + 1 ? '100%' : step === i + 1 ? '100%' : '0%' }}
                  className={`h-full rounded-full ${step > i + 1 ? 'bg-emerald-400' : activePart === 1 ? 'bg-[#0077ff]' : 'bg-teal-500'}`}
                />
              </div>
            ))}
            <span className="text-xs font-bold text-slate-400 ml-1 shrink-0">{step}/{total}</span>
          </div>

          {/* Step card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activePart}-${step}`}
              variants={slideIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-slate-100"
            >
              <div className={`w-12 h-12 ${current.badgeColor} text-white rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                {current.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">{current.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{current.description}</p>
              <div className={`flex items-start gap-3 p-4 rounded-2xl text-sm border ${activePart === 1 ? 'bg-blue-50/80 text-[#003399] border-blue-100/50' : 'bg-teal-50/80 text-teal-800 border-teal-100/50'}`}>
                <MousePointer2 className="w-4 h-4 shrink-0 mt-0.5 animate-pulse" />
                <span className="font-medium leading-relaxed">{current.tip}</span>
              </div>

              {isLast && (
                <motion.button
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={resetPart}
                  className="mt-6 flex items-center justify-center gap-2 w-full py-3.5 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reiniciar {activePart === 1 ? 'Parte 1' : 'Parte 2'}
                </motion.button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── RIGHT: Simulator ──────────────────────────────── */}
        <div className="flex justify-center">
          <motion.div
            className="w-full max-w-[420px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,51,153,0.1)] border border-slate-200 overflow-hidden"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            {/* Browser chrome */}
            <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-3 flex-1 h-6 bg-white border border-slate-200 rounded-md flex items-center px-3">
                <span className="text-[10px] text-slate-400 font-mono">aprende.ipg.cl</span>
              </div>
            </div>

            {/* Mockup area */}
            <div className="p-5 min-h-[400px] flex flex-col justify-center items-center bg-slate-50 overflow-y-auto">
              <AnimatePresence mode="wait">
                {activePart === 1 && step === 1 && <P1_LoginMock   key="p1s1" onNext={nextStep} simulating={simulating} />}
                {activePart === 1 && step === 2 && <P1_WelcomeMock  key="p1s2" onNext={nextStep} />}
                {activePart === 2 && step === 1 && <P2_GridMock     key="p2s1" onNext={nextStep} />}
                {activePart === 2 && step === 2 && <P2_HubMock      key="p2s2" onNext={nextStep} />}
                {activePart === 2 && step === 3 && <P2_DownloadMock key="p2s3" onNext={nextStep} />}
                {activePart === 2 && step === 4 && <P2_SupportMock  key="p2s4" />}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default VirtualTour;
