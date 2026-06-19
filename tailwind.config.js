/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        alpine: {
          50: '#f0f5fa',
          100: '#d9e6f2',
          200: '#b3cbe5',
          300: '#8aadd4',
          400: '#6390c3',
          500: '#3d72b2',
          600: '#2e5a8e',
          700: '#1f426a',
          800: '#112b46',
          900: '#0a1929',
          950: '#050d16',
        },
        glacier: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        icy: {
          DEFAULT: '#22d3ee',
          dark: '#06b6d4',
          light: '#67e8f9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite 1s',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'alpine-gradient': 'linear-gradient(135deg, #0a1929 0%, #112b46 50%, #1f426a 100%)',
        'glacier-gradient': 'linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0369a1 100%)',
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(34, 211, 238, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(10, 25, 41, 1) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
};
