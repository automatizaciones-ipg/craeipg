import React, { useState, useEffect, useRef } from 'react';
import {
  Search, FileText, Download, FileImage, Headphones,
  Video, ArrowRight, Brain, Clock, BookOpen, Heart,
  MonitorSmartphone, X, ChevronRight
} from 'lucide-react';

interface Resource {
  name: string; category: string; section: string;
  driveId: string; format: string; size: string | null; keywords: string[];
}

const CATALOG: Resource[] = [
  { name: 'Estrategias de Estudio IPG', category: 'Técnicas de Estudio', section: '/tecnicas-estudio', driveId: '1hRi0RTpFRDu_Se4AvV3t86qgRD5EuvkK', format: 'PDF', size: '850 KB', keywords: ['cornell', 'pomodoro', 'active recall', 'método', 'memorización', 'estrategia'] },
  { name: 'Guía Aprende+ CRAI IPG', category: 'Técnicas de Estudio', section: '/tecnicas-estudio', driveId: '1kd0aNYEKF2pPeXnsxmQghfQhIvOdfd9z', format: 'PDF', size: '1.4 MB', keywords: ['guía', 'crai', 'aprende', 'plataforma'] },
  { name: 'Infografía Tips de Ortografía IPG', category: 'Técnicas de Estudio', section: '/tecnicas-estudio', driveId: '1YCAdp-Dd1MbnzNVcej91pyMz9C7lD6ft', format: 'PNG', size: '420 KB', keywords: ['ortografía', 'escritura', 'tips', 'tilde'] },
  { name: 'Infografía Tips de Concentración IPG', category: 'Técnicas de Estudio', section: '/tecnicas-estudio', driveId: '1jEZjCxerPaTeqRlRDIZ4d0IoWnNeK7lV', format: 'PNG', size: '380 KB', keywords: ['concentración', 'foco', 'tips', 'distracción'] },
  { name: 'Video Comprensión Lectora IPG', category: 'Técnicas de Estudio', section: '/tecnicas-estudio', driveId: '15ZPOYIyWxZx84lgHXItHcfKFVyQgXKqS', format: 'MP4', size: null, keywords: ['lectura', 'comprensión', 'video'] },
  { name: '5 Claves para Organizar tu Tiempo', category: 'Gestión del Tiempo', section: '/gestion-tiempo', driveId: '1z0sqG1U8vAsm9LHAu8j68lfuPINspaPU', format: 'PDF', size: '850 KB', keywords: ['organización', 'claves', 'tiempo'] },
  { name: 'Planner Semanal IPG (Imprimible)', category: 'Gestión del Tiempo', section: '/gestion-tiempo', driveId: '1kWxYnkyphtogOMEvVTfyJgKeyGAeKusH', format: 'PDF', size: '760 KB', keywords: ['planner', 'planificador', 'semanal', 'imprimible', 'agenda'] },
  { name: 'Claves de Productividad IPG', category: 'Gestión del Tiempo', section: '/gestion-tiempo', driveId: '1ilmqOq_Z3PR3krkPjLwjIIlhVNq4uWlK', format: 'PDF', size: '620 KB', keywords: ['productividad', 'eficiencia', 'deep work', 'eisenhower'] },
  { name: 'Cómo Planificar tu Tiempo de Estudio', category: 'Gestión del Tiempo', section: '/gestion-tiempo', driveId: '1DZxRJoMqvv5b1F_Stu2bOnQCCCEEjNwW', format: 'PDF', size: '710 KB', keywords: ['planificar', 'estudio', 'horario'] },
  { name: 'Manual Norma APA 7ma Edición', category: 'Normas APA', section: '/normas-apa', driveId: '1ndAjEVKJloQszvyqpPP8us96dxku0YjX', format: 'PDF', size: '3.2 MB', keywords: ['apa', 'norma', 'manual', 'citación', 'referencias', 'bibliografía'] },
  { name: 'Normas APA 7° Edición (Presentación)', category: 'Normas APA', section: '/normas-apa', driveId: '1CX_tBMx_GW8e4ZVmh9W2xf4uwQdc7iAc', format: 'PPTX', size: '4.1 MB', keywords: ['apa', 'presentación', 'ppt', 'powerpoint'] },
  { name: 'Video Tutorial APA 7 IPG', category: 'Normas APA', section: '/normas-apa', driveId: '1HhBEhjZKZzuTbsQ8qL2gFVDS01u-m5ur', format: 'MP4', size: null, keywords: ['apa', 'tutorial', 'video', 'citar'] },
  { name: '¿No Solo A? Estrategias de Bienestar', category: 'Bienestar y Apoyo', section: '/bienestar-apoyo', driveId: '17-u8-jhtGHvDlSDpG3-acAASM1ezlcy8', format: 'PDF', size: '980 KB', keywords: ['bienestar', 'apoyo', 'no solo a'] },
  { name: 'Tríptico de Bienestar Estudiantil IPG', category: 'Bienestar y Apoyo', section: '/bienestar-apoyo', driveId: '1vtIn_8VFkIeU3anp9tzHOdZ2AI-Mpqxe', format: 'PDF', size: '1.1 MB', keywords: ['bienestar', 'tríptico', 'autocuidado', 'salud mental'] },
  { name: 'Guía Cuídate para Estudiar Mejor', category: 'Bienestar y Apoyo', section: '/bienestar-apoyo', driveId: '1HI4_72xuXpalJ13TxTKxqRxAAyl8VJR3', format: 'PDF', size: '760 KB', keywords: ['cuidado', 'salud', 'bienestar', 'sueño'] },
  { name: 'Podcast de Bienestar Estudiantil IPG', category: 'Bienestar y Apoyo', section: '/bienestar-apoyo', driveId: '1rTpAUay76Zho-Gw4vEtgQfL6xXBuyk-X', format: 'M4A', size: '18 MB', keywords: ['podcast', 'audio', 'bienestar'] },
  { name: 'Cómo ingresar a la Plataforma Virtual IPG', category: 'Herramientas Digitales', section: '/herramientas-digitales', driveId: '1gv5LyoTrfbnYoxNEQrM50xYr9ez4Fhp6', format: 'PDF', size: '710 KB', keywords: ['aula virtual', 'plataforma', 'acceso'] },
  { name: 'Manual Completo de Google Drive IPG', category: 'Herramientas Digitales', section: '/herramientas-digitales', driveId: '1w7L1R9_PprWJhL0nzd234S8Vo-mx0jKc', format: 'PDF', size: '2.2 MB', keywords: ['google drive', 'drive', 'nube'] },
  { name: 'Manual de Uso Básico de Microsoft Word', category: 'Herramientas Digitales', section: '/herramientas-digitales', driveId: '1jgKcHbljDTYX6jcVqDvAydyYyFVQ8YZS', format: 'PDF', size: '1.2 MB', keywords: ['word', 'microsoft', 'office', 'documento'] },
  { name: 'Calendario Académico Online 2026', category: 'Herramientas Digitales', section: '/herramientas-digitales', driveId: '1sFKze5ajWJchrt5rliSXmuV_cChwRKV_', format: 'PDF', size: '753 KB', keywords: ['calendario', 'online', '2026', 'fechas'] },
  { name: 'Calendario Académico Presencial 2026', category: 'Herramientas Digitales', section: '/herramientas-digitales', driveId: '1UC9EMhBRlRnBd-xDby2Y-jJ6MTixv_sw', format: 'PDF', size: '707 KB', keywords: ['calendario', 'presencial', '2026'] },
  { name: 'Guía de Acceso a Correo Institucional IPG', category: 'Herramientas Digitales', section: '/herramientas-digitales', driveId: '1A1Zeubo0N26jvT9JWJjjvVmAC6V5Dw7C', format: 'PDF', size: '767 KB', keywords: ['correo', 'email', 'institucional'] },
  { name: 'Instructivo de Acceso al Portal Estudiantil', category: 'Herramientas Digitales', section: '/herramientas-digitales', driveId: '1WzTBnrxqndLldO0wQT4XQy8ejTRH6XwO', format: 'PDF', size: '836 KB', keywords: ['portal', 'acceso', 'estudiante'] },
  { name: 'Guía de Rematrícula Estudiantes Antiguos 2026', category: 'Herramientas Digitales', section: '/herramientas-digitales', driveId: '1chwpIFapVKJ2F-sx0n6c_emIWN1WUDzK', format: 'PDF', size: '1.6 MB', keywords: ['rematrícula', 'matrícula', 'renovación'] },
  { name: 'Cómo Subir un Encargo (Archivo PDF)', category: 'Herramientas Digitales', section: '/herramientas-digitales', driveId: '1QmChARaZ-by6p_ulTtkeoL_Zr8biGPxm', format: 'PDF', size: '900 KB', keywords: ['encargo', 'tarea', 'subir'] },
  { name: 'Cómo Revisar el Libro de Calificaciones', category: 'Herramientas Digitales', section: '/herramientas-digitales', driveId: '1hnRfWvIWD0YNSzxAK6oRtmp6Jbp_nMkV', format: 'PDF', size: '562 KB', keywords: ['calificaciones', 'notas', 'libro'] },
  { name: 'Cómo Responder una POL (Cuestionario)', category: 'Herramientas Digitales', section: '/herramientas-digitales', driveId: '1NaFxnIUX0EQMS-vUdgC3mGTaYxp86jvS', format: 'PDF', size: '639 KB', keywords: ['pol', 'cuestionario', 'evaluación'] },
  { name: 'Cómo Participar en un Foro Sumativo', category: 'Herramientas Digitales', section: '/herramientas-digitales', driveId: '1k83KG77o935YFoWv8kylCNhvA8f74MiA', format: 'PDF', size: '1.0 MB', keywords: ['foro', 'sumativo', 'participar'] },
  { name: 'Guía de Certificados Online IPG', category: 'Herramientas Digitales', section: '/herramientas-digitales', driveId: '1fSD1MuseHfYq5N37J0npmTZr2qP9ztX3', format: 'PDF', size: '1.1 MB', keywords: ['certificado', 'online', 'alumno'] },
  { name: 'Guía de Acceso y Autenticación CRAI IPG', category: 'Herramientas Digitales', section: '/herramientas-digitales', driveId: '1AvKdtlFVgj4YXZY7eEdeVCLytJAvx_3l', format: 'PDF', size: '433 KB', keywords: ['crai', 'acceso', 'autenticación'] },
  { name: 'Instructivo de Inscripción de Asignaturas', category: 'Herramientas Digitales', section: '/herramientas-digitales', driveId: '1g0XGtD7f_GcnvyqLZSALd7eHccHJ3N2w', format: 'PDF', size: '1.1 MB', keywords: ['inscripción', 'asignatura', 'ramo'] },
  { name: 'Cómo Responder una Evaluación Integradora', category: 'Herramientas Digitales', section: '/herramientas-digitales', driveId: '1htHQV7kQgDUhainfnjojaCn6XHWyRZop', format: 'PDF', size: '681 KB', keywords: ['evaluación', 'integradora'] },
  { name: 'Cómo Responder una Evaluación Formativa', category: 'Herramientas Digitales', section: '/herramientas-digitales', driveId: '1N-J0JKEN4cjLskk-uvTA9i0bHU3j_wj-', format: 'PDF', size: '645 KB', keywords: ['evaluación', 'formativa'] },
  { name: 'Configuración de Página Personal (Perfil)', category: 'Herramientas Digitales', section: '/herramientas-digitales', driveId: '1OGYnnscr9caU0mPqxUZ0idC3aS6pCqjb', format: 'PDF', size: '788 KB', keywords: ['perfil', 'configuración'] },
];

