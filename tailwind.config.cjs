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
   backgroundImage:{
      h1: "url('images/web 1.jpeg')",
      h2: "url('images/web 2.jpeg')",
      h3: "url('images/web 3.jpeg')",
      h4: "url('images/web 4.jpeg')",
      h5: "url('images/web 6.jpeg')",
      h6: "url('images/web 5.jpeg')",
      
    },
  },
  plugins: [],
}
