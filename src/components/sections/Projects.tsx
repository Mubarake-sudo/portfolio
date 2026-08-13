'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/lib/data';
import type { Project } from '@/types';

/* ──────────────────────────────────────────────────────────────
   Ultra-premium project card with:
   - 3D tilt on mousemove
   - Spotlight glare effect following cursor
   - Glowing border reveal on hover
   - Morphing overlay with project info
────────────────────────────────────────────────────────────── */
function ProjectCard({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width;  // 0–1
    const cy = (e.clientY - rect.top) / rect.height;  // 0–1
    // tilt: max ±12 degrees
    setTilt({ x: (cy - 0.5) * -14, y: (cx - 0.5) * 14 });
    setSpotlight({ x: cx * 100, y: cy * 100, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setSpotlight((s) => ({ ...s, opacity: 0 }));
    setHovered(false);
  };

  /* Gradient accent color per project index */
  const ACCENTS = ['#0A84FF', '#00D9FF', '#A78BFA', '#FF6B35', '#34D399', '#F59E0B'];
  const accent = ACCENTS[index % ACCENTS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: 'easeOut' }}
      style={{ perspective: '900px' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-2xl overflow-hidden border border-white/[0.07] bg-[#081B33]/60 backdrop-blur-md cursor-default"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: hovered ? 'transform 0.08s ease-out' : 'transform 0.6s ease-out',
          boxShadow: hovered
            ? `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${accent}44, 0 0 40px ${accent}22`
            : '0 4px 24px rgba(0,0,0,0.3)',
        }}
      >
        {/* Spotlight glare */}
        <div
          className="absolute inset-0 z-10 pointer-events-none rounded-2xl transition-opacity duration-200"
          style={{
            opacity: spotlight.opacity * 0.15,
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, white 0%, transparent 65%)`,
          }}
        />

        {/* Glowing border on hover */}
        <div
          className="absolute inset-0 z-[5] rounded-2xl pointer-events-none transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: `linear-gradient(135deg, ${accent}22, transparent 50%, ${accent}11)`,
          }}
        />

        {/* Top visual area */}
        <div
          className="relative h-52 overflow-hidden"
          style={{ background: `linear-gradient(135deg, #081B33 0%, ${accent}18 100%)` }}
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
            />
          )}
          {/* Abstract pattern */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Hexagonal grid pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 200">
              {Array.from({ length: 6 }, (_, r) =>
                Array.from({ length: 6 }, (_, c) => (
                  <polygon
                    key={`${r}-${c}`}
                    points="17,0 34,9.8 34,29.4 17,39.2 0,29.4 0,9.8"
                    fill="none"
                    stroke={accent}
                    strokeWidth="0.5"
                    transform={`translate(${c * 34 - 10 + (r % 2 === 0 ? 0 : 17)}, ${r * 30 - 10})`}
                  />
                ))
              )}
            </svg>

            {/* Project initial circle */}
            <motion.div
              animate={hovered ? { scale: 1.15, rotate: 10 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl"
              style={{ background: `linear-gradient(135deg, ${accent}, ${accent}88)`, boxShadow: `0 0 40px ${accent}66` }}
            >
              <span className="text-white font-black text-3xl">
                {project.title.charAt(0)}
              </span>
            </motion.div>
          </div>

          {/* Overlay with links – revealed on hover */}
          <motion.div
            animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-[#050816]/80 backdrop-blur-sm flex items-center justify-center gap-4"
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white border border-white/20 hover:border-white/50 transition-colors"
                style={{ background: `${accent}22` }}
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={15} /> Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all"
                style={{ background: accent, boxShadow: `0 0 20px ${accent}88` }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={15} /> Live <ArrowUpRight size={13} />
              </a>
            )}
          </motion.div>

          {/* Badges */}
          {project.year && (
            <div className="absolute top-3 right-3 glass border border-white/10 rounded-full px-3 py-1 z-20">
              <span className="text-xs text-white/50">{project.year}</span>
            </div>
          )}
          {project.featured && (
            <div
              className="absolute top-3 left-3 rounded-full px-3 py-1 z-20"
              style={{ background: `linear-gradient(90deg, ${accent}, ${accent}bb)` }}
            >
              <span className="text-xs text-white font-semibold">Featured</span>
            </div>
          )}
        </div>

        {/* Card body */}
        <div className="p-5 relative z-10">
          {/* Title with animated arrow */}
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-bold text-white text-lg leading-tight flex-1">
              {project.title}
            </h3>
            <motion.div
              animate={hovered ? { x: 3, y: -3, opacity: 1 } : { x: 0, y: 0, opacity: 0.3 }}
              transition={{ duration: 0.3 }}
              style={{ color: accent }}
            >
              <ArrowUpRight size={18} />
            </motion.div>
          </div>

          {/* Accent line */}
          <motion.div
            animate={hovered ? { width: '100%' } : { width: '32px' }}
            transition={{ duration: 0.4 }}
            className="h-px mb-3"
            style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
          />

          <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-0.5 rounded-full border font-medium transition-all duration-200"
                style={{
                  borderColor: hovered ? `${accent}50` : 'rgba(255,255,255,0.08)',
                  color: hovered ? accent : 'rgba(255,255,255,0.45)',
                  background: hovered ? `${accent}10` : 'transparent',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          {/* Action buttons */}
          <div className="mt-4 flex items-center gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-sm font-semibold text-white/90 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                Voir le projet ↗
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-sm font-semibold text-white/70 px-3 py-2 rounded-lg border border-white/10 hover:border-white/30 transition"
              >
                Voir le code ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);

  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);
  const displayed = showAll ? PROJECTS : featured;

  return (
    <section id="projects" ref={ref} className="relative section-padding">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0A84FF]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Ce que j&apos;ai construit</p>
          <h2 className="section-title">Projets</h2>
          <p className="text-white/40 text-sm max-w-xl mx-auto mt-3">
            Une sélection de projets qui démontrent mes compétences techniques et créatives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {displayed.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} isInView={isInView} />
          ))}
        </div>

        {rest.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline"
              id="projects-toggle-all"
            >
              {showAll ? (
                <><ChevronLeft size={16} /> Voir moins</>
              ) : (
                <>Voir tous les projets <ChevronRight size={16} /></>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
