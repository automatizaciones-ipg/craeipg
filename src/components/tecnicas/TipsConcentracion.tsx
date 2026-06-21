import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  ChevronLeft, Target, Wifi, WifiOff, Phone, Moon, Coffee,
  TreePine, BatteryCharging, Sparkles, Download, Timer, Brain,
  CheckCircle2, Lightbulb, ArrowRight
} from 'lucide-react';

export default function TipsConcentracion({ onBack }: { onBack: () => void }) {
  const [activeStep, setActiveStep] = useState(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const techniques = [
    {
      icon: <Phone size={22} />,
      color: 'from-blue-600 to-cyan-500',
      title: 'Elimina las Distracciones Digitales',
      desc: 'Activa el modo avión, no solo el silencioso. Las notificaciones no llegan si no hay conexión. Usa aplicaciones de bloqueo como Cold Turkey o Freedom para bloquear sitios durante el estudio.',
      impact: 'Recuperar el foco tras una interrupción toma 23 minutos. Cada notificación cuesta casi media hora.',
    },
    {
      icon: <Timer size={22} />,
      color: 'from-cyan-500 to-teal-500',
      title: 'Bloques de Tiempo Definidos',
      desc: 'Trabaja en bloques de 45–90 minutos con descansos planificados. No estudies sin fin: el rendimiento cae dramáticamente después de 90 minutos continuos sin descanso.',
      impact: 'El descanso NO es perder tiempo — es parte del aprendizaje. El cerebro consolida durante el reposo.',
    },
    {
      icon: <Moon size={22} />,
      color: 'from-indigo-500 to-purple-600',
      title: 'Optimiza tu Entorno de Estudio',
      desc: 'Temperatura ideal: 20–22°C. Iluminación: luz natural o fría blanca. Ruido: blanco o música instrumental sin letra. Escritorio despejado: un objeto fuera de lugar es un distractor potencial.',
      impact: 'El entorno físico influye hasta un 30% en la capacidad de concentración y retención.',
    },
    {
      icon: <Coffee size={22} />,
      color: 'from-amber-500 to-orange-500',
      title: 'Gestión de Energía, No Solo de Tiempo',
      desc: 'Estudia en tus horas de mayor energía. Identifica tu "pico cognitivo" (generalmente mañana o tarde para estudiantes adultos). Reserva tareas mecánicas para los valles de energía.',
      impact: 'Trabajar 3 horas en tu pico cognitivo equivale a 6 horas en un valle de energía.',
    },
    {
      icon: <TreePine size={22} />,
      color: 'from-emerald-500 to-teal-400',
      title: 'Micro-descansos Activos',
      desc: 'Cada 45 minutos: 5 minutos de movimiento físico real — pararte, estirarte, caminar. No celular en el descanso. El movimiento activa el flujo sanguíneo cerebral y mejora la cognición.',
      impact: 'Los micro-descansos reducen el agotamiento cognitivo y aumentan la productividad total del día.',
    },
  ];

  const timeline = [
    { time: '00:00', label: 'Inicio', desc: 'Define la meta del bloque. 1 tarea concreta, no vaga.', color: 'bg-blue-500' },
    { time: '05:00', label: 'Calentamiento', desc: 'Repasa brevemente lo último que estudiaste antes de entrar al nuevo material.', color: 'bg-cyan-500' },
    { time: '10:00–40:00', label: 'Zona de Foco', desc: 'Trabajo profundo. Sin interrupciones. Celular en modo avión.', color: 'bg-indigo-600' },
    { time: '40:00', label: 'Revisión', desc: 'Verifica lo que lograste. Corrige errores mientras el contexto está fresco.', color: 'bg-teal-500' },
    { time: '45:00', label: 'Descanso', desc: '5 minutos de movimiento físico. Sin pantallas. Luego reinicia el ciclo.', color: 'bg-emerald-500' },
  ];

  const quickTips = [
    { icon: <WifiOff size={22} className="text-blue-500" />, title: 'Modo avión real', text: 'No modo silencio — modo avión. Las notificaciones visuales (luz LED, popups) interrumpen aunque no suenen.' },
    { icon: <BatteryCharging size={22} className="text-amber-500" />, title: 'Beber agua', text: 'La deshidratación leve (1–2%) reduce la concentración y la memoria de trabajo. Un vaso de agua cada hora.' },
    { icon: <Brain size={22} className="text-purple-500" />, title: 'Lista de pendientes', text: 'Antes de empezar, escribe TODO lo que tienes en mente pendiente. El cerebro libera carga cognitiva al externalizar.' },
    { icon: <CheckCircle2 size={22} className="text-emerald-500" />, title: 'Una sola tarea', text: 'La multitarea reduce la eficiencia hasta un 40% y aumenta los errores. Haz una cosa a la vez, siempre.' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 group font-medium bg-transparent border-none cursor-pointer"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-blue-100 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver a Técnicas de Estudio
      </motion.button>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-12">

        {/* HERO */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-950 shadow-2xl shadow-blue-900/30 text-white"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/20 mb-6 uppercase tracking-wider text-cyan-100">
              <Target size={16} /> Rendimiento Cognitivo
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              Tips de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Concentración
              </span>
            </h1>
            <p className="text-lg text-cyan-100/90 leading-relaxed max-w-2xl">
              Dominar la concentración es la habilidad diferenciadora de los estudiantes de alto rendimiento.
              No se trata de fuerza de voluntad — se trata de sistema y entorno.
            </p>
          </div>
        </motion.div>

        {/* 5 TÉCNICAS — stepper interactivo */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm border border-blue-100">
              <Sparkles size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">5 Técnicas Esenciales</h2>
              <p className="text-slate-500 text-sm">Selecciona cada técnica para explorar cómo aplicarla</p>
            </div>
          </div>

          {/* Tab selector */}
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            {techniques.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all border ${
                  activeStep === i
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                <span className="text-xs opacity-60">{String(i + 1).padStart(2, '0')}</span>
                <span className="hidden sm:inline">{t.title.split(' ').slice(0, 2).join(' ')}</span>
                <span className="sm:hidden">{String(i + 1)}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 overflow-hidden relative"
            >
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${techniques[activeStep].color}`}></div>
              <div className="flex items-start gap-6 pl-4">
                <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${techniques[activeStep].color} text-white shadow-lg`}>
                  {techniques[activeStep].icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    <span className="text-slate-300 mr-2">{String(activeStep + 1).padStart(2, '0')}.</span>
                    {techniques[activeStep].title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{techniques[activeStep].desc}</p>
                  <div className="flex items-start gap-2 bg-cyan-50 border border-cyan-100 rounded-xl p-4">
                    <Lightbulb size={16} className="text-cyan-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-cyan-800 leading-relaxed font-medium">{techniques[activeStep].impact}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* TIMELINE DE SESIÓN */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100">
              <Timer size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Sesión de Estudio Tipo: 45 Minutos</h2>
              <p className="text-slate-500 text-sm">Estructura recomendada para un bloque de concentración profunda</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">
            <div className="flex flex-col gap-0">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full shrink-0 mt-1 ${item.color} shadow-sm ring-4 ring-white z-10`}></div>
                    {i < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-slate-200 my-1"></div>
                    )}
                  </div>
                  <div className={`pb-6 ${i === timeline.length - 1 ? 'pb-0' : ''}`}>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-black text-slate-400 font-mono tracking-wider">{item.time}</span>
                      <h4 className="font-bold text-slate-800 text-sm">{item.label}</h4>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* QUICK TIPS */}
        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Lo que la Neurociencia Dice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickTips.map((tip, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3 hover:border-blue-200 transition-colors">
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
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Infografía Descargable</h2>
                <p className="text-slate-500 text-sm font-medium mt-1">Material visual oficial IPG en formato PNG de alta calidad</p>
              </div>
            </div>
            <div className="p-6 bg-slate-50/50">
              <a
                href="/api/download?id=1jEZjCxerPaTeqRlRDIZ4d0IoWnNeK7lV"
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400/50 hover:shadow-md transition-all group/file cursor-pointer decoration-transparent"
              >
                <div className="flex items-center gap-4 overflow-hidden">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-violet-50 text-violet-600 border border-violet-100 font-bold text-xs">
                    PNG
                  </div>
                  <div className="truncate">
                    <h4 className="text-slate-700 font-bold text-sm truncate group-hover/file:text-blue-600 transition-colors">
                      Infografía: Tips de Concentración IPG
                    </h4>
                    <span className="text-xs text-slate-400 font-medium">380 KB · Alta resolución</span>
                  </div>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/file:bg-blue-600 group-hover/file:text-white transition-colors shadow-sm ml-2">
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
