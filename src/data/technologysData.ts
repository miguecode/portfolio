// Technoloy's data (for Skills and Projects)

// Technology's icons
import html from "../icons/technologys/HTML.astro";
import css from "../icons/technologys/CSS.astro";
import javascript from "../icons/technologys/JavaScript.astro";
import typescript from "../icons/technologys/TypeScript.astro";
import angular from "../icons/technologys/Angular.astro";
import astro from "../icons/technologys/AstroIcon.astro";
import tailwindcss from "../icons/technologys/TailwindCSS.astro";
import bootstrap from "../icons/technologys/Bootstrap.astro";

// Other technology's icons
import git from "../icons/technologys/Git.astro";
import sql from "../icons/technologys/SQL.astro";
import firebase from "../icons/technologys/Firebase.astro";
import php from "../icons/technologys/PHP.astro";
import nodejs from "../icons/technologys/Nodejs.astro";
import ionic from "../icons/technologys/Ionic.astro";

// First group of technology's
export const technologysDataOne = {
  HTML: {
    name: "HTML",
    class: "bg-orange-200/60 text-orange-600 dark:text-html-primary",
    icon: html,
  },
  CSS: {
    name: "CSS",
    class: "bg-purple-300 text-css-secondary dark:text-css-primary",
    icon: css,
  },
  JavaScript: {
    name: "JavaScript",
    class:
      "text-gray-800 bg-javascript-primary text-black dark:text-javascript-primary",
    icon: javascript,
  },
  TypeScript: {
    name: "TypeScript",
    class: "bg-blue-200/60 text-typescript-secondary dark:text-typescript-primary",
    icon: typescript,
  },
  Angular: {
    name: "Angular",
    class: "bg-red-300/30 text-angular-primary dark:text-angular-primary",
    icon: angular,
  },
  Astro: {
    name: "Astro",
    class: "bg-astro-primary text-black dark:text-white",
    icon: astro,
  },
  TailwindCSS: {
    name: "Tailwind CSS",
    class: "bg-tailwind-secondary text-gray-800 dark:text-tailwind-primary",
    icon: tailwindcss,
  },
  Bootstrap: {
    name: "Bootstrap",
    class: "bg-bootstrap-secondary text-purple-900 dark:text-bootstrap-primary",
    icon: bootstrap,
  },
};

// Second group of technology's
export const technologysDataTwo = {
  Git: {
    name: "Git",
    class: "bg-gray-300/40 text-dark dark:text-white",
    icon: git,
  },
  SQL: {
    name: "SQL",
    class: "bg-gray-600 text-gray-100 dark:text-gray-100",
    icon: sql,
  },
  Firebase: {
    name: "Firebase",
    class: "bg-yellow-300 text-yellow-900 dark:text-firebase-primary",
    icon: firebase,
  },
};

// Third group of technology's
export const technologysDataThree = {
  PHP: {
    name: "PHP",
    class: "bg-php-secondary text-blue-900 dark:text-php-primary",
    icon: php,
  },
  Node: {
    name: "Node.js",
    class: "bg-green-400 text-black dark:text-nodejs-primary",
    icon: nodejs,
  },
  Ionic: {
    name: "Ionic",
    class: "bg-gray-300/40 dark:text-white",
    icon: ionic,
  },
};
