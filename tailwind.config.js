import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#B4F461"
      }
    },
  },
  plugins: [daisyui],
}