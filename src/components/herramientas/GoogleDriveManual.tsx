import React from 'react';
import { 
  ChevronLeft, HardDrive, Video, FileText, Download, Sparkles, 
  FolderPlus, CloudUpload, Share2, Users, Search, Trash2, 
  AlertTriangle, CheckCircle2, Info, Eye, MessageSquare, Edit3, ExternalLink 
} from 'lucide-react';

export default function GoogleDriveManual({ onBack }: { onBack: () => void }) {
  const resources = [
    { name: "Manual Completo de Google Drive IPG", size: "3.1 MB", driveId: "ID_AQUI" }
  ];

  const permisos = [
    { 
      perfil: "Lector", 
      icon: <Eye size={16} className="text-blue-500" />,
      accion: "Solo puede ver el archivo. No puede editar ni comentar.", 
      uso: "Compartir un apunte o documento final para que otros lo estudien." 
    },
    { 
      perfil: "Comentador", 
      icon: <MessageSquare size={16} className="text-amber-500" />,
      accion: "Puede ver y dejar comentarios/notas, pero no modificar el contenido.", 
      uso: "Revisar un avance de trabajo con un compañero o recibir correcciones del docente." 
    },
    { 
      perfil: "Editor", 
      icon: <Edit3 size={16} className="text-green-500" />,
      accion: "Puede ver, comentar, editar y hasta eliminar contenido del archivo.", 
      uso: "Trabajar en equipo de forma simultánea en informes o presentaciones." 
    },
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
              <HardDrive size={14} /> Gestión en la Nube e Innovación Digital
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Google Drive IPG</h1>
            
            <p className="text-emerald-50 text-base leading-relaxed max-w-3xl mb-6">
              Tu espacio de almacenamiento inteligente y colaborativo. Guarda tus archivos académicos, organiza carpetas por asignaturas y trabaja en tiempo real con tus compañeros. Con tu cuenta institucional IPG dispones de un entorno seguro y accesible desde cualquier dispositivo.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://drive.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-emerald-500/30 text-sm md:text-base decoration-none"
              >
                Ir a Google Drive <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* 📹 SECCIÓN MULTIMEDIA DESTACADA: VIDEO INTEGRADO (EMBED) */}
        <div className="bg-slate-900 rounded-3xl p-6 md:p-8 shadow-xl border border-slate-800 relative overflow-hidden flex flex-col gap-6">
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex items-start gap-4 max-w-2xl relative z-10">
            <div className="shrink-0 w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shadow-inner">
              <Video size={24} />
            </div>
            <div>
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider block mb-1">Reproductor Integrado</span>
              <h3 className="text-xl font-bold text-white mb-2">Video Tutorial: Dominando Google Drive</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Dale <strong>play</strong> aquí mismo y aprende visualmente cómo acceder, subir archivos y configurar la edición compartida en menos de 5 minutos, sin salir de la plataforma.
              </p>
            </div>
          </div>
          
          {/* Contenedor del Iframe 16:9 */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-black z-10">
            <iframe 
              src="https://drive.google.com/file/d/1gWgsXpz6lgIeR4K9YK6jbGRrXiiBlfzL/preview" 
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay"
              title="Tutorial Google Drive IPG"
              allowFullScreen>
            </iframe>
          </div>
        </div>

        {/* ⚡ INFOCARD: ALMACENAMIENTO ILIMITADO */}
        <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/20 rounded-3xl p-6 flex items-start gap-4">
          <div className="shrink-0 w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center border border-emerald-200">
            <Sparkles size={24} />
          </div>
          <div>
            <h3 className="font-bold text-emerald-900 text-lg mb-1">¡Almacenamiento Institucional Sin Límites!</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Como estudiante del Instituto Profesional IPG, tu cuenta de Google institucional posee <strong>almacenamiento gratuito e ilimitado</strong>. Puedes subir respaldos de tus clases, libros pesados, videos conceptuales e informes sin preocuparte por el espacio.
            </p>
          </div>
        </div>

        {/* 🛠️ GUÍA OPERATIVA PASO A PASO */}
        <h2 className="text-2xl font-black text-slate-800 tracking-tight mt-4 mb-2 flex items-center gap-2">
          <Info size={24} className="text-emerald-500" /> Funciones Clave que debes Dominar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Bloque 1: Acceso y Organización */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 flex flex-col gap-5">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <FolderPlus size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Acceso y Organización</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-slate-700 text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">1</span>
                  Ingreso rápido desde tu suite
                </h4>
                <p className="text-xs text-slate-500 ml-7 mt-1">
                  Inicia sesión en tu correo Gmail IPG. Haz clic en la cuadrícula de <strong>9 puntos (Google Apps)</strong> en la esquina superior derecha y selecciona el ícono de <strong>Drive</strong>.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-700 text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">2</span>
                  Estructura de Carpetas Inteligente
                </h4>
                <p className="text-xs text-slate-500 ml-7 mt-1">
                  Haz clic en <strong>"+ Nuevo" ➔ "Nueva carpeta"</strong>. Te aconsejamos usar nombres claros por módulos (Ej: <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 font-mono">Biologia_Semestre1_2026</code>). Dale clic derecho para asignarle un color identificativo.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-700 text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">3</span>
                  Secciones del menú lateral
                </h4>
                <p className="text-xs text-slate-500 ml-7 mt-1">
                  Usa <strong>"Compartidos conmigo"</strong> para ver recursos compartidos por docentes u otros alumnos, y marca con una estrella tus apuntes críticos para verlos en <strong>"Destacados"</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Bloque 2: Carga y Creación Digital */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 flex flex-col gap-5">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                <CloudUpload size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Subir y Crear Documentos</h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-slate-700 text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs">4</span>
                  Subida ágil de archivos
                </h4>
                <p className="text-xs text-slate-500 ml-7 mt-1">
                  Presiona <strong>"+ Nuevo" ➔ "Subir archivo"</strong> o simplemente arrastra tus archivos de Word, Excel, PDF, videos o imágenes directamente hacia la ventana del navegador.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-700 text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs">5</span>
                  Documentos nativos sin instalar Office
                </h4>
                <p className="text-xs text-slate-500 ml-7 mt-1">
                  Crea un <strong>Google Doc</strong> (Word), <strong>Google Sheet</strong> (Excel) o <strong>Google Slides</strong> (PowerPoint) desde el botón "+ Nuevo". Se abrirá en otra pestaña y <strong>los cambios se guardan de forma instantánea y automática</strong>.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-700 text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs">6</span>
                  Edición directa de Office
                </h4>
                <p className="text-xs text-slate-500 ml-7 mt-1">
                  Si subes un archivo nativo <code className="text-xs">.docx</code> o <code className="text-xs">.xlsx</code>, no te preocupes por la compatibilidad: haz doble clic sobre él y podrás editarlo directamente en la nube.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 🤝 SECCIÓN: COMPARTIR Y TRABAJAR EN EQUIPO */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 md:p-8 flex flex-col gap-6">
          <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Share2 size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Trabajo Colaborativo y Control de Enlaces</h3>
              <p className="text-slate-500 text-sm">Gestiona correctamente los permisos para salvaguardar tu privacidad.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 flex flex-col justify-center bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <Users className="text-blue-600 mb-3" size={28} />
              <h4 className="font-bold text-slate-800 text-base mb-2">Edición en tiempo real</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                ¡Olvídate de mandarte versiones por mail! Cuando compartes un documento con permisos de <strong>Editor</strong>, múltiples integrantes del grupo pueden redactar en paralelo. Cada persona tendrá un cursor de un color distinto.
              </p>
            </div>

            <div className="lg:col-span-2 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100/80">
                    <th className="p-3 text-xs font-bold text-slate-600 rounded-l-xl">Permiso</th>
                    <th className="p-3 text-xs font-bold text-slate-600">Alcance Operativo</th>
                    <th className="p-3 text-xs font-bold text-slate-600 rounded-r-xl">Caso de Uso sugerido</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {permisos.map((p, index) => (
                    <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3 text-xs font-bold text-slate-800 flex items-center gap-1.5 py-4">
                        {p.icon} {p.perfil}
                      </td>
                      <td className="p-3 text-xs text-slate-600 max-w-[200px] leading-relaxed">{p.accion}</td>
                      <td className="p-3 text-xs text-slate-500 max-w-[220px] leading-relaxed italic">{p.uso}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex items-start gap-3 text-xs text-amber-900 mt-2">
            <AlertTriangle className="shrink-0 text-amber-600 mt-0.5" size={16} />
            <div>
              <strong>Recomendación de Seguridad sobre Enlaces:</strong> Utiliza la opción <em>"Cualquiera que tenga el enlace"</em> únicamente para apuntes públicos que no contengan datos personales o confidenciales. Para entregar tareas oficiales o informes de evaluación, agrega siempre el <strong>correo institucional específico de tu docente</strong>.
            </div>
          </div>
        </div>

        {/* 🔍 HISTORIAL, BÚSQUEDA Y RECUPERACIÓN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-3">
            <Search className="text-emerald-500" size={24} />
            <h4 className="font-bold text-slate-800 text-sm">Búsqueda Avanzada y Filtros</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              ¿No encuentras un archivo? Usa la barra superior escribiendo palabras clave de su contenido. Haz clic en el <strong>ícono de filtro</strong> para segmentar por formato (ej. solo archivos PDF) o fechas de modificación.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-3">
            <Sparkles className="text-emerald-500" size={24} />
            <h4 className="font-bold text-slate-800 text-sm">Historial de Versiones</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Si tú o un compañero borraron un párrafo importante por error, abre el documento, ve a <strong>Archivo ➔ Historial de versiones ➔ Ver historial de versiones</strong>, localiza la hora del cambio y presiona <strong>"Restaurar esta versión"</strong>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-3">
            <Trash2 className="text-rose-500" size={24} />
            <h4 className="font-bold text-slate-800 text-sm">Resguardo en Papelera</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Los archivos eliminados se trasladan a la Papelera lateral, conservándose por <strong>30 días corridos</strong> antes de su borrado definitivo. Para rescatar algo, ve a la Papelera, da clic derecho sobre el elemento y escoge <strong>"Restaurar"</strong>.
            </p>
          </div>

        </div>

        {/* 🚨 RECOMENDACIONES DE SEGURIDAD Y CIERRE */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex items-start gap-4 text-white">
          <div className="shrink-0 w-10 h-10 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
            <AlertTriangle size={20} />
          </div>
          <div>
            <h3 className="font-bold text-amber-400 text-sm mb-1">Recordatorio de Cierre de Sesión Seguro</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Si accedes a tu cuenta Google Institucional IPG en computadores de uso compartido dentro de las salas de clases, laboratorios informáticos o bibliotecas de la sede, <strong>no olvides cerrar tu sesión antes de retirarte</strong>. Haz clic en tu foto de perfil en la esquina superior derecha y selecciona <strong>"Cerrar sesión"</strong> para impedir que otras personas modifiquen tus trabajos.
            </p>
          </div>
        </div>

        {/* 📥 DESCARGA DEL MANUAL OFICIAL */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mt-2">
          <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-md">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800">Material Gráfico de Respaldo</h2>
              <p className="text-slate-400 text-xs font-medium">Conserva el manual estructurado en tu dispositivo</p>
            </div>
          </div>
          <div className="p-6 bg-slate-50/30">
            {resources.map((item, idx) => (
              <a 
                href={`/api/download?id=${item.driveId}`} 
                key={idx} 
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500/50 hover:shadow-md transition-all group/file decoration-transparent cursor-pointer"
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
                <div className="shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/file:bg-emerald-600 group-hover/file:text-white transition-colors shadow-sm">
                  <Download size={18} />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}