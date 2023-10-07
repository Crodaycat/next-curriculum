import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        400: '#2B2B2B',
        A400: '#FFB400',
        A700: '#2B2B2B',
        contrast: {
          400: '#FFF',
          A400: '#2B2B2B',
          A700: '#FFB400',
        },
      },
      secondary: {
        400: '#767676',
        contrast: {
          400: '#F0F0F6',
        },
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      spacing: {
        13: '3.25rem',
      },
    },
  },
  plugins: [],
};
export default config;
