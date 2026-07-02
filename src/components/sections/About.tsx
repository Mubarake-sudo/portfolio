'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Lightbulb, Target, Zap } from 'lucide-react';

const values = [
  { icon: <Code2 size={20} />, title: 'Clean Code', desc: 'SOLID, DRY, KISS — du code factorisé et maintenable.' },
  { icon: <Zap size={20} />, title: 'Performance', desc: 'Lighthouse >95 · Server Components · Lazy loading.' },
  { icon: <Lightbulb size={20} />, title: 'Innovation', desc: 'Toujours à la pointe des nouvelles technologies.' },
  { icon: <Target size={20} />, title: 'Livraison', desc: 'Respect des délais et qualité au rendez-vous.' },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative section-padding glow-top"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left – Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex-1 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass border border-white/[0.06] p-8">
              {/* Code block aesthetic */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="ml-2 text-xs text-white/30 font-mono">about.tsx</span>
              </div>

              <div className="font-mono text-sm space-y-2">
                <p className="text-[#00D9FF]">const <span className="text-white">developer</span> = {'{'}</p>
                <p className="pl-6 text-white/70">name: <span className="text-emerald-400">&quot;Mubarake Aderemou&quot;</span>,</p>
                <p className="pl-6 text-white/70">alias: <span className="text-emerald-400">&quot;MUBADEV&quot;</span>,</p>
                <p className="pl-6 text-white/70">school: <span className="text-emerald-400">&quot;EPITECH Technology&quot;</span>,</p>
                <p className="pl-6 text-white/70">location: <span className="text-emerald-400">&quot;Paris, France 🇫🇷&quot;</span>,</p>
                <p className="pl-6 text-white/70">role: <span className="text-emerald-400">&quot;Full Stack Developer&quot;</span>,</p>
                <p className="pl-6 text-white/70">passion: [</p>
                <p className="pl-12 text-yellow-400">&quot;Next.js&quot;, &quot;React&quot;,</p>
                <p className="pl-12 text-yellow-400">&quot;TypeScript&quot;, &quot;UI/UX&quot;</p>
                <p className="pl-6 text-white/70">],</p>
                <p className="pl-6 text-white/70">available: <span className="text-[#0A84FF]">true</span>,</p>
                <p className="pl-6 text-white/70">coffee: <span className="text-[#0A84FF]">Infinity</span>,</p>
                <p className="text-[#00D9FF]">{'}'}</p>
              </div>

              {/* Gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050816]/80 to-transparent rounded-b-3xl" />
            </div>

            {/* Floating tag */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 glass border border-[#0A84FF]/30 rounded-2xl px-4 py-3 shadow-glow"
            >
              <p className="text-xs text-white/50">Étudiant EPITECH</p>
              <p className="text-sm font-bold gradient-text">BAC+5 Expert IT</p>
            </motion.div>
          </motion.div>

          {/* Right – Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="flex-1"
          >
            <p className="section-subtitle">À propos de moi</p>
            <h2 className="section-title">Qui suis-je ?</h2>

            <div className="space-y-4 text-white/60 leading-relaxed mb-8">
              <p>
                Passionné de technologie depuis mon adolescence, je suis développeur Full Stack
                spécialisé en <strong className="text-white">Next.js, React et TypeScript</strong>.
                Fondateur de <span className="text-[#0A84FF] font-semibold">MUBADEV</span>, je crée des
                expériences digitales qui allient performance, esthétique et accessibilité.
              </p>
              <p>
                Actuellement en formation BAC+5 à <strong className="text-white">EPITECH Technology</strong>,
                j&apos;applique les meilleures pratiques du génie logiciel : architecture propre,
                tests, CI/CD et déploiement cloud.
              </p>
              <p>
                Mon moteur ? Transformer des idées ambitieuses en produits digitaux qui
                <strong className="text-white"> impressionnent et convertissent</strong>.
              </p>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="card group cursor-default"
                >
                  <div className="text-[#0A84FF] mb-3 group-hover:text-[#00D9FF] transition-colors">
                    {v.icon}
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1">{v.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
