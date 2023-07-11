/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': '4rem auto 4rem',
      }
    },
  },
  daisyui: {
    theme: true
  },
  plugins: [require("daisyui")],
}

