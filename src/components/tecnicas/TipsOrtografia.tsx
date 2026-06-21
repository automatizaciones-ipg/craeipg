import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  ChevronLeft, Sparkles, Download, AlignLeft, Lightbulb,
  Volume2, Pencil, Type, Star, CheckCircle2, XCircle, ArrowRight
} from 'lucide-react';

export default function TipsOrtografia({ onBack }: { onBack: () => void }) {
  const [activeRule, setActiveRule] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const rules = [
    {
      icon: <Star size={20} />,
      color: 'from-indigo-500 to-blue-600',
      title: 'Uso de Tildes',
      rule: 'Agudas: tilde en la última sílaba si terminan en N, S o vocal (café, camión). Graves: tilde en penúltima si NO terminan en N, S o vocal (árbol, cráter). Esdrújulas: SIEMPRE llevan tilde (médico, teléfono).',
      example: '¡Ojo! Desde 2010, la RAE eliminó la tilde en "solo" y los demostrativos este/ese/aquel. Ya no se escribe "sólo".',
    },
    {
      icon: <Type size={20} />,
      color: 'from-purple-500 to-indigo-500',
      title: 'B vs V',
      rule: 'Se escribe B: en verbos terminados en -bir, -buir (escribir, contribuir) y sus conjugaciones; después de M (también, ambos). Se escribe V: en adjetivos terminados en -ave, -avo, -evo, -iva (suave, nuevo, activo).',
      example: 'Truco: "voy a vivir" — estas tres palabras con V te recuerdan el patrón. "Beber" y "bebida" con B.',
    },
    {
      icon: <Volume2 size={20} />,
      color: 'from-teal-500 to-emerald-400',
      title: 'H Muda',
      rule: 'La H no tiene sonido pero es obligatoria. Palabras con diptongo IE o UE al inicio siempre llevan H: hueso, huevo, hierro, hielo, hiena. También: hacer, haber, hablar, hora, historia.',
      example: 'Forma familias: haber → habría / había / hubiera. Hacer → hago / hice / haré. Aprender la familia entera es más eficiente.',
    },
    {
      icon: <Pencil size={20} />,
      color: 'from-cyan-500 to-blue-400',
      title: 'C / S / Z',
      rule: 'En Chile (seseo), C (ce/ci) y Z suenan igual que S, lo que genera confusiones. La estrategia más efectiva: aprender por familias léxicas, no por reglas aisladas.',
      example: 'Feliz → felicidad / felicitar. Cruz → crucial. Corazón → cordial. La familia léxica te da la "raíz" y confirma la grafía.',
    },
    {
      icon: <AlignLeft size={20} />,
      color: 'from-rose-500 to-pink-500',
      title: 'Puntuación',
      rule: 'Coma obligatoria antes de: "pero", "aunque", "sino", "sin embargo", "no obstante". Punto seguido: misma idea en distinto ángulo. Punto aparte: idea nueva. NUNCA coma entre sujeto y verbo principal.',
      example: 'Correcto: "Estudié mucho, pero no obtuve buena nota." Error frecuente: "El alumno, aprobó la evaluación" (coma incorrecta).',
    },
    {
      icon: <Star size={20} />,
      color: 'from-amber-500 to-orange-400',
      title: 'Mayúsculas',
      rule: 'Mayúscula solo al inicio de oración y en nombres propios (personas, países, ciudades, empresas). Los cargos, meses y días van en minúscula en español: "el presidente", "lunes", "marzo".',
      example: 'Error frecuente: "El Presidente firmó la Ley el Martes." Correcto: "El presidente firmó la ley el martes."',
    },
  ];

  const confusions = [
    { wrong: 'Porque (conjunción)', right: 'Por qué (pregunta / exclamación)', use: '"¿Por qué no viniste?" / "No vine porque estaba enfermo."' },
    { wrong: 'Sino (adversativo)', right: 'Si no (condicional)', use: '"No es blanco, sino negro." / "Si no estudias, reprobarás."' },
    { wrong: 'Haber (verbo auxiliar)', right: 'A ver (a + ver)', use: '"Debe haber un error." / "A ver si lo entiendo."' },
    { wrong: 'Hay (haber)', right: 'Ahí (lugar) / ¡Ay! (exclamación)', use: '"Hay tres opciones." / "El libro está ahí." / "¡Ay, me duele!"' },
    { wrong: 'Más (cantidad)', right: 'Mas (pero, literario)', use: '"Quiero más tiempo." / "Intenté mas no pude." (formal)' },
  ];

  const quickTips = [
    { icon: <Volume2 size={22} className="text-teal-500" />, title: 'Lee en voz alta', text: 'Tu oído detecta errores que el ojo omite. Lee en voz alta cada párrafo antes de entregar cualquier trabajo.' },
    { icon: <CheckCircle2 size={22} className="text-indigo-500" />, title: 'No solo el corrector', text: 'El autocorrector detecta ortografía pero no errores de sentido (hay/ahí, sino/si no). Siempre revisa manualmente.' },
    { icon: <Pencil size={22} className="text-purple-500" />, title: 'Lista de palabras problema', text: 'Lleva una lista personal de las palabras que siempre te confunden. Cópiala 5 veces al inicio de cada semana.' },
    { icon: <Type size={22} className="text-emerald-500" />, title: 'Corrector regional', text: "Configura el corrector de Word en 'Español (Chile)' para recibir sugerencias adaptadas a nuestro idioma." },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors mb-8 group font-medium bg-transparent border-none cursor-pointer"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-teal-100 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver a Técnicas de Estudio
      </motion.button>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-12">

        {/* HERO */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-teal-900 via-emerald-900 to-teal-950 shadow-2xl shadow-teal-900/30 text-white"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/20 mb-6 uppercase tracking-wider text-emerald-100">
              <AlignLeft size={16} /> Escritura Académica
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              Tips de Ortografía para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">
                Textos Académicos
              </span>
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed max-w-2xl">
              Los errores ortográficos impactan directamente tu evaluación. Domina estas 6 reglas
              esenciales y produce textos de calidad profesional en todas tus asignaturas.
            </p>
          </div>
        </motion.div>

        {/* 6 REGLAS — accordion */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shadow-sm border border-teal-100">
              <Sparkles size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">6 Reglas Esenciales</h2>
              <p className="text-slate-500 text-sm">Haz clic en cada regla para expandir los detalles</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {rules.map((rule, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <button
                  onClick={() => setActiveRule(activeRule === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${rule.color} text-white shadow-sm shrink-0`}>
                      {rule.icon}
                    </div>
                    <span className="font-bold text-slate-800 text-base">{rule.title}</span>
                  </div>
                  <motion.div animate={{ rotate: activeRule === i ? 90 : 0 }} transition={{ duration: 0.2 }}>
                    <ArrowRight size={18} className="text-slate-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeRule === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 border-t border-slate-100 pt-4">
                        <p className="text-slate-600 text-sm leading-relaxed mb-3">{rule.rule}</p>
                        <div className="flex items-start gap-2 bg-teal-50 border border-teal-100 rounded-xl p-3">
                          <Lightbulb size={14} className="text-teal-600 shrink-0 mt-0.5" />
                          <p className="text-xs text-teal-800 leading-relaxed">{rule.example}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* TABLA DE CONFUSIONES */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 shadow-sm border border-rose-100">
              <XCircle size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Confusiones Más Frecuentes</h2>
              <p className="text-slate-500 text-sm">Pares de palabras que se confunden con más frecuencia en textos académicos</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-800 text-white text-xs font-bold uppercase tracking-wider">
              <div className="p-4 flex items-center gap-2"><XCircle size={14} className="text-red-400" /> Confusión Frecuente</div>
              <div className="p-4 flex items-center gap-2"><CheckCircle2 size={14} className="text-green-400" /> Forma Correcta</div>
              <div className="p-4">Contexto de Uso</div>
            </div>
            {confusions.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 text-sm border-t border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                <div className="p-4 text-red-600 font-semibold">{row.wrong}</div>
                <div className="p-4 text-teal-700 font-semibold">{row.right}</div>
                <div className="p-4 text-slate-500 text-xs leading-relaxed">{row.use}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* QUICK TIPS */}
        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Hábitos para Escribir Mejor</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickTips.map((tip, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3 hover:border-teal-200 transition-colors">
                {tip.icon}
                <h4 className="font-bold text-slate-800 text-sm">{tip.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* DESCARGA */}
        <motion.div variants={itemVariants}>
          <div className="flex flex-col bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 overflow-hidden">
            <div className="p-6 md:p-8 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-md">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Infografía Descargable</h2>
                <p className="text-slate-500 text-sm font-medium mt-1">Material visual oficial IPG en formato PNG de alta calidad</p>
              </div>
            </div>
            <div className="p-6 bg-slate-50/50">
              <a
                href="/api/download?id=1YCAdp-Dd1MbnzNVcej91pyMz9C7lD6ft"
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-400/50 hover:shadow-md transition-all group/file cursor-pointer decoration-transparent"
              >
                <div className="flex items-center gap-4 overflow-hidden">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-violet-50 text-violet-600 border border-violet-100 font-bold text-xs">
                    PNG
                  </div>
                  <div className="truncate">
                    <h4 className="text-slate-700 font-bold text-sm truncate group-hover/file:text-teal-600 transition-colors">
                      Infografía: Tips de Ortografía IPG
                    </h4>
                    <span className="text-xs text-slate-400 font-medium">420 KB · Alta resolución</span>
                  </div>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/file:bg-teal-600 group-hover/file:text-white transition-colors shadow-sm ml-2">
                  <Download size={18} />
                </div>
              </a>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
