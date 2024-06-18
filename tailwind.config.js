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
          '1': '#febaba',
        },
        'secondary': {
          DEFAULT: '#c5a880',
        },
        'gold' : {
          DEFAULT: '#d4af37',
        }, 
        'dark' : {
          '1': '#b4b4b4',
          '2': '#787878',
          '3': '#616161',
          '4': '#3c3c3c',
        },
        'light' : {
          '1': '#f1f3f6'
        }
        
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
  plugins: [],
};
