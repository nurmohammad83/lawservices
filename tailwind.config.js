/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1273CA",
        secondary: "#00f6ff",
        light:"#13ecea",
        dark:"#37c6c8",
        medium:"#28b6d7",
        dimHeading:"rgb(39 47 52 / 99%)",
        boxshadow:"rgba(50, 49, 100, 0.15)",
        hovercoloer:"#f6f6ff",
        dimBlack: "rgb(38 40 42 / 78%)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("daisyui")]
};
