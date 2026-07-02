'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '@/lib/data';
import type { Project } from '@/types';

function ProjectCard({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="project-card glass rounded-2xl overflow-hidden border border-white/[0.06] group"
    >
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-[#081B33] to-[#0A84FF]/10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0A84FF] to-[#00D9FF] flex items-center justify-center shadow-glow opacity-60 group-hover:opacity-100 transition-opacity">
            <span className="text-white font-black text-2xl">{project.title.charAt(0)}</span>
          </div>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-60" />

        {/* Year badge */}
        <div className="absolute top-3 right-3 glass border border-white/10 rounded-full px-3 py-1">
          <span className="text-xs text-white/60">{project.year}</span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-[#0A84FF] to-[#00D9FF] rounded-full px-3 py-1">
            <span className="text-xs text-white font-semibold">Featured</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-white text-lg mb-2 group-hover:gradient-text transition-all duration-200">
          {project.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 glass rounded-xl text-sm text-white/60 hover:text-white hover:border-[#0A84FF]/30 border border-white/10 transition-all duration-200"
              id={`project-github-${project.id}`}
            >
              <Github size={15} />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-[#0A84FF] to-[#00D9FF] rounded-xl text-sm text-white font-medium shadow-glow hover:shadow-glow-lg transition-all duration-200"
              id={`project-demo-${project.id}`}
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
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
    <section id="projects" ref={ref} className="relative section-padding bg-[#081B33]/20">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
