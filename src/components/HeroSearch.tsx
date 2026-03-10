import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, PlayCircle, Image as ImageIcon, LayoutTemplate, MonitorPlay, Heart, ArrowRight } from 'lucide-react';

// Base de datos DEMO basada estrictamente en el "Plan de Implementación del CRAE"
const mockDatabase = [
  { id: 1, title: "Guía de Normas APA 7ma Edición", category: "Normas y Estándares", type: "PDF", icon: <FileText size={18}/>, href: "/normas-apa" },
  { id: 2, title: "Tutorial: Citar en Word y Gestores Bibliográficos", category: "Normas y Estándares", type: "Video", icon: <PlayCircle size={18}/>, href: "/normas-apa" },
  { id: 3, title: "Mapas Conceptuales y Cuadros Sinópticos", category: "Técnicas de Estudio", type: "Infografía", icon: <ImageIcon size={18}/>, href: "/tecnicas-estudio" },
  { id: 4, title: "Estrategias de Lectura Comprensiva y Repaso Espaciado", category: "Técnicas de Estudio", type: "Guía", icon: <FileText size={18}/>, href: "/tecnicas-estudio" },
  { id: 5, title: "Plantilla de Planificación Semanal y Mensual", category: "Gestión del Tiempo", type: "Plantilla", icon: <LayoutTemplate size={18}/>, href: "/gestion-tiempo" },
  { id: 6, title: "Equilibrar estudio, trabajo y vida personal", category: "Gestión del Tiempo", type: "Artículo", icon: <FileText size={18}/>, href: "/gestion-tiempo" },
  { id: 7, title: "Uso de plataforma institucional y Google Workspace", category: "Herramientas Digitales", type: "Tutorial", icon: <MonitorPlay size={18}/>, href: "/herramientas-digitales" },
  { id: 8, title: "Gestores de referencias: Mendeley y Zotero", category: "Herramientas Digitales", type: "Software", icon: <MonitorPlay size={18}/>, href: "/herramientas-digitales" },
  { id: 9, title: "Manual y Orientaciones para Informes de Práctica", category: "Práctica Laboral", type: "PDF", icon: <FileText size={18}/>, href: "/practica-laboral" },
  { id: 10, title: "Manejo del estrés y técnicas de autocuidado", category: "Bienestar y Apoyo", type: "Video", icon: <Heart size={18}/>, href: "/bienestar-apoyo" },
];

const HeroSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(mockDatabase);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Filtrar resultados en tiempo real
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
    } else {
      const filtered = mockDatabase.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  // Cerrar el dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-2xl relative group mx-auto" ref={searchRef}>
      {/* Brillo de fondo estético */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003399] to-[#0077ff] rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition duration-500"></div>
      
      {/* Contenedor del Input (Ajustado con p-1.5 para contener bien el botón en móvil) */}
      <div className={`relative flex items-center bg-white/95 backdrop-blur-xl border-2 transition-all duration-300 shadow-lg hover:shadow-xl p-1.5 md:p-2 ${isDropdownOpen && query.length > 0 ? 'border-[#0077ff]/50 rounded-t-2xl rounded-b-none' : 'border-slate-100 focus-within:border-[#0077ff]/50 rounded-2xl'}`}>
        
        {/* Lupa (Asegurada con shrink-0) */}
        <Search className="w-5 h-5 md:w-6 md:h-6 text-[#0077ff] ml-2 md:ml-3 shrink-0" />

        {/* Input (Con flex-1 y min-w-0 para que NUNCA empuje al botón) */}
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsDropdownOpen(true);
          }}
          onFocus={() => setIsDropdownOpen(true)}
          placeholder="¿Qué recurso necesitas hoy?"
          className="flex-1 min-w-0 bg-transparent border-none outline-none py-2 md:py-3 px-3 md:px-4 text-slate-700 placeholder:text-slate-400 text-sm md:text-lg text-ellipsis overflow-hidden"
          autoComplete="off"
        />
        
        {/* Botón Buscar (Visible siempre, shrink-0 para no cortarse jamás) */}
        <button
          className="shrink-0 bg-gradient-to-r from-[#003399] to-[#0077ff] hover:from-[#002266] hover:to-[#0055cc] text-white px-4 py-2.5 md:px-6 md:py-3 rounded-xl text-sm md:text-base font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-300 whitespace-nowrap"
        >
          Buscar
        </button>
      </div>

      {/* DROPDOWN DE RESULTADOS (Tiempo Real) */}
      <AnimatePresence>
        {isDropdownOpen && query.trim().length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-x-2 border-b-2 border-[#0077ff]/30 shadow-2xl rounded-b-2xl overflow-hidden z-50 flex flex-col"
          >
            {results.length > 0 ? (
              <div className="max-h-80 overflow-y-auto p-2">
                <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Resultados sugeridos
                </div>
                {results.map((item) => (
                  <a 
                    key={item.id} 
                    href={item.href}
                    className="flex items-center justify-between p-3 hover:bg-blue-50/80 rounded-xl transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                      <div className="w-10 h-10 rounded-lg bg-blue-100/50 flex items-center justify-center text-[#0077ff] shrink-0 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div className="flex flex-col text-left overflow-hidden">
                        <span className="text-slate-800 font-semibold text-sm group-hover:text-[#003399] transition-colors truncate">{item.title}</span>
                        <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                          <span className="text-xs text-slate-500 whitespace-nowrap">{item.category}</span>
                          <span className="hidden md:inline-block w-1 h-1 rounded-full bg-slate-300 shrink-0"></span>
                          <span className="text-[10px] font-bold text-[#0077ff] bg-blue-100 px-2 py-0.5 rounded-md whitespace-nowrap shrink-0">{item.type}</span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-slate-300 shrink-0 ml-2 group-hover:text-[#0077ff] group-hover:-rotate-45 transition-all opacity-0 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
                  <Search size={24} />
                </div>
                <p className="text-slate-600 font-medium text-sm md:text-base">No encontramos resultados para "<span className="text-slate-900 font-bold">{query}</span>"</p>
                <p className="text-xs md:text-sm text-slate-400 mt-1">Intenta con términos como "APA", "Tiempo" o "Plantilla".</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSearch;