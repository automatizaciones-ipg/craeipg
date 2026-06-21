import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ChevronLeft, BookOpen, Download, Sparkles,
  FileText, CheckCircle2, AlertCircle, ArrowRightLeft,
  AlignLeft, Type, Layout, List,
} from 'lucide-react';

export default function ManualAPA({ onBack }: { onBack: () => void }) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) =>
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));

  const containerVariants: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const formatSections = [
    {
      icon: <Layout size={24} />,
      color: 'from-blue-600 to-blue-800',
      title: 'Página y Márgenes',
      items: [
        'Márgenes: 2,54 cm en todos los bordes (1 pulgada)',
        'Papel: tamaño carta (21,59 × 27,94 cm) — A4 también aceptado',
        'Orientación: siempre vertical',
        'Numeración: en la esquina superior derecha, desde la portada',
      ],
    },
    {
      icon: <Type size={24} />,
      color: 'from-indigo-600 to-indigo-800',
      title: 'Tipografía y Párrafos',
      items: [
        'Fuentes aceptadas: Times New Roman 12 pts · Calibri 11 pts · Arial 11 pts',
        'Interlineado: DOBLE en todo el documento, incluyendo referencias',
        'Sangría: 1,27 cm al inicio de cada párrafo',
        'Alineación: izquierda — NO justificado',
      ],
    },
    {
      icon: <Layout size={24} />,
      color: 'from-purple-600 to-purple-800',
      title: 'Estructura del Documento',
      items: [
        'Portada: título, nombre del autor, institución, asignatura, docente, fecha',
        'Título: en negrita, centrado, en la mitad superior de la portada',
        'Abstract (solo si el docente lo exige): sin sangría, máximo 250 palabras',
        'Número de página: ángulo superior derecho en todas las páginas',
      ],
    },
    {
      icon: <List size={24} />,
      color: 'from-teal-600 to-teal-800',
      title: 'Sección de Referencias',
      items: [
        'Siempre en página nueva, título "Referencias" centrado y en negrita',
        'Orden: alfabético por apellido del primer autor',
        'Sangría francesa (hanging indent): 1,27 cm en líneas subsiguientes',
        'Sin líneas en blanco entre referencias — el interlineado doble es suficiente',
      ],
    },
  ];

  const changes = [
    { aspect: 'Número de autores',  before: 'Hasta 7, luego et al.', after: 'Hasta 20, et al. desde el autor 21+' },
    { aspect: 'URLs',               before: 'Se escribía "Recuperado de"', after: 'Solo la URL o DOI, sin "Recuperado de"' },
    { aspect: 'DOI',                before: 'dx.doi.org/XXXXX',            after: 'Siempre https://doi.org/XXXXX (activo)' },
    { aspect: 'Ciudad del editor',  before: 'Ciudad: Editorial',            after: 'Ya no se incluye la ciudad' },
    { aspect: 'Running head',       before: 'Obligatorio en todos',         after: 'Eliminado en escritos de estudiantes' },
  ];

  const tips = [
    { icon: <AlertCircle size={18} />, color: 'text-red-500',  text: 'Nunca uses Wikipedia como fuente APA — ve siempre a la fuente primaria citada.' },
    { icon: <CheckCircle2 size={18}/>, color: 'text-teal-500', text: 'El DOI es la cita más estable. Si no hay DOI, usa la URL de la base de datos académica.' },
    { icon: <Sparkles size={18}/>,     color: 'text-blue-500', text: 'Zotero y Mendeley generan referencias APA 7 automáticamente — instálalos gratis.' },
    { icon: <AlertCircle size={18} />, color: 'text-amber-500',text: 'Las comunicaciones personales (correos, entrevistas) NO van en referencias — solo en el texto.' },
  ];

  const downloads = [
    { name: 'Manual Norma APA 7ma Edición (Actualizado)', size: '3.2 MB', format: 'PDF',  driveId: '1ndAjEVKJloQszvyqpPP8us96dxku0YjX' },
    { name: 'Normas APA 7° Edición (Presentación)',        size: '4.1 MB', format: 'PPTX', driveId: '1CX_tBMx_GW8e4ZVmh9W2xf4uwQdc7iAc' },
  ];

  const checklistItems = [
    'Márgenes de 2,54 cm por todos lados',
    'Fuente y tamaño correcto',
    'Interlineado doble en todo el documento',
    'Sangría de 1,27 cm en cada párrafo',
    'Portada completa (título, autor, institución, fecha)',
    'Referencias en página nueva',
    'Referencias en orden alfabético',
    'Sangría francesa en las referencias',
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">

      {/* Botón Volver */}
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 group font-medium bg-transparent border-none cursor-pointer"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-blue-50 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver a Normas APA
      </motion.button>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-12">

        {/* HERO */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950 shadow-2xl text-white"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/20 mb-6 uppercase tracking-wider text-blue-100">
              <BookOpen size={16} /> Manual Oficial Actualizado · APA 7
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              Manual Norma <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">APA 7ma Edición</span>
            </h1>
            <p className="text-lg text-blue-100/90 leading-relaxed max-w-2xl">
              El manual completo de referencia para formatear tus trabajos académicos según el estándar internacional APA, actualizado a la 7ª edición.
            </p>
          </div>
        </motion.div>

        {/* SECCIÓN 1: Configuración del Documento */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
              <FileText size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Configuración del Documento APA</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {formatSections.map((sec, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
                <div className={`p-5 bg-gradient-to-r ${sec.color} flex items-center gap-3`}>
                  <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                    {sec.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg">{sec.title}</h3>
                </div>
                <ul className="p-5 space-y-3">
                  {sec.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-teal-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SECCIÓN 2: APA 7 vs APA 6 */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100">
              <ArrowRightLeft size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Novedades: APA 7 vs APA 6</h2>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
              <div className="py-3 px-5">Aspecto</div>
              <div className="py-3 px-5 border-l border-slate-200 text-red-400">APA 6 (anterior)</div>
              <div className="py-3 px-5 border-l border-slate-200 text-teal-600">APA 7 (actual)</div>
            </div>
            {changes.map((row, idx) => (
              <div key={idx} className={`grid grid-cols-3 text-sm border-b border-slate-100 ${idx % 2 === 0 ? '' : 'bg-slate-50/50'}`}>
                <div className="py-4 px-5 font-semibold text-slate-700">{row.aspect}</div>
                <div className="py-4 px-5 border-l border-slate-100 text-slate-500 line-through decoration-red-400">{row.before}</div>
                <div className="py-4 px-5 border-l border-slate-100 text-teal-700 font-medium">{row.after}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SECCIÓN 3: Checklist interactivo */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 border border-teal-100">
              <CheckCircle2 size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Checklist antes de entregar</h2>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6">
            <p className="text-sm text-slate-500 mb-5">Marca cada ítem antes de enviar tu trabajo:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {checklistItems.map((item, idx) => {
                const id = `check-${idx}`;
                return (
                  <button
                    key={id}
                    onClick={() => toggleCheck(id)}
                    className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all ${
                      checkedItems[id]
                        ? 'bg-teal-50 border-teal-300 text-teal-800'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-teal-200'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                      checkedItems[id] ? 'bg-teal-500 border-teal-500' : 'border-slate-300'
                    }`}>
                      {checkedItems[id] && <CheckCircle2 size={12} className="text-white" />}
                    </div>
                    <span className={`text-sm font-medium ${checkedItems[id] ? 'line-through opacity-70' : ''}`}>{item}</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 text-sm text-slate-400">
              {Object.values(checkedItems).filter(Boolean).length} / {checklistItems.length} ítems completados
            </div>
          </div>
        </motion.div>

        {/* SECCIÓN 4: Quick tips */}
        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-bold text-slate-800 mb-5">Consejos Clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <span className={tip.color}>{tip.icon}</span>
                <p className="text-sm text-slate-600 leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SECCIÓN 5: Descargas */}
        <motion.div variants={itemVariants}>
          <div className="flex flex-col bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="p-6 md:p-8 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Material Oficial Descargable</h2>
                <p className="text-slate-500 text-sm font-medium mt-1">Manual completo y presentación APA 7 del CRAI IPG</p>
              </div>
            </div>
            <div className="p-6 bg-slate-50/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {downloads.map((item, idx) => (
                  <a
                    key={idx}
                    href={`/api/download?id=${item.driveId}`}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400/50 hover:shadow-md transition-all group/file decoration-transparent cursor-pointer"
                  >
                    <div className="flex items-center gap-4 overflow-hidden">
                      <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xs border ${
                        item.format === 'PDF'
                          ? 'bg-red-50 text-red-600 border-red-100'
                          : 'bg-orange-50 text-orange-600 border-orange-100'
                      }`}>
                        {item.format}
                      </div>
                      <div className="truncate">
                        <h4 className="text-slate-700 font-bold text-sm truncate group-hover/file:text-blue-600 transition-colors">{item.name}</h4>
                        <span className="text-xs text-slate-400 font-medium">{item.size} · {item.format}</span>
                      </div>
                    </div>
                    <div className="shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/file:bg-blue-600 group-hover/file:text-white transition-colors shadow-sm ml-2">
                      <Download size={18} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
