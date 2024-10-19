/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5A60",
        primaryDark: "#532526",
        placeholder: "#808080",
      },
    },
  },
  plugins: [],
};
