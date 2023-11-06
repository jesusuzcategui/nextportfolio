/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'dark',
  theme: {
    colors: {
      "primary": "#1E1B30",
      "secondary": "#5AFF15",
      "tertiary": "#D81E5B",
      "light-black": "#171717",
      "light-white": "#E7E7E7",
      "white": "#fff",
      "black": "#000"
    },
    extend: {},
  },
  plugins: [],
}

