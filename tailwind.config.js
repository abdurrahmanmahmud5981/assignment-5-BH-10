import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*",
  ],
  theme: {
    extend: {
      colors:{
        
        primary:"#72FF63"
      }
    },
  },
  plugins: [daisyui],
}