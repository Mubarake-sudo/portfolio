'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Smartphone, Palette, Server, Briefcase, Megaphone } from 'lucide-react';
import { SERVICES } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 size={28} />,
  smartphone: <Smartphone size={28} />,
  palette: <Palette size={28} />,
  server: <Server size={28} />,
  briefcase: <Briefcase size={28} />,
  megaphone: <Megaphone size={28} />,
};

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" ref={ref} className="relative section-padding bg-[#081B33]/20">
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Ce que je propose</p>
          <h2 className="section-title">Services</h2>
          <p className="text-white/40 text-sm max-w-xl mx-auto mt-3">
            Des solutions complètes pour tous vos besoins digitaux.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="card group cursor-default"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0A84FF]/20 to-[#00D9FF]/10 flex items-center justify-center text-[#0A84FF] group-hover:shadow-glow transition-all duration-300 mb-5">
                {iconMap[service.icon]}
              </div>

              {/* Title */}
              <h3 className="font-bold text-white text-lg mb-2">{service.title}</h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed mb-5">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-white/40 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0A84FF] flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Hover gradient border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                   style={{ background: 'linear-gradient(135deg, rgba(10,132,255,0.05), rgba(0,217,255,0.05))' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
