/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "hsl(var(--ac-400))",
      primaryHover: "hsl(var(--ac-400-hover))",
      background: "hsl(var(--bg-200))",
      white: "hsl(var(--white))",
    },

    extend: {
      fontFamily: {
        Lunasima: "'Lunasima', sans-serif",
        Tektur: "'Tektur', cursive",
      },
    },
  },
  plugins: [],
};
