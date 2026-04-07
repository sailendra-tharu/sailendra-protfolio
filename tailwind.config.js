/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
        serif: ['"Fraunces"', 'ui-serif', 'Georgia'],
      },
      colors: {
        ink: '#0b0f1a',
        midnight: '#0f172a',
        tide: '#0ea5e9',
        sun: '#f59e0b',
        mint: '#22c55e',
        shell: '#f8fafc',
        slate: '#94a3b8',
      },
      boxShadow: {
        glow: '0 0 40px rgba(14,165,233,0.35)',
      },
      backgroundImage: {
        noise:
          'radial-gradient(circle at 10% 20%, rgba(148,163,184,0.15) 0, rgba(148,163,184,0.05) 40%, transparent 70%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
