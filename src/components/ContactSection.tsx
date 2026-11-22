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

const BUDGET_OPTIONS = {
  'Software & Web Architecture': [
    '₹5,000 – ₹10,000',
    '₹10,000 – ₹25,000',
    '₹25,000 – ₹50,000',
    '₹50,000+',
  ],
  'Computer Vision & AI': [
    '₹8,000 – ₹20,000',
    '₹20,000 – ₹45,000',
    '₹45,000+',
  ],
  'Motion & Film Direction': [
    '₹1,500 – ₹3,000 (Single Reel)',
    '₹5,000 – ₹12,000 (Monthly Pack)',
    '₹12,000 – ₹25,000 (Commercial)',
    '₹25,000+',
  ],
  'Full Creative Production': [
    '₹15,000 – ₹30,000',
    '₹30,000 – ₹60,000',
    '₹60,000+',
  ],
} as const;

type Discipline = keyof typeof BUDGET_OPTIONS;

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    projectType: Discipline;
    budget: string;
    message: string;
  }>({
    name: '',
    email: '',
    projectType: 'Software & Web Architecture',
    budget: BUDGET_OPTIONS['Software & Web Architecture'][0],
    message: '',
  });

  // Replace XXXXXXXXXX with your 10-digit WhatsApp number (keep 91, no + or spaces)
  const whatsappNumber = '919339725204';
  const contactEmail = 'abnelpradhan7@gmail.com';

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDisciplineChange = (newDiscipline: Discipline) => {
    setFormData({
      ...formData,
      projectType: newDiscipline,
      budget: BUDGET_OPTIONS[newDiscipline][0],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = [
      `Hi Abnel! I'd like to discuss a project.`,
      ``,
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email}`,
      `*Discipline:* ${formData.projectType}`,
      `*Expected Budget:* ${formData.budget}`,
      `*Project Scope:* ${formData.message}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentBudgets = BUDGET_OPTIONS[formData.projectType];

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
                Send a direct note on WhatsApp or copy the email address below. Let’s talk about timelines, performance goals, and creative scope.
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
                  <span>Location: Sikkim, India & Remote Global</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/60">
                  <Mail size={16} className="text-[#DC2626]" />
                  <span>Available for Freelance & Client Commissions</span>
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
                    href: 'https://github.com/abnel-pradhan',
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
                    name: 'Instagram',
                    href: 'https://instagram.com/abnel_code',
                    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
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

          {/* Right Column: Clean WhatsApp Form */}
          <div className="lg:col-span-7 bg-neutral-900/60 p-8 sm:p-12 rounded-3xl border border-neutral-800">
            {formSubmitted ? (
              <div className="py-16 text-center">
                <div className="w-14 h-14 rounded-full bg-[#DC2626] text-white flex items-center justify-center mx-auto mb-4">
                  <Check size={26} />
                </div>
                <h4 className="font-display font-bold text-2xl text-white mb-2">
                  Opening WhatsApp
                </h4>
                <p className="text-sm text-neutral-400 max-w-sm mx-auto mb-8">
                  Your project details have been pre-filled in WhatsApp. Just hit send there and I&apos;ll reply within 12 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn-secondary text-xs px-6 py-2.5"
                >
                  Edit or send another inquiry
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
                      placeholder="Your full name"
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
                      placeholder="you@example.com"
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
                      onChange={(e) => handleDisciplineChange(e.target.value as Discipline)}
                      className="w-full bg-[#18181B] text-white rounded-xl border border-neutral-800 focus:border-[#DC2626] focus:outline-none p-3.5 text-sm cursor-pointer"
                    >
                      {(Object.keys(BUDGET_OPTIONS) as Discipline[]).map((discipline) => (
                        <option key={discipline} value={discipline}>
                          {discipline}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wide">
                      Expected Budget (INR)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#18181B] text-white rounded-xl border border-neutral-800 focus:border-[#DC2626] focus:outline-none p-3.5 text-sm cursor-pointer"
                    >
                      {currentBudgets.map((tier) => (
                        <option key={tier} value={tier}>
                          {tier}
                        </option>
                      ))}
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
                  <span>Send via WhatsApp</span>
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
            <span>Engineering & Visual Direction</span>
            
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