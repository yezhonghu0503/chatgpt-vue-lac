/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rg-chat': 'rgb(11,27,54)',
        'rg-chat-border': 'rgb(250,250,250)'
      }
    }
  },
  plugins: [],
}

