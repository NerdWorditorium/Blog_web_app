/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html",
    "./node_modules/@themesberg/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    screens: {
      'xs': {
        min: '0px',
        max: '639px'
      },
      'sm': {
        min: '640px',
        max: '767px'
      },
      'md': {
        min: '768px',
        max: '1023px'
      },

      'lg': {
        min: '1024px',
        max: '1279px'
      },
      'xl': {
        min: '1280px',
        max: '1535px'
      },
      '2xl': {
        min: '1536px'
      },
      'tablet': {
        min: '768px'
      },
      'mobile':{
        min:'0px',
        max:'767px'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

