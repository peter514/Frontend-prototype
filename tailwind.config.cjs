/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
         'primary':'#00df98'
      },
      
    },
    backgroundImage: {
        c1: "url('images/web 1.jpeg')",
        c2: "url('images/web 2.jpeg')",
      }
  },
  plugins: [],
}
