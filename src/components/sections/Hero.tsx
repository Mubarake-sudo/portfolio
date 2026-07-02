'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { STATS } from '@/lib/data';

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
          const duration = 2000;
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

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-blue w-[600px] h-[600px] top-[-100px] left-[-100px]" />
        <div className="orb orb-cyan w-[400px] h-[400px] bottom-[100px] right-[-50px]" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#0A84FF]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-white/70">Disponible · Open to opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-2">
              <span className="text-white">Mubarake</span>
              <br />
              <span className="gradient-text">Aderemou</span>
            </motion.h1>

            {/* Role with animation */}
            <motion.div variants={itemVariants} className="mb-6">
              <TypeWriter
                texts={[
                  'Développeur Full Stack',
                  'Expert Next.js · React',
                  'Digital Builder',
                  'Expert TypeScript',
                  'UI/UX Enthusiast',
                ]}
              />
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Je construis des applications web et mobiles <strong className="text-white">premium</strong>,
              performantes et scalables. Fondateur de <span className="gradient-text font-semibold">MUBADEV</span>,
              étudiant à <span className="text-[#0A84FF] font-semibold">EPITECH Technology</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
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
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
                id="hero-contact"
              >
                <Mail size={16} />
                Contact
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-lg mx-auto lg:mx-0"
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-white/40 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right – Avatar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glowing rings */}
              <div className="absolute inset-0 rounded-full border border-[#0A84FF]/20 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-[#00D9FF]/10 animate-spin-slow" style={{ animationDirection: 'reverse' }} />

              {/* Avatar container */}
              <div className="absolute inset-8 rounded-full overflow-hidden glass-strong border border-[#0A84FF]/30 shadow-glow-lg flex items-center justify-center">
                <div className="relative w-full h-full bg-gradient-to-br from-[#081B33] to-[#050816] flex items-center justify-center">
                  {/* Placeholder avatar */}
                  <div className="w-full h-full bg-gradient-to-br from-[#0A84FF]/20 to-[#00D9FF]/10 flex items-center justify-center">
                    <span className="text-6xl md:text-8xl font-black gradient-text select-none">M</span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass border border-[#0A84FF]/30 rounded-2xl px-3 py-2 shadow-glow"
              >
                <p className="text-xs font-semibold text-[#0A84FF]">Next.js 15</p>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 glass border border-[#00D9FF]/30 rounded-2xl px-3 py-2"
              >
                <p className="text-xs font-semibold text-[#00D9FF]">TypeScript</p>
              </motion.div>

              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -left-12 -translate-y-1/2 glass border border-white/10 rounded-2xl px-3 py-2"
              >
                <p className="text-xs font-semibold text-white/60">EPITECH</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors group"
            aria-label="Scroll vers le bas"
          >
            <span className="text-xs font-medium">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={20} className="group-hover:text-[#0A84FF] transition-colors" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function TypeWriter({ texts }: { texts: string[] }) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    const delay = isDeleting ? 50 : charIndex === currentText.length ? 2000 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((i) => (i + 1) % texts.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <div className="h-10 flex items-center justify-center lg:justify-start">
      <span className="text-xl md:text-2xl font-semibold text-[#0A84FF]">
        {displayText}
        <span className="inline-block w-0.5 h-6 bg-[#0A84FF] ml-1 animate-pulse" />
      </span>
    </div>
  );
}
