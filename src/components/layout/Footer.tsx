'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, ArrowUp } from 'lucide-react';
import { NAV_ITEMS, SOCIAL_LINKS } from '@/lib/data';

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub': return <Github size={18} />;
      case 'LinkedIn': return <Linkedin size={18} />;
      default: return <Mail size={18} />;
    }
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#050816]/80">
      <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/30 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0A84FF] to-[#00D9FF] flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg gradient-text">MUBADEV</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Développeur Full Stack passionné par la création d&apos;expériences digitales premium. Disponible pour des projets freelance et des opportunités d&apos;emploi.
            </p>
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/50 hover:text-[#0A84FF] hover:border-[#0A84FF]/40 transition-all duration-200"
                >
                  {getIcon(link.platform)}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-widest mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-sm text-white/50 hover:text-[#0A84FF] transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a href="mailto:mubarake@mubadev.com" className="hover:text-[#0A84FF] transition-colors">
                  mubarake@mubadev.com
                </a>
              </li>
              <li>Paris, France 🇫🇷</li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400">Disponible pour missions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Mubarake Aderemou – MUBADEV. Tous droits réservés.
          </p>
          <p className="text-white/30 text-xs">
            Conçu & développé avec ❤️ | Next.js · React · TypeScript
          </p>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-[#0A84FF] to-[#00D9FF] flex items-center justify-center shadow-glow z-40"
        aria-label="Retour en haut"
      >
        <ArrowUp size={20} className="text-white" />
      </motion.button>
    </footer>
  );
}
