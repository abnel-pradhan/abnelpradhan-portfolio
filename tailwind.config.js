/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F9FA',
        surface: '#FFFFFF',
        jet: '#111111',
        crimson: {
          DEFAULT: '#DC2626',
          dark: '#B91C1C',
          light: '#EF4444',
        },
        muted: '#6B7280',
        line: '#E5E7EB',
      },
      fontFamily: {
        display: ['Syne', '"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        brush: ['"Permanent Marker"', '"Rock Salt"', 'cursive'],
        mono: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gentleFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        float: 'gentleFloat 8s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