const SECTION_META: Record<string, { icon: React.ReactNode; color: string; label: string }> = {
  'Técnicas de Estudio':    { icon: <Brain size={11}/>,             color: 'bg-indigo-50 text-indigo-600 border-indigo-100',  label: 'Técnicas' },
  'Gestión del Tiempo':     { icon: <Clock size={11}/>,             color: 'bg-emerald-50 text-emerald-600 border-emerald-100', label: 'Tiempo' },
  'Normas APA':             { icon: <BookOpen size={11}/>,          color: 'bg-blue-50 text-blue-600 border-blue-100',        label: 'APA' },
  'Bienestar y Apoyo':      { icon: <Heart size={11}/>,             color: 'bg-rose-50 text-rose-600 border-rose-100',        label: 'Bienestar' },
  'Herramientas Digitales': { icon: <MonitorSmartphone size={11}/>, color: 'bg-sky-50 text-sky-600 border-sky-100',           label: 'Digital' },
};

const FORMAT_ICON: Record<string, React.ReactNode> = {
  'PDF':  <FileText className="w-3.5 h-3.5 text-red-500"/>,
  'PNG':  <FileImage className="w-3.5 h-3.5 text-violet-500"/>,
  'MP4':  <Video className="w-3.5 h-3.5 text-blue-500"/>,
  'PPTX': <FileText className="w-3.5 h-3.5 text-orange-500"/>,
  'M4A':  <Headphones className="w-3.5 h-3.5 text-purple-500"/>,
};

