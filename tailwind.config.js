/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        syncall: {
          950: '#070312',
          900: '#0d0722',
          850: '#120a2e',
          800: '#180e3d',
          700: '#2b1a6b',
          600: '#4c2889',
          500: '#7c3aed',
          400: '#9333ea',
          300: '#a855f7',
          200: '#c084fc',
          100: '#e9d5ff',
          50: '#faf5ff',
          cyan: '#06b6d4',
          'cyan-bright': '#22d3ee',
          indigo: '#6366f1',
          slate: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'purple-glow': '0 10px 40px -10px rgba(124, 58, 237, 0.15)',
        'purple-glow-lg': '0 20px 50px -15px rgba(139, 92, 246, 0.22)',
        'cyan-glow': '0 10px 35px -8px rgba(6, 182, 212, 0.18)',
        'card-light': '0 4px 20px -2px rgba(124, 58, 237, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'orbit-slow': 'orbit 40s linear infinite',
        'orbit-reverse': 'orbit-rev 50s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'marquee': 'marquee 60s linear infinite',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'orbit-rev': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
