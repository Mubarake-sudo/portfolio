'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TECH_STACK } from '@/lib/data';

/* ─────────────────────────────────────────────────────────────
   Devicon icon map – utilise le CDN jsdelivr/devicon
   (même liste que l'original, inchangée)
────────────────────────────────────────────────────────────── */
const ICON_MAP: Record<string, { name: string; variant?: string }> = {
  nextjs:     { name: 'nextjs',      variant: 'original' },
  react:      { name: 'react',       variant: 'original' },
  typescript: { name: 'typescript',  variant: 'plain'    },
  javascript: { name: 'javascript',  variant: 'plain'    },
  tailwindcss:{ name: 'tailwindcss', variant: 'plain'    },
  html5:      { name: 'html5',       variant: 'plain'    },
  css3:       { name: 'css3',        variant: 'plain'    },
  sass:       { name: 'sass',        variant: 'original' },
  bootstrap:  { name: 'bootstrap',   variant: 'plain'    },
  vuejs:      { name: 'vuejs',       variant: 'plain'    },
  nuxtjs:     { name: 'nuxtjs',      variant: 'plain'    },
  nodejs:     { name: 'nodejs',      variant: 'plain'    },
  nestjs:     { name: 'nestjs',      variant: 'plain'    },
  express:    { name: 'express',     variant: 'original' },
  php:        { name: 'php',         variant: 'plain'    },
  laravel:    { name: 'laravel',     variant: 'plain'    },
  python:     { name: 'python',      variant: 'plain'    },
  flask:      { name: 'flask',       variant: 'original' },
  c:          { name: 'c',           variant: 'plain'    },
  postgresql: { name: 'postgresql',  variant: 'plain'    },
  mysql:      { name: 'mysql',       variant: 'plain'    },
  mongodb:    { name: 'mongodb',     variant: 'plain'    },
  sqlite:     { name: 'sqlite',      variant: 'plain'    },
  redis:      { name: 'redis',       variant: 'plain'    },
  docker:     { name: 'docker',      variant: 'plain'    },
  git:        { name: 'git',         variant: 'plain'    },
  linux:      { name: 'linux',       variant: 'plain'    },
  vercel:     { name: 'vercel',      variant: 'original' },
  heroku:     { name: 'heroku',      variant: 'plain'    },
  chartjs:    { name: 'jest',        variant: 'plain'    }, // fallback
  jest:       { name: 'jest',        variant: 'plain'    },
  redux:      { name: 'redux',       variant: 'original' },
  figma:      { name: 'figma',       variant: 'plain'    },
  photoshop:  { name: 'photoshop',   variant: 'plain'    },
  postman:    { name: 'postman',     variant: 'plain'    },
};

function TechIcon({ icon, name }: { icon: string; name: string }) {
  const cfg = ICON_MAP[icon] ?? { name: icon, variant: 'plain' };
  const src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${cfg.name}/${cfg.name}-${cfg.variant ?? 'plain'}.svg`;

  return (
    <img
      src={src}
      alt={name}
      width={18}
      height={18}
      className="w-[18px] h-[18px] object-contain flex-shrink-0"
      onError={(e) => {
        const img = e.currentTarget;
        const fallback = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${cfg.name}/${cfg.name}-original.svg`;
        if (img.src !== fallback) {
          img.src = fallback;
        } else {
          img.style.display = 'none';
        }
      }}
    />
  );
}

/* Pill with icon + name */
function Tag({ tech }: { tech: typeof TECH_STACK[number] }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap bg-white/[0.06] border border-white/10 text-white/80 hover:border-[#0A84FF]/50 hover:bg-[#0A84FF]/10 hover:text-white transition-all duration-200 cursor-default">
      <TechIcon icon={tech.icon} name={tech.name} />
      {tech.name}
    </span>
  );
}

/* Category group */
const LEFT_COLS = ['Frontend', 'Mobile'];
const RIGHT_COLS = ['Backend', 'Database', 'DevOps', 'Library', 'Testing', 'Tools', 'Design'];

const GROUP_LABELS: Record<string, { label: string; color: string }> = {
  Frontend:  { label: 'FRONTEND SYSTEMS',          color: '#0A84FF' },
  Mobile:    { label: 'MOBILE',                     color: '#0A84FF' },
  Backend:   { label: 'BACKEND LOGIC',              color: '#FF6B35' },
  Database:  { label: 'DATABASE',                   color: '#FF6B35' },
  DevOps:    { label: 'DEVOPS & DÉPLOIEMENT',       color: '#FF6B35' },
  Library:   { label: 'LIBRAIRIES',                 color: '#A78BFA' },
  Testing:   { label: 'TESTING',                    color: '#A78BFA' },
  Tools:     { label: 'OUTILS',                     color: '#A78BFA' },
  Design:    { label: 'DESIGN',                     color: '#FF6B35' },
};