const FORMAT_BADGE: Record<string, string> = {
  'PDF':  'bg-red-50 text-red-600 border-red-100',
  'PNG':  'bg-violet-50 text-violet-600 border-violet-100',
  'MP4':  'bg-blue-50 text-blue-700 border-blue-100',
  'PPTX': 'bg-orange-50 text-orange-600 border-orange-100',
  'M4A':  'bg-purple-50 text-purple-600 border-purple-100',
};

const QUICK_SECTIONS = [
  { label: 'Técnicas de Estudio',    href: '/tecnicas-estudio',    icon: <Brain size={13}/>,             color: 'hover:bg-indigo-50 hover:text-indigo-700' },
  { label: 'Gestión del Tiempo',     href: '/gestion-tiempo',      icon: <Clock size={13}/>,             color: 'hover:bg-emerald-50 hover:text-emerald-700' },
  { label: 'Normas APA',             href: '/normas-apa',          icon: <BookOpen size={13}/>,          color: 'hover:bg-blue-50 hover:text-blue-700' },
  { label: 'Herramientas Digitales', href: '/herramientas-digitales', icon: <MonitorSmartphone size={13}/>, color: 'hover:bg-sky-50 hover:text-sky-700' },
  { label: 'Bienestar y Apoyo',      href: '/bienestar-apoyo',     icon: <Heart size={13}/>,             color: 'hover:bg-rose-50 hover:text-rose-700' },
];

