/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        tm :{
          "primary" : "#41106B",
          "second" : "#502971",
          "third" : "#643073",
          "fourth" : "#F47180"
        }
      }
    },
  },
  plugins: [],
}

