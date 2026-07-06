"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { STATS } from '@/lib/data';

// ──────────────────────────────────────────────────────────────
//  Compteur animé (stats)
// ──────────────────────────────────────────────────────────────
function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const num = parseInt(value, 10);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 1800;
          const step = duration / num;
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= num) clearInterval(timer);
          }, step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num]);

  return (
    <span ref={ref} className="font-bold text-3xl md:text-4xl gradient-text">
      {count}{suffix}
    </span>
  );
}

// ──────────────────────────────────────────────────────────────
//  Étapes de texte
// ──────────────────────────────────────────────────────────────
const textSteps = [
  {
    title: (
      <>
        <span className="text-white">Mubarake</span>
        <br />
        <span className="gradient-text">Aderemou.</span>
      </>
    ),
    subtitle: "Développeur Web & Mobile · Abidjan, Côte d'Ivoire 🇨🇮",
    showStats: true,
    showActions: true,
  },
  {
    title: (
      <>
        <span className="text-white">Je construis</span>
        <br />
        <span className="gradient-text">des interfaces</span>
        <br />
        <span className="text-white">qui impressionnent.</span>
      </>
    ),
    subtitle: "Next.js · React · Vue.js · TypeScript · TailwindCSS",
    showStats: false,
    showActions: false,
  },
  {
    title: (
      <>
        <span className="text-white">Prêt à</span>
        <br />
        <span className="gradient-text">construire l&apos;avenir</span>
        <br />
        <span className="text-white">avec vous.</span>
      </>
    ),
    subtitle: "Discutons de votre projet.",
    showStats: false,
    showActions: true,
  },
];

// ──────────────────────────────────────────────────────────────
//  Composant principal
// ──────────────────────────────────────────────────────────────
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Hauteur totale = nb étapes × hauteur écran
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        containerRef.current.style.height = `${window.innerHeight * textSteps.length}px`;
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Détection de l'étape active
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;
      const step = windowH / 1.8;
      const rawIndex = Math.floor(scrollY / step);
      const clamped = Math.min(Math.max(rawIndex, 0), textSteps.length - 1);
      setActiveIndex(clamped);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll progress lié au conteneur
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // ── MAGIE : Zoom + Rotation sur UNE SEULE photo ──
  //
  // Règle d'or : le zoom (scale) doit être suffisamment grand
  // pour que les coins de la photo ne soient jamais visibles
  // pendant la rotation. scale(1.3) → scale(1.8) garantit cela.
  //
  // imageScale  : zoom de 1.3 à 1.8 (masque les bords)
  // imageRotate : -3° → +3° (simule la tête qui tourne)
  // imageX      : +20px → -20px (accompagne naturellement la rotation)
  // imageY      : 0 → -30px (léger zoom vertical)
  const imageScale  = useTransform(scrollYProgress, [0, 1], [1.3, 1.8]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);
  const imageX      = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const imageY      = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <div ref={containerRef} className="relative w-full" id="hero">
      {/* ── Zone sticky ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#050816]">

        {/* ── Photo avec Zoom + Rotation ── */}
        <motion.div
          style={{ scale: imageScale, rotate: imageRotate, x: imageX, y: imageY }}
          className="absolute inset-0 w-full h-full z-0"
        >
          {/* Remplacez /portrait.jpg par votre propre photo dans /public */}
          <img
            src="/portrait.jpg"
            alt="Portrait de Mubarake Aderemou"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* ── Overlays pour lisibilité du texte ── */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          {/* Dégradé gauche (zone texte) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/90 via-[#050816]/50 to-transparent" />
          {/* Dégradé bas */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/95 via-transparent to-[#050816]/30" />
        </div>

        {/* ── Badge statut (haut gauche) ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-24 left-4 sm:left-8 z-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#0A84FF]/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-white/70">
              Disponible · Open to opportunities
            </span>
          </div>
        </motion.div>

        {/* ── Contenu texte ── */}
        <div className="absolute inset-0 flex items-center z-10 px-4 sm:px-8 lg:px-16">
          <div className="w-full max-w-7xl mx-auto relative h-full flex flex-col justify-center">

            {textSteps.map((step, index) => (
              <div
                key={index}
                className={`absolute left-0 w-full lg:w-[58%] transition-all duration-700 ease-in-out ${
                  index === activeIndex
                    ? 'opacity-100 translate-y-0'
                    : index < activeIndex
                      ? 'opacity-0 -translate-y-10 pointer-events-none'
                      : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
              >
                {/* Titre */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-5 drop-shadow-2xl">
                  {step.title}
                </h1>

                {/* Sous-titre */}
                {step.subtitle && (
                  <p className="text-base sm:text-lg md:text-xl font-medium text-white/60 mb-8 drop-shadow-lg">
                    {step.subtitle}
                  </p>
                )}

                {/* Stats (étape 0) */}
                {step.showStats && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-lg mb-10"
                  >
                    {STATS.map((stat) => (
                      <div key={stat.label} className="text-left">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                        <p className="text-white/40 text-xs mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Boutons CTA */}
                {step.showActions && (
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="/cv-mubarake-aderemou.pdf"
                      download
                      className="btn-primary"
                      id="hero-download-cv"
                    >
                      <Download size={16} />
                      Télécharger CV
                    </a>
                    <a
                      href="https://github.com/Mubarake-sudo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                      id="hero-github"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/mubarake-aderemou"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                      id="hero-linkedin"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </a>
                    <button
                      onClick={() =>
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                      }
                      className="btn-outline"
                      id="hero-contact"
                    >
                      <Mail size={16} />
                      Contact
                    </button>
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>

        {/* ── Indicateur de progression (points verticaux) ── */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
          {textSteps.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-500 ${
                i === activeIndex
                  ? 'w-2 h-6 bg-[#0A84FF] shadow-[0_0_8px_#0A84FF]'
                  : 'w-2 h-2 bg-white/20'
              }`}
            />
          ))}
        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          animate={{ opacity: activeIndex === textSteps.length - 1 ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
