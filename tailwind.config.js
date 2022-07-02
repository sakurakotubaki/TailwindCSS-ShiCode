/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#eff8ff",
          300: "390cdf4",
          500: "#4299e1",
        }
      }
    },
  },
  plugins: [],
}
