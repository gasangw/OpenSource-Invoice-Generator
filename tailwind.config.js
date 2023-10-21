/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}

