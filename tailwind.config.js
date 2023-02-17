/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#D7E9B9",

          secondary: "#FFFBAC",

          accent: "#3A4256",

          neutral: "#1C1820",

          "base-100": "#F5F5F5",

          info: "#FFD495",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
