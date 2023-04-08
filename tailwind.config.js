const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        sans2: ['var(--font-inter2)', ...fontFamily.sans],
      },
      colors: {
        primaryColor: '#00ADB5',
        // secondaryColor: '#6c757d',
        bgColor: '#EEEEEE',
        textColor: '#393E46',
      },
    },
  },
  plugins: [],
}
