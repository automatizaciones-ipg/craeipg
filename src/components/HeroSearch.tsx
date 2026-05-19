import React, { useState, useEffect, useRef } from 'react';
import { Search, Loader2, FileText, Download, FileArchive, FileImage, FileUp } from 'lucide-react';

interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  size?: string;
}

// Función helper para formatear los pesos binarios que nos da Google
const formatBytes = (bytesStr: string | undefined) => {
  if (!bytesStr) return 'Tamaño variable';
  const bytes = parseInt(bytesStr, 10);
  if (isNaN(bytes) || bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
};

// Función helper para pintar iconos dinámicos según el tipo de archivo de Google Drive
const getFileIcon = (mimeType: string) => {
  if (mimeType.includes('pdf')) return <FileText className="text-red-500 w-5 h-5" />;
  if (mimeType.includes('word') || mimeType.includes('document')) return <FileText className="text-blue-500 w-5 h-5" />;
  if (mimeType.includes('spreadsheet') || mimeType.includes('excel')) return <FileText className="text-emerald-500 w-5 h-5" />;
  if (mimeType.includes('zip') || mimeType.includes('rar')) return <FileArchive className="text-amber-500 w-5 h-5" />;
  if (mimeType.includes('image')) return <FileImage className="text-purple-500 w-5 h-5" />;
  return <FileUp className="text-slate-400 w-5 h-5" />;
};

const HeroSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<DriveFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Cerrar el menú desplegable si el alumno hace clic fuera del componente
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Efecto reactivo encargado de consultar nuestra API con técnicas de debounce nativas sencillas
  useEffect(() => {
    if (query.trim().length < 3) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      setLoading(true);
      setIsOpen(true);
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        if (response.ok) {
          const data = await response.json();
          setResults(data);
        }
      } catch (error) {
        console.error("Error buscando recursos:", error);
      } finally {
        setLoading(false);
      }
    }, 350); // 350ms de delay para no saturar al servidor mientras el usuario teclea

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto z-[110]">
      {/* Barra de Entrada de Datos */}
      <div className="relative flex items-center w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim().length >= 3 && setIsOpen(true)}
          placeholder="Busca guías, plantillas, planners..."
          className="w-full px-6 py-4.5 pl-14 pr-12 text-slate-700 bg-slate-50/80 backdrop-blur-md border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-base font-medium placeholder-slate-400 shadow-inner"
        />
        <div className="absolute left-5 text-slate-400">
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
          ) : (
            <Search className="w-5 h-5" />
          )}
        </div>
      </div>

      {/* MENÚ DESPLEGABLE PREDICTIVO */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-2xl overflow-hidden z-[120] transform transition-all duration-200">
          {results.length > 0 ? (
            <div className="p-2 max-h-[380px] overflow-y-auto">
              <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                Recursos Coincidentes ({results.length})
              </div>
              {results.map((file) => (
                <a
                  key={file.id}
                  href={`/api/download?id=${file.id}`} // Interconexión directa al motor de descarga de la hora 4
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 group transition-all text-left"
                >
                  <div className="flex items-center gap-3.5 max-w-[80%]">
                    <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-white group-hover:shadow-sm transition-all flex-shrink-0">
                      {getFileIcon(file.mimeType)}
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-slate-700 font-semibold text-sm truncate group-hover:text-blue-700 transition-colors">
                        {file.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-medium">
                        {formatBytes(file.size)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all">
                    <Download size={14} />
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-slate-500 text-sm">
              {loading ? (
                <p className="font-medium animate-pulse">Consultando el repositorio institucional...</p>
              ) : (
                <p>No se encontraron recursos con "<span className="font-semibold text-slate-700">{query}</span>"</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HeroSearch;