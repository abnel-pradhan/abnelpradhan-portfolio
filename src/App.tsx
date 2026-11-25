import { SmoothScrollProvider } from './components/SmoothScrollProvider';
import { BrutalistCursor } from './components/BrutalistCursor';
import { Navbar } from './components/Navbar';
import { HeroSandwich } from './components/HeroSandwich';
import { Statement } from './components/Statement';
import { DualShowcase } from './components/DualShowcase';
import { TechArsenalMarquee } from './components/TechArsenalMarquee';
import { ContactSection } from './components/ContactSection';
import { ChatWidget } from './components/ChatWidget';

export function App() {
  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#F8F9FA] text-[#111111] font-sans selection:bg-[#DC2626] selection:text-white flex flex-col max-w-full overflow-x-hidden">
        {/* Subtle Minimal Cursor */}
        <BrutalistCursor />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Multi-layered Sandwich Hero Section */}
        <main className="flex-1">
          <HeroSandwich />

          {/* Statement & Philosophy Section */}
          <Statement />

          {/* Dual-Track Showcase (Web & Software / Creative & Video Editing) */}
          <DualShowcase />

          {/* Continuous Ticker Marquee & Tech Arsenal Matrix */}
          <TechArsenalMarquee />

          {/* Brutalist Contact & Dispatch Terminal */}
          <ContactSection />
        </main>

        {/* Floating AI Portfolio Assistant */}
        <ChatWidget />
      </div>
    </SmoothScrollProvider>
  );
}

export default App;