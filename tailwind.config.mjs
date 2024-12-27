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
        "html-secondary": "#a04231",
        "css-primary": "#0396DE",
        "css-secondary": "#c9d1e2",
        "javascript-primary": "#f0db4f",
        "javascript-secondary": "#f0db4f",
        "typescript-primary": "#5b92d1",
        "typescript-secondary": "#c9d8e0",
        "angular-primary": "#ec3c88",
        "angular-secondary": "#42001c",
        "tailwind-primary": "#38BDF8",
        "tailwind-secondary": "#85d5f7",
        "bootstrap-primary": "#8b6bba",
        "bootstrap-secondary": "#c9bae0",
        "firebase-primary": "#FFCD32",
        "firebase-secondary": "#915900",
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
