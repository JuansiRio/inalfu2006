/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        inalfu: {
          DEFAULT: "#1B7C41",
          fondo: "#FBF9F1",
          texto: "#212121",
          principal: "#1B7C41",
          oscuro: "#11522A",
          50: "#f4faf6",
          100: "#e8f2eb",
          200: "#d0e6d6",
          300: "#9bc4a9",
          600: "#1B7C41",
          700: "#166a38",
          800: "#11522A",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
