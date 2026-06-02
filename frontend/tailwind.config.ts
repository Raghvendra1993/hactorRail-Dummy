import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#f5c800',
          orange: '#fbba00',
          dark: '#0a0a0a',
          'near-black': '#111111',
          'off-white': '#f8f8f8',
          teal: '#004d40',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.3em',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
