import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  ChevronLeft, Clock, Key, CalendarDays,
  Zap, FolderOpen, ArrowRight,
} from 'lucide-react';

import CincoClavesOrganizar from './tiempo/CincoClavesOrganizar';
import PlannerSemanal from './tiempo/PlannerSemanal';
import ClavesProductividad from './tiempo/ClavesProductividad';
import PlanificarEstudio from './tiempo/PlanificarEstudio';

interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  itemCount: number;
}

const categories: Category[] = [
  { id: 'cinco-claves', title: '5 Claves para Organizar tu Tiempo', icon: <Key size={24} />, color: 'from-teal-500 to-cyan-500', itemCount: 1 },
  { id: 'planner',      title: 'Planner Semanal IPG',               icon: <CalendarDays size={24} />, color: 'from-blue-600 to-indigo-600', itemCount: 1 },
  { id: 'productividad',title: 'Claves de Productividad',           icon: <Zap size={24} />,          color: 'from-indigo-500 to-purple-500', itemCount: 1 },
  { id: 'planificar',   title: 'Cómo Planificar tu Estudio',        icon: <Clock size={24} />,        color: 'from-teal-600 to-emerald-500', itemCount: 1 },
];

const TimeManagement: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('menu');

  const pageTransition: Variants = {
    hidden:  { opacity: 0, x: 15, scale: 0.99 },
    visible: { opacity: 1, x: 0,  scale: 1,   transition: { duration: 0.4, ease: 'easeOut' } },
    exit:    { opacity: 0, x: -15, scale: 0.99, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  const containerVariants: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };

  const itemVariants: Variants = {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0,  transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const handleBack = () => setActiveSection('menu');

  return (
    <div className="w-full min-h-screen bg-slate-50/30 text-slate-800 antialiased selection:bg-teal-500 selection:text-white overflow-x-hidden">
      <AnimatePresence mode="wait">

        {activeSection === 'cinco-claves' && (
          <motion.div key="cinco-claves" variants={pageTransition} initial="hidden" animate="visible" exit="exit">
            <CincoClavesOrganizar onBack={handleBack} />
          </motion.div>
        )}

        {activeSection === 'planner' && (
          <motion.div key="planner" variants={pageTransition} initial="hidden" animate="visible" exit="exit">
            <PlannerSemanal onBack={handleBack} />
          </motion.div>
        )}

        {activeSection === 'productividad' && (
          <motion.div key="productividad" variants={pageTransition} initial="hidden" animate="visible" exit="exit">
            <ClavesProductividad onBack={handleBack} />
          </motion.div>
        )}

        {activeSection === 'planificar' && (
          <motion.div key="planificar" variants={pageTransition} initial="hidden" animate="visible" exit="exit">
            <PlanificarEstudio onBack={handleBack} />
          </motion.div>
        )}

        {activeSection === 'menu' && (
          <motion.div
            key="menu"
            variants={pageTransition}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12"
          >
            {/* Botón Volver al Inicio */}
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors mb-8 group font-medium decoration-transparent cursor-pointer"
            >
              <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-teal-50 transition-colors">
                <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
              </div>
              Volver al inicio
            </motion.a>

            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 border border-white bg-white/70 backdrop-blur-xl shadow-xl shadow-slate-200/40 mb-12 md:mb-16"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-teal-400/8 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-400/8 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full text-sm font-bold border border-teal-100 mb-6 uppercase tracking-wider">
                  <Clock size={16} /> Gestión del Tiempo
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-none md:leading-tight">
                  Gestión del Tiempo y{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-500">
                    Autogestión Académica
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Aprende a planificar tu semana, aumentar tu productividad y equilibrar vida personal, laboral y académica con los recursos oficiales del CRAI IPG.
                </p>
              </div>
            </motion.div>

            {/* Grid de módulos */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"
            >
              {categories.map((category) => (
                <motion.div
                  key={category.id}
                  variants={itemVariants}
                  onClick={() => setActiveSection(category.id)}
                  className="flex flex-col bg-white rounded-3xl border border-slate-200 shadow-md shadow-slate-200/20 overflow-hidden cursor-pointer hover:shadow-xl hover:border-teal-400/40 transition-all duration-300 group relative"
                  whileHover={{ y: -5 }}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-[0.04] rounded-bl-[80px] group-hover:scale-110 transition-transform duration-500 pointer-events-none`}></div>

                  <div className="p-6 flex flex-col justify-between h-full min-h-[180px] relative z-10">
                    <div>
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${category.color} text-white shadow-sm mb-4`}>
                        {category.icon}
                      </div>
                      <h2 className="text-xl font-bold text-slate-800 group-hover:text-teal-600 transition-colors leading-snug">
                        {category.title}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-4">
                      <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                        {category.itemCount} {category.itemCount === 1 ? 'Recurso' : 'Recursos'}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-teal-600 group-hover:text-white transition-all shadow-inner">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export default TimeManagement;
