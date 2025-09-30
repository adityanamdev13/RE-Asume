/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f0eeeb",
        btn:"#200e32",
        footer:"#200e32",
        secondary:"#e8e1da"
      },
    },
  },
  plugins: [],
};
