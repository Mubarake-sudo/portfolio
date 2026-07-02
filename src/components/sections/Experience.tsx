'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { EXPERIENCES, EDUCATION } from '@/lib/data';

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={ref} className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Mon parcours</p>
          <h2 className="section-title">Expérience & Formation</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h3 className="text-lg font-bold text-white/80 mb-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0A84FF] to-[#00D9FF] flex items-center justify-center">
                <span className="text-white text-xs font-bold">XP</span>
              </div>
              Expérience Professionnelle
            </h3>

            <div className="relative pl-8">
              {/* Timeline line */}
              <div className="absolute left-3 top-0 bottom-0 w-px timeline-line" />

              <div className="space-y-10">
                {EXPERIENCES.map((exp, i) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute -left-[21px] top-1.5 w-4 h-4 rounded-full border-2 ${
                      exp.current
                        ? 'bg-[#0A84FF] border-[#00D9FF] shadow-glow'
                        : 'bg-[#081B33] border-[#0A84FF]/50'
                    }`} />

                    {/* Card */}
                    <div className="card ml-4">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="font-bold text-white">{exp.role}</h4>
                          <p className="text-[#0A84FF] font-semibold text-sm">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-1.5 text-white/40 text-xs">
                          <Calendar size={12} />
                          <span>{exp.period}</span>
                          {exp.current && (
                            <span className="ml-1 px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium">
                              Actuel
                            </span>
                          )}
                        </div>
                      </div>

                      <ul className="space-y-1.5 mb-4">
                        {exp.description.map((desc, j) => (
                          <li key={j} className="text-white/50 text-sm flex items-start gap-2">
                            <span className="text-[#0A84FF] mt-1.5 flex-shrink-0">▸</span>
                            {desc}
                          </li>
                        ))}
                      </ul>

                      {exp.technologies && (
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span key={tech} className="tech-badge">{tech}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-bold text-white/80 mb-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D9FF] to-[#0A84FF] flex items-center justify-center">
                <span className="text-white text-xs font-bold">ÉD</span>
              </div>
              Formation
            </h3>

            <div className="relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-px timeline-line" />

              <div className="space-y-10">
                {EDUCATION.map((edu, i) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                    className="relative"
                  >
                    <div className="absolute -left-[21px] top-1.5 w-4 h-4 rounded-full bg-[#00D9FF]/20 border-2 border-[#00D9FF]/50 shadow-cyan-glow" />

                    <div className="card ml-4">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="font-bold text-white">{edu.degree}</h4>
                          <p className="text-[#00D9FF] font-semibold text-sm">{edu.institution}</p>
                        </div>
                        <div className="flex items-center gap-1.5 text-white/40 text-xs">
                          <Calendar size={12} />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      {edu.description && (
                        <p className="text-white/50 text-sm leading-relaxed">{edu.description}</p>
                      )}

                      {/* EPITECH highlights */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {['Projets Agile', 'Architecture Logicielle', 'Innovation', 'C/C++', 'Linux', 'Network'].map((tag) => (
                          <span key={tag} className="tech-badge">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-12">
              <h3 className="text-lg font-bold text-white/80 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400/80 to-orange-400/80 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">🏆</span>
                </div>
                Certifications
              </h3>

              <div className="space-y-3">
                {[
                  { title: 'Full Stack Web Development', issuer: 'FreeCodeCamp', date: '2024' },
                  { title: 'React & Next.js Advanced', issuer: 'Udemy', date: '2024' },
                  { title: 'Docker & DevOps Fundamentals', issuer: 'Udemy', date: '2025' },
                ].map((cert, i) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-4 p-4 glass rounded-xl border border-white/[0.06] hover:border-yellow-400/20 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400/20 to-orange-400/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🎓</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white text-sm truncate">{cert.title}</p>
                      <p className="text-white/40 text-xs">{cert.issuer} · {cert.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
