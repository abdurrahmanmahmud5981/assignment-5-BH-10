import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*",
  ],
  theme: {
    extend: {
      colors:{
        // 06D001
        // B4F461
        primary:"#72FF63"
      }
    },
  },
  plugins: [daisyui],
}