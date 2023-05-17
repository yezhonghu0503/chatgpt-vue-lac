/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rg-chat': 'rgb(30,30,30)',
        'rg-chat-border': 'rgb(27,38,42)'
      }
    }
  },
  plugins: [],
}

