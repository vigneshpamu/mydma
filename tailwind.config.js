/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
    },
    screens: {
      '3xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      '2xl': { max: '1428px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1045px' },
      // => @media (max-width: 1023px) { ... }

      '2md': { max: '853px' },
      // => @media (max-width: 767px) { ... }

      md: { max: '500px' },
      // => @media (max-width: 500px) { ... }

      sm: { max: '640px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
}
