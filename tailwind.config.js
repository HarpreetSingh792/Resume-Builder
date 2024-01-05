/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "arial":["Arial"],
        "calibri":["Calibri"]
      },
      blur:{
        "2":'2px'
      },
      height:{
        "50":"150px",
        "18":"70px"
      },
      width:{
        "50":"150px",
        "80rem":"80rem",
        "34vw":"34vw"
      },
      colors:{
        "dark-sea-green":"#69A99B",
        "whiteSmoke1":"#E5EBED"
      }
    },
    screens:{
      "sm":"320px",
      "md":"540px",
      "lg":"768",
      "xl":"1024",
      "2xl":"1280px",
      "3xl":"1536px"
    }
  },
  plugins: [],
}

