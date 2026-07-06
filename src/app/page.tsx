'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ParticleBackground from '@/components/3d/ParticleBackground';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import TechStack from '@/components/sections/TechStack';
import FiberTransition from '@/components/sections/FiberTransition';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import LoadingScreen from '@/components/ui/LoadingScreen';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* ── Splash / Loading Screen ── */}
      <LoadingScreen onComplete={() => setLoading(false)} />

      {/* ── Portfolio (caché pendant le loading) ── */}
      <main
        className="relative min-h-screen"
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.5s ease-in',
          pointerEvents: loading ? 'none' : 'auto',
        }}
      >
        {/* Global particle background */}
        <ParticleBackground />

        {/* Navigation */}
        <Navbar />

        {/* Page sections */}
        <Hero />
        <About />
        <Skills />
        <TechStack />
        {/* Animated fiber transition between TechStack and Projects */}
        <FiberTransition />
        <Projects />
        <Experience />
        <Services />
        <Contact />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
