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
import thingsboard from "../icons/technologys/ThingsBoard.astro";
import figma from "../icons/technologys/Figma.astro";

// Other technology's icons
import sql from "../icons/technologys/SQL.astro";
import firebase from "../icons/technologys/Firebase.astro";
import php from "../icons/technologys/PHP.astro";
import nodejs from "../icons/technologys/Nodejs.astro";
import postman from "../icons/technologys/Postman.astro";
import net from "../icons/technologys/Net.astro";
import ionic from "../icons/technologys/Ionic.astro";
import git from "../icons/technologys/Git.astro";
import react from "../icons/technologys/React.astro";
import jira from "../icons/technologys/Jira.astro";
import confluence from "../icons/technologys/Confluence.astro";
import slack from "../icons/technologys/Slack.astro";

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
  ThingsBoard: {
    name: "ThingsBoard",
    class: "bg-blue-100 text-thingsboard-primary dark:text-thingsboard-secondary",
    icon: thingsboard,
  },
  Figma: {
    name: "Figma",
    class: "bg-orange-200 text-figma-primary dark:text-figma-primary",
    icon: figma,
  },
};

// Second group of technology's
export const technologysDataTwo = {
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
  Net: {
    name: "C#",
    class: "bg-net-primary/80 text-purple-100 dark:text-net-secondary",
    icon: net,
  },
  Postman: {
    name: "Postman",
    class: "bg-gray-300/30 text-postman-primary dark:text-postman-primary",
    icon: postman,
  },
  Ionic: {
    name: "Ionic",
    class: "bg-gray-300/30 dark:text-white",
    icon: ionic,
  },
  Git: {
    name: "Git",
    class: "bg-gray-300/30 text-black dark:text-white",
    icon: git,
  },
};

// Other group of technology's (for Experience section or other)
export const otherTechnologysData = {
  React: {
    name: "React",
    class: "bg-react-third text-react-secondary dark:text-react-primary",
    icon: react,
  },
  Jira: {
    name: "Jira",
    class: "bg-jira-secondary text-white dark:text-jira-primary",
    icon: jira,
  },
  Confluence: {
    name: "Confluence",
    class: "bg-jira-secondary text-white dark:text-jira-primary",
    icon: confluence,
  },
  Slack: {
    name: "Slack",
    class: "bg-slack-primary text-white dark:text-slack-secondary",
    icon: slack,
  },
};