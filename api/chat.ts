import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT = `
You are the AI Portfolio Assistant for Abnel Pradhan — a Full-Stack Developer, AI Engineer, and Motion Editor.
Keep your answers concise (2–4 short sentences), friendly, and sharp.

Key facts about Abnel:
- Role: Full-Stack Web Developer, AI Engineer, and Motion/Video Editor; Founder of NewarPrime (newarprime.in).
- Tech Stack: React, TypeScript, Next.js, Vite, Tailwind CSS, Framer Motion, Node.js, Python, Supabase, Firebase, OpenCV, MediaPipe, Three.js, and Remotion.
- Notable Projects:
  1. NewarPrime (newarprime.in) — Next.js + Supabase digital skills & affiliate platform with an integrated AI assistant.
  2. VidwanHub — Full-stack academic faculty directory & publication aggregator built with Next.js and the OpenAlex API.
  3. Ironman 3D Virtual Painter — Python computer vision app using OpenCV & MediaPipe for hand-gesture 3D drawing.
  4. Motion & Reels — Programmatic motion graphics (Remotion) and kinetic typography edits.
- Freelance & Hiring: Available for web development, AI integrations, and video/motion editing projects.

Rules:
- Only answer questions related to Abnel, his work, skills, or hiring him.
- If a visitor wants to hire Abnel, ask for a quote, or discuss a project, encourage them to use the Contact section / WhatsApp inquiry button on the page.
- Never invent projects, prices, or contact details not listed here.
`;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, history = [] } = req.body || {};

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Limit history to the last 6 messages to keep responses fast and within free-tier quotas
    const recentHistory = Array.isArray(history)
      ? history.slice(-6).map((msg: { role: string; text: string }) => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: String(msg.text) }],
        }))
      : [];

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash-lite',
      contents: [
        ...recentHistory,
        { role: 'user', parts: [{ text: message.trim() }] },
      ],
      config: {
        systemInstruction: SYSTEM_PROMPT,
        maxOutputTokens: 250,
        temperature: 0.7,
      },
    });

    const reply = response.text || "Sorry, I couldn't generate a response right now.";
    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Gemini API error:', error);
    return res.status(500).json({ error: 'Failed to get response from AI' });
  }
}