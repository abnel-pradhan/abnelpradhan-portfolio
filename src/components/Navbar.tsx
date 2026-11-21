import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#showcase' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Skills & Tools', href: '#arsenal' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full max-w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F9FA]/90 backdrop-blur-md border-b border-neutral-200/60 shadow-sm shadow-black/[0.02]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-neutral-900 text-white font-semibold text-sm flex items-center justify-center transition-colors group-hover:bg-[#DC2626]">
            A
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-neutral-900">
            Abnel <span className="font-normal text-neutral-400">Studio</span>
          </span>
        </a>

        {/* Desktop Navigation Links (No brackets, no slashes) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-neutral-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Primary CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="btn-primary text-xs py-2.5 px-5 flex items-center gap-1.5"
          >
            <span>Start a Project</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 text-neutral-800 rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-neutral-200/80 bg-white/95 backdrop-blur-xl px-6 py-8 flex flex-col gap-5 animate-in fade-in slide-in-from-top-2 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-display font-semibold text-2xl text-neutral-900 hover:text-[#DC2626] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary w-full py-3.5 text-center text-sm font-semibold mt-4"
          >
            Start a Project
          </a>
        </div>
      )}
    </header>
  );
};
