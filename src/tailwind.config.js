/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/css/*.css',
    './src/**/*.{html,js}',
    './src/index.html',
    "./assets/*.{png,jpg,ttf,svg}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Inter"', 'Helvetica', 'Arial', 'sans-serif'],
        'pixel': ['"Minecraftia"']
      },

      colors: {
        'wintergreen': '#55917F',
        'olive': '#36382E',
        'dream': '#6A8E7F',
        'platinum': '#E4E2DC',
        'snow': '#F5F5F5',
        'milk': '#F9E9E0',
        'matcha': '#5C913B'
      },
    },
  },
  plugins: [],
}
