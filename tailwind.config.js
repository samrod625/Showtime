/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        oxfordBlue: "#002147",
        yaleBlue: "#0F4C81",
        lightSteelBlue: "#BFD7EA",
      },
      animation: {
        "draw-circle": "draw-circle 1s ease-out forwards",
        "draw-tick": "draw-tick 0.5s ease-out 1s forwards",
      },
      keyframes: {
        "draw-circle": {
          "0%": { strokeDasharray: "0, 157" },
          "100%": { strokeDasharray: "157, 157" },
        },
        "draw-tick": {
          "0%": { strokeDasharray: "0, 36" },
          "100%": { strokeDasharray: "36, 36" },
        },
      },
    },
  },
  plugins: [],
};
