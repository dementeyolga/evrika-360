import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      background: 'var(--background)',
      'background-transparent': 'var(--background-transparent)',
      'background-transparent-darker': 'var(--background-transparent-darker)',
      foreground: 'var(--foreground)',
      green: {
        200: 'var(--green-200)',
        500: 'var(--green-500)',
      },
      sky: {
        200: 'var(--sky-200)',
        500: 'var(--sky-500)',
      },
      orange: {
        200: 'var(--orange-200)',
        500: 'var(--orange-500)',
      },
      slate: {
        200: 'var(--slate-200)',
        500: 'var(--slate-500)',
        800: 'var(--slate-800)',
        pale: 'var(--slate-pale)',
      },
      white: 'var(--white)',
      error: {
        200: 'var(--error-200)',
        500: 'var(--error-500)',
      },
      border: 'var(--border)',
      font: {
        main: 'var(--font-main)',
        contrast: 'var(--font-contrast)',
        secondary: 'var(--font-secondary)',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-dmsans)'],
      },
      boxShadow: {
        button: 'var(--shadow-button)',
      },
      borderRadius: {
        section: 'var(--radius-section)',
        'section-mobile': 'var(--radius-section-mobile)',
        'section-md': 'var(--radius-section-md)',
        'section-sm': 'var(--radius-section-sm)',
        block: 'var(--radius-block)',
        'block-sm': 'var(--radius-block-sm)',
        'block-mobile': 'var(--radius-block-mobile)',
      },
      maxWidth: {
        '7xl': '1240px',
      },
      padding: {
        '15': '3.75rem',
        '7.5': '1.875rem',
        '21': '5.25rem',
        '37px': '37px',
        '51px': '51px',
        '77px': '77px',
        '226px': '226px',
      },
      margin: {
        '42': '10.5rem',
        '25': '6.25rem',
      },
      gap: {
        block: '110px',
        'block-mobile': '84px',
      },
      lineHeight: {
        '7.5': '1.875rem',
      },
      gridTemplateColumns: {
        'slider-case-top': '40.9% 54.54%',
        'slider-case-bottom': '54.54% 40.9%',
      },
      animation: {
        'fade-out': 'fade 0.2s ease-in-out forwards',
        'fade-in': 'fade 0.2s ease-in-out reverse forwards',
      },
      keyframes: {
        fade: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
    },
  },

  plugins: [],
}
export default config
