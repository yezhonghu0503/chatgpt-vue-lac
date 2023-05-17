/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rg-chat': '#212223',
        'rg-chat-border': '#151717'
      }
    }
  },
  plugins: [],
}

