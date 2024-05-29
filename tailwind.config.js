/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}',
  './components/**/*.{js,jsx}',
  './app/**/*.{js,jsx}',
  './src/**/*.{js,jsx}',],
  theme: {
    extend: {
      colors:{},
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
}

