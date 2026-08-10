'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Github, Linkedin, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', { // ✅ Bonne URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '9e77b776-4ff8-43ae-9920-3fe19c349f95',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };


  return (
    <section id="contact" ref={ref} className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Travaillons ensemble</p>
          <h2 className="section-title">Contact</h2>
          <p className="text-white/40 text-sm max-w-xl mx-auto mt-3">
            Vous avez un projet ambitieux ? Discutons-en et créons quelque chose d&apos;exceptionnel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Status */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-semibold text-sm">Disponible pour missions</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Actuellement disponible pour des projets freelance, des stages ou des opportunités d&apos;emploi en Full Stack.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              <a
                href="mailto:mubarake.aderemou@epitech.eu"
                className="flex items-center gap-4 card hover:border-[#0A84FF]/30 group"
                id="contact-email"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0A84FF]/10 flex items-center justify-center text-[#0A84FF] group-hover:shadow-glow transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-white/40 text-xs">Email</p>
                  <p className="text-white text-sm font-medium">mubarake.aderemou@epitech.eu</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/mubarake-aderemou"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 card hover:border-[#0A84FF]/30 group"
                id="contact-linkedin"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0A84FF]/10 flex items-center justify-center text-[#0A84FF] group-hover:shadow-glow transition-all">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-white/40 text-xs">LinkedIn</p>
                  <p className="text-white text-sm font-medium">mubarake-aderemou</p>
                </div>
              </a>

              <a
                href="https://github.com/Mubarake-sudo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 card hover:border-[#0A84FF]/30 group"
                id="contact-github"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0A84FF]/10 flex items-center justify-center text-[#0A84FF] group-hover:shadow-glow transition-all">
                  <Github size={18} />
                </div>
                <div>
                  <p className="text-white/40 text-xs">GitHub</p>
                  <p className="text-white text-sm font-medium">Mubarake-sudo</p>
                </div>
              </a>

              <div className="flex items-center gap-4 card">
                <div className="w-10 h-10 rounded-xl bg-[#0A84FF]/10 flex items-center justify-center text-[#0A84FF]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-white/40 text-xs">Localisation</p>
                  <p className="text-white text-sm font-medium">Abidjan, Côte d'Ivoire 🇨🇮</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="card space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-white/50 mb-1.5">Nom complet *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-3 glass rounded-xl border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#0A84FF]/50 focus:shadow-glow transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email-input" className="block text-xs font-medium text-white/50 mb-1.5">Email *</label>
                  <input
                    id="contact-email-input"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jean@exemple.com"
                    className="w-full px-4 py-3 glass rounded-xl border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#0A84FF]/50 focus:shadow-glow transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-medium text-white/50 mb-1.5">Sujet *</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Projet de développement web"
                  className="w-full px-4 py-3 glass rounded-xl border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#0A84FF]/50 focus:shadow-glow transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-white/50 mb-1.5">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet ou votre demande..."
                  className="w-full px-4 py-3 glass rounded-xl border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#0A84FF]/50 focus:shadow-glow transition-all resize-none"
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-emerald-400 text-sm p-3 glass rounded-xl border border-emerald-400/20"
                >
                  <CheckCircle size={16} />
                  Message envoyé avec succès ! Je vous répondrai dans les 24h.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm p-3 glass rounded-xl border border-red-400/20"
                >
                  <AlertCircle size={16} />
                  Une erreur est survenue. Veuillez réessayer.
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                id="contact-submit"
                className="w-full btn-primary justify-center py-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
