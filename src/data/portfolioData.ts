import type { SoftwareProject, CreativeProject, TechSkill } from '../types';

export const SOFTWARE_PROJECTS: SoftwareProject[] = [
  {
    id: 'newarprime',
    title: 'NewarPrime',
    subtitle: 'Affiliate marketing & digital learning platform with AI support',
    description:
      'A full-stack learn-and-earn platform featuring structured video training courses, affiliate tracking, and an embedded Gemini-powered support assistant (PrimeBot). Built end-to-end from architecture to production deployment.',
    category: 'Full-Stack Platform',
    year: '2026',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Gemini AI'],
    metrics: [
      { label: 'Status', value: 'Live' },
      { label: 'AI Assistant', value: 'PrimeBot' },
      { label: 'Stack', value: 'Full-Stack' },
    ],
    liveUrl: 'https://newarprime.in',
    githubUrl: 'https://github.com/abnel-pradhan', // replace with exact repo link if public
    featuredImage: '/newarprime.png', // drop your screenshot into the public/ folder
    architectureDetails: [
      'Full-stack Next.js and TypeScript frontend backed by Supabase authentication and database',
      'Integrated PrimeBot, a Gemini-powered AI chatbot for instant learner and affiliate support',
      'Modular course delivery and affiliate workflow engineered for fast page loads and mobile responsiveness',
    ],
  },
  {
    id: 'misty-miles',
    title: 'Misty Miles Homestay',
    subtitle: 'Boutique hospitality website & interactive booking workflow',
    description:
      'A modern, responsive web experience crafted for Misty Miles Homestay in Siliguri. Features smooth scrolling, fluid Framer Motion transitions, and a streamlined booking workflow tailored for travelers on mobile and desktop.',
    category: 'Client Web Experience',
    year: '2026',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    metrics: [
      { label: 'Status', value: 'Live Demo' },
      { label: 'Design', value: 'Responsive' },
      { label: 'Hosting', value: 'Vercel' },
    ],
    liveUrl: 'https://misty-miles.vercel.app/',
    githubUrl: 'https://github.com/abnel-pradhan', // replace with exact repo link if public
    featuredImage: '/misty-miles.png', // drop your screenshot into the public/ folder
    architectureDetails: [
      'Built with Next.js and Tailwind CSS for fast page loads and full mobile responsiveness',
      'Integrated smooth scrolling and Framer Motion animations for a polished hospitality feel',
      'Custom booking workflow and agency-branded footer deployed live on Vercel',
    ],
  },
  {
    id: 'vidwanhub',
    title: 'VidwanHub',
    subtitle: 'Academic faculty directory & research paper aggregator',
    description:
      'A Vidwan-inspired academic discovery platform designed to index faculty profiles, institutional affiliations, and published research papers. Powered by live scholarly data aggregation through the OpenAlex API.',
    category: 'SaaS & Data Platform',
    year: '2026',
    tags: ['Next.js', 'TypeScript', 'OpenAlex API', 'Tailwind CSS'],
    metrics: [
      { label: 'Data Source', value: 'OpenAlex' },
      { label: 'Focus', value: 'Academic' },
      { label: 'Type', value: 'SaaS Prototype' },
    ],
    liveUrl: 'https://vidwan-project.vercel.app/', // replace with live link if deployed
    githubUrl: 'https://github.com/abnel-pradhan/Vidwan-project', // replace with exact repo link
    featuredImage: '/vidwan-hub.png', // drop your screenshot into the public/ folder
    architectureDetails: [
      'Integrated the OpenAlex API to dynamically fetch researcher profiles, citations, and publication records',
      'Built a fast, searchable faculty directory interface with Next.js and Tailwind CSS',
      'Architected as a modular SaaS prototype for institutional academic discovery and tracking',
    ],
  },
  {
    id: 'visionflow-neural',
    title: 'VisionFlow Spatial Interface',
    subtitle: 'Touchless gesture computing & edge neural interaction',
    description: 'An elegant touchless gesture-controlled interface running edge computer vision. Translates natural hand movements into fluid spatial navigation with sub-millimeter precision.',
    category: 'Computer Vision & AI',
    year: '2025',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'WebSockets', 'React', 'Tailwind'],
    metrics: [
      { label: 'Latency', value: 'Instant' },
      { label: 'Precision', value: 'High' },
      { label: 'Architecture', value: 'Edge' },
    ],
    liveUrl: 'https://abnel-pradhan.github.io/gesture-particles-web/',
    githubUrl: 'https://github.com/abnel-pradhan/ai-virtual-painter',
    featuredImage: '/aivirtual-printer.png',
    architectureDetails: [
      'Multi-threaded vision daemon processing camera feeds with smooth spatial filtering',
      'Instantaneous client-side state synchronization for touchless controls',
      'Zero-latency spatial landmark tracking designed for interactive installations',
    ],
  },
];

