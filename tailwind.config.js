/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#bff466",
        "primary-light": "#cbe1d5",
        secondary: "#124734",
        tertiary: "#edfc93",
        accent: "#ff8b11",
        accent2: "#94d6d5",
        dark: "#1A2421",
        light: "#f2f8f6",
        gray: "#c0c4c3",
        "gray-dark": "#5a5a5a",
        
      },
      fontFamily: {
        sans: ["Mona-Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
