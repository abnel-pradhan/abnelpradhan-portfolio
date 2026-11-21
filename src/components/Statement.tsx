import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Statement: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'Computer Vision & AI',
      description:
        'Engineering fluid, real-time spatial computing with Python, OpenCV, and MediaPipe. Designing touchless interfaces that turn human movement into natural software interaction.',
      focus: 'Edge Intelligence',
    },
    {
      number: '02',
      title: 'Full-Stack Engineering',
      description:
        'Crafting resilient, zero-layout-shift web applications using React, Next.js, and TypeScript. Prioritizing instant load speeds, responsive interactions, and accessible design.',
      focus: 'Modern Web Architecture',
    },
    {
      number: '03',
      title: 'Motion & Film Direction',
      description:
        'Directing rhythm-driven edits in DaVinci Resolve Studio and After Effects. Merging sound design, color science, and dynamic pacing to evoke genuine emotional impact.',
      focus: 'Cinematic Storytelling',
    },
  ];

  return (
    <section id="philosophy" className="w-full max-w-full py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-white border-b border-neutral-200/60">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-100 mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#DC2626]">
              Philosophy & Method
            </span>
            <span className="text-neutral-300">•</span>
            <span className="text-xs text-neutral-400">
              Core Practices
            </span>
          </div>
          <span className="text-xs text-neutral-400 font-medium">
            Swiss Editorial
          </span>
        </div>

        {/* Large Calming Headline */}
        <div className="mb-20 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl leading-[1.12] tracking-tight text-neutral-900"
          >
            Where deterministic engineering converges with{' '}
            <span className="font-brush text-[#DC2626] font-normal text-4xl sm:text-6xl inline-block -rotate-1 px-1">
              uncompromising
            </span>{' '}
            cinematic narrative.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-neutral-500 mt-6 max-w-2xl leading-relaxed"
          >
            Crafting software, artificial vision, and motion design with equal depth. No unnecessary clutter — just speed, elegance, and intentional form.
          </motion.p>
        </div>

        {/* 3-Column Soft Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.4 } }}
              className="card-soothing p-8 sm:p-10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-neutral-100 mb-8 text-xs">
                  <span className="text-sm font-bold text-[#DC2626]">
                    {pillar.number}
                  </span>
                  <span className="text-neutral-400 font-medium">
                    {pillar.focus}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-neutral-900 tracking-tight mb-4 group-hover:text-[#DC2626] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-neutral-500 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
                <span>Production Practice</span>
                <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-red-50 group-hover:text-[#DC2626] transition-colors">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
