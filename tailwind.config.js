/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',

  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        answer: '#749F82',
        answerHover: '#425F57',
        textColor: '#453115',
        ageColor: '#DAB786',

        describtionText: '#453115',

        minimumText: '#344C7A',
        properText: '#144561',
        luxuryText: '#42204E',
        stockText: '#595959',
        estateText: '#595959',
        businessText: '#595959',

        minimumSoft: '#9FAECB',
        properSoft: '#78B3D4',
        luxurySoft: '#B48BCD',
        stockSoft: '#595959',
        estateSoft: '#595959',
        businessSoft: '#595959',

        minimumRetry: '#3F4274',
        properRetry: '#144561',
        luxuryRetry: '#42204E',
        stockRetry: '#595959',
        estateRetry: '#595959',
        businessRetry: '#595959',

        normalBg: '#FDE9D1',
        minimumBg: '#6279A7',
        properBg: '#3C82AA',
        luxuryBg: '#6A539B',
        stockBg: '#21252E',
        estateBg: '#21252E',
        businessBg: '#21252E',
      },
      fontFamily: {
        bareunHipi: ['NanumBaReunHiPi', 'cursive'],
        jua: ['Jua', 'sans-serif'],
      },
      screens: {
        small: { min: '360px', max: '400px' },
        tall: { min: '401px', max: '639px' },
        long: { raw: '(min-height: 800px)' },
      },
    },
  },

  plugins: [],
};
