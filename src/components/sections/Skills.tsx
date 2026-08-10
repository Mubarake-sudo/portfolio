'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { SKILLS } from '@/lib/data';

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: '#0A84FF',
  Backend: '#00D9FF',
  Database: '#FF6B35',
  Mobile: '#34D399',
  Outils: '#A78BFA',
};

const categories = ['Tous', 'Frontend', 'Backend', 'Database', 'Mobile', 'Outils'];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState('Tous');
  const filtered = activeCategory === 'Tous' ? SKILLS : SKILLS.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" ref={ref} className="relative section-padding">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle">Technologies utilisées</p>
          <h2 className="section-title">Compétences</h2>
          <p className="text-white/40 text-sm max-w-lg mx-auto mt-3">
            Une sélection de technologies utilisées dans mes projets web et mobiles.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => {
            const active = activeCategory === category;
            const color = CATEGORY_COLORS[category] ?? '#0A84FF';
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200"
                style={{
                  borderColor: active ? color : 'rgba(255,255,255,0.1)',
                  background: active ? `${color}22` : 'transparent',
                  color: active ? color : 'rgba(255,255,255,0.4)',
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filtered.map((skill, index) => {
            const color = CATEGORY_COLORS[skill.category] ?? '#0A84FF';
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="card text-center border border-white/[0.06] hover:border-white/20 transition-colors"
              >
                <span className="block font-semibold text-white text-sm">{skill.name}</span>
                <span className="block mt-2 text-[10px] uppercase tracking-widest" style={{ color }}>
                  {skill.category}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
