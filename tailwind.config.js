/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./Assets/carousel-2.jpg')"
      },
      fontFamily: {
        lexend: ['Roboto', 'sans-serif']
      },
      colors: {
        "deepgreen": '#082214'
      }
    },
  },
  plugins: [],
}

