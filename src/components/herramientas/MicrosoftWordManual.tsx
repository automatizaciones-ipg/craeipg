import React, { useState } from 'react';
import { 
  ChevronLeft, FileText, Download, Sparkles, Save, Keyboard, Type, 
  Table, Printer, CheckCircle2, Info, Search, AlignJustify, 
  Columns, FileCheck, Layers, ExternalLink
} from 'lucide-react';

export default function MicrosoftWordManual({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<'inicio' | 'edicion' | 'formato' | 'elementos' | 'revision'>('inicio');

  const resources = [
    { name: "Manual de Uso Básico de Microsoft Word IPG", size: "1.2 MB", driveId: "1jgKcHbljDTYX6jcVqDvAydyYyFVQ8YZS" }
  ];

  const categories = [
    { id: 'inicio', label: 'Primeros Pasos', icon: <Save size={16} /> },
    { id: 'edicion', label: 'Edición y Atajos', icon: <Keyboard size={16} /> },
    { id: 'formato', label: 'Formato Académico', icon: <Type size={16} /> },
    { id: 'elementos', label: 'Tablas y Gráficos', icon: <Table size={16} /> },
    { id: 'revision', label: 'Revisión e Impresión', icon: <Printer size={16} /> },
  ] as const;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12 bg-slate-50/50 min-h-screen">
      
      {/* ⬅️ Botón Volver con Micro-animación */}
      <button 
        onClick={onBack} 
        className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 group font-semibold bg-transparent border-none cursor-pointer text-sm"
      >
        <div className="p-2 rounded-xl bg-white shadow-sm border border-slate-200 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all">
          <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition-transform text-slate-600 group-hover:text-blue-600" />
        </div>
        Volver al Panel de Herramientas
      </button>

      <div className="flex flex-col gap-8">
        
        {/* 🚀 HERO SECTION CON GRADIENTE MESH Y SOMBRA PROFUNDA */}
        <div className="relative rounded-[2.5rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 shadow-2xl text-white border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute left-1/3 bottom-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold border border-blue-500/20 mb-6 uppercase tracking-widest text-blue-300">
              <FileText size={14} className="text-blue-400" /> Procesamiento de Textos y Reportes Oficiales
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-none bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent">
              Microsoft Word
            </h1>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mb-0 font-medium">
              Aprende a estructurar informes de asignaturas, proyectos de investigación y tesis bajo los estándares académicos de IPG. Domina el diseño formal de documentos, el control de tablas de datos y la exportación idónea a formato PDF.
            </p>
          </div>
        </div>

        {/* 📑 MENÚ INTERACTIVO DE PESTAÑAS CON DISEÑO FLUIDO */}
        <div className="flex gap-1 border-b border-slate-200 pb-px overflow-x-auto scrollbar-none">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2.5 px-5 py-3.5 text-xs font-bold border-b-2 transition-all cursor-pointer bg-transparent whitespace-nowrap outline-none ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
              }`}
            >
              <span className={activeTab === tab.id ? 'text-blue-600' : 'text-slate-400'}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* 📋 CONTENIDO DINÁMICO DE ALTA CALIDAD */}
        <div className="min-h-[400px]">
          
          {/* TAB 1: PRIMEROS PASOS */}
          {activeTab === 'inicio' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fadeIn">
              
              <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm flex flex-col gap-5">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="text-blue-500" size={16} /> Operaciones de Archivo Básicas
                </h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/20">1</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-xs mb-0.5">Creación del Documento</h4>
                      <p className="text-[11px] text-slate-500 leading-normal">
                        Abre Word desde el menú Inicio de tu computador. Ve a la pestaña <code className="bg-slate-200/60 px-1 py-0.5 rounded text-slate-700 font-mono">Archivo ➔ Nuevo</code> y haz clic sobre <strong>Documento en blanco</strong> para iniciar la redacción.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/20">2</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-xs mb-0.5">Guardar Archivo de Trabajo (.docx)</h4>
                      <p className="text-[11px] text-slate-500 leading-normal">
                        Para resguardar tus avances académicos, dirígete a <code className="bg-slate-200/60 px-1 py-0.5 rounded text-slate-700 font-mono">Archivo ➔ Guardar como ➔ Examinar</code>. Selecciona tu carpeta destino, introduce un nombre formal (Ej: <span className="font-serif italic text-slate-700">Informe_Caso_Clinico.docx</span>) y haz clic en Guardar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-6 text-white shadow-lg shadow-blue-900/10 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center mb-4 border border-white/10">
                    <FileText size={18} className="text-blue-200" />
                  </div>
                  <h3 className="text-base font-bold mb-2">Regla de Entrega: Formato PDF</h3>
                  <p className="text-[11px] text-blue-100 leading-relaxed mb-4">
                    Al cargar tus tareas al aula virtual, se aconseja guardarlo como PDF para congelar la estructura gráfica, márgenes y fuentes, evitando desconfiguraciones en la pantalla del docente.
                  </p>
                  <div className="bg-black/20 rounded-2xl p-3 border border-white/5 space-y-1.5 text-[11px]">
                    <div><strong>1.</strong> Ve a <code className="text-white bg-white/10 px-1 rounded">Archivo ➔ Guardar como</code></div>
                    <div><strong>2.</strong> Haz clic en <strong>Examinar</strong></div>
                    <div><strong>3.</strong> Abre el menú <strong>"Tipo"</strong> y escoge <strong>PDF (*.pdf)</strong></div>
                    <div><strong>4.</strong> Presiona Guardar.</div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: EDICIÓN Y ATAJOS DE TECLADO */}
          {activeTab === 'edicion' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Grid de Bloques Teclado */}
              <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm">
                <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Keyboard className="text-blue-500" size={16} /> Comandos Rápidos Esenciales
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100 flex flex-col justify-between gap-3 hover:border-blue-200 transition-colors">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Copiar Texto</span>
                    <div className="flex gap-1"><kbd className="bg-white border-b-2 border-slate-300 border font-mono text-slate-800 text-[11px] px-2 py-1 rounded shadow-sm">Ctrl</kbd><span className="text-slate-400 font-bold self-center">+</span><kbd className="bg-white border-b-2 border-slate-300 border font-mono text-slate-800 text-[11px] px-2 py-1 rounded shadow-sm">C</kbd></div>
                  </div>

                  <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100 flex flex-col justify-between gap-3 hover:border-blue-200 transition-colors">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Pegar Contenido</span>
                    <div className="flex gap-1"><kbd className="bg-white border-b-2 border-slate-300 border font-mono text-slate-800 text-[11px] px-2 py-1 rounded shadow-sm">Ctrl</kbd><span className="text-slate-400 font-bold self-center">+</span><kbd className="bg-white border-b-2 border-slate-300 border font-mono text-slate-800 text-[11px] px-2 py-1 rounded shadow-sm">V</kbd></div>
                  </div>

                  <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100 flex flex-col justify-between gap-3 hover:border-blue-200 transition-colors">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Deshacer Error</span>
                    <div className="flex gap-1"><kbd className="bg-white border-b-2 border-slate-300 border font-mono text-slate-800 text-[11px] px-2 py-1 rounded shadow-sm">Ctrl</kbd><span className="text-slate-400 font-bold self-center">+</span><kbd className="bg-white border-b-2 border-slate-300 border font-mono text-slate-800 text-[11px] px-2 py-1 rounded shadow-sm">Z</kbd></div>
                  </div>

                  <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100 flex flex-col justify-between gap-3 hover:border-blue-200 transition-colors">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Buscar / Reemplazar</span>
                    <div className="flex gap-1"><kbd className="bg-white border-b-2 border-slate-300 border font-mono text-slate-800 text-[11px] px-2 py-1 rounded shadow-sm">Ctrl</kbd><span className="text-slate-400 font-bold self-center">+</span><kbd className="bg-white border-b-2 border-slate-300 border font-mono text-slate-800 text-[11px] px-2 py-1 rounded shadow-sm">L</kbd></div>
                  </div>
                </div>
              </div>

              {/* Utilidad de Edición Avanzada */}
              <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-slate-800 text-xs mb-2 flex items-center gap-1.5"><Search size={14} className="text-blue-500" /> Reemplazo Masivo Inteligente</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Si te das cuenta de que escribiste de manera errónea una terminología científica o el nombre de una patología a lo largo de un informe extenso de 20 páginas, activa <kbd className="bg-slate-100 border px-1 rounded text-[10px]">Ctrl + L</kbd>. Define la palabra errónea en <strong>Buscar</strong>, la correcta en <strong>Reemplazar con</strong>, y presiona <strong>Reemplazar todo</strong>.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-xs mb-2 flex items-center gap-1.5"><AlignJustify size={14} className="text-blue-500" /> Técnicas de Selección Eficientes</h4>
                  <ul className="text-[11px] text-slate-600 space-y-1.5 list-disc list-inside">
                    <li><strong>Doble Clic:</strong> Selecciona automáticamente la palabra completa donde diste clic.</li>
                    <li><strong>Arrastre Continuo:</strong> Mantén presionado el clic izquierdo y arrastra por bloques extensos.</li>
                    <li><strong>Cortar con clic derecho:</strong> Remueve el fragmento guardándolo en el portapapeles.</li>
                  </ul>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: FORMATO ACADÉMICO / NORMAS APA */}
          {activeTab === 'formato' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Ficha Formato Institucional */}
              <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center"><Columns size={16} /></div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Estructura de Hoja y Tipografía Académica</h3>
                    <p className="text-[11px] text-slate-400">Configuraciones exigidas para la presentación de informes en IPG</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[11px] text-slate-600">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col gap-2">
                    <span className="font-bold text-slate-800 text-xs">Alineación y Espaciado</span>
                    <p className="leading-relaxed">
                      Selecciona el texto y ve a <code className="bg-white px-1 border rounded text-[10px]">Inicio ➔ grupo Párrafo</code>. Usa <strong>Justificar</strong> para alinear los bordes simétricamente. Haz clic en <strong>Espaciado entre líneas y párrafos</strong> para definir el interlineado reglamentario (ej: 1.5 o doble).
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col gap-2">
                    <span className="font-bold text-slate-800 text-xs">Configurar Página (Márgenes)</span>
                    <p className="leading-relaxed">
                      Dirígete a la pestaña superior <code className="bg-white px-1 border rounded text-[10px]">Disposición (o Diseño de Página)</code>. Haz clic en <strong>Márgenes</strong> (Normal o Personalizado de 2.54 cm en cada lado). Ajusta el <strong>Tamaño</strong> a Carta o A4 según la pauta de evaluación.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col gap-2">
                    <span className="font-bold text-slate-800 text-xs">Estilos y Fuentes</span>
                    <p className="leading-relaxed">
                      En la pestaña <strong>Inicio ➔ Fuente</strong>, cambia el tipo de letra a fuentes estándar (Arial, Calibri o Times New Roman). Usa <code className="bg-white px-1 border rounded text-[10px] font-bold">N</code> (Negrita) para títulos y <code className="bg-white px-1 border rounded text-[10px] italic">K</code> (Cursiva) para terminología extranjera.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tarjeta Informativa Extra de Sangrías y Bordes */}
              <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-4 flex gap-3 text-[11px] text-amber-900">
                <Info size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Uso de Sangrías y Sombreados:</strong> Para estructurar la primera línea de cada párrafo, utiliza los iconos <strong>Aumentar sangría</strong> en el grupo Párrafo. Si deseas resaltar una conclusión o cita textual importante, selecciona el texto y añade un <strong>Sombreado de fondo</strong> tenue junto con un borde lateral izquierdo utilizando la herramienta de Bordes.
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: TABLAS Y ELEMENTOS GRÁFICOS */}
          {activeTab === 'elementos' && (
            <div className="space-y-6 animate-fadeIn">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bloque Tablas */}
                <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm flex flex-col gap-4">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Layers className="text-emerald-600" size={16} /> Tablas de Datos Estadísticos y Comparativas
                  </h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Inserta una grilla desde <code className="bg-slate-50 px-1 border rounded text-[10px]">Insertar ➔ Tabla</code> deslizando el mouse para marcar las columnas y filas necesarias.
                  </p>
                  <div className="p-3 bg-emerald-50/40 border border-emerald-100 rounded-2xl text-[11px] text-emerald-950 font-medium">
                    <strong>Acción Clave: Combinar Celdas</strong><br/>
                    Para unificar los encabezados de una tabla, selecciona con el mouse las celdas adyacentes, dirígete a la pestaña contextual superior <strong>Disposición de Tabla</strong> (que aparece al hacer clic dentro de ella) y presiona <strong>Combinar Celdas</strong>.
                  </div>
                </div>

                {/* Bloque SmartArt e Imágenes */}
                <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm flex flex-col gap-4">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Sparkles className="text-blue-500" size={16} /> Elementos Visuales y Cuadros de Texto
                  </h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Enriquece la comprensión visual de tus mapas conceptuales o flujogramas operativos mediante diagramas inteligentes preestablecidos.
                  </p>
                  <ul className="text-[11px] text-slate-500 space-y-1.5 list-disc list-inside bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    <li><strong>Imágenes:</strong> <code className="text-[10px] bg-white border px-1">Insertar ➔ Imágenes</code> desde tu computador o en línea.</li>
                    <li><strong>SmartArt:</strong> Gráficos ideales para ciclos, organigramas académicos y jerarquías.</li>
                    <li><strong>Cuadros de texto:</strong> Perfectos para destacar leyes, citas o apuntes en los márgenes de la hoja.</li>
                  </ul>
                </div>
              </div>

              {/* Automatización de Paginación */}
              <div className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-bold text-xs">#</div>
                <div className="text-[11px]">
                  <span className="font-bold text-slate-800 block mb-0.5">Encabezados, Pies y Numeración de Página Automatizada</span>
                  <p className="text-slate-500 leading-relaxed">
                    Evita escribir los números de página de forma manual. Ve a la pestaña <code className="bg-slate-50 px-1 border rounded text-[10px]">Insertar ➔ Número de página</code>, selecciona la posición (estándar: final de la página a la derecha). Esto numerará secuencialmente todo tu informe automáticamente sin importar cuántas hojas agregues.
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* TAB 5: REVISIÓN E IMPRESIÓN */}
          {activeTab === 'revision' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
              
              {/* Ortografía */}
              <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <FileCheck className="text-emerald-500" size={18} />
                  <h3 className="text-sm font-bold text-slate-900">Control de Errores: Ortografía y Gramática</h3>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Presentar un trabajo con faltas ortográficas reduce drásticamente tu evaluación académica. Word cuenta con un motor inteligente de escaneo:
                </p>
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-[11px] text-slate-600 space-y-1">
                  <div><strong>1.</strong> Haz clic en la pestaña superior <strong>Revisar</strong>.</div>
                  <div><strong>2.</strong> Presiona el comando <strong>Ortografía y gramática</strong>.</div>
                  <div><strong>3.</strong> Evalúa las sugerencias automáticas en el panel lateral derecho para corregir o ignorar según corresponda.</div>
                </div>
              </div>

              {/* Impresión */}
              <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Printer className="text-blue-500" size={18} />
                  <h3 className="text-sm font-bold text-slate-900">Vista Previa y Configuración de Impresión</h3>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Para revisar el encuadre definitivo antes de imprimir copias físicas, dirígete a la ruta <code className="bg-slate-50 px-1 border rounded text-[10px]">Archivo ➔ Imprimir</code>. 
                </p>
                <ul className="text-[11px] text-slate-500 space-y-1.5 list-disc list-inside">
                  <li><strong>Vista Previa:</strong> Observa el lado derecho de la pantalla para constatar que ninguna tabla o imagen se haya cortado.</li>
                  <li><strong>Configuración:</strong> Define el número de copias, selecciona tu impresora activa e indica si deseas imprimir hojas específicas (Ej: <span className="font-mono bg-slate-50 px-1 border rounded text-[10px]">1-4, 7</span>).</li>
                </ul>
              </div>

            </div>
          )}

        </div>

        {/* 📥 DESCARGA DIRECTA DEL MANUAL EN FORMATO PDF */}
        <div className="bg-white rounded-[2rem] border border-slate-200/80 shadow-xl overflow-hidden mt-4">
          <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 via-slate-50/50 to-white flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <CheckCircle2 size={16} />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-800">Documentación de Respaldo Oficial</h2>
              <p className="text-slate-400 text-xs font-semibold">Descarga el manual estructurado para consultas sin internet</p>
            </div>
          </div>
          <div className="p-6 bg-slate-50/30">
            {resources.map((item, idx) => (
              <a 
                href={`/api/download?id=${item.driveId}`} 
                key={idx} 
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-500/40 hover:shadow-lg transition-all group/file decoration-transparent cursor-pointer"
              >
                <div className="flex items-center gap-4 overflow-hidden">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-blue-50 text-blue-600 border border-blue-100 shadow-inner">
                    <FileText size={20} />
                  </div>
                  <div className="truncate">
                    <h4 className="text-slate-700 font-bold text-xs md:text-sm truncate group-hover/file:text-blue-600 transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">{item.size} • Archivo PDF</span>
                  </div>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/file:bg-blue-600 group-hover/file:text-white transition-all shadow-sm transform group-hover/file:scale-105">
                  <Download size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}