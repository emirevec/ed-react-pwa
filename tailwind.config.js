/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        theme: "#84cc16",
        normal: "#ffffff",
        strong: "#14532D",
        dark: "",
        background: "#F0FDF4",
        darkbackground: ""
      }
    },
  },
  plugins: [],
}

