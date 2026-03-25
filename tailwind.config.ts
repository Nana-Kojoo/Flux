import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0A0A0A',
          white: '#FAFAFA',
          gray: {
            100: '#F4F4F4',
            200: '#E8E8E8',
            400: '#9A9A9A',
            600: '#5A5A5A',
            800: '#2A2A2A',
          },
        },
      },
      fontFamily: {
        display: ['var(--font-syne)'],
        body: ['var(--font-manrope)'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
