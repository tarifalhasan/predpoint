/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        roboto_slap: ['var(--font-roboto_slap)'],
        outfit: ['var(--font-outfit)'],
        roboto_serif: ['var(--font-roboto_serif)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        yellow: '#FFEB3B',
        sky: '#87D6FA',
        green: '#5EC16E',
        softDark: 'rgba(46, 2, 73, 0.30)',
        buttonBorder: 'rgba(46, 2, 73, 0.30)',
      },
    },
  },
  plugins: [],
};
