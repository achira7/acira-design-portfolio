/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["League Gothic", "serif"], //"League Gothic", serif;
      },

      colors: {
        // background: "rgba(var(--background))",
        // border: "rgba(var(--border))",

      },

    },
  },
  plugins: [],
}