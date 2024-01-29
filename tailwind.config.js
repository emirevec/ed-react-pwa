/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        theme: "#4ade80",
        normal: "#166534",
        strong: "#14532D",
        dark: "",
        background: "#F0FDF4",
        darkbackground: ""
      }
    },
  },
  plugins: [],
}

