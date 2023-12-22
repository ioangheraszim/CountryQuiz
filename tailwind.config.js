/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'vietnam' : ['Be Vietnam Pro', 'sans-serif']
    },
    colors: {
      'gradientOne': '#E65895',
      'gradientTwo': '#BC6BE8',
      'skyblue': '#3E9FFF',
      'milkWhite': '#E2E4F3',
      'redOrange':'#DD524C',
      'gray': '#8B8EAB',
      'mustard': '#FFECC8',
      'backgroundOne': '#393f6e',
      'backgroundTwo': '#343964',
    },
    extend: {},
  },
  plugins: [],
}