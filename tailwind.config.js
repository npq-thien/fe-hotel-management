/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}',],
  theme: {
    base: {
      fontFamily: ['Inter', 'sans-serif'],
    },
    extend: {
      colors:{},
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
}