function SkillGroup({ category, delay }: { category: string; delay: number }) {
  const techs = TECH_STACK.filter((t) => t.category === category);
  if (techs.length === 0) return null;
  const { label, color } = GROUP_LABELS[category] ?? { label: category.toUpperCase(), color: '#0A84FF' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay }}
      className="flex flex-col gap-2"
    >
      <div className="flex flex-wrap gap-2">
        {techs.map((t) => <Tag key={t.name} tech={t} />)}
      </div>
      <span className="text-[10px] font-bold tracking-widest uppercase mt-0.5" style={{ color }}>
        {label}
      </span>
    </motion.div>
  );
}

/* Merge Library + Testing + Tools + Design on right side to one group */
function RightExtraGroup({ delay }: { delay: number }) {
  const extra = TECH_STACK.filter((t) =>
    ['Library', 'Testing', 'Tools', 'Design'].includes(t.category)
  );
  if (extra.length === 0) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay }}
      className="flex flex-col gap-2"
    >
      <div className="flex flex-wrap gap-2">
        {extra.map((t) => <Tag key={t.name} tech={t} />)}
      </div>
      <span className="text-[10px] font-bold tracking-widest uppercase mt-0.5 text-[#A78BFA]">
        DESIGN, LIBRAIRIES & OUTILS
      </span>
    </motion.div>
  );
}

export default function TechStack() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="tech-stack" ref={ref} className="relative section-padding">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
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

        {/* Skills Map */}
        {isInView && (
          <div className="relative flex items-center justify-center min-h-[520px] px-4">

            {/* ── LEFT COLUMN ── */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-8 w-[42%] max-w-[340px]">
              <SkillGroup category="Frontend" delay={0.25} />
              <SkillGroup category="Mobile" delay={0.35} />
            </div>

            {/* ── CENTRAL ORB ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 flex-shrink-0"
            >
              <div
                className="absolute inset-0 rounded-full border border-[#0A84FF]/20"
                style={{ animation: 'spin 14s linear infinite' }}
              />
              {/* Blue dot */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0A84FF] shadow-[0_0_8px_#0A84FF]" />
              {/* Circle */}
              <div className="w-[190px] h-[190px] md:w-[210px] md:h-[210px] rounded-full bg-gradient-to-br from-[#081B33]/90 to-[#050816]/80 border border-white/10 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(10,132,255,0.12)]">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1">
                  <path d="M24 10C20.5 10 17.5 12.5 17 16C15 16.8 13.5 18.7 13.5 21C13.5 22 13.8 22.9 14.3 23.7C12.8 24.6 12 26.2 12 28C12 30.5 13.8 32.5 16.2 33C16.2 33.2 16.2 33.4 16.2 33.6C16.2 35.8 18 37.5 20.2 37.5C21.1 37.5 21.9 37.2 22.6 36.7C23 37 23.5 37.2 24 37.2C24.5 37.2 25 37 25.4 36.7C26.1 37.2 26.9 37.5 27.8 37.5C30 37.5 31.8 35.8 31.8 33.6C31.8 33.4 31.8 33.2 31.8 33C34.2 32.5 36 30.5 36 28C36 26.2 35.2 24.6 33.7 23.7C34.2 22.9 34.5 22 34.5 21C34.5 18.7 33 16.8 31 16C30.5 12.5 27.5 10 24 10Z" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" fill="none"/>
                  <circle cx="19" cy="21" r="1.5" fill="rgba(10,132,255,0.7)"/>
                  <circle cx="29" cy="21" r="1.5" fill="rgba(10,132,255,0.7)"/>
                  <circle cx="24" cy="27" r="1.5" fill="rgba(0,217,255,0.7)"/>
                  <line x1="19" y1="21" x2="29" y2="21" stroke="rgba(10,132,255,0.3)" strokeWidth="0.8"/>
                  <line x1="19" y1="21" x2="24" y2="27" stroke="rgba(10,132,255,0.3)" strokeWidth="0.8"/>
                  <line x1="29" y1="21" x2="24" y2="27" stroke="rgba(10,132,255,0.3)" strokeWidth="0.8"/>
                </svg>
                <p className="text-white font-bold text-sm tracking-wider">EXPERIENCE</p>
                <p className="text-white/30 text-[10px] tracking-widest uppercase">DATABASE</p>
              </div>
            </motion.div>

            {/* ── RIGHT COLUMN ── */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-8 w-[42%] max-w-[340px]">
              <SkillGroup category="Backend"  delay={0.30} />
              <SkillGroup category="Database" delay={0.40} />
              <SkillGroup category="DevOps"   delay={0.45} />
              <RightExtraGroup               delay={0.50} />
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
