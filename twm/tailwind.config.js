/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-primary': '#2EC4B6',
        'my-secondary': '#71AEFB',
        'my-accent': '#FCBF49',
        'my-accent-dark': '#FF9F1C',
        'my-kendal': '#2EC4B6',
        'my-eny': '#156ACD',
        'my-ella': '#975BA3',
      },
      fontFamily: {
        'my-h': ['Acme', 'sans-serif'],
        'my-p': ['Life Savers', 'cursive'],
      }
    },
  },
  plugins: [],
}
