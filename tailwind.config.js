module.exports = {
  content: [
    './index.html',
    './*.{html,js}',
    './**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
          'white': '#FBFBFB',
          'paynes-gray': '#606871ff',
          'mantis': {
              light: '#91CA95ff',
              DEFAULT: '#7EC082ff'
          },
          'matcha': {
              ceremonial: '#77B255',
              culinary: '#5C913B',
              DEFAULT: '#7AB692'
          },
          'latte': '#F6F3E2ff',
          'honeydew': {
              light: '#DBE8D9ff',
              // DEFAULT: '#DBF6C8'
              DEFAULT: '#E1EFE2ff'
          }
      },
      fontFamily: {
          sans: ['Inter', 'sans-serif'],
          heading: ['Poppins', 'Inter', 'sans-serif'],
          mono: ['Roboto Mono', 'monospace']
      }
    }
}
}