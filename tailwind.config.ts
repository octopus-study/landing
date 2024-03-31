import FlowBite from 'flowbite/plugin'
import type { Config } from 'tailwindcss'
import * as Animated from 'tailwindcss-animate'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Arial', 'sans-serif'],
    },
    letterSpacing: {
      widest: '1em',
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
    },
  },
  plugins: [Animated, FlowBite],
}
export default config
