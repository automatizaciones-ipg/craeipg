import React from 'react';
import { 
  ChevronLeft, FileSignature, FileText, Download, Sparkles, 
  ExternalLink, Key, CreditCard, PenTool, Mail, MapPin, AlertCircle, 
  CheckCircle2, ShieldCheck, Fingerprint
} from 'lucide-react';

export default function RematriculaGuia({ onBack }: { onBack: () => void }) {
  const resources = [
    { name: "Guía de Rematrícula Estudiantes Antiguos IPG 2026", size: "2.4 MB", driveId: "ID_AQUI" }
  ];

  const sedesContactos = [
    { sede: "Sede Online", email: "consejero.estudiante@ipg.cl" },
    { sede: "Sede Concepción", email: "carlos.villalobos@ipg.cl" },
    { sede: "Sede Arauco", email: "lilian.bernal@ipg.cl" },
    { sede: "Sede Panguipulli", email: "caterin.pino@ipg.cl" },
    { sede: "Sede La Unión", email: "claudia.godoy@ipg.cl" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
      
      {/* ⬅️ Botón Volver */}
      <button 
        onClick={onBack} 
        className="inline-flex items-center gap-2 text-slate-500 hover:text-rose-600 transition-colors mb-8 group font-medium bg-transparent border-none cursor-pointer"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-rose-50 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver a Herramientas
      </button>

      <div className="flex flex-col gap-8">
        
        {/* 🚀 HERO SECTION */}
        <div className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-slate-900 via-rose-950 to-pink-950 shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold border border-white/20 mb-6 uppercase tracking-wider text-rose-200">
              <FileSignature size={14} /> Continuidad de Estudios 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Proceso de Rematrícula</h1>
            
            <p className="text-rose-50 text-base leading-relaxed max-w-3xl mb-6">
              Asegura tu año académico de forma 100% online. A través de este portal podrás revisar tu plan de pagos, configurar tus cuotas arancelarias y <strong>firmar tu contrato digitalmente</strong> utilizando el número de serie de tu Cédula de Identidad.
            </p>

            <a 
              href="https://ipg.umas.cl/alumnosantiguos" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-400 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-rose-500/30"
            >
              Ingresar al Portal de Rematrícula <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* 🔑 ADVERTENCIA DE CREDENCIALES (El RUT es diferente aquí) */}
        <div className="bg-rose-50 border border-rose-200 rounded-3xl p-6 flex items-start gap-4">
          <div className="shrink-0 w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
            <Key size={24} />
          </div>
          <div>
            <h3 className="font-bold text-rose-900 text-lg mb-1">Atención con tus credenciales de acceso</h3>
            <p className="text-rose-800 text-sm leading-relaxed mb-3">
              Para este portal específico, el formato de tu usuario es diferente al portal normal de alumnos:
            </p>
            <ul className="list-disc list-inside text-sm text-rose-700 font-medium space-y-1">
              <li><strong>Usuario:</strong> Tu RUT <span className="underline">sin puntos, sin guion</span> y con dígito verificador. (Ejemplo: <code className="bg-white px-2 py-0.5 rounded border border-rose-200 text-rose-600">193456789</code>)</li>
              <li><strong>Clave:</strong> La misma que utilizas en el Portal de Alumnos. (Si la olvidaste, recupérala desde el Portal de Alumnos primero).</li>
            </ul>
          </div>
        </div>

        {/* 🧠 FLUJO DEL PROCESO EN 3 FASES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Fase 1 */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
              <CreditCard size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">1. Plan de Pagos</h3>
            <ol className="list-none space-y-3 text-sm text-slate-600">
              <li className="flex gap-3">
                <span className="font-bold text-blue-500">1.</span>
                <span>Ingresa y haz clic en <strong>"SELECCIONAR"</strong> y luego en <strong>"SIGUIENTE"</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-500">2.</span>
                <span>Haz clic en <strong>"IR A SELECCIÓN DE PLAN DE PAGOS"</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-500">3.</span>
                <span>Revisa tu arancel y el monto de cada cuota haciendo clic en <strong>"Ver más"</strong>. Finalmente, baja y presiona <strong>"CONTINUAR"</strong>.</span>
              </li>
            </ol>
          </div>

          {/* Fase 2 */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
              <Fingerprint size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">2. Firma Digital (Tecnoback)</h3>
            <ol className="list-none space-y-3 text-sm text-slate-600">
              <li className="flex gap-3">
                <span className="font-bold text-indigo-500">4.</span>
                <span>Descarga y lee tu contrato. Luego presiona el botón azul <strong>"TECNOBACK"</strong> y <strong>"FIRMAR"</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-indigo-500">5.</span>
                <span>Haz clic en <strong>"REGISTRAR"</strong>. Llena tus datos y ten a mano tu Cédula de Identidad para ingresar tu <strong>NÚMERO DE SERIE</strong>. Presiona "VALIDAR".</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-indigo-500">6.</span>
                <span>Crea una <strong>Clave PIN</strong> segura, confírmala y presiona "VALIDAR" y luego "CONTINUAR".</span>
              </li>
            </ol>
          </div>

          {/* Fase 3 */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center border border-green-100">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">3. Confirmación</h3>
            <ol className="list-none space-y-3 text-sm text-slate-600">
              <li className="flex gap-3">
                <span className="font-bold text-green-500">7.</span>
                <span>Ingresa el PIN numérico que acabas de crear y haz clic en <strong>"FIRMAR"</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-500">8.</span>
                <span>El sistema indicará que el contrato está firmado. Presiona <strong>"CONTINUAR"</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-500">9.</span>
                <span>¡Proceso Finalizado! Revisa tu <strong>Correo Institucional</strong>; recibirás un PDF con tu contrato validado con firma digital.</span>
              </li>
            </ol>
          </div>

        </div>

        {/* 🆘 CONTACTOS POR SEDE Y DESCARGA PDF */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          
          {/* Contactos de Jefes Administrativos */}
          <div className="bg-slate-800 rounded-3xl border border-slate-700 shadow-xl overflow-hidden p-8 text-white relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-slate-700 text-rose-400 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">¿Tienes dudas o problemas?</h3>
                  <p className="text-slate-400 text-xs">Contacta al Jefe Administrativo / Consejero de tu Sede</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 text-sm">
                {sedesContactos.map((contacto, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="font-bold text-rose-300">{contacto.sede}</span>
                    <a href={`mailto:${contacto.email}`} className="text-slate-300 hover:text-white hover:underline truncate" title={contacto.email}>
                      {contacto.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Descarga de PDF */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col justify-center">
            <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white shadow-md"><Sparkles size={18} /></div>
              <div>
                <h2 className="text-lg font-bold text-slate-800">Manual Oficial en PDF</h2>
                <p className="text-slate-400 text-xs font-medium">Incluye capturas de pantalla de cada paso</p>
              </div>
            </div>
            <div className="p-6 bg-slate-50/30">
              {resources.map((item, idx) => (
                <a href={`/api/download?id=${item.driveId}`} key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-500/50 hover:shadow-md transition-all group/file decoration-transparent cursor-pointer">
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-rose-50 text-rose-600 border border-rose-100"><FileText size={22} /></div>
                    <div className="truncate">
                      <h4 className="text-slate-700 font-bold text-sm truncate group-hover/file:text-rose-600 transition-colors">{item.name}</h4>
                      <span className="text-xs text-slate-400 font-medium">{item.size} • PDF</span>
                    </div>
                  </div>
                  <div className="shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/file:bg-rose-600 group-hover/file:text-white transition-colors shadow-sm"><Download size={18} /></div>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}