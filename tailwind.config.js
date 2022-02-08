const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '300px',
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
