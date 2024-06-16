import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  fontFamily: {
    sans: ['Roboto', 'Arial', 'sans-serif'],
  },
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  letterSpacing: {
    widest: '1em',
  },
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontSize: {
        '1.5xl': '1.375rem', // 22px
      },
      screens: {
        'max-lg': { max: '1024px' },
      },
      colors: {
        primary: '#5865f2',
        accent: '#6E5FFE',
        warn: '#d70926',
        dark: '#202225',
        'dark-accent': '#2f3136',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
