import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, LogIn, Search, LayoutGrid, Download, Mail, Phone,
  CheckCircle2, ArrowRight, FileText, FileImage, Film,
  BrainCircuit, Clock, BookOpenCheck, MonitorSmartphone,
  Heart, Star, Shield, ExternalLink, ChevronRight, ChevronLeft,
  HelpCircle,
} from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const tabs = [
  { id: 'login',    label: 'Ingresar',    fullLabel: '¿Cómo entrar?',     Icon: LogIn },
  { id: 'search',   label: 'Buscar',      fullLabel: '¿Cómo buscar?',     Icon: Search },
  { id: 'navigate', label: 'Navegar',     fullLabel: '¿Cómo navegar?',    Icon: LayoutGrid },
  { id: 'download', label: 'Descargar',   fullLabel: '¿Cómo descargar?',  Icon: Download },
  { id: 'support',  label: 'Ayuda',       fullLabel: '¿Necesitas ayuda?', Icon: HelpCircle },
];

const Step: React.FC<{ n: number; text: string; sub?: string }> = ({ n, text, sub }) => (
  <div className="flex items-start gap-4">
    <div className="w-9 h-9 rounded-full bg-[#003399] text-white text-sm font-black flex items-center justify-center shrink-0 shadow-md">
      {n}
    </div>
    <div className="pt-1">
      <p className="font-bold text-slate-800 text-sm leading-snug">{text}</p>
      {sub && <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{sub}</p>}
    </div>
  </div>
);

