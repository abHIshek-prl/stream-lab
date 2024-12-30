/** @type {import('tailwindcss').Config} */
import tailwindScrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
      Tillana: ['Tillana', 'sans-serif'],
      FingerPaint: ['Finger Paint', 'sans-serif'],
    },
  },
  plugins: [tailwindScrollbarHide],
};