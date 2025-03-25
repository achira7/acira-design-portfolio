/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "serif"], //font-family: "Inter", serif
      },

      colors: {
        background: "rgba(var(--background))",
        border: "rgba(var(--border))",
        primary: "rgba(var(--primary))",
        red: "rgba(var(--red))",
        gray: "rgba(var(--gray))",
        blue: "rgba(var(--blue))",
      },

    },
  },
  plugins: [],
}