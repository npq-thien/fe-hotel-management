/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        'cream' : {
          DEFAULT: '#eeeeea',
        }, 
        'primary': {
          DEFAULT: '#FA9191',
          'default': '#FA9191',
          '1': '#febaba',
        },
        'secondary': {
          DEFAULT: '#fef65b',
          'default': '#fef65b',
        },
        'gold' : {
          DEFAULT: '#d4af37',
        }, 
        
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        df: "0px",
        sm: "640px",
        md: "768px",
        // other breakpoints...
      },
      display: ["responsive"],
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
