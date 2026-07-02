'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { TECH_STACK } from '@/lib/data';

const CATEGORY_ORDER = ['Frontend', 'Backend', 'Database', 'DevOps', 'Library', 'Testing', 'Design', 'Tools', 'Mobile'];

// Using devicons CDN for tech logos
function TechIcon({ icon, name }: { icon: string; name: string }) {
  const iconMap: Record<string, string> = {
    nextjs: 'nextjs',
    react: 'react',
    typescript: 'typescript',
    javascript: 'javascript',
    tailwindcss: 'tailwindcss',
    html5: 'html5',
    css3: 'css3',
    sass: 'sass',
    bootstrap: 'bootstrap',
    vuejs: 'vuejs',
    nuxtjs: 'nuxtjs',
    nodejs: 'nodejs',
    nestjs: 'nestjs',
    express: 'express',
    php: 'php',
    laravel: 'laravel',
    python: 'python',
    flask: 'flask',
    c: 'c',
    postgresql: 'postgresql',
    mysql: 'mysql',
    mongodb: 'mongodb',
    sqlite: 'sqlite',
    redis: 'redis',
    docker: 'docker',
    git: 'git',
    linux: 'linux',
    vercel: 'vercel',
    heroku: 'heroku',
    chartjs: 'jest', // fallback
    jest: 'jest',
    redux: 'redux',
    figma: 'figma',
    photoshop: 'photoshop',
    postman: 'postman',
  };

  const devIconName = iconMap[icon] || icon;

  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${devIconName}/${devIconName}-original.svg`}
      alt={name}
      width={32}
      height={32}
      className="w-8 h-8 object-contain"
      onError={(e) => {
        const img = e.currentTarget;
        img.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${devIconName}/${devIconName}-plain.svg`;
        img.onerror = () => {
          img.style.display = 'none';
        };
      }}
    />
  );
}

export default function TechStack() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const groupedTech = CATEGORY_ORDER.reduce<Record<string, typeof TECH_STACK>>((acc, cat) => {
    const items = TECH_STACK.filter((t) => t.category === cat);
    if (items.length > 0) acc[cat] = items;
    return acc;
  }, {});

  return (
    <section id="tech-stack" ref={ref} className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Mon arsenal</p>
          <h2 className="section-title">Tech Stack</h2>
          <p className="text-white/40 text-sm max-w-xl mx-auto mt-3">
            Plus de 35 technologies maîtrisées, de la conception au déploiement.
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(groupedTech).map(([category, techs], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4 flex items-center gap-3">
                <span>{category}</span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </h3>

              <div className="flex flex-wrap gap-3">
                {techs.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: catIdx * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    onHoverStart={() => setHoveredTech(tech.name)}
                    onHoverEnd={() => setHoveredTech(null)}
                    className="relative flex flex-col items-center gap-2 p-3 glass rounded-xl border border-white/[0.06] hover:border-[#0A84FF]/30 transition-all duration-200 cursor-default group min-w-[70px]"
                  >
                    <TechIcon icon={tech.icon} name={tech.name} />
                    <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors text-center leading-tight">
                      {tech.name}
                    </span>

                    {/* Tooltip on hover */}
                    {hoveredTech === tech.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0A84FF] text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap z-10"
                      >
                        {tech.name}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
