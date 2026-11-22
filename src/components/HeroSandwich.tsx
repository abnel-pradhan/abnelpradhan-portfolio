import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ParticleCanvas } from './ParticleCanvas';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const HeroSandwich: React.FC = () => {
  // Gentle mouse tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 60, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 60, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-full min-h-[90vh] flex flex-col justify-between items-center overflow-hidden bg-[#F8F9FA] select-none pt-12 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-b border-neutral-200/60"
      style={{ perspective: 1000 }}
    >
      {/* Calm Ambient Three.js particle canvas */}
      <ParticleCanvas className="z-0 pointer-events-none opacity-50" />

      {/* Top Editorial Status Line (No brackets, no slashes) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 w-full max-w-6xl flex items-center justify-between text-xs text-neutral-500 font-medium tracking-wide pb-4 border-b border-neutral-200/60"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
          <span className="text-neutral-900 font-semibold tracking-normal">Abnel Studio</span>
          <span className="text-neutral-300">•</span>
          <span>India Sikkim & Worldwide</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-neutral-400">Engineering & Visual Direction</span>
          <span className="text-[#DC2626] font-medium px-3 py-1 bg-red-50/80 rounded-full border border-red-100">
            Available for Q1–Q2
          </span>
        </div>
      </motion.div>

      {/* ================================================================= */}
      {/* 1. BACKGROUND LAYER (z-0): Massive Bold Typography "PORTFOLIO"    */}
      {/* ================================================================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h1
          className="w-full text-center font-display font-extrabold text-[23vw] leading-none tracking-tighter text-neutral-900/[0.06] uppercase select-none"
          style={{ letterSpacing: '-0.07em' }}
        >
          PORTFOLIO
        </h1>
      </div>

      {/* ================================================================= */}
      {/* 2. MIDDLE SUBJECT LAYER (z-10): Floating Cutout Image             */}
      {/* ================================================================= */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full my-auto py-8 sm:py-12 pointer-events-none">
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          animate={{
            y: [-12, 12, -12],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: 'easeInOut',
          }}
          className="relative pointer-events-auto flex items-center justify-center"
        >
          {/* Fluid Subject Container with Soft Drop Shadow */}
          <div className="relative w-[72vw] max-w-[270px] sm:w-[48vw] sm:max-w-[320px] md:max-w-[370px] lg:max-w-[410px] aspect-[3/4] flex items-center justify-center">
            
            {/* Ambient diffuse shadow */}
            <div className="absolute inset-x-6 bottom-0 h-16 bg-black/10 blur-3xl rounded-full pointer-events-none" />

            {/* Cutout Portrait Image with Soft Monochrome Grading */}
            <img
              src="/abnel-hero.png"
              alt="Abnel"
              className="w-full h-full object-cover object-top grayscale contrast-105 brightness-105 drop-shadow-[0_20px_35px_rgba(0,0,0,0.08)] pointer-events-none select-none"
              style={{
                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              }}
              loading="eager"
            />
          </div>
        </motion.div>
      </div>

      {/* ================================================================= */}
      {/* 3. FOREGROUND LAYER (z-20): Red Dry Brush Stroke Accent Text      */}
      {/* ================================================================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative text-center transform -translate-y-4 sm:-translate-y-8 select-none"
        >
          {/* Blood Red (#DC2626) Hand-Drawn Dry Brush Stroke using Permanent Marker / Rock Salt */}
          <span
            className="font-brush text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#DC2626] block -rotate-3 sm:-rotate-4 tracking-wider drop-shadow-md whitespace-nowrap"
            style={{
              letterSpacing: '0.04em',
              textShadow: '0 4px 20px rgba(220, 38, 38, 0.25)',
            }}
          >
            Developer & Creator
          </span>

          {/* Hand-drawn organic brush accent underline */}
          <svg
            className="w-48 sm:w-72 md:w-80 h-4 mx-auto text-[#DC2626] mt-2 opacity-80"
            viewBox="0 0 300 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12C60 4 220 2 297 10M30 14C110 8 240 6 280 12"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* ================================================================= */}
      {/* Bottom Soothing Control Strip & Breathable Action CTAs            */}
      {/* ================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 w-full max-w-6xl pt-6 flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        {/* Disciplines */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 text-xs text-neutral-600 font-medium">
          <span>Full-Stack Architecture</span>
          <span className="text-neutral-300">•</span>
          <span>Computer Vision & AI</span>
          <span className="text-neutral-300">•</span>
          <span>Cinematic Motion Direction</span>
        </div>

        {/* Rounded Soft Action Buttons */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
          <a
            href="#showcase"
            className="btn-secondary flex items-center gap-2 flex-1 sm:flex-initial"
          >
            <span>Explore Work</span>
            <ArrowDown size={14} className="text-neutral-500" />
          </a>
          <a
            href="#contact"
            className="btn-primary flex items-center gap-2 flex-1 sm:flex-initial"
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
