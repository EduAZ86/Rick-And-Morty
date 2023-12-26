import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow:{
        'press-button': 'inset 2px 2px 6px #b5bfc6',
        'dark-press-button': 'inset 2px 2px 6px #000000',
        'button':'2px 2px 6px #b5bfc6',
        'dark-button':'2px 2px 6px #000000',
        
        'current-button':'inset 1px 1px 3px #b5bfc6',
        'dark-current-button':'inset 1px 1px 3px  #000000',

        'bar':'1px 0px 14px #b5bfc6',
        'dark-bar':'1px 0px 14px #000000',

        'card':'5px 5px 8px #b5bfc6',
        'dark-card':'5px 5px 8px #000000',

        'subMenu':'inset 1px 1px 1px #b5bfc6',
        'dark-subMenu':'inset 1px 1px 1px  #000000'
        
      },
      colors:{
        light:{
          'background':'#FFFFFF',
          'primary':'#FF6706',
          'secundary':'#0048F5',
          'shadow':'#b5bfc6',
          'text':'#000000',
          'secundary-text':'#7C808E',
          'error':'#FF4040'
        },
        dark:{
          'background':'#01204C',
          'primary':'#2CA0E2',
          'secundary':'#F267EB',
          'shadow':'#b5bfc6',
          'text':'#FFFFFF',
          'secundary-text':'#7C808E',
          'error':'#FF4040'
        }
      },
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
      },
      fontSize:{
        'xxs':'0.6rem',
        '3xs':'0.5rem',
        '4xs':'0.4rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
