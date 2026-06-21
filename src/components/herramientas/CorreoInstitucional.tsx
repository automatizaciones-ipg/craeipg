import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, Mail, FileText, Download, Sparkles, 
  AlertCircle, Lock, Laptop, Smartphone, LifeBuoy 
} from 'lucide-react';

export default function CorreoInstitucional({ onBack }: { onBack: () => void }) {
  const [correoPassword, setCorreoPassword] = useState('••••••••');
  useEffect(() => {
    fetch('/api/platform-info')
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data?.correo?.password) setCorreoPassword(data.correo.password); })
      .catch(() => {});
  }, []);

  const resources = [
    { name: "Guía Oficial de Acceso a Correo Institucional IPG", size: "767 KB", driveId: "1A1Zeubo0N26jvT9JWJjjvVmAC6V5Dw7C" }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
      
      {/* Botón Volver */}
      <button 
        onClick={onBack} 
        className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-700 transition-colors mb-8 group font-medium bg-transparent border-none cursor-pointer"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-blue-50 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver a Herramientas
      </button>

      <div className="flex flex-col gap-8">
        
        {/* 🚀 HERO SECTION: La importancia del correo */}
        <div className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold border border-white/20 mb-6 uppercase tracking-wider text-blue-200">
              <Mail size={14} /> Canal Oficial de Comunicación
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Correo Institucional</h1>
            
            <div className="bg-blue-950/50 border border-blue-400/30 rounded-2xl p-6 backdrop-blur-sm max-w-3xl">
              <div className="flex items-start gap-4">
                <AlertCircle className="text-blue-300 shrink-0 mt-1" size={24} />
                <p className="text-blue-50 text-base leading-relaxed">
                  Tu correo institucional <strong>es tu llave maestra en IPG</strong>. Es obligatorio revisarlo periódicamente, ya que a través de él recibirás <strong>contenidos académicos, invitaciones a seminarios, recursos de aprendizaje</strong> y es el único medio válido para realizar solicitudes al equipo administrativo y docente.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 🔑 CREDENCIALES Y PASO A PASO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Tarjeta de Credenciales */}
          <div className="md:col-span-1 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col">
            <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 border-b border-slate-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Lock size={20} />
              </div>
              <h3 className="font-bold text-slate-800 text-lg">Tus Credenciales</h3>
            </div>
            <div className="p-6 flex-1 flex flex-col gap-5 justify-center">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Usuario (Email)</span>
                <p className="text-slate-800 font-medium mt-1 bg-slate-50 p-3 rounded-lg border border-slate-100 break-all">
                  nombre.apellido<span className="text-blue-600 font-bold">@alumnos.ipg.cl</span>
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Contraseña Inicial</span>
                <p className="text-slate-800 font-medium mt-1 bg-slate-50 p-3 rounded-lg border border-slate-100 font-mono text-lg">
                  {correoPassword}
                </p>
              </div>
              <div className="mt-2 text-xs text-slate-500 flex gap-2 items-start bg-amber-50 p-3 rounded-lg border border-amber-100">
                <AlertCircle size={14} className="text-amber-600 shrink-0 mt-0.5" />
                <span>Por seguridad, el sistema de Google (Gmail) te obligará a cambiar tu contraseña al primer ingreso.</span>
              </div>
            </div>
          </div>

          {/* Tarjetas de Instrucciones */}
          <div className="md:col-span-2 flex flex-col gap-6">
            
            {/* Vía Web */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 flex gap-5">
              <div className="shrink-0 w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <Laptop size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-3">Desde Computador</h4>
                <ol className="list-decimal list-inside text-sm text-slate-600 space-y-2 marker:text-blue-600 marker:font-bold">
                  <li>Ingresa a <a href="https://www.gmail.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-medium">www.gmail.com</a> y haz clic en "Acceder".</li>
                  <li>Escribe tu correo institucional con el formato indicado.</li>
                  <li>Ingresa la contraseña inicial: <strong className="text-slate-800">{correoPassword}</strong></li>
                  <li>Crea una nueva contraseña segura y fácil de recordar.</li>
                  <li>¡Listo! Tu correo ya está activado.</li>
                </ol>
              </div>
            </div>

            {/* Vía App */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 flex gap-5">
              <div className="shrink-0 w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Smartphone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-3">Desde App Móvil (Android/iPhone)</h4>
                <ol className="list-decimal list-inside text-sm text-slate-600 space-y-2 marker:text-indigo-600 marker:font-bold">
                  <li>Abre la aplicación <strong>Gmail</strong> en tu celular.</li>
                  <li>Ve a tu perfil y selecciona <strong>"Agregar otra cuenta"</strong>.</li>
                  <li>Elige la opción <strong>Google</strong>.</li>
                  <li>Sigue los mismos pasos de ingreso y cambio de contraseña.</li>
                </ol>
              </div>
            </div>

          </div>
        </div>

        {/* 🆘 SOPORTE TÉCNICO Y DESCARGA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          
          {/* Descarga de PDF */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-md"><Sparkles size={18} /></div>
              <div>
                <h2 className="text-lg font-bold text-slate-800">Guía en PDF</h2>
                <p className="text-slate-400 text-xs font-medium">Documento oficial de respaldo</p>
              </div>
            </div>
            <div className="p-6 bg-slate-50/30">
              {resources.map((item, idx) => (
                <a href={`/api/download?id=${item.driveId}`} key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-500/50 hover:shadow-md transition-all group/file decoration-transparent cursor-pointer">
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-blue-50 text-blue-600 border border-blue-100"><FileText size={20} /></div>
                    <div className="truncate">
                      <h4 className="text-slate-700 font-bold text-sm truncate group-hover/file:text-blue-600 transition-colors">{item.name}</h4>
                      <span className="text-xs text-slate-400 font-medium">{item.size} • PDF</span>
                    </div>
                  </div>
                  <div className="shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/file:bg-blue-600 group-hover/file:text-white transition-colors shadow-sm"><Download size={16} /></div>
                </a>
              ))}
            </div>
          </div>

          {/* Contacto Soporte */}
          <div className="bg-slate-800 rounded-3xl border border-slate-700 shadow-xl overflow-hidden p-8 text-white flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="relative z-10 flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-slate-700 text-blue-400 flex items-center justify-center">
                <LifeBuoy size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">¿Problemas de acceso?</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Si no logras ingresar o tu cuenta parece bloqueada, comunícate con el área de soporte institucional indicando siempre tu <strong>RUT</strong>.
                </p>
                <a href="mailto:soporte.santiago@ipg.cl" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-medium transition-colors text-sm">
                  <Mail size={16} /> soporte.santiago@ipg.cl
                </a>
                <p className="text-slate-400 text-xs mt-4">
                  También puedes contactar directamente a tu consejero/a de Acompañamiento Estudiantil.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}