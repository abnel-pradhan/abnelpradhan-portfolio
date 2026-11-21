import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Copy,
  Check,
  Send,
  ArrowUp,
  MapPin,
  Clock,
  Mail,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Software & Architecture',
    budget: '$5k - $15k',
    message: '',
  });

  const contactEmail = 'abnel.dev.creator@portfolio.internal';

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full max-w-full bg-[#111111] text-white pt-28 sm:pt-36 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-800 mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#DC2626]">
              Contact & Inquiries
            </span>
            <span className="text-neutral-700">•</span>
            <span className="text-xs text-neutral-400">
              Direct Communication
            </span>
          </div>
          <span className="text-xs text-neutral-500">
            Open for Select Clients
          </span>
        </div>

        {/* Large Editorial Headline */}
        <div className="relative mb-20 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-4xl sm:text-6xl md:text-7xl leading-[1.08] tracking-tight"
          >
            Let&apos;s build something{' '}
            <span className="font-brush text-[#DC2626] font-normal text-4xl sm:text-6xl md:text-7xl inline-block -rotate-1 px-1">
              relentless
            </span>
            .
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-neutral-400 text-base sm:text-lg mt-6 max-w-2xl leading-relaxed"
          >
            Available for commissions across engineering, edge artificial intelligence, and cinematic post-production.
          </motion.p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 mb-24">
          
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                Direct Inquiries
              </p>
              <h3 className="font-display font-semibold text-2xl sm:text-3xl text-white mb-4">
                Have a project or vision in mind?
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                Send a direct note or copy the contact address below. Let’s talk about timelines, performance goals, and creative scope.
              </p>

              {/* Copy Email Box */}
              <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors mb-8 shadow-sm">
                <div className="text-[11px] font-medium text-neutral-500 mb-2 uppercase tracking-wider">
                  Email Address
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-white truncate">
                    {contactEmail}
                  </span>
                  <button
                    onClick={copyEmailToClipboard}
                    className="btn-primary text-xs py-2 px-4 flex items-center gap-1.5 shrink-0"
                  >
                    {copied ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Soothing Specs */}
              <div className="space-y-3 text-xs text-neutral-400 font-medium">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/60">
                  <Clock size={16} className="text-[#DC2626]" />
                  <span>Response time: within 12 hours</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/60">
                  <MapPin size={16} className="text-[#DC2626]" />
                  <span>Location: Zurich & Remote Global</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/60">
                  <Mail size={16} className="text-[#DC2626]" />
                  <span>Available for Q1–Q2 commissions</span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div>
              <div className="text-xs font-semibold text-neutral-500 mb-4 uppercase tracking-wider">
                Connect
              </div>
              <div className="flex flex-wrap gap-2.5">
                {[
                  {
                    name: 'GitHub',
                    href: 'https://github.com',
                    path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                  },
                  {
                    name: 'LinkedIn',
                    href: 'https://linkedin.com',
                    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
                  },
                  {
                    name: 'X',
                    href: 'https://x.com',
                    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
                  },
                  {
                    name: 'YouTube',
                    href: 'https://youtube.com',
                    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
                  },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-medium flex items-center gap-2 hover:text-white hover:border-neutral-700 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d={s.path} />
                    </svg>
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7 bg-neutral-900/60 p-8 sm:p-12 rounded-3xl border border-neutral-800">
            {formSubmitted ? (
              <div className="py-16 text-center">
                <div className="w-14 h-14 rounded-full bg-[#DC2626] text-white flex items-center justify-center mx-auto mb-4">
                  <Check size={26} />
                </div>
                <h4 className="font-display font-bold text-2xl text-white mb-2">
                  Message Sent
                </h4>
                <p className="text-sm text-neutral-400 max-w-sm mx-auto mb-8">
                  Thank you for reaching out. I have received your note and will reply within 12 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn-secondary text-xs px-6 py-2.5"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wide">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Elena Rostova"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#18181B] text-white rounded-xl border border-neutral-800 focus:border-[#DC2626] focus:outline-none p-3.5 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="elena@studio.ch"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#18181B] text-white rounded-xl border border-neutral-800 focus:border-[#DC2626] focus:outline-none p-3.5 text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wide">
                      Discipline
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#18181B] text-white rounded-xl border border-neutral-800 focus:border-[#DC2626] focus:outline-none p-3.5 text-sm cursor-pointer"
                    >
                      <option>Software & Web Architecture</option>
                      <option>Computer Vision & AI</option>
                      <option>Motion & Film Direction</option>
                      <option>Full Creative Production</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wide">
                      Expected Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#18181B] text-white rounded-xl border border-neutral-800 focus:border-[#DC2626] focus:outline-none p-3.5 text-sm cursor-pointer"
                    >
                      <option>&lt; $5,000</option>
                      <option>$5,000 - $15,000</option>
                      <option>$15,000 - $35,000</option>
                      <option>$35,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wide">
                    Project Scope *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your timeline, objectives, and deliverables..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#18181B] text-white rounded-xl border border-neutral-800 focus:border-[#DC2626] focus:outline-none p-3.5 text-sm resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-4 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            <span>© 2026 Abnel Studio. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Swiss Editorial & Modern Architecture</span>
            
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 font-medium text-neutral-400"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
