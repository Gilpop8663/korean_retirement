/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        answer: '#749F82',
        answerHover: '#425F57',
      },
      fontFamily: {
        blackHan: ["'Black Han Sans'", 'sans-serif'],
        blackOps: ["'Black Ops One'", "'cursive'"],
        nanumPen: ["'Nanum Pen Script'", "'cursive'"],
      },
      screens: {
        small: { min: '360px', max: '400px' },
        tall: { min: '401px', max: '639px' },
      },
    },
  },
  plugins: [],
};
