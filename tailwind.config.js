/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    screens: {
      '3xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      '2xl': { max: '1428px' },
      // => @media (max-width: 1535px) { ... }

      '1xl': { max: '1388px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1045px' },
      // => @media (max-width: 1023px) { ... }

      '2md': { max: '868px' },
      // => @media (max-width: 767px) { ... }

      md: { max: '670px' },
      // => @media (max-width: 500px) { ... }

      sm: { max: '580px' },
      // => @media (max-width: 639px) { ... }

      mxsm: { max: '508px' },
      // => @media (max-width: 639px) { ... }

      xsm: { max: '460px' },
      // => @media (max-width: 639px) { ... }

      '2xsm': { max: '410px' },
      // => @media (max-width: 639px) { ... }

      '3xsm': { max: '395px' },
      // => @media (max-width: 639px) { ... }

      '4xsm': { max: '360px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        customColor: '#B48348', // Replace with your custom color code
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      rotate: {
        135: '135deg',
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
}
