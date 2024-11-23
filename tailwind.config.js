/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        show: "show 1s forwards",
      },
      keyframes: {
        show: {
          "0%": { height: "0px" },
          "100%": { height: "25px" },
        },
      },
    },
  },
  plugins: [],
};