function searchCatalog(query: string): Resource[] {
  if (query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  return CATALOG
    .map(r => {
      let s = 0;
      const n = r.name.toLowerCase();
      if (n.includes(q)) s += 10;
      if (n.startsWith(q)) s += 5;
      r.keywords.forEach(kw => { if (kw.includes(q) || q.includes(kw)) s += 3; });
      if (r.category.toLowerCase().includes(q)) s += 4;
      return { resource: r, score: s };
    })
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(x => x.resource);
}

const HeroSearch: React.FC = () => {
  const [query, setQuery]     = useState('');
  const [results, setResults] = useState<Resource[]>([]);
  const [isOpen, setIsOpen]   = useState(false);
  const [focused, setFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false); setFocused(false);
      }
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  useEffect(() => {
    if (query.trim().length < 2) { setResults([]); setIsOpen(focused); return; }
    setResults(searchCatalog(query));
    setIsOpen(true);
  }, [query, focused]);

  const showQuick   = focused && query.trim().length < 2;
  const showResults = isOpen  && query.trim().length >= 2;

  return (
    <div ref={searchRef} className="relative w-full z-[110]">

      {/* Input */}
      <div className={`relative flex items-center transition-all duration-300 ${focused ? 'drop-shadow-[0_8px_32px_rgba(0,51,153,0.18)]' : 'drop-shadow-none'}`}>
        <div className="absolute left-5 text-slate-400 pointer-events-none z-10 transition-colors duration-200" style={focused ? { color: '#003399' } : {}}>
          <Search className="w-5 h-5"/>
        </div>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => { setFocused(true); setIsOpen(true); }}
          onKeyDown={e => {
            if (e.key === 'Enter' && results.length > 0) {
              window.location.href = results[0].section;
            } else if (e.key === 'Escape') {
              setIsOpen(false);
              inputRef.current?.blur();
            }
          }}
          aria-label="Buscar recursos"
          placeholder="Busca guías, planners, tutoriales, manuales…"
          className="w-full pl-14 pr-12 py-4 md:py-[18px] bg-white text-slate-800 placeholder-slate-400 text-[15px] font-medium rounded-2xl
                     border-2 border-slate-200 focus:outline-none focus:border-[#003399] transition-colors duration-200 shadow-sm"
        />

        {query && (
          <button
            onClick={() => { setQuery(''); inputRef.current?.focus(); }}
            aria-label="Limpiar búsqueda"
            className="absolute right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"
          >
            <X size={15}/>
          </button>
        )}
      </div>

      {/* Dropdown */}
      {(showQuick || showResults) && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-slate-200/80 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden z-[120]">

          {showQuick && (
            <div className="p-3">
              <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
                Explorar · {CATALOG.length} recursos disponibles
              </p>
              <div className="grid grid-cols-2 gap-1">
                {QUICK_SECTIONS.map(s => (
                  <a key={s.href} href={s.href}
                     className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-slate-600 transition-all group ${s.color}`}>
                    <div className="w-6 h-6 flex items-center justify-center">{s.icon}</div>
                    <span className="text-[12px] font-semibold leading-tight truncate">{s.label}</span>
                    <ChevronRight size={12} className="ml-auto opacity-40 group-hover:opacity-70 flex-shrink-0"/>
                  </a>
                ))}
              </div>
            </div>
          )}

          {showResults && (
            <div className="max-h-[380px] overflow-y-auto custom-scrollbar">
              {results.length > 0 ? (
                <div className="p-2">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 mb-1.5">
                    {results.length} resultado{results.length !== 1 ? 's' : ''}
                  </div>
                  {results.map((r, i) => {
                    const sm = SECTION_META[r.category];
                    return (
                      <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group">
                        <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:shadow-sm transition-all">
                          {FORMAT_ICON[r.format] ?? <FileText className="w-4 h-4 text-slate-400"/>}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-semibold text-slate-700 group-hover:text-slate-900 truncate leading-tight">{r.name}</p>
                          <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                            {sm && (
                              <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded-md border ${sm.color}`}>
                                {sm.icon} {sm.label}
                              </span>
                            )}
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md border ${FORMAT_BADGE[r.format] ?? 'bg-slate-50 text-slate-500 border-slate-100'}`}>{r.format}</span>
                            {r.size && <span className="text-[10px] text-slate-400">{r.size}</span>}
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <a href={r.section} title="Ver sección"
                             className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#003399] hover:text-white transition-all">
                            <ArrowRight size={13}/>
                          </a>
                          <a href={`/api/download?id=${r.driveId}`} title="Descargar"
                             className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#003399] hover:text-white transition-all">
                            <Download size={13}/>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-3">
                    <Search className="w-4 h-4 text-slate-400"/>
                  </div>
                  <p className="text-[13px] font-semibold text-slate-700 mb-1">Sin resultados para "{query}"</p>
                  <p className="text-[11px] text-slate-400">Intenta: "planner", "APA", "Word", "foro"…</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HeroSearch;
