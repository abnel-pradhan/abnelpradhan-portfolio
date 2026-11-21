import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOFTWARE_PROJECTS, CREATIVE_PROJECTS } from '../data/portfolioData';
import type { SoftwareProject, CreativeProject } from '../types';
import {
  Code2,
  Film,
  ExternalLink,
  Play,
  Volume2,
  VolumeX,
  ArrowUpRight,
  Layers,
  X,
  Check,
} from 'lucide-react';

export const DualShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'software' | 'creative'>('software');
  const [selectedSoftware, setSelectedSoftware] = useState<SoftwareProject | null>(null);

  return (
    <section id="showcase" className="w-full max-w-full py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA] border-b border-neutral-200/60">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header with Soothing Rounded Tab Switch */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-neutral-200/80 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-[#DC2626]">
              <span>Selected Works</span>
              <span className="text-neutral-300">•</span>
              <span className="text-neutral-500 font-normal">Recent Productions</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-neutral-900 tracking-tight">
              Crafted with intention.
            </h2>
          </div>

          {/* Smooth Rounded Pill Switch */}
          <div className="inline-flex rounded-full bg-white p-1.5 border border-neutral-200 shadow-sm self-start md:self-auto">
            <button
              onClick={() => setActiveTab('software')}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide flex items-center gap-2 transition-all duration-300 ${
                activeTab === 'software'
                  ? 'bg-neutral-900 text-white shadow-md'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Code2 size={15} className={activeTab === 'software' ? 'text-[#DC2626]' : ''} />
              <span>Software & AI ({SOFTWARE_PROJECTS.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('creative')}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide flex items-center gap-2 transition-all duration-300 ${
                activeTab === 'creative'
                  ? 'bg-[#DC2626] text-white shadow-md'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Film size={15} />
              <span>Motion & Film ({CREATIVE_PROJECTS.length})</span>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* TRACK 1: WEB & SOFTWARE (SOOTHING & MODERN)                   */}
        {/* ============================================================== */}
        <AnimatePresence mode="wait">
          {activeTab === 'software' && (
            <motion.div
              key="software-grid"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12"
            >
              {SOFTWARE_PROJECTS.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.9, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                  className="card-soothing p-8 sm:p-10 flex flex-col justify-between group rounded-3xl"
                >
                  <div>
                    {/* Category & Year */}
                    <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-6 text-xs">
                      <span className="font-semibold text-[#DC2626]">
                        {project.category}
                      </span>
                      <span className="text-neutral-400">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-neutral-900 tracking-tight group-hover:text-[#DC2626] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-neutral-500 mb-6">
                      {project.subtitle}
                    </p>

                    {/* Image Container with Soft Rounded Corners */}
                    <div className="relative w-full aspect-video rounded-2xl mb-8 overflow-hidden bg-neutral-100 shadow-inner">
                      <img
                        src={project.featuredImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-6 border-t border-neutral-100 flex items-center justify-between gap-4">
                    <button
                      onClick={() => setSelectedSoftware(project)}
                      className="text-xs font-semibold text-neutral-700 hover:text-[#DC2626] flex items-center gap-1.5 transition-colors"
                    >
                      <Layers size={15} className="text-[#DC2626]" />
                      <span>Architecture Details</span>
                    </button>

                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="w-9 h-9 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-900 hover:text-white flex items-center justify-center transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-primary text-xs py-2 px-4 flex items-center gap-1.5"
                        >
                          <span>Preview</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* TRACK 2: CREATIVE & VIDEO EDITING                             */}
          {/* ============================================================== */}
          {activeTab === 'creative' && (
            <motion.div
              key="creative-grid"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12"
            >
              {CREATIVE_PROJECTS.map((video, idx) => (
                <SoothingVideoCard key={video.id} video={video} index={idx} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Soothing Architecture Modal */}
        <AnimatePresence>
          {selectedSoftware && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/50 backdrop-blur-md">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-3xl max-w-2xl w-full p-8 sm:p-10 relative max-h-[85vh] overflow-y-auto shadow-2xl"
              >
                <div className="flex items-center justify-between pb-6 border-b border-neutral-100 mb-6">
                  <div>
                    <span className="text-xs font-semibold text-[#DC2626] uppercase">
                      Architecture Blueprint
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-neutral-900 mt-1">
                      {selectedSoftware.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedSoftware(null)}
                    className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
                    aria-label="Close"
                  >
                    <X size={18} />
                  </button>
                </div>

                <p className="text-sm text-neutral-500 mb-8 leading-relaxed">
                  {selectedSoftware.subtitle}
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Key Highlights
                  </h4>
                  {selectedSoftware.architectureDetails.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 text-sm text-neutral-700 flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} />
                      </span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end pt-6 border-t border-neutral-100">
                  <button
                    onClick={() => setSelectedSoftware(null)}
                    className="btn-secondary text-xs px-6 py-2.5"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

// =========================================================================
// Soothing Video Card with Smooth Scale-Up & Hover-to-Play
// =========================================================================
interface SoothingVideoCardProps {
  video: CreativeProject;
  index: number;
}

const SoothingVideoCard: React.FC<SoothingVideoCardProps> = ({ video, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="card-soothing p-8 sm:p-10 flex flex-col justify-between group rounded-3xl"
    >
      <div>
        {/* Genre & Role */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-6 text-xs">
          <span className="font-semibold text-[#DC2626]">
            {video.genre}
          </span>
          <span className="text-neutral-400">
            {video.year}
          </span>
        </div>

        <h3 className="font-display font-bold text-2xl sm:text-3xl text-neutral-900 tracking-tight group-hover:text-[#DC2626] transition-colors mb-2">
          {video.title}
        </h3>
        <p className="text-sm font-medium text-neutral-500 mb-6">
          {video.role}
        </p>

        {/* Video Player Container */}
        <div className="relative w-full aspect-video rounded-2xl bg-neutral-900 mb-8 overflow-hidden shadow-inner">
          <img
            src={video.thumbnail}
            alt={video.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              isPlaying ? 'opacity-0' : 'opacity-100'
            }`}
          />

          <video
            ref={videoRef}
            src={video.videoPreviewUrl}
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              isPlaying ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Hover Status Tag */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 font-medium">
            {isPlaying ? (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                <span>Playing</span>
              </>
            ) : (
              <>
                <Play size={11} className="fill-current text-white" />
                <span>Hover to preview</span>
              </>
            )}
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white hover:text-[#DC2626] flex items-center justify-center transition-colors"
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} className="text-[#DC2626]" />}
          </button>
        </div>

        <p className="text-sm text-neutral-600 leading-relaxed mb-6">
          {video.description}
        </p>

        {/* Highlight Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {video.highlightCuts.map((cut, cIdx) => (
            <span
              key={cIdx}
              className="text-xs px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 font-medium"
            >
              {cut}
            </span>
          ))}
        </div>
      </div>

      {/* Tools Row */}
      <div className="pt-6 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
        <div className="flex flex-wrap gap-2">
          {video.tools.map((tool, tIdx) => (
            <span key={tIdx}>{tool}{tIdx < video.tools.length - 1 ? ' • ' : ''}</span>
          ))}
        </div>

        <span className="text-[#DC2626] font-semibold flex items-center gap-1">
          <span>Film Reel</span>
          <ArrowUpRight size={14} />
        </span>
      </div>
    </motion.div>
  );
};
