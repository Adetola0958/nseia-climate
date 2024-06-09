/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./Assets/carousel-2.jpg')"
      },
      fontFamily: {
        lexend: ['"Lexend Deca", sans-serif;', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        "deepgreen": '#082214'
      }
    },
  },
  plugins: [],
}

