/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      screens:{
        'sm': '480px',
        'md': '820px',
        'lg': '960px',
        'xl': '1440px'
      },
      colors:{
        'gradient': 'linear-gradient(to right, #3b82f6, #7c3aed)',
        'lightBlue': '#3b82f6',
        'purple':'#eeeeee'
      }
    },
  },
  plugins: [],
}

