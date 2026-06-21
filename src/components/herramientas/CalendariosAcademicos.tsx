import React from 'react';
import { 
  ChevronLeft, Calendar, FileText, Download, Sparkles, 
  Globe, Users, Clock, AlertCircle, MapPin 
} from 'lucide-react';

export default function CalendariosAcademicos({ onBack }: { onBack: () => void }) {
  const resources = [
    { name: "Calendario Académico Modalidad Online 2026", size: "753 KB", driveId: "1sFKze5ajWJchrt5rliSXmuV_cChwRKV_" },
    { name: "Calendario Académico Modalidad Presencial 2026", size: "707 KB", driveId: "1UC9EMhBRlRnBd-xDby2Y-jJ6MTixv_sw" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
      
      {/* ⬅️ Botón Volver */}
      <button 
        onClick={onBack} 
        className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors mb-8 group font-medium bg-transparent border-none cursor-pointer"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-emerald-50 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver a Herramientas
      </button>

      <div className="flex flex-col gap-8">
        
        {/* 🚀 HERO SECTION */}
        <div className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-950 shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold border border-white/20 mb-6 uppercase tracking-wider text-emerald-200">
              <Calendar size={14} /> Planificación Estratégica 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Calendarios Académicos</h1>
            <p className="text-emerald-50 text-base leading-relaxed max-w-3xl">
              Organiza tu año académico con total precisión. Revisa rápidamente los <strong>inicios de clases, periodos de inscripción de asignaturas y recesos</strong> según tu modalidad de estudio (Online o Presencial).
            </p>
          </div>
        </div>

        {/* 📅 FECHAS CLAVE (Diseño de Taco de Calendario) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Columna: Modalidad Online */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden flex flex-col">
            <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center">
                  <Globe size={20} />
                </div>
                <h3 className="font-bold text-slate-800 text-lg">Modalidad Online</h3>
              </div>
              <span className="bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-full">5 Ciclos</span>
            </div>
            
            <div className="p-6 flex flex-col gap-5 flex-1">
              
              {/* Evento 1 Online */}
              <div className="flex gap-4 items-center group">
                <div className="flex flex-col bg-slate-50 rounded-lg overflow-hidden border border-slate-200 min-w-[65px] text-center shadow-sm group-hover:border-teal-300 transition-colors">
                  <span className="bg-teal-500 text-white text-[10px] font-bold uppercase py-1 tracking-wider">Marzo</span>
                  <span className="text-slate-700 font-black text-xl py-1.5">25</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm group-hover:text-teal-600 transition-colors">Inicio de Clases - Ciclo 1</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Estudiantes nuevos y antiguos online.</p>
                </div>
              </div>

              {/* Evento 2 Online */}
              <div className="flex gap-4 items-center group">
                <div className="flex flex-col bg-slate-50 rounded-lg overflow-hidden border border-slate-200 min-w-[65px] text-center shadow-sm group-hover:border-teal-300 transition-colors">
                  <span className="bg-teal-500 text-white text-[10px] font-bold uppercase py-1 tracking-wider">Mayo</span>
                  <span className="text-slate-700 font-black text-xl py-1.5">20</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm group-hover:text-teal-600 transition-colors">Inicio de Clases - Ciclo 2</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Renovación de módulos bimestrales.</p>
                </div>
              </div>

              {/* Evento 3 Online */}
              <div className="flex gap-4 items-center group">
                <div className="flex flex-col bg-slate-50 rounded-lg overflow-hidden border border-slate-200 min-w-[65px] text-center shadow-sm group-hover:border-teal-300 transition-colors">
                  <span className="bg-slate-400 text-white text-[10px] font-bold uppercase py-1 tracking-wider">Sept</span>
                  <span className="text-slate-700 font-black text-xl py-1.5">04</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Vacaciones Modalidad Online</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Receso estudiantil hasta el 22 de septiembre.</p>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-slate-100">
                <div className="flex items-start gap-2 text-xs text-slate-500">
                  <Clock className="shrink-0 text-teal-500" size={14} />
                  <span>Los ciclos 3, 4 y 5 inician el 15/Jul, 23/Sep y 18/Nov respectivamente.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna: Modalidad Presencial */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden flex flex-col">
            <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <h3 className="font-bold text-slate-800 text-lg">Modalidad Presencial</h3>
              </div>
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">Semestral</span>
            </div>
            
            <div className="p-6 flex flex-col gap-5 flex-1">
              
              {/* Evento 1 Presencial */}
              <div className="flex gap-4 items-center group">
                <div className="flex flex-col bg-slate-50 rounded-lg overflow-hidden border border-slate-200 min-w-[65px] text-center shadow-sm group-hover:border-emerald-400 transition-colors">
                  <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase py-1 tracking-wider">Marzo</span>
                  <span className="text-slate-700 font-black text-xl py-1.5">23</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm group-hover:text-emerald-600 transition-colors">Inicio 1° Semestre Académico</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Apertura oficial de clases en sede.</p>
                </div>
              </div>

              {/* Evento 2 Presencial */}
              <div className="flex gap-4 items-center group">
                <div className="flex flex-col bg-slate-50 rounded-lg overflow-hidden border border-slate-200 min-w-[65px] text-center shadow-sm group-hover:border-emerald-400 transition-colors">
                  <span className="bg-slate-400 text-white text-[10px] font-bold uppercase py-1 tracking-wider">Julio</span>
                  <span className="text-slate-700 font-black text-xl py-1.5">27</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Vacaciones de Invierno</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Receso estudiantil hasta el 15 de agosto.</p>
                </div>
              </div>

              {/* Evento 3 Presencial */}
              <div className="flex gap-4 items-center group">
                <div className="flex flex-col bg-slate-50 rounded-lg overflow-hidden border border-slate-200 min-w-[65px] text-center shadow-sm group-hover:border-emerald-400 transition-colors">
                  <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase py-1 tracking-wider">Agosto</span>
                  <span className="text-slate-700 font-black text-xl py-1.5">17</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm group-hover:text-emerald-600 transition-colors">Inicio 2° Semestre Académico</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Retorno a clases presenciales.</p>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-slate-100">
                <div className="flex items-start gap-2 text-xs text-slate-500">
                  <AlertCircle className="shrink-0 text-emerald-500" size={14} />
                  <span>Inscripción de asignaturas: 02 de Marzo al 20 de Marzo (1° Sem).</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 🗂️ DESCARGA DE PDFs OFICIALES */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mt-2">
          <div className="p-6 md:p-8 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-md">
              <Sparkles size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">Cronogramas Oficiales Detallados</h2>
              <p className="text-slate-400 text-xs md:text-sm font-medium mt-1">
                Descarga los documentos completos con las fechas de evaluaciones, feriados y trámites.
              </p>
            </div>
          </div>
          
          <div className="p-6 bg-slate-50/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resources.map((item, idx) => (
                <a 
                  href={`/api/download?id=${item.driveId}`} 
                  key={idx} 
                  className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400/50 hover:shadow-md transition-all group/file decoration-transparent cursor-pointer"
                >
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-600 border border-emerald-100">
                      <FileText size={22} />
                    </div>
                    <div className="truncate">
                      <h4 className="text-slate-700 font-bold text-sm truncate group-hover/file:text-emerald-600 transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-xs text-slate-400 font-medium">{item.size} • PDF</span>
                    </div>
                  </div>
                  <div className="shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/file:bg-emerald-600 group-hover/file:text-white transition-colors shadow-sm ml-2">
                    <Download size={18} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}