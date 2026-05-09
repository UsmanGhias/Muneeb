/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a14',
        'bg-secondary': '#12121f',
        'bg-card': '#1a1a2e',
        'bg-card2': '#16213e',
        'accent': '#6c63ff',
        'accent2': '#00d4ff',
        'text-primary': '#e8e8f0',
        'text-secondary': '#a0a0c0',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #6c63ff, #00d4ff)',
        'gradient-card': 'linear-gradient(135deg, rgba(108,99,255,0.1), rgba(0,212,255,0.05))',
      },
      boxShadow: {
        'glow-accent': '0 0 20px rgba(108, 99, 255, 0.4)',
        'glow-accent2': '0 0 20px rgba(0, 212, 255, 0.4)',
        'glow-strong': '0 0 40px rgba(108, 99, 255, 0.6)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'float-delay2': 'float 6s ease-in-out 4s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(108, 99, 255, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(108, 99, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};