/* ─── Login panel ─────────────────────────────────────────── */
const LoginPanel: React.FC = () => (
  <div className="flex flex-col gap-6">
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-[#003399] to-[#0077ff] rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg mx-auto mb-4">
        IPG<span className="text-cyan-300">+</span>
      </div>
      <h3 className="text-xl font-black text-slate-800">Ingresa con tu cuenta IPG</h3>
      <p className="text-slate-500 text-sm mt-1">Solo necesitas tu correo institucional</p>
    </div>

    <div className="flex flex-col gap-5">
      <Step n={1} text="Abre aprende.ipg.cl en tu navegador" sub="Funciona en computador, celular o tablet." />
      <Step n={2} text="Haz clic en «Continuar con cuenta Google»" sub="Aparecerá la pantalla de inicio de sesión de Google." />
      <Step n={3} text="Elige tu correo @ipg.cl o @alumnos.ipg.cl" sub="Debes usar tu cuenta institucional. Correos personales no tienen acceso." />
      <Step n={4} text="¡Listo! Ya estás dentro de APRENDE+" sub="No necesitas contraseña especial. El acceso es automático con tu cuenta Google." />
    </div>

    <div className="grid grid-cols-2 gap-3">
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-center">
        <div className="text-2xl font-black text-[#003399]">@ipg.cl</div>
        <p className="text-xs text-slate-500 mt-1">Docentes y staff</p>
      </div>
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-center">
        <div className="text-base font-black text-[#003399]">@alumnos.ipg.cl</div>
        <p className="text-xs text-slate-500 mt-1">Estudiantes</p>
      </div>
    </div>

    <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-100 rounded-2xl">
      <Shield className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
      <p className="text-xs text-amber-800">
        <strong>Acceso seguro:</strong> APRENDE+ usa la autenticación oficial de Google. Tus datos están protegidos por las políticas de IPG.
      </p>
    </div>
  </div>
);

/* ─── Search panel ────────────────────────────────────────── */
const SearchPanel: React.FC = () => (
  <div className="flex flex-col gap-6">
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-5 text-white">
      <Search className="w-8 h-8 mb-3 opacity-90" />
      <h3 className="text-lg font-black mb-1">El buscador encuentra todo</h3>
      <p className="text-indigo-100 text-sm">34 recursos indexados. Búsqueda instantánea sin recargar la página.</p>
    </div>

    <div className="flex flex-col gap-4">
      <Step n={1} text="Haz clic en el buscador de la pantalla principal" sub="Es la barra grande que dice «Busca guías, plantillas, recursos…»" />
      <Step n={2} text="Escribe lo que necesitas" sub="Puedes escribir: «APA», «planner», «concentración», «Word»…" />
      <Step n={3} text="Aparecen resultados instantáneamente" sub="Cada resultado muestra la sección, el formato (PDF, PNG…) y el tamaño." />
      <Step n={4} text="Elige entre 2 opciones por resultado" sub="Flecha → para ir a la sección. Nube ↓ para descargarlo directo." />
    </div>

    <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
        <Search className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-sm text-slate-500">estrategias de estudio</span>
      </div>
      {[
        { name: 'Estrategias de Estudio IPG', badge: 'Técnicas', fmt: 'PDF', badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-100', Icon: FileText, iconColor: 'text-red-500' },
        { name: 'Infografía Método Cornell',  badge: 'Técnicas', fmt: 'PNG', badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-100', Icon: FileImage, iconColor: 'text-violet-500' },
      ].map((r, i) => (
        <div key={i} className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 last:border-0">
          <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
            <r.Icon className={`w-4 h-4 ${r.iconColor}`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-700 truncate">{r.name}</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${r.badgeClass}`}>{r.badge}</span>
              <span className="text-[11px] text-slate-400">{r.fmt}</span>
            </div>
          </div>
          <div className="flex gap-1.5">
            <div className="w-7 h-7 rounded-full bg-[#003399] text-white flex items-center justify-center"><ArrowRight className="w-3 h-3" /></div>
            <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center"><Download className="w-3 h-3" /></div>
          </div>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-3 gap-2">
      {['APA', 'planner', 'ortografía', 'Word', 'Aula Virtual', 'podcast'].map(term => (
        <div key={term} className="bg-slate-100 text-slate-600 rounded-xl px-3 py-2 text-xs font-semibold text-center">
          "{term}"
        </div>
      ))}
    </div>
  </div>
);

/* ─── Navigate panel ──────────────────────────────────────── */
const sectionCards = [
  { Icon: BrainCircuit,     name: 'Técnicas de Estudio',    count: '5',    color: 'from-[#003399] to-[#0077ff]', dark: true },
  { Icon: Clock,            name: 'Gestión del Tiempo',     count: '4',    color: 'from-teal-50 to-cyan-50',     dark: false },
  { Icon: BookOpenCheck,    name: 'Normas APA',             count: '3',    color: 'from-white to-blue-50',       dark: false },
  { Icon: MonitorSmartphone,name: 'Herramientas Digitales', count: '18',   color: 'from-sky-50 to-white',        dark: false },
  { Icon: Heart,            name: 'Bienestar y Apoyo',      count: '4',    color: 'from-rose-500 to-pink-500',   dark: true },
];

const NavigatePanel: React.FC = () => (
  <div className="flex flex-col gap-6">
    <div className="text-center">
      <h3 className="text-xl font-black text-slate-800">5 Secciones de Recursos</h3>
      <p className="text-slate-500 text-sm mt-1">Haz clic en cualquier sección para ver sus módulos</p>
    </div>

    <div className="grid grid-cols-2 gap-2.5">
      {sectionCards.map((s, i) => (
        <div key={i} className={`rounded-2xl p-3.5 border bg-gradient-to-br ${s.color} ${s.dark ? 'border-white/10' : 'border-slate-200'}`}>
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 ${s.dark ? 'bg-white/20 text-white' : 'bg-white border border-slate-100 text-[#003399]'}`}>
            <s.Icon className="w-4 h-4" />
          </div>
          <p className={`text-xs font-bold leading-tight ${s.dark ? 'text-white' : 'text-slate-800'}`}>{s.name}</p>
          <p className={`text-[10px] mt-1 font-semibold ${s.dark ? 'text-blue-200' : 'text-slate-400'}`}>{s.count} recursos</p>
        </div>
      ))}
    </div>

    <div className="flex flex-col gap-4">
      <Step n={1} text="Entra a la sección que necesitas" sub="Desde la pantalla principal, haz clic en la tarjeta de esa área." />
      <Step n={2} text="Elige un sub-módulo" sub="Cada sección tiene de 3 a 18 módulos con temas específicos." />
      <Step n={3} text="Lee el contenido interactivo" sub="Encontrarás pasos numerados, estrategias y ejemplos prácticos." />
      <Step n={4} text="Descarga el material al final" sub="PDFs, infografías y videos están al final de cada módulo." />
    </div>

    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#003399]/5 to-[#0077ff]/5 border border-[#0077ff]/20 rounded-2xl">
      <Star className="w-5 h-5 text-[#0077ff] shrink-0" />
      <p className="text-sm text-slate-700">
        <strong>Tip:</strong> Herramientas Digitales tiene 18 guías: Aula Virtual, Google Drive, correo institucional y más.
      </p>
    </div>
  </div>
);

/* ─── Download panel ──────────────────────────────────────── */
const fmtCards = [
  { fmt: 'PDF',  Icon: FileText,  iconColor: 'text-red-500',    desc: 'Guías, manuales y apuntes. Se abre en cualquier dispositivo.', bg: 'bg-red-50 border-red-100',       textColor: 'text-red-700' },
  { fmt: 'PNG',  Icon: FileImage, iconColor: 'text-violet-500', desc: 'Infografías y esquemas visuales. Perfectas para imprimir.',    bg: 'bg-violet-50 border-violet-100', textColor: 'text-violet-700' },
  { fmt: 'MP4',  Icon: Film,      iconColor: 'text-blue-500',   desc: 'Videos tutoriales del CRAI IPG. Reproducibles en línea.',     bg: 'bg-blue-50 border-blue-100',     textColor: 'text-blue-700' },
];

const DownloadPanel: React.FC = () => (
  <div className="flex flex-col gap-6">
    <div className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-2xl p-5 text-white">
      <Download className="w-8 h-8 mb-3 opacity-90" />
      <h3 className="text-lg font-black mb-1">Todo gratuito. Todo disponible.</h3>
      <p className="text-teal-100 text-sm">Todos los archivos están en Google Drive de IPG. Sin costo, sin registro extra.</p>
    </div>

    <div className="flex flex-col gap-3">
      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tipos de archivo disponibles</h4>
      {fmtCards.map((f, i) => (
        <div key={i} className={`flex items-center gap-3 p-3.5 rounded-2xl border ${f.bg}`}>
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
            <f.Icon className={`w-5 h-5 ${f.iconColor}`} />
          </div>
          <div>
            <span className={`text-xs font-black ${f.textColor}`}>{f.fmt}</span>
            <p className="text-xs text-slate-600 mt-0.5">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="flex flex-col gap-4">
      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Cómo descargar</h4>
      <Step n={1} text="Entra al módulo que te interesa" sub="Por ejemplo: Técnicas de Estudio → Estrategias de Estudio." />
      <Step n={2} text="Desplázate hasta la sección de archivos" sub="Los recursos están al final de la página del módulo." />
      <Step n={3} text="Haz clic en el botón de descarga (↓)" sub="El archivo se descarga automáticamente desde Google Drive de IPG." />
    </div>

    <div className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl">
      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
      <p className="text-xs text-emerald-800">
        <strong>¿Problemas con la descarga?</strong> Asegúrate de estar con sesión iniciada en tu cuenta Google @ipg.cl / @alumnos.ipg.cl.
      </p>
    </div>
  </div>
);

/* ─── Support panel ───────────────────────────────────────── */
const SupportPanel: React.FC = () => (
  <div className="flex flex-col gap-6">
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
        <Heart className="w-9 h-9 text-white" />
      </div>
      <h3 className="text-xl font-black text-slate-800">Siempre hay alguien para ayudarte</h3>
      <p className="text-slate-500 text-sm mt-1">El equipo CRAE IPG está disponible de lunes a viernes.</p>
    </div>

    <div className="flex flex-col gap-3">
      <a href="mailto:consejero.estudiante@ipg.cl" className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl hover:border-[#0077ff] hover:shadow-md transition-all group">
        <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-[#0077ff] group-hover:bg-[#0077ff] group-hover:text-white transition-colors shrink-0">
          <Mail className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-slate-800 text-sm">Correo Consejero</p>
          <p className="text-[#0077ff] text-xs mt-0.5 font-medium">consejero.estudiante@ipg.cl</p>
        </div>
        <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-[#0077ff] transition-colors" />
      </a>

      <a href="tel:+56984707929" className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl hover:border-[#0077ff] hover:shadow-md transition-all group">
        <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-[#0077ff] group-hover:bg-[#0077ff] group-hover:text-white transition-colors shrink-0">
          <Phone className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-slate-800 text-sm">Teléfono de Soporte</p>
          <p className="text-slate-500 text-xs mt-0.5">+56 9 8470 7929</p>
          <p className="text-slate-400 text-[10px] mt-0.5">Lun – Vie · 09:00 a 18:00 hrs.</p>
        </div>
        <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-[#0077ff] transition-colors" />
      </a>

      <a href="/recorrido-virtual" className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#003399]/5 to-[#0077ff]/5 border border-[#0077ff]/20 rounded-2xl hover:border-[#0077ff]/40 hover:shadow-md transition-all group">
        <div className="w-11 h-11 bg-[#0077ff]/10 rounded-xl flex items-center justify-center text-[#003399] group-hover:bg-[#003399] group-hover:text-white transition-colors shrink-0">
          <LayoutGrid className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-slate-800 text-sm">Tutorial Interactivo</p>
          <p className="text-slate-500 text-xs mt-0.5">Aprende a usar APRENDE+ paso a paso</p>
        </div>
        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#003399] transition-colors" />
      </a>
    </div>

    <div className="bg-gradient-to-br from-[#003399] to-[#0077ff] rounded-2xl p-5 text-white text-center">
      <p className="text-sm font-bold mb-1">¿Primera vez en IPG?</p>
      <p className="text-blue-100 text-xs leading-relaxed">El Recorrido Virtual te enseña todo en menos de 5 minutos. ¡Sin tecnicismos!</p>
      <a href="/recorrido-virtual" className="inline-flex items-center gap-2 mt-3 bg-white text-[#003399] px-4 py-2 rounded-xl text-xs font-black hover:bg-blue-50 transition-colors">
        Iniciar recorrido virtual <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </div>
  </div>
);

/* ─── Panel map ───────────────────────────────────────────── */
const panels: Record<string, React.ReactNode> = {
  login:    <LoginPanel />,
  search:   <SearchPanel />,
  navigate: <NavigatePanel />,
  download: <DownloadPanel />,
  support:  <SupportPanel />,
};

/* ─── Main component ──────────────────────────────────────── */
const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!mounted) return null;

  const activeIdx = tabs.findIndex(t => t.id === activeTab);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="hm-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            style={{
              position: 'fixed', inset: 0, zIndex: 9998,
              background: 'rgba(15,23,42,0.65)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
            }}
          />

          {/* Modal wrapper */}
          <motion.div
            key="hm-modal"
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '1rem', pointerEvents: 'none',
            }}
          >
            <div
              onClick={e => e.stopPropagation()}
              style={{
                pointerEvents: 'auto',
                width: '100%', maxWidth: '680px', maxHeight: '92vh',
                background: '#ffffff',
                borderRadius: '2rem',
                boxShadow: '0 32px 80px rgba(0,51,153,0.18), 0 8px 24px rgba(0,0,0,0.12)',
                overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}
            >
              {/* ── Gradient header ─────────────────────────── */}
              <div style={{ position: 'relative', background: 'linear-gradient(135deg, #003399 0%, #004ab0 50%, #0077ff 100%)', padding: '1.25rem 1.5rem', flexShrink: 0, overflow: 'hidden' }}>
                {/* Decorative blobs */}
                <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '-40px', left: '-20px', width: 140, height: 140, background: 'rgba(0,119,255,0.2)', borderRadius: '50%', filter: 'blur(30px)', pointerEvents: 'none' }} />

                {/* Close button — conspicuous */}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Cerrar guía"
                  style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.18)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', transition: 'background 0.2s', zIndex: 10,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.35)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.18)')}
                >
                  <X style={{ width: 20, height: 20, strokeWidth: 2.5 }} />
                </button>

                <div style={{ position: 'relative', zIndex: 5, display: 'flex', alignItems: 'center', gap: '0.75rem', paddingRight: '3rem' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '0.875rem', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '0.8rem', flexShrink: 0 }}>
                    IPG<span style={{ color: '#67e8f9' }}>+</span>
                  </div>
                  <div>
                    <h2 style={{ color: '#fff', fontWeight: 900, fontSize: '1.125rem', lineHeight: 1.2, margin: 0 }}>Guía APRENDE+</h2>
                    <p style={{ color: 'rgba(186,230,253,0.9)', fontSize: '0.7rem', marginTop: 2 }}>Centro de Recursos Estudiantiles · IPG</p>
                  </div>
                </div>
              </div>

              {/* ── Tab bar — white, fully visible ─────────── */}
              <div style={{ flexShrink: 0, background: '#fff', borderBottom: '1px solid #f1f5f9', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', overflowX: 'auto', scrollbarWidth: 'none' }}>
                  {tabs.map(({ id, label, fullLabel, Icon }) => {
                    const active = activeTab === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setActiveTab(id)}
                        style={{
                          flexShrink: 0,
                          display: 'flex', alignItems: 'center', gap: '0.5rem',
                          padding: '0.875rem 1.25rem',
                          fontSize: '0.8125rem', fontWeight: active ? 700 : 500,
                          borderBottom: active ? '2.5px solid #003399' : '2.5px solid transparent',
                          color: active ? '#003399' : '#64748b',
                          background: active ? 'rgba(239,246,255,0.8)' : 'transparent',
                          cursor: 'pointer', whiteSpace: 'nowrap',
                          transition: 'all 0.18s',
                        }}
                        onMouseEnter={e => { if (!active) { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.color = '#1e293b'; } }}
                        onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#64748b'; } }}
                      >
                        <Icon style={{ width: 16, height: 16, color: active ? '#003399' : '#94a3b8', flexShrink: 0 }} />
                        <span className="hidden sm:inline">{fullLabel}</span>
                        <span className="sm:hidden">{label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ── Scrollable content ───────────────────────── */}
              <div style={{ flex: 1, overflowY: 'auto' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' } }}
                    exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
                    className="p-6"
                  >
                    {panels[activeTab]}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* ── Footer: prev / dots / next ──────────────── */}
              <div style={{ flexShrink: 0, padding: '0.875rem 1.5rem', borderTop: '1px solid #f1f5f9', background: 'rgba(248,250,252,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <button
                  type="button"
                  onClick={() => { if (activeIdx > 0) setActiveTab(tabs[activeIdx - 1].id); }}
                  disabled={activeIdx === 0}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', fontWeight: 600, color: activeIdx === 0 ? '#cbd5e1' : '#64748b', cursor: activeIdx === 0 ? 'not-allowed' : 'pointer', background: 'none', border: 'none', transition: 'color 0.15s' }}
                >
                  <ChevronLeft style={{ width: 16, height: 16 }} />
                  Anterior
                </button>

                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  {tabs.map(({ id }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setActiveTab(id)}
                      style={{
                        height: 8, width: activeTab === id ? 20 : 8,
                        borderRadius: 999, cursor: 'pointer', border: 'none',
                        background: activeTab === id ? '#003399' : '#e2e8f0',
                        transition: 'all 0.2s',
                      }}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (activeIdx < tabs.length - 1) setActiveTab(tabs[activeIdx + 1].id);
                    else onClose();
                  }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', fontWeight: 700, color: '#003399', cursor: 'pointer', background: 'none', border: 'none', transition: 'color 0.15s' }}
                >
                  {activeIdx === tabs.length - 1 ? '¡Comenzar!' : 'Siguiente'}
                  <ChevronRight style={{ width: 16, height: 16 }} />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default HelpModal;
