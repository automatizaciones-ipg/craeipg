import React from 'react';
import { 
  ChevronLeft, LayoutDashboard, FileText, Download, Sparkles, 
  AlertCircle, Lock, User, CheckCircle2, ShieldCheck, 
  BookOpen, LifeBuoy, ExternalLink 
} from 'lucide-react';

export default function PortalEstudiantil({ onBack }: { onBack: () => void }) {
  const resources = [
    { name: "Instructivo de Acceso al Portal", size: "836 KB", driveId: "1WzTBnrxqndLldO0wQT4XQy8ejTRH6XwO" },
    { name: "Guía de Certificados Online", size: "1.1 MB", driveId: "1fSD1MuseHfYq5N37J0npmTZr2qP9ztX3" },
    { name: "Instructivo de Inscripción de Asignaturas", size: "1.1 MB", driveId: "1g0XGtD7f_GcnvyqLZSALd7eHccHJ3N2w" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
      
      {/* ⬅️ Botón Volver */}
      <button 
        onClick={onBack} 
        className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-700 transition-colors mb-8 group font-medium bg-transparent border-none cursor-pointer"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-cyan-50 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver a Herramientas
      </button>

      <div className="flex flex-col gap-8">
        
        {/* 🚀 HERO SECTION */}
        <div className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950 shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold border border-white/20 mb-6 uppercase tracking-wider text-cyan-200">
              <LayoutDashboard size={14} /> Gestión Académica Global
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Portal Estudiantil IPG</h1>
            
            <p className="text-blue-50 text-base leading-relaxed max-w-3xl mb-6">
              El Portal Estudiantil es tu centro administrativo personal. Desde aquí podrás revisar tus <strong>notas y asistencia</strong>, descargar <strong>certificados oficiales</strong>, ver tus <strong>horarios</strong> y acceder a toda tu información académica y financiera de forma segura.
            </p>

            <a 
              href="https://ipg.umas.cl/Alumnos/Login" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-6 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-cyan-500/30"
            >
              Ingresar al Portal Ahora <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* 🔑 CREDENCIALES DE ACCESO (Visualmente claras para evitar errores) */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500"></div>
          
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Tus Credenciales</h3>
            <p className="text-slate-500 text-sm">Formato exacto para iniciar sesión por primera vez.</p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-slate-400 font-bold uppercase text-xs tracking-wider">
                <User size={14} /> Usuario (RUT)
              </div>
              <p className="text-slate-800 font-medium font-mono text-lg tracking-wide">
                12345678<span className="text-cyan-600 font-bold">-9</span>
              </p>
              <p className="text-xs text-slate-500">Sin puntos y <strong>con guion</strong>.</p>
            </div>
            
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-slate-400 font-bold uppercase text-xs tracking-wider">
                <Lock size={14} /> Contraseña Inicial
              </div>
              <p className="text-slate-800 font-medium font-mono text-lg tracking-wide">
                12345678
              </p>
              <p className="text-xs text-slate-500">Sin puntos, <strong>sin guion y sin dígito verificador</strong>.</p>
            </div>
          </div>
        </div>

        {/* 🧠 GUÍAS DE TRÁMITES (Certificados e Inscripción) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Guía: Certificados Online */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Descargar Certificados</h3>
            </div>
            
            <ol className="list-none space-y-4 text-sm text-slate-600 flex-1 relative">
              <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-blue-100 -z-10"></div>
              
              <li className="flex gap-4">
                <div className="shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-md">1</div>
                <div>Ve a la sección <strong>"Mis Finanzas"</strong> y luego <strong>"Certificados Online"</strong>.</div>
              </li>
              <li className="flex gap-4">
                <div className="shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-md">2</div>
                <div>Busca y haz clic sobre el certificado que necesitas.</div>
              </li>
              <li className="flex gap-4">
                <div className="shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-md">3</div>
                <div>Escoge el <strong>"Tipo de Fin"</strong> solicitado y presiona <strong>Aceptar</strong>.</div>
              </li>
              <li className="flex gap-4">
                <div className="shrink-0 w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xs shadow-md"><CheckCircle2 size={16} /></div>
                <div>Haz clic en <strong>Descargar</strong>. Se guardará un PDF. (Asegúrate de que tu navegador permita descargas automáticas).</div>
              </li>
            </ol>
          </div>

          {/* Guía: Inscripción de Asignaturas */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Inscripción de Asignaturas</h3>
            </div>
            
            <ol className="list-none space-y-4 text-sm text-slate-600 flex-1 relative">
              <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-indigo-100 -z-10"></div>
              
              <li className="flex gap-4">
                <div className="shrink-0 w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-md">1</div>
                <div>Inicia sesión y haz clic en <strong>"Inscripción Normal de Asignaturas"</strong>.</div>
              </li>
              <li className="flex gap-4">
                <div className="shrink-0 w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-md">2</div>
                <div>Presiona <strong>"Revisión de Secciones y Horarios"</strong>.</div>
              </li>
              <li className="flex gap-4">
                <div className="shrink-0 w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-md">3</div>
                <div>Selecciona pinchando los círculos (<strong>solo 1 sección por asignatura</strong>) y presiona <strong>Aceptar</strong>.</div>
              </li>
              <li className="flex gap-4">
                <div className="shrink-0 w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xs shadow-md"><CheckCircle2 size={16} /></div>
                <div>Revisa que estén todas y presiona <strong>"Terminar Inscripción"</strong>. Verás tu resumen final.</div>
              </li>
            </ol>
          </div>

        </div>

        {/* 🆘 SOPORTE TÉCNICO Y DESCARGA (Layout Mixto) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          
          {/* Descarga de PDFs Oficiales */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-md"><Sparkles size={18} /></div>
              <div>
                <h2 className="text-lg font-bold text-slate-800">Guías Oficiales PDF</h2>
                <p className="text-slate-400 text-xs font-medium">Documentos de respaldo detallados</p>
              </div>
            </div>
            <div className="p-4 bg-slate-50/50 flex-1 flex flex-col gap-3">
              {resources.map((item, idx) => (
                <a href={`/api/download?id=${item.driveId}`} key={idx} className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-cyan-500/50 hover:shadow-md transition-all group/file decoration-transparent cursor-pointer">
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-cyan-50 text-cyan-600 border border-cyan-100"><FileText size={20} /></div>
                    <div className="truncate">
                      <h4 className="text-slate-700 font-bold text-sm truncate group-hover/file:text-cyan-600 transition-colors">{item.name}</h4>
                      <span className="text-xs text-slate-400 font-medium">{item.size} • PDF</span>
                    </div>
                  </div>
                  <div className="shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/file:bg-cyan-600 group-hover/file:text-white transition-colors shadow-sm"><Download size={16} /></div>
                </a>
              ))}
            </div>
          </div>

          {/* Contacto Soporte y Recuperación */}
          <div className="bg-slate-800 rounded-3xl border border-slate-700 shadow-xl overflow-hidden p-8 text-white flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col gap-6">
              
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-slate-700 text-cyan-400 flex items-center justify-center">
                  <AlertCircle size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">¿Olvidaste tu contraseña?</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Haz clic en <strong>"¿Olvidaste tu contraseña?"</strong> en el login y sigue las instrucciones enviadas a tu correo institucional.
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-slate-700"></div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-slate-700 text-blue-400 flex items-center justify-center">
                  <LifeBuoy size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Soporte y Casos Especiales</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    Si persisten problemas de acceso escribe al soporte. Para problemas con asignaturas contacta a tu <strong>Jefe de Carrera</strong>.
                  </p>
                  <a href="mailto:soporte.santiago@ipg.cl" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl font-medium transition-colors text-sm">
                    soporte.santiago@ipg.cl
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}