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

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
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
  );
}
