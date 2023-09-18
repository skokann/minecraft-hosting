/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        stapel: "Stapel",
        stapelLight: "Stapell",
      },
      colors: {
        uran: "#0dd644",
      },
    },
  },
  plugins: [],
};
