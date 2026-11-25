import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const QUICK_PROMPTS = [
  "What's Abnel's tech stack?",
  'Tell me about his AI projects',
  'Is he available for freelance?',
];

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Hey! I'm Abnel's AI assistant. Ask me about his projects, tech stack, or freelance availability.",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (textToSend?: string) => {
    const content = (textToSend ?? input).trim();
    if (!content || loading) return;

    const userMsg: Message = { role: 'user', text: content };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: content,
          history: messages.slice(1), // skip initial greeting
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
          text: 'Something went wrong on my end. Feel free to reach out directly via the Contact section!',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 flex h-[460px] w-[340px] sm:w-[370px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A192F]/90 shadow-2xl backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#00A8E8]" />
                <div>
                  <p className="text-sm font-semibold text-white">Abnel AI</p>
                  <p className="text-[11px] text-emerald-400">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 text-slate-400 hover:bg-white/10 hover:text-white transition"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[#00A8E8] text-slate-950 font-medium'
                        : 'bg-white/10 text-slate-100 border border-white/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Quick Prompts (shown only at start) */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {QUICK_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => sendMessage(prompt)}
                      className="rounded-full border border-[#00A8E8]/40 bg-[#00A8E8]/10 px-3 py-1 text-xs text-[#00A8E8] hover:bg-[#00A8E8]/20 transition"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}

              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-3.5 py-2.5 text-xs text-slate-300">
                    <Loader2 className="h-3.5 w-3.5 animate-spin text-[#00A8E8]" />
                    Thinking...
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex items-center gap-2 border-t border-white/10 bg-white/5 p-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects or hiring..."
                className="flex-1 rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder-slate-400 outline-none focus:border-[#00A8E8]"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00A8E8] text-slate-950 hover:opacity-90 disabled:opacity-40 transition"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-13 w-13 items-center justify-center rounded-full bg-[#00A8E8] text-slate-950 shadow-lg shadow-[#00A8E8]/30"
        aria-label="Toggle AI Chat"
      >
        {isOpen ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
      </motion.button>
    </div>
  );
};