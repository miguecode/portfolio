/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Blue Theme
        // "navbar-primary": "#2557fc",
        // "navbar-secondary": "#67a2ea",

        // Purple Theme
        "navbar-primary": "#8927f9",
        "navbar-secondary": "#b968e8",
        "navbar-dark-bg": "#212031",

        // Technology's colors
        "html-primary": "#f06b51",
        "html-secondary": "#c95d36",
        "css-primary": "#0396DE",
        "css-secondary": "#b7ddf7",
        "javascript-primary": "#f0db4f",
        "javascript-secondary": "#f0db4f",
        "typescript-primary": "#5b92d1",
        "typescript-secondary": "#94c3fc",
        "angular-primary": "#F2174D",
        "tailwind-primary": "#38BDF8",
        "tailwind-secondary": "#85d5f7",
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
