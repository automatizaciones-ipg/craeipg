import React from 'react';
import { 
  ChevronLeft, Library, FileText, Download, Sparkles, 
  BookOpen, ExternalLink, ShieldCheck, Smartphone, 
  QrCode, Key, Mail, AlertCircle, LifeBuoy 
} from 'lucide-react';

export default function CraiPlataforma({ onBack }: { onBack: () => void }) {
  const resources = [
    { name: "Guía Oficial de Acceso y Autenticación CRAI IPG", size: "1.8 MB", driveId: "ID_AQUI" }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
      
      {/* ⬅️ Botón Volver */}
      <button 
        onClick={onBack} 
        className="inline-flex items-center gap-2 text-slate-500 hover:text-amber-600 transition-colors mb-8 group font-medium bg-transparent border-none cursor-pointer"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-amber-50 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver a Herramientas
      </button>

      <div className="flex flex-col gap-8">
        
        {/* 🚀 HERO SECTION */}
        <div className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-slate-900 via-amber-950 to-orange-950 shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold border border-white/20 mb-6 uppercase tracking-wider text-amber-200">
              <Library size={14} /> Centro de Recursos para Aprendizaje e Investigación
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">CRAI Biblioteca Digital</h1>
            
            <p className="text-amber-50 text-base leading-relaxed max-w-3xl mb-6">
              Tu biblioteca digital institucional. Accede desde un solo lugar a libros electrónicos, artículos académicos y bases de datos especializadas como <strong>eLibro, ProQuest, Enferteca</strong> y más, utilizando tu cuenta institucional IPG.
            </p>

            <a 
              href="https://crai-ipg.primo.exlibrisgroup.com/discovery/search?vid=56UADC_INST:IPG" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-amber-500/30"
            >
              Ir a IPG para ingresar al CRAI <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* 🧠 FASE 1: PRIMER INGRESO E IDENTIFICACIÓN */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 md:p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
              <Key size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Fase 1: Primer Ingreso y Autenticación</h3>
              <p className="text-slate-500 text-sm">Pasos básicos para iniciar sesión con tu cuenta de alumno.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm shadow-md">1</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Ingreso al Portal</h4>
                  <p className="text-sm text-slate-600 mt-1">Ingresa a www.ipg.cl, ve a la pestaña <strong>"Alumnos"</strong> y selecciona <strong>CRAI</strong>.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm shadow-md">2</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Identificarse</h4>
                  <p className="text-sm text-slate-600 mt-1">En la esquina superior derecha del CRAI, haz clic en <strong>"Identificarse"</strong> e ingresa tu correo institucional (Ej: <em>nombre.apellido@alumnos.ipg.cl</em>).</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm shadow-md">3</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Código de Verificación</h4>
                  <p className="text-sm text-slate-600 mt-1">Revisa la bandeja de entrada de tu correo IPG. Copia el código numérico recibido, pégalo en la pantalla y haz clic en Iniciar sesión.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm shadow-md">4</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Permisos de Acceso</h4>
                  <p className="text-sm text-slate-600 mt-1">Aparecerá una solicitud de la <strong>Universidad Autónoma de Chile</strong> (nuestra institución asociada para autenticación). Lee y presiona <strong>Aceptar</strong>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 📱 FASE 2: MICROSOFT AUTHENTICATOR (Diseño destacado por ser proceso técnico) */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-200 shadow-lg p-6 md:p-8 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900">Fase 2: Seguridad Microsoft Authenticator</h3>
              <p className="text-blue-700/70 text-sm">Verificación en dos pasos (Obligatorio la primera vez).</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {/* Tarjeta Paso 1 */}
            <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-sm flex flex-col gap-3">
              <Smartphone className="text-blue-500" size={24} />
              <h4 className="font-bold text-slate-800 text-sm">1. Descarga la App</h4>
              <p className="text-xs text-slate-600">En tu celular, descarga <strong>Microsoft Authenticator</strong> desde Google Play o App Store. En el PC, haz clic en "Siguiente".</p>
            </div>
            
            {/* Tarjeta Paso 2 */}
            <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-sm flex flex-col gap-3">
              <BookOpen className="text-blue-500" size={24} />
              <h4 className="font-bold text-slate-800 text-sm">2. Agrega tu Cuenta</h4>
              <p className="text-xs text-slate-600">Abre la app en el celular, selecciona "Agregar cuenta" y elige <strong>"Cuenta profesional o educativa"</strong>.</p>
            </div>

            {/* Tarjeta Paso 3 */}
            <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-sm flex flex-col gap-3">
              <QrCode className="text-blue-500" size={24} />
              <h4 className="font-bold text-slate-800 text-sm">3. Escanea el QR</h4>
              <p className="text-xs text-slate-600">En el PC presiona "Siguiente" para ver un código QR. Escanéalo usando la cámara desde la app en tu celular.</p>
            </div>

            {/* Tarjeta Paso 4 */}
            <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-sm flex flex-col gap-3">
              <ShieldCheck className="text-green-500" size={24} />
              <h4 className="font-bold text-slate-800 text-sm">4. Confirma el Número</h4>
              <p className="text-xs text-slate-600">El PC mostrará un número. Digítalo en tu app móvil y presiona 'Sí'. Al ver <em>"Authenticator Added"</em>, haz clic en <strong>Listo</strong>.</p>
            </div>
          </div>
          
          <div className="mt-6 flex items-start gap-2 text-xs text-blue-800 bg-blue-100/50 p-3 rounded-xl border border-blue-200">
            <AlertCircle className="shrink-0 mt-0.5" size={14} />
            <span>Una vez completado este proceso, Microsoft Authenticator será tu método predeterminado para verificar tu identidad al iniciar sesión de forma segura.</span>
          </div>
        </div>

        {/* 🆘 SOPORTE TÉCNICO Y DESCARGA DE PDF */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          
          {/* Descarga de PDF */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-md"><Sparkles size={18} /></div>
              <div>
                <h2 className="text-lg font-bold text-slate-800">Guía en PDF</h2>
                <p className="text-slate-400 text-xs font-medium">Documento oficial con capturas de pantalla</p>
              </div>
            </div>
            <div className="p-6 bg-slate-50/30 flex-1">
              {resources.map((item, idx) => (
                <a href={`/api/download?id=${item.driveId}`} key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-amber-500/50 hover:shadow-md transition-all group/file decoration-transparent cursor-pointer">
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-amber-50 text-amber-600 border border-amber-100"><FileText size={20} /></div>
                    <div className="truncate">
                      <h4 className="text-slate-700 font-bold text-sm truncate group-hover/file:text-amber-600 transition-colors">{item.name}</h4>
                      <span className="text-xs text-slate-400 font-medium">{item.size} • PDF</span>
                    </div>
                  </div>
                  <div className="shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/file:bg-amber-600 group-hover/file:text-white transition-colors shadow-sm"><Download size={16} /></div>
                </a>
              ))}
            </div>
          </div>

          {/* Contacto Soporte */}
          <div className="bg-slate-800 rounded-3xl border border-slate-700 shadow-xl overflow-hidden p-8 text-white flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="relative z-10 flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-slate-700 text-amber-400 flex items-center justify-center">
                <LifeBuoy size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">¿Necesitas ayuda?</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Si presentas algún inconveniente al descargar <strong>Microsoft Authenticator</strong> o si el código QR no escanea correctamente, recibe asistencia personalizada de la biblioteca.
                </p>
                <a href="mailto:biblioteca@ipg.cl" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 rounded-xl font-medium transition-colors text-sm">
                  <Mail size={16} /> biblioteca@ipg.cl
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}