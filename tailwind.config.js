/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    colors: {
      "dark-purple":"#081a51",
      "light-white":"rgba(255,255,255,0.17)",
      transparent: 'transparent',
      current: 'currentColor',
      darkTheme: "#000000",
      darkBlend: "#000",
      lightBlend: "#fff",
      darkHover: "#1d2969",
      lightTheme: "#FFFFFF",
      iconColor: "#FFFF00",
      eliteBlue: "#082f49",
      businessName: "#0CF348",
      ...colors,
    },
    extend: {
      'animation': {
            'text':'text 5s ease infinite',
        },
        'keyframes': {
            'text': {
                '0%, 100%': {
                   'background-size':'200% 200%',
                    'background-position': 'left center'
                },
                '50%': {
                   'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            },
        }
    },
  },
  variants: {
    extend: { 
    },
  },
  plugins: [],
  
}

