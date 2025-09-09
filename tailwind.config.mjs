/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "360px",
        xs: "460px",
      },
      colors: {
        // Blue Theme
        // "navbar-primary": "#2557fc",
        // "navbar-secondary": "#67a2ea",

        // Purple Theme
        "navbar-primary": "#8927f9",
        "navbar-secondary": "#b968e8",
        "navbar-dark-bg": "#212031",
        "dark-secondary": "#191920",

        // Technology's colors
        "html-primary": "#E34F26",
        "css-primary": "#a667e5",
        "css-secondary": "#663399",
        "javascript-primary": "#f0db4f",
        "javascript-secondary": "#f0db4f",
        "typescript-primary": "#3178C6",
        "typescript-secondary": "#2967aa",
        "angular-primary": "#F2174D",
        "tailwind-primary": "#06B6D4",
        "tailwind-secondary": "#82d9e5",
        "bootstrap-primary": "#8b6bba",
        "bootstrap-secondary": "#ccadff",
        "firebase-primary": "#FFCD32",
        "astro-primary": "#ccd9ff",
        "php-primary": "#a6a9c4",
        "php-secondary": "#ccd3e8",
        "nodejs-primary": "#6da565",
        "ionic-primary": "#3880FF",
      },
    },
  },
  plugins: [],
};
