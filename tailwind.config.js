const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      sky: '#4E73DF',
      default: '#383838'
    },
    screens: {
      'xl': { 'max': '1024px' },
      'xlmin': { 'min': '1024px' },
      'lg': { 'max': '768px' },
      'md': { 'max': '370px' }
    }
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      })
    })
  ],
}
