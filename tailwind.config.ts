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
        A100: '#FFF',
        A400: '#FFB400',
        A700: '#2B2B2B',
        contrast: {
          400: '#FFF',
          A100: '#FFB400',
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
      success: {
        400: '#7EB942',
      },
      danger: {
        400: '#dc2626',
        constrast: {
          400: '#FFFFFF',
        },
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      fontSize: {
        xxs: ['0.625rem', '0.75rem'],
      },
      spacing: {
        '4.5': '1.125rem',
        13: '3.25rem',
      },
      height: {
        svh: '100svh',
      },
    },
  },
  plugins: [],
};
export default config;
