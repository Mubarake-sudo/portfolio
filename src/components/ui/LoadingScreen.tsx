'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ──────────────────────────────────────────────────────────────
   LoadingScreen
   Splash screen displayed on first load, inspired by VAIBHAV.
  Adapté à la charte du portfolio : fond noir, typographie massive,
   barre de progression animée, messages séquentiels.
────────────────────────────────────────────────────────────── */

const STATUS_MESSAGES = [
  'INITIALISATION DU PORTFOLIO...',
  'CHARGEMENT DES PROJETS...',
  'COMPILATION DES COMPÉTENCES...',
  'DÉMARRAGE DE L\'INTERFACE...',
  'PRÊT.',
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    /* Progress bar animation — 2.4 seconds total */
    const totalDuration = 2400;
    const interval = 20; // ms between ticks
    const steps = totalDuration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      /* Easing: fast at start, slows near end */
      const eased = Math.min(
        Math.round((1 - Math.pow(1 - current / steps, 2.5)) * 100),
        100
      );
      setProgress(eased);

      /* Change status message at specific thresholds */
      if (eased >= 20 && messageIndex < 1) setMessageIndex(1);
      if (eased >= 40 && messageIndex < 2) setMessageIndex(2);
      if (eased >= 65 && messageIndex < 3) setMessageIndex(3);
      if (eased >= 88 && messageIndex < 4) setMessageIndex(4);

      if (eased >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 600); // wait for exit animation
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Also update message from progress reactively */
  useEffect(() => {
    if (progress >= 88 && messageIndex < 4) setMessageIndex(4);
    else if (progress >= 65 && messageIndex < 3) setMessageIndex(3);
    else if (progress >= 40 && messageIndex < 2) setMessageIndex(2);
    else if (progress >= 20 && messageIndex < 1) setMessageIndex(1);
  }, [progress, messageIndex]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050816] select-none"
        >
          {/* Top-left label */}
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
            <p className="text-[10px] sm:text-xs tracking-[0.3em] text-white/25 font-medium uppercase">
              Opening Portfolio
            </p>
          </div>

          {/* Top-right percentage */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
            <p className="text-[10px] sm:text-xs tracking-[0.3em] text-white/25 font-medium tabular-nums">
              {progress} %
            </p>
          </div>

          {/* Main name + progress bar — regroupés ensemble */}
          <div className="relative flex flex-col items-center w-full px-6 sm:px-10 max-w-3xl">
            {/* Ambient glow behind text */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(10,132,255,0.08) 0%, transparent 70%)',
                transform: 'scale(2)',
              }}
            />

            {/* Nom du portfolio */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative font-black text-white leading-none tracking-tighter text-center w-full"
              style={{
                fontSize: 'clamp(4rem, 14vw, 12rem)',
                letterSpacing: '-0.02em',
              }}
            >
              MUBARAKE ADEREMOU
            </motion.h1>

            {/* ── Progress bar — juste sous le nom ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full mt-6"
            >
              {/* Labels */}
              <div className="flex justify-between items-center mb-2">
                <p className="text-[9px] sm:text-[10px] tracking-[0.2em] text-white/30 uppercase font-medium">
                  Loading Experience
                </p>
                <p className="text-[9px] sm:text-[10px] tracking-[0.2em] text-white/30 tabular-nums">
                  {progress} %
                </p>
              </div>

              {/* Bar track — 3px, bien visible */}
              <div className="relative w-full rounded-full overflow-hidden" style={{ height: '3px', background: 'rgba(255,255,255,0.08)' }}>
                {/* Progress fill */}
                <div
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,1) 100%)',
                    boxShadow: '0 0 8px 1px rgba(255,255,255,0.5)',
                    transition: 'width 0.1s linear',
                  }}
                />
              </div>
            </motion.div>

            {/* Status message — sous la barre */}
            <div className="mt-5 h-5 overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={messageIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="text-[10px] sm:text-xs tracking-[0.25em] text-white/35 font-medium uppercase"
                >
                  {STATUS_MESSAGES[messageIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>


        </motion.div>
      )}
    </AnimatePresence>
  );
}
