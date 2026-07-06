'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { SKILLS } from '@/lib/data';

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: '#0A84FF',
  Backend:  '#00D9FF',
  Database: '#FF6B35',
  DevOps:   '#A78BFA',
  Mobile:   '#34D399',
};

const categories = ['Tous', 'Frontend', 'Backend', 'Database', 'DevOps', 'Mobile'];

/* ── Hexagon SVG cell ── */
function HexSkill({
  skill,
  delay,
}: {
  skill: typeof SKILLS[number];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const color = CATEGORY_COLORS[skill.category] ?? '#0A84FF';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.45, delay }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex flex-col items-center cursor-default group"
    >
      {/* SVG hexagon */}
      <div className="relative w-28 h-28 md:w-32 md:h-32">
        <svg
          viewBox="0 0 100 114"
          className="absolute inset-0 w-full h-full"
          style={{ filter: hovered ? `drop-shadow(0 0 12px ${color}88)` : 'none', transition: 'filter 0.3s' }}
        >
          {/* BG hex */}
          <polygon
            points="50,2 97,26 97,88 50,112 3,88 3,26"
            fill={hovered ? `${color}18` : 'rgba(255,255,255,0.04)'}
            stroke={hovered ? color : 'rgba(255,255,255,0.1)'}
            strokeWidth="1.5"
            style={{ transition: 'all 0.3s' }}
          />
          {/* Level arc (clip using stroke-dasharray trick on a circle inside hex) */}
          <circle
            cx="50"
            cy="57"
            r="34"
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeOpacity={hovered ? 0.8 : 0.35}
            strokeDasharray={`${(skill.level / 100) * 213} 213`}
            strokeLinecap="round"
            transform="rotate(-90 50 57)"
            style={{ transition: 'stroke-opacity 0.3s' }}
          />
        </svg>

        {/* Level number */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="text-lg md:text-xl font-black leading-none"
            style={{ color: hovered ? color : '#ffffff99', transition: 'color 0.3s' }}
          >
            {skill.level}
            <span className="text-xs">%</span>
          </span>
        </div>
      </div>

      {/* Name */}
      <span
        className="mt-2 text-xs font-semibold text-center leading-tight text-white/60 group-hover:text-white transition-colors duration-200 max-w-[90px]"
      >
        {skill.name}
      </span>

      {/* Category dot */}
      <span
        className="mt-1 inline-block w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filtered =
    activeCategory === 'Tous'
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" ref={ref} className="relative section-padding">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-cyan w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle">Ce que je maîtrise</p>
          <h2 className="section-title">Compétences</h2>
          <p className="text-white/40 text-sm max-w-lg mx-auto mt-3">
            Visualisation du niveau de maîtrise par technologie.
          </p>
        </motion.div>

        {/* Category pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 justify-center mb-14"
        >
          {categories.map((cat) => {
            const color = cat === 'Tous' ? '#0A84FF' : (CATEGORY_COLORS[cat] ?? '#0A84FF');
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200"
                style={{
                  borderColor: active ? color : 'rgba(255,255,255,0.1)',
                  background: active ? `${color}22` : 'transparent',
                  color: active ? color : 'rgba(255,255,255,0.4)',
                  boxShadow: active ? `0 0 12px ${color}44` : 'none',
                }}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Hexagon grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {filtered.map((skill, i) =>
            isInView ? (
              <HexSkill key={skill.name} skill={skill} delay={i * 0.06} />
            ) : null
          )}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-5 mt-12"
        >
          {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
            <div key={cat} className="flex items-center gap-1.5 text-xs text-white/40">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
              {cat}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
