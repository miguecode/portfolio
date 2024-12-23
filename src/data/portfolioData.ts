// Website data
export const metaData = {
  title: "Miguel Ángel Gil - Desarrollador Frontend",
  description:
    "Portfolio de Miguel Ángel Gil, Desarrollador Frontend con formación universitaria en programación y experiencia en tecnologías web modernas.",
};

// Person data
export const data = {
  title: "Hola, soy Miguel",
  subTitle:
    "Desarrollador Frontend con formación Universitaria en Programación y conocimientos en tecnologías web modernas.",
  perfilImage: "../../src/assets/astro.svg",
  badge: "¡Disponible para trabajar!",
  mail: "junmigue7@gmail.com",
  cvPdf: "#",
  linkedinLink: "https://www.linkedin.com/in/miguel-ángel-gil-989237244",
  githubLink: "https://github.com/Leumig",
};

// Technology's icons

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
import firebase from "../icons/technologys/Firebase.astro";
import sql from "../icons/technologys/SQL.astro";
import php from "../icons/technologys/PHP.astro";
import nodejs from "../icons/technologys/Nodejs.astro";
import ionic from "../icons/technologys/Ionic.astro";

// Technoloy's data (for skills and projects)

// First group of technology's
export const technologysDataOne = [
  {
    name: "HTML",
    class:
      "bg-orange-200 border-transparent text-html-secondary dark:text-html-primary",
    icon: html,
  },
  {
    name: "CSS",
    class:
      "bg-css-secondary border-transparent text-blue-900 dark:text-css-primary",
    icon: css,
  },
  {
    name: "JavaScript",
    class:
      "text-gray-800 bg-javascript-primary border-transparent text-black dark:text-javascript-primary",
    icon: javascript,
  },
  {
    name: "TypeScript",
    class:
      "bg-typescript-secondary border-transparent text-blue-900 dark:text-typescript-primary",
    icon: typescript,
  },
  {
    name: "Angular",
    class:
      "bg-black/10 border-transparent text-red-700 dark:text-angular-primary",
    icon: angular,
  },
  {
    name: "Astro",
    class: "bg-astro-primary border-transparent text-black dark:text-white",
    icon: astro,
  },
  {
    name: "TailwindCSS",
    class:
      "bg-tailwind-secondary border-transparent text-gray-800 dark:text-tailwind-primary",
    icon: tailwindcss,
  },
  {
    name: "Bootstrap",
    class:
      "bg-bootstrap-secondary border-transparent text-purple-900 dark:text-bootstrap-primary",
    icon: bootstrap,
  },
];

// Second group of technology's
export const technologysDataTwo = [
  {
    name: "Git",
    class: "bg-black/10 border-transparent text-dark dark:text-white",
    icon: git,
  },
  {
    name: "Firebase",
    class:
      "bg-yellow-200 border-transparent text-firebase-secondary dark:text-firebase-primary",
    icon: firebase,
  },
  {
    name: "SQL",
    class: "bg-orange-300 border-transparent text-black dark:text-orange-500",
    icon: sql,
  },
];

// Third group of technology's
export const technologysDataThree = [
  {
    name: "PHP",
    class:
      "bg-php-secondary border-transparent text-blue-900 dark:text-php-primary",
    icon: php,
  },
  {
    name: "Node.js",
    class: "bg-green-200 border-transparent text-green-900 dark:text-nodejs-primary",
    icon: nodejs,
  },
  {
    name: "Ionic",
    class: "bg-black/10 border-transparent dark:text-white",
    icon: ionic,
  },
];

// Projects data
export const projectsData = [
  {
    title: "Proyecto 1",
    description: "Esta es la descripción del proyecto 1",
    link: "#",
    github: "#",
    image: "#",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    title: "Proyecto 2",
    description: "Esta es la descripción del proyecto 2",
    link: "#",
    github: "#",
    image: "#",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    title: "Proyecto 3",
    description: "Esta es la descripción del proyecto 3",
    link: "#",
    github: "#",
    image: "#",
    tags: ["tag1", "tag2", "tag3"],
  },
];
