/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Sans-serif']
      },
      colors: {
       'taupe-gray': '#F4F3F3',
       'blue-950': '#051A63'
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),require('flowbite/plugin')],
}
