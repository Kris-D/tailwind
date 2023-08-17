/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',     // Example of using the tailwindcss/colors module
        secondary:{
         100: '#E2E2D5',
         200: '#888883',
        },
        thrid: "#89984c", 
      },
      fontFamily: {
        kris: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}