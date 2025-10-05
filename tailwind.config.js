/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: "#B08968", // 👈 your custom color
      },
    },
  },
  plugins: [],
};
