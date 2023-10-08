/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'ins': ['Instrument Sans', 'sans-serif'],
      'ser': ['Instrument Serif', 'sans-serif'],
    },
    extend: {
      colors: {
        'card': '#0c0f1a'
      }, 
      animationDelay: {
        '200': '200ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
}