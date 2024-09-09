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
      },
      white: 'var(--white)',
      font: {
        main: 'var(--main)',
        contrast: 'var(--contrast)',
        secondary: 'var(--secondary)',
      },
    },
    extend: {
      boxShadow: {
        button: 'var(--shadow-button)',
      },
    },
  },

  plugins: [],
}
export default config
