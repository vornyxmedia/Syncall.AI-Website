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
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
