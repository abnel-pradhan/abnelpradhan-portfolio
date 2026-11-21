import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TECH_SKILLS } from '../data/portfolioData';

export const TechArsenalMarquee: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const marqueeRow = [
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'OpenCV',
    'MediaPipe',
    'Three.js',
    'Tailwind CSS',
    'Framer Motion',
    'DaVinci Resolve',
    'After Effects',
    'Sound Design',
    'Color Science',
  ];

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'frontend', label: 'Frontend & Web' },
    { id: 'vision-ai', label: 'Vision AI & Python' },
    { id: 'creative-motion', label: 'Motion & Post' },
    { id: 'backend', label: 'Systems & Backend' },
  ];

  const filteredSkills = selectedCategory === 'all'
    ? TECH_SKILLS
    : TECH_SKILLS.filter(s => s.category === selectedCategory || (selectedCategory === 'backend' && s.category === 'infra'));

  return (
    <section id="arsenal" className="w-full max-w-full py-28 sm:py-36 bg-white border-b border-neutral-200/60 overflow-hidden">
      
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center justify-between pb-6 border-b border-neutral-100 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#DC2626]">
              Skills & Arsenal
            </span>
            <span className="text-neutral-300">•</span>
            <span className="text-xs text-neutral-400">
              Technical Stack
            </span>
          </div>
          <span className="text-xs text-neutral-400 font-medium">
            Production Ready
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-neutral-900 tracking-tight">
              Tools of execution.
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base mt-3 max-w-xl leading-relaxed">
              Curated across modern web architecture, computer vision, and high-cadence motion editing.
            </p>
          </div>

          {/* Rounded Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gentle Floating Marquee */}
      <div className="relative py-8 bg-neutral-900 text-white my-10 overflow-hidden select-none">
        <div className="flex overflow-hidden whitespace-nowrap font-display font-semibold text-xl sm:text-2xl tracking-normal">
          <div className="animate-marquee flex items-center gap-10 shrink-0">
            {marqueeRow.concat(marqueeRow).map((item, idx) => (
              <span key={idx} className="flex items-center gap-10">
                <span className="text-white hover:text-[#DC2626] transition-colors">{item}</span>
                <span className="text-[#DC2626] text-xs opacity-60">•</span>
              </span>
            ))}
          </div>
          <div className="animate-marquee flex items-center gap-10 shrink-0" aria-hidden="true">
            {marqueeRow.concat(marqueeRow).map((item, idx) => (
              <span key={idx} className="flex items-center gap-10">
                <span className="text-white hover:text-[#DC2626] transition-colors">{item}</span>
                <span className="text-[#DC2626] text-xs opacity-60">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Skill Matrix Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, sIdx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: sIdx * 0.03, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl border border-neutral-200/70 bg-[#F8F9FA] hover:bg-white hover:border-neutral-300 transition-all shadow-sm flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-display font-semibold text-base text-neutral-900 group-hover:text-[#DC2626] transition-colors">
                  {skill.name}
                </span>
                <span className="text-xs text-neutral-400 font-medium">
                  {skill.proficiency}%
                </span>
              </div>

              {/* Soft Meter */}
              <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-neutral-900 rounded-full group-hover:bg-[#DC2626] transition-all duration-700"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};
