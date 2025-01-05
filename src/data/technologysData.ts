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
export const technologysDataOne = [
  {
    name: "HTML",
    class:
      "bg-orange-200 text-orange-600 dark:text-html-primary",
    icon: html,
  },
  {
    name: "CSS",
    class:
      "bg-css-secondary text-blue-600 dark:text-css-primary",
    icon: css,
  },
  {
    name: "JavaScript",
    class:
      "text-gray-800 bg-javascript-primary text-black dark:text-javascript-primary",
    icon: javascript,
  },
  {
    name: "TypeScript",
    class:
      "bg-typescript-secondary text-blue-900 dark:text-typescript-primary",
    icon: typescript,
  },
  {
    name: "Angular",
    class:
      "bg-gray-200/90 text-angular-primary dark:text-angular-primary",
    icon: angular,
  },
  {
    name: "Astro",
    class: "bg-astro-primary text-black dark:text-white",
    icon: astro,
  },
  {
    name: "Tailwind CSS",
    class:
      "bg-tailwind-secondary text-gray-800 dark:text-tailwind-primary",
    icon: tailwindcss,
  },
  {
    name: "Bootstrap",
    class:
      "bg-bootstrap-secondary text-purple-900 dark:text-bootstrap-primary",
    icon: bootstrap,
  },
];

// Second group of technology's
export const technologysDataTwo = [
  {
    name: "Git",
    class: "bg-gray-200/90 text-dark dark:text-white",
    icon: git,
  },
  {
    name: "SQL",
    class: "bg-orange-400/80 text-black dark:text-orange-500",
    icon: sql,
  },
  {
    name: "Firebase",
    class:
      "bg-yellow-300 text-firebase-secondary dark:text-firebase-primary",
    icon: firebase,
  },
];

// Third group of technology's
export const technologysDataThree = [
  {
    name: "PHP",
    class:
      "bg-php-secondary text-blue-900 dark:text-php-primary",
    icon: php,
  },
  {
    name: "Node.js",
    class: "bg-green-400 text-black dark:text-nodejs-primary",
    icon: nodejs,
  },
  {
    name: "Ionic",
    class: "bg-gray-200/90 dark:text-white",
    icon: ionic,
  },
];