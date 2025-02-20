/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Custom primary color
        secondary: "#9333EA", // Custom secondary color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Custom font
      },
      container: {
        center: true,
        padding: "5rem",
        margin: "5rem",
      },
    },
  },
  plugins: [],
};
