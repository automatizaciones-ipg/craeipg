import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ChevronLeft, Headphones, Play, Download, Music, CheckCircle2, Sparkles,
  Mic, BookOpen, Heart,
} from 'lucide-react';

const topics = [
  {
    icon: <Heart size={20} />,
    color: 'bg-rose-50 text-rose-600 border-rose-100',
    title: 'Autocuidado en el Estudio',
    desc: 'Estrategias para mantener el equilibrio emocional durante períodos de alta carga académica.',
  },
  {
    icon: <Headphones size={20} />,
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    title: 'Ansiedad Académica',
    desc: 'Cómo reconocer y gestionar la ansiedad antes de evaluaciones y entregas importantes.',
  },
  {
    icon: <BookOpen size={20} />,
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    title: 'Motivación y Propósito',
    desc: 'Reconectar con tu motivación intrínseca cuando el proceso se vuelve difícil.',
  },
  {
    icon: <Mic size={20} />,
    color: 'bg-teal-50 text-teal-600 border-teal-100',
    title: 'Hábitos y Rutinas',
    desc: 'Diseño de rutinas diarias que apoyen tanto el bienestar como el rendimiento.',
  },
  {
    icon: <Music size={20} />,
    color: 'bg-purple-50 text-purple-600 border-purple-100',
    title: 'Vida Social y Académica',
    desc: 'Equilibrar la vida social con las exigencias de un programa de educación superior.',
  },
  {
    icon: <CheckCircle2 size={20} />,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    title: 'Pedir Ayuda es Fortaleza',
    desc: 'Por qué buscar apoyo profesional o institucional es una decisión inteligente.',
  },
];

const guideSteps = [
  {
    num: '01',
    title: 'Busca un Espacio Tranquilo',
    desc: 'Escuchar este podcast en un momento de calma (mañana, transporte, pausa de estudio) maximiza su impacto.',
  },
  {
    num: '02',
    title: 'Descarga para Escuchar Offline',
    desc: 'Sin conexión en tu sede o en movimiento, el archivo M4A pesa poco y se escucha en cualquier reproductor.',
  },
  {
    num: '03',
    title: 'Reflexiona y Aplica',
    desc: 'Al terminar, anota una sola acción concreta que puedas implementar hoy. La reflexión sin acción no cambia nada.',
  },
];

const tips = [
  'Escuchar este podcast mientras caminas combina movimiento físico y bienestar mental en un solo momento.',
  'Compártelo con compañeros: a veces es más fácil que un amigo escuche antes de que tú puedas hablar.',
  'Si algún tema resuena mucho, anota la idea y busca más recursos en el CRAI IPG.',
  'El bienestar no es un destino — es una práctica diaria. Este podcast es parte de esa práctica.',
];

export default function PodcastBienestar({ onBack }: { onBack: () => void }) {
  const containerVariants: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors mb-8 group font-medium bg-transparent border-none cursor-pointer"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-indigo-50 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver a Bienestar
      </motion.button>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-12">

        {/* Hero */}
        <motion.div variants={itemVariants} className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 border border-purple-100 px-4 py-2 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
              <Headphones size={16} /> Podcast · Bienestar IPG
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Podcast de Bienestar Estudiantil IPG
            </h1>
            <p className="text-lg text-indigo-100/90 leading-relaxed max-w-2xl">
              Audio producido por el equipo de bienestar de IPG con estrategias prácticas, reflexiones y herramientas para el equilibrio durante tu formación académica.
            </p>
          </div>
        </motion.div>

        {/* Episodio Destacado */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-6">
            <Play className="text-indigo-600 w-6 h-6 fill-indigo-600" />
            <h2 className="text-2xl font-bold text-slate-800">Episodio Disponible</h2>
          </div>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 p-8 text-white shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
              <div className="shrink-0 w-24 h-24 rounded-3xl bg-white/20 flex items-center justify-center shadow-xl">
                <Headphones size={42} className="text-white" />
              </div>
              <div className="flex-1">
                <span className="text-xs bg-purple-50 text-purple-600 border border-purple-100 font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  M4A · Audio
                </span>
                <h3 className="text-2xl font-black mt-3 mb-2">Podcast de Bienestar IPG</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  Recursos, estrategias y reflexiones del equipo de bienestar estudiantil. Escúchalo cuando necesites reconectar con tu bienestar durante la jornada académica.
                </p>
                <a
                  href="/api/download?id=1rTpAUay76Zho-Gw4vEtgQfL6xXBuyk-X"
                  className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-5 py-2.5 rounded-full text-sm hover:bg-indigo-50 transition-colors shadow-md decoration-transparent cursor-pointer"
                >
                  <Download size={16} /> Descargar Audio
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Temas del episodio */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-6">
            <Mic className="text-purple-500 w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-800">Temas Abordados</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((topic, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 p-5 flex gap-4 hover:shadow-md hover:border-indigo-300/50 transition-all">
                <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border ${topic.color}`}>
                  {topic.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">{topic.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Guía de escucha */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle2 className="text-teal-500 w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-800">Guía de 3 Pasos para Escucharlo</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {guideSteps.map((step, i) => (
              <div key={i} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 relative overflow-hidden hover:shadow-md hover:border-indigo-300/50 transition-all">
                <span className="absolute top-4 right-4 text-5xl font-black text-slate-100 select-none leading-none">{step.num}</span>
                <h4 className="font-bold text-slate-800 mb-2 pr-12 text-lg">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tips */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tips.map((tip, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3 hover:border-indigo-300 transition-colors">
              <div className="shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
                <CheckCircle2 size={14} className="text-indigo-600" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{tip}</p>
            </div>
          ))}
        </motion.div>

        {/* Descarga final */}
        <motion.div variants={itemVariants} className="flex flex-col bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="p-6 md:p-8 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md">
              <Sparkles size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">Descarga el Audio</h2>
              <p className="text-slate-400 text-sm font-medium mt-1">Escúchalo sin conexión a internet</p>
            </div>
          </div>
          <div className="p-6 bg-slate-50/50">
            <a
              href="/api/download?id=1rTpAUay76Zho-Gw4vEtgQfL6xXBuyk-X"
              className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400/50 hover:shadow-md transition-all group decoration-transparent cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-purple-50 text-purple-600 border border-purple-100">
                  <Music size={22} />
                </div>
                <div>
                  <h4 className="text-slate-700 font-bold text-sm group-hover:text-indigo-600 transition-colors">Podcast de Bienestar Estudiantil IPG</h4>
                  <span className="text-xs text-slate-400 font-medium">Audio • M4A</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-sm">
                <Download size={18} />
              </div>
            </a>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
