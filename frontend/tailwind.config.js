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
        secondary: ["Barlow Semi Condensed", "serif"],
        body: ["Barlow", "serif"],
      },

      colors: {
        background: "rgba(var(--background))",
        border: "rgba(var(--border))",
        blue: "rgba(var(--blue))",
        red: "rgba(var(--red))",
        gray: "rgba(var(--gray))",


      },

    },
  },
  plugins: [],
}