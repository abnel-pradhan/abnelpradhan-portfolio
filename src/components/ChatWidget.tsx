import React, { useState, useRef, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { X, ArrowUpRight, Send, Loader2, Sparkles } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const QUICK_PROMPTS = [
  "What's Abnel's tech stack?",
  'Show me his best AI projects',
  'Available for Q1–Q2 freelance?',
];

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Hey! I'm Abnel's AI assistant. Ask me about his engineering work, creative reels, or project availability.",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Physics for the Floating Launcher Button
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-30, 30], [14, -14]), {
    stiffness: 300,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-80, 80], [-14, 14]), {
    stiffness: 300,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (textToSend?: string) => {
    const content = (textToSend ?? input).trim();
    if (!content || loading) return;

    const userMsg: Message = { role: 'user', text: content };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: content,
          history: messages.slice(1),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Request failed');

      setMessages((prev) => [...prev, { role: 'model', text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          text: 'Connection hiccup! Feel free to reach out directly via the Contact section.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end"
      style={{ perspective: 1200 }}
    >
      {/* 3D Unfolding Chat Terminal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.92, rotateX: 18 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.94, rotateX: 12 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            style={{ transformOrigin: 'bottom right' }}
            className="mb-3 sm:mb-4 flex h-[430px] sm:h-[480px] w-[calc(100vw-2rem)] max-w-[360px] sm:w-[390px] sm:max-w-none flex-col overflow-hidden rounded-2xl border-2 border-[#111111] bg-[#F8F9FA] shadow-[8px_8px_0px_#111111]"
          >
            {/* Brutalist Editorial Header */}
            <div className="flex items-center justify-between border-b-2 border-[#111111] bg-[#111111] px-4 py-3.5 text-white">
              <div className="flex items-center gap-3">
                {/* 3D Spinning Core Badge */}
                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                  <motion.div
                    animate={{ rotateY: 360, rotateZ: 180 }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                    className="h-5 w-5 rounded-md border-2 border-[#DC2626]"
                  />
                  <Sparkles className="absolute h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold tracking-tight">
                      Abnel AI
                    </span>
                    <span className="rounded-full bg-[#DC2626] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                      Live
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    Studio Assistant • Gemini Powered
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 text-neutral-300 transition hover:border-[#DC2626] hover:bg-[#DC2626] hover:text-white"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 space-y-3.5 overflow-y-auto bg-[#F8F9FA] p-4 text-sm">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[84%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[#111111] text-white shadow-[3px_3px_0px_#DC2626]'
                        : 'border border-neutral-200 bg-white text-[#111111] shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Quick Prompts */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK_PROMPTS.map((prompt) => (
                    <motion.button
                      key={prompt}
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => sendMessage(prompt)}
                      className="flex items-center gap-1 rounded-full border border-[#111111]/20 bg-white px-3 py-1.5 text-xs font-medium text-[#111111] shadow-sm transition hover:border-[#DC2626] hover:bg-[#DC2626] hover:text-white"
                    >
                      {prompt}
                      <ArrowUpRight className="h-3 w-3 opacity-70" />
                    </motion.button>
                  ))}
                </div>
              )}

              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-3.5 py-2.5 text-xs font-medium text-neutral-600 shadow-sm">
                    <Loader2 className="h-3.5 w-3.5 animate-spin text-[#DC2626]" />
                    Thinking...
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex items-center gap-2 border-t-2 border-[#111111] bg-white p-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects or hiring..."
                className="flex-1 rounded-xl border border-neutral-300 bg-[#F8F9FA] px-3.5 py-2.5 text-sm text-[#111111] placeholder-neutral-400 outline-none transition focus:border-[#111111] focus:bg-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.94 }}
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DC2626] text-white shadow-[2px_2px_0px_#111111] transition hover:bg-[#111111] disabled:opacity-40"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Interactive Floating Launcher Pill */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="group relative flex items-center gap-2 sm:gap-3 rounded-full border-2 border-[#111111] bg-[#111111] px-3.5 py-2 sm:px-5 sm:py-3.5 text-white shadow-[3px_3px_0px_#DC2626] sm:shadow-[5px_5px_0px_#DC2626] transition-shadow hover:shadow-[7px_7px_0px_#DC2626]"
        aria-label="Toggle Abnel AI Chat"
      >
        {/* Pulsing Red Live Indicator */}
        <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#DC2626] opacity-80" />
          <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#DC2626]" />
        </span>

        {/* Label */}
        <span
          className="text-xs sm:text-sm font-semibold tracking-tight"
          style={{ transform: 'translateZ(18px)' }}
        >
          {isOpen ? 'Close AI' : 'Ask Abnel AI'}
        </span>

        {/* 3D Rotating Icon */}
        <div
          className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[#DC2626]"
          style={{ transform: 'translateZ(24px)' }}
        >
          {isOpen ? (
            <X className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
          ) : (
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
          )}
        </div>
      </motion.button>
    </div>
  );
};