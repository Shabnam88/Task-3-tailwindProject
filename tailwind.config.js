/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        vazir: "Vazirmatn",
      },
      borderRadius: {
        20: "20px",
      },
    },
  },
  plugins: [],
};
