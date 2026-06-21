import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ChevronLeft, Shield, Users, GraduationCap, HandHeart, Banknote,
  Download, Sparkles, FileText, CheckCircle2,
} from 'lucide-react';

export default function NoSoloA({ onBack }: { onBack: () => void }) {
  const containerVariants: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const pillars = [
    {
      icon: <Users size={22} />,
      title: 'Orientación Personalizada',
      desc: 'Reuniones individuales con un consejero estudiantil para identificar las causas de las dificultades y co-diseñar un plan de acción adaptado a tu situación.',
      color: 'text-blue-500 bg-blue-50 border-blue-100',
    },
    {
      icon: <GraduationCap size={22} />,
      title: 'Apoyo Académico',
      desc: 'Tutoría de pares, sesiones de refuerzo y conexión con recursos de aprendizaje adaptados a tu ritmo y contexto académico.',
      color: 'text-indigo-500 bg-indigo-50 border-indigo-100',
    },
    {
      icon: <HandHeart size={22} />,
      title: 'Acompañamiento Emocional',
      desc: 'Orientación psicológica breve y acceso a redes de apoyo para procesar situaciones que afecten tu bienestar emocional durante el proceso académico.',
      color: 'text-rose-500 bg-rose-50 border-rose-100',
    },
    {
      icon: <Banknote size={22} />,
      title: 'Gestión de Situaciones',
      desc: 'En casos críticos, articulación con beneficios, becas de emergencia y conexión con servicios de bienestar institucionales y externos.',
      color: 'text-teal-500 bg-teal-50 border-teal-100',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Contacta a tu Consejero/a de Sede',
      desc: 'Puedes solicitarlo directamente, pedir a un docente que te derive, o escribir a tu correo institucional al equipo de bienestar de tu sede.',
    },
    {
      num: '02',
      title: 'Primera Reunión',
      desc: 'Conversación inicial sin compromisos ni evaluaciones. Solo escucha. El consejero mapea tu situación y explica el proceso de manera clara.',
    },
    {
      num: '03',
      title: 'Plan de Acompañamiento',
      desc: 'En acuerdo contigo, se definen los apoyos concretos y el seguimiento. Tú controlas el nivel de participación en todo momento.',
    },
  ];

  const tips = [
    'Pedir apoyo no es señal de debilidad — es la decisión más estratégica que puedes tomar.',
    'El programa es voluntario, pero sus beneficios son reales: más del 80% de participantes mejora su rendimiento.',
    'No esperes estar en crisis: el apoyo temprano siempre es más efectivo que el tardío.',
    'Hablar con un consejero no reemplaza la atención psicológica profesional, pero puede ser el primer paso.',
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 group font-medium bg-transparent border-none cursor-pointer"
      >
        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-blue-50 transition-colors">
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Volver a Bienestar
      </motion.button>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-12">

        {/* Hero */}
        <motion.div variants={itemVariants} className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950 shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/20 mb-6 uppercase tracking-wider text-blue-100">
              <Shield size={16} /> Programa IPG · Apoyo Estudiantil
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              ¿No Solo A? — Programa de Bienestar IPG
            </h1>
            <p className="text-lg text-blue-100/90 leading-relaxed max-w-2xl">
              El programa "¿No Solo A?" de IPG acompaña a estudiantes que enfrentan dificultades académicas, personales o económicas. Tu bienestar importa más que una nota.
            </p>
          </div>
        </motion.div>

        {/* Qué es */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-6">
            <Shield className="text-blue-600 w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-800">¿Qué es ¿No Solo A??</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                gradient: 'from-blue-600 to-blue-800',
                title: 'El Programa',
                body: '"¿No Solo A?" es la iniciativa de bienestar estudiantil de IPG que reconoce que el éxito académico depende de muchos factores más allá del esfuerzo individual. Cuando un estudiante está en dificultades, el instituto interviene de manera proactiva y confidencial.',
              },
              {
                gradient: 'from-indigo-600 to-indigo-800',
                title: '¿A quién va dirigido?',
                body: 'A cualquier estudiante IPG que experimente dificultades académicas sostenidas, situaciones económicas críticas, problemas personales o familiares que afecten el estudio, o sensación de aislamiento y desconexión del proceso académico.',
              },
              {
                gradient: 'from-teal-600 to-teal-800',
                title: 'Confidencialidad',
                body: 'Todo lo que compartes en el programa es completamente confidencial. La participación no afecta tu expediente académico ni es visible para tus docentes. El único objetivo es ayudarte a continuar y culminar tus estudios.',
              },
            ].map((card, i) => (
              <div key={i} className={`relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br ${card.gradient} text-white shadow-xl`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
                <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Apoyo que entrega */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle2 className="text-teal-500 w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-800">¿Qué apoyo entrega?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <div key={i} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex gap-4 hover:shadow-md hover:border-blue-300/50 transition-all">
                <div className={`shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center border ${p.color}`}>
                  {p.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">{p.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cómo acceder */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="text-indigo-500 w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-800">Cómo acceder al programa</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <div key={i} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 relative overflow-hidden hover:shadow-md hover:border-indigo-300/50 transition-all">
                <span className="absolute top-4 right-4 text-5xl font-black text-slate-100 select-none leading-none">{step.num}</span>
                <h4 className="font-bold text-slate-800 mb-2 pr-12 text-lg">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tips rápidos */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tips.map((tip, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3 hover:border-blue-300 transition-colors">
              <div className="shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <CheckCircle2 size={14} className="text-blue-600" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{tip}</p>
            </div>
          ))}
        </motion.div>

        {/* Descarga */}
        <motion.div variants={itemVariants} className="flex flex-col bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="p-6 md:p-8 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <Sparkles size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">Recurso Descargable</h2>
              <p className="text-slate-400 text-sm font-medium mt-1">Infografía oficial del programa ¿No Solo A?</p>
            </div>
          </div>
          <div className="p-6 bg-slate-50/50">
            <a
              href="/api/download?id=17-u8-jhtGHvDlSDpG3-acAASM1ezlcy8"
              className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400/50 hover:shadow-md transition-all group decoration-transparent cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-red-50 text-red-600 border border-red-100">
                  <FileText size={22} />
                </div>
                <div>
                  <h4 className="text-slate-700 font-bold text-sm group-hover:text-blue-600 transition-colors">¿No Solo A? Estrategias de Bienestar IPG</h4>
                  <span className="text-xs text-slate-400 font-medium">980 KB • PDF</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                <Download size={18} />
              </div>
            </a>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
