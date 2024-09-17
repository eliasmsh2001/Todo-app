/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        backGround: "hsl(var(--color-bg))",
        mainText : "hsl(var(--main-text))",
        text: "hsl(var(--secondary-text))",
        contentBg: "hsl(var(--secondary-background))" ,
        border: "hsl(var(--color-border))",
        title: "hsl(var(--color-title))"
      }
    },
  },
  plugins: [],
}