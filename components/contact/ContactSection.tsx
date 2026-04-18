'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/rasshqa',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rashqa-andrean-fitrah-sulaeman-58041b366/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <path d="M8 11v5M8 8v.01M12 16v-5c0-1.5 1-2 2-2s2 .5 2 2v5" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Rasshqa',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [buttonText, setButtonText] = useState('TRANSMIT');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_cgvkgn8',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_ctgnt2k',
        {
          from_name: formData.name,
          reply_to: formData.email, // emailjs templates usually expect reply_to
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'zuUI9Kr2ktQUkAFmN'
      );
      
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error('[SYS_LOG] Error establishing SMTP uplink:', error);
      alert('Transmission failed. Terminal error check logs.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-mono text-xs text-neon-blue/50 tracking-[0.3em] mb-3">
            {'// SECTION_005'}
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-stark-white tracking-wider">
            THE <span className="text-copper text-glow-copper">UPLINK</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-copper to-transparent mt-4" />
          <p className="mt-4 font-mono text-xs text-slate-gray/50 max-w-xl">
            [SYS_LOG]: Establish communication uplink. All transmissions are encrypted
            and monitored. Response time: ~24h.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-panel p-6 lg:p-8">
              {/* Form header */}
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-neon-blue/10">
                <div className="w-2.5 h-2.5 rounded-full bg-terminal-green/60 animate-pulse" />
                <span className="font-mono text-[10px] text-neon-blue/40 tracking-widest">
                  UPLINK_TERMINAL // READY
                </span>
              </div>

              {/* Name input */}
              <div className="mb-5">
                <label className="block font-mono text-xs text-slate-gray/40 mb-2 tracking-wider">
                  [USERNAME]:
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your designation..."
                  required
                  className="w-full bg-obsidian-light border border-neon-blue/15 focus:border-neon-blue/50 focus:shadow-[0_0_10px_rgba(0,166,255,0.15)] rounded-none px-4 py-3 font-mono text-sm text-stark-white placeholder-slate-gray/25 outline-none transition-all duration-300"
                />
              </div>

              {/* Email input */}
              <div className="mb-5">
                <label className="block font-mono text-xs text-slate-gray/40 mb-2 tracking-wider">
                  [EMAIL_ADDR]:
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="comm.link@domain.net"
                  required
                  className="w-full bg-obsidian-light border border-neon-blue/15 focus:border-neon-blue/50 focus:shadow-[0_0_10px_rgba(0,166,255,0.15)] rounded-none px-4 py-3 font-mono text-sm text-stark-white placeholder-slate-gray/25 outline-none transition-all duration-300"
                />
              </div>

              {/* Message textarea */}
              <div className="mb-6">
                <label className="block font-mono text-xs text-slate-gray/40 mb-2 tracking-wider">
                  [MESSAGE]:
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type your transmission here..."
                  required
                  rows={5}
                  className="w-full bg-obsidian-light border border-neon-blue/15 focus:border-neon-blue/50 focus:shadow-[0_0_10px_rgba(0,166,255,0.15)] rounded-none px-4 py-3 font-mono text-sm text-stark-white placeholder-slate-gray/25 outline-none transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-copper/10 border border-copper/40 hover:bg-copper/20 hover:border-copper font-mono text-sm text-copper tracking-[0.3em] transition-all duration-300 disabled:opacity-50 relative overflow-hidden group"
                onMouseEnter={() => setButtonText('LINK_START')}
                onMouseLeave={() => setButtonText('TRANSMIT')}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">[TRANSMITTING...]</span>
                ) : submitted ? (
                  <span className="text-terminal-green">[TRANSMISSION_SENT ✓]</span>
                ) : (
                  <span>[{buttonText}]</span>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col justify-between"
          >
            {/* Connection info */}
            <div className="glass-panel-copper p-6 mb-6">
              <div className="font-mono text-xs text-copper/60 tracking-widest mb-4">
                ─── UPLINK STATUS ───
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div>
                  <span className="text-slate-gray/40">[LOCATION]: </span>
                  <span className="text-slate-gray">Indonesia</span>
                </div>
                <div>
                  <span className="text-slate-gray/40">[TIMEZONE]: </span>
                  <span className="text-slate-gray">UTC+7 (WIB)</span>
                </div>
                <div>
                  <span className="text-slate-gray/40">[AVAILABILITY]: </span>
                  <span className="text-terminal-green">OPEN_FOR_PROJECTS</span>
                </div>
                <div>
                  <span className="text-slate-gray/40">[RESPONSE_TIME]: </span>
                  <span className="text-neon-blue">~24_HOURS</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="glass-panel p-6">
              <div className="font-mono text-xs text-neon-blue/50 tracking-widest mb-4">
                ─── COMM CHANNELS ───
              </div>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 border border-neon-blue/15 hover:border-neon-blue/50 text-neon-blue/50 hover:text-neon-blue bg-obsidian/60 transition-all duration-300 group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    {social.icon}
                    <span className="font-mono text-xs tracking-wider hidden sm:inline">
                      {social.name.toUpperCase()}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Fun terminal output */}
            <div className="mt-6 font-mono text-[10px] text-slate-gray/20 leading-relaxed">
              <div>&gt; establishing_secure_connection...</div>
              <div>&gt; encryption: AES-256 // protocol: HTTPS</div>
              <div>&gt; uplink_status: <span className="text-terminal-green/40">READY</span></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