export const CREATIVE_PROJECTS: CreativeProject[] = [
  {
    id: 'portfolio-showreel',
    title: 'Kinetic Portfolio Showreel',
    role: 'Motion Designer, Editor & Sound Designer',
    genre: 'Motion Graphics & UI Showcase',
    year: '2026',
    duration: '0:30', // adjust to your exact exported video length
    bpm: 128,
    cutRate: '0.5s',
    tools: ['After Effects', 'DaVinci Resolve'],
    description:
      'A high-frame-rate 60fps 1080p portfolio showreel crafted with custom keyframe animations, kinetic typography, and seamless click-triggered UI transitions. Finished with crisp sound design layering and clean visual pacing.',
    videoPreviewUrl: './portfolio-reel.mp4', // drop your exported MP4 into public/
    thumbnail: './portfolio-reel-thumb.png', // drop a cover frame into public/
    highlightCuts: ['Keyframe Motion', 'UI Transitions', 'Kinetic Type', 'SFX Sync'],
    colorPalette: ['#DC2626', '#0A0A0A', '#FFFFFF', '#1E293B'],
  },
  {
    id: 'kinetic-typography-reel',
    title: 'Kinetic Typography Reel',
    role: 'Video Editor & Motion Designer',
    genre: 'Short-Form & Typography',
    year: '2026',
    duration: '0:25', // adjust to your exact video length
    bpm: 135,
    cutRate: '0.35s',
    tools: ['CapCut'],
    description:
      'A fast-paced, beat-synced kinetic typography reel built for high retention. Combines bold text animations, custom keyframe graphs, punchy speed ramps, and layered sound effects.',
    videoPreviewUrl: './typography-reel.mp4', // drop your exported MP4 into public/
    thumbnail: './typography-thumb.png', // drop a cover frame into public/
    highlightCuts: ['Beat Sync', 'Text Keyframes', 'Speed Ramps', 'SFX Hits'],
    colorPalette: ['#DC2626', '#0A0A0A', '#FFFFFF', '#FACC15'],
  },
  {
    id: 'client-commercial-reel',
    title: 'Client Commercial Reel', // replace with the brand/client name if allowed
    role: 'Lead Video Editor',
    genre: 'Paid Client Work (9:16)',
    year: '2026',
    duration: '0:30', // adjust to your exact video length
    bpm: 130,
    cutRate: '0.4s',
    tools: ['CapCut', 'After Effects'], // update to the tools you used
    description:
      'A high-retention vertical (9:16) edit produced for a paid client campaign. Engineered with hook-first pacing, clean dynamic captions, smooth transitions, and punchy sound design tailored for Instagram Reels and Shorts.',
    videoPreviewUrl: './paid-reel.mp4', // drop your exported MP4 into public/
    thumbnail: './paid-reel-thumb.png', // drop a cover frame into public/
    highlightCuts: ['Hook Pacing', '9:16 Vertical', 'Dynamic Captions', 'SFX Layering'],
    colorPalette: ['#DC2626', '#0A0A0A', '#FFFFFF', '#6B7280'],
  },
  {
    id: 'paid-motion-graph-reel',
    title: 'Dynamic Motion & SFX Reel', // replace with the client/project name if you'd like
    role: 'Video Editor & Motion Designer',
    genre: 'Paid Client Work (9:16)',
    year: '2026',
    duration: '0:30', // adjust to your exact video length
    bpm: 132,
    cutRate: '0.4s',
    tools: ['CapCut', 'DaVinci Resolve'], // update to the exact tools you used
    description:
      'A paid vertical reel built with custom speed and keyframe graphs, smooth UI/motion animations, and layered sound effects. Engineered for fluid pacing and high viewer retention from the first frame.',
    videoPreviewUrl: './paid-reel-2.mp4', // drop your exported MP4 into public/
    thumbnail: './paid-reel-2-thumb.png', // drop a cover frame into public/
    highlightCuts: ['Speed Graphs', 'Custom Animations', 'SFX Layering', '9:16 Vertical'],
    colorPalette: ['#DC2626', '#0A0A0A', '#FFFFFF', '#FACC15'],
  },
];

export const TECH_SKILLS: TechSkill[] = [
  { name: 'React', category: 'frontend', proficiency: 98, highlight: true },
  { name: 'Next.js', category: 'frontend', proficiency: 95, highlight: true },
  { name: 'TypeScript', category: 'frontend', proficiency: 96, highlight: true },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 98, highlight: true },
  { name: 'Framer Motion', category: 'frontend', proficiency: 94, highlight: true },
  { name: 'Three.js', category: 'frontend', proficiency: 86 },

  { name: 'Python', category: 'vision-ai', proficiency: 95, highlight: true },
  { name: 'OpenCV', category: 'vision-ai', proficiency: 92, highlight: true },
  { name: 'MediaPipe', category: 'vision-ai', proficiency: 90, highlight: true },
  { name: 'PyTorch', category: 'vision-ai', proficiency: 82 },
  { name: 'FastAPI', category: 'vision-ai', proficiency: 88 },

  { name: 'Node.js', category: 'backend', proficiency: 90 },
  { name: 'PostgreSQL', category: 'backend', proficiency: 86 },
  { name: 'Redis', category: 'backend', proficiency: 84 },
  { name: 'Docker', category: 'infra', proficiency: 85 },

  { name: 'DaVinci Resolve Studio', category: 'creative-motion', proficiency: 96, highlight: true },
  { name: 'Color Grading & ACES', category: 'creative-motion', proficiency: 94, highlight: true },
  { name: 'After Effects', category: 'creative-motion', proficiency: 92, highlight: true },
  { name: 'Premiere Pro', category: 'creative-motion', proficiency: 95 },
  { name: 'Sound Design & Foley', category: 'creative-motion', proficiency: 88, highlight: true },
];
