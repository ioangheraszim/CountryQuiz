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
    color: {
      gradient: 'linear-gradient(#E65895, #BC6BE8)',
      skyblue: '#3E9FFF',
      backgroundOne: '#393F6E',
      backgroundTwo: '#343964',
      milkWhite: '#E2E4F3',
      redOrange:'#DD524C',
      gray: '#8B8EAB',
      mustard: '#FFECC8'
    },
    extend: {},
  },
  plugins: [],
}