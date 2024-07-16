/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#331C4C",
        "base-main": "#F5F4F6",
        "base-white": "#FFFFFF",
        "base-black": "#333333",
        "base-grey": "#666666",
        "light-grey": "#999999",
        "indigo-red": "#92213D",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      screens: {
        tablet: "480px",
        laptop: "768px",
        desktop: "1024px",
      },
    },
  },
  plugins: [require("daisyui")],
};
