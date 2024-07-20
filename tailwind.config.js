/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#331C4C",
        "base-main": "#F5F4F6",
        "base-secondary": "#CCC6D2",
        "base-white": "#FFFFFF",
        "base-black": "#333333",
        "base-grey": "#666666",
        "light-grey": "#999999",
        "indigo-red": "#92213D",
        brownish: "#92213D",
        "pink-overlay": "#E4C7CF",
        error: "#ED1C24",
        success: "#35B85B",
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
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(2)" },
        },
      },
      animation: {
        pulse: "pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
