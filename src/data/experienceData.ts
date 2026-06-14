// Icons
import SenzaryIcon from "../icons/companies/Senzary.astro";

// Interfaces
export interface Job {
  company: {
    name: string;
    description: string;
    ubication: string;
    icon: any;
    bgColorIcon: string;
    darkBgColorIcon: string;
    borderColorIcon: string;
    darkBorderColorIcon: string;
  };
  date: {
    start: string;
    end: string;
  };
  position: string;
  description: string;
  mode: string;
  language: string,
  responsabilitiesAndTasks: string[];
  skillsAndTools: string[];
  softSkills: string[];
}

// Experience data
export const experienceData: Job[] = [
  {
    company: {
      name: "Senzary LLC.",
      description: "Empresa internacional de IoT",
      ubication: "Florida, Estados Unidos",
      icon: SenzaryIcon,
      bgColorIcon: "bg-gray-100",
      darkBgColorIcon: "dark:bg-purple-100",
      borderColorIcon: "border-gray-300",
      darkBorderColorIcon: "dark:border-purple-100",
    },
    date: {
      start: "Noviembre de 2025",
      end: "Presente",
    },
    position: "Frontend Developer & IoT Platform Specialist",
    description:
      "Formo parte del equipo de desarrollo de Senzary, una empresa IoT internacional orientada a soluciones industriales y monitoreo de múltiples dispositivos en tiempo real. Trabajo en un entorno remoto y colaborativo participando en el diseño, desarrollo y optimización de dashboards operativos utilizados por clientes importantes como ENI, AES, IAC o P&G.",
    mode: "En remoto — Jornada Completa",
    language: "Inglés",
    responsabilitiesAndTasks: [
      "Desarrollo de dashboards interactivos, operativos y accesibles, enfocados en la visualización de datos IoT en tiempo real.",
      "Creación y personalización de widgets reutilizables, con foco en buenas prácticas de UX/UI, accesibilidad y diseño responsive.",
      "Trabajo con datos críticos provenientes de sensores industriales; alarmas, gases H2S, temperatura, tracking de personas, puertas de aeropuertos, maquinaria industrial, cargadores frontales y más.",
      "Integración y configuración de entidades IoT en la plataforma ThingsBoard, incluyendo soporte en la asignación y administración de dispositivos, rule chains, alarmas, notificaciones y arquitectura de clientes - activos.",
      "Participación en ajustes de último momento bajo presión, previos a revisiones y entregas a clientes.",
      "Entregas en producción a clientes industriales, con foco en estabilidad, rendimiento y experiencia de usuario.",
      "Documentación técnica y comunicación diaria en inglés, tanto escrita como en llamada.",
      "Soporte, asistencia y training directo a múltiples clientes.",
    ],
    skillsAndTools: [
      "Angular",
      "TypeScript",
      "HTML",
      "CSS",
      "JavaScript",
      "ThingsBoard",
      "ThingPark",
      "Git",
      "Slack",
      "Jira",
      "Confluence",
      "Figma",
      "HERE Maps API",
      "Chart.js",
      "Vercel"
    ],
    softSkills: [
      "Trabajo y comunicación con equipo internacional (remoto y en inglés)",
      "Proactividad, responsabilidad y compromiso en entornos de alta exigencia",
      "Documentación y seguimiento diario de tareas realizadas",
    ],
  },
  /* {
    company: {
      name: "Empresa falsa 123",
      description: "Esta es una empresa falsa",
      ubication: "Calle falsa 123",
      icon: SenzaryIcon,
      bgColorIcon: "bg-gray-200",
      darkBgColorIcon: "dark:bg-purple-100",
      borderColorIcon: "border-gray-300",
      darkBorderColorIcon: "dark:border-purple-100",
    },
    date: {
      start: "Noviembre de 2025",
      end: "Presente",
    },
    position: "Falsa posición",
    description:
      "Descripción falsaaaaaaaaaaaaaa.....",
    mode: "En remoto — Jornada Completa",
    responsabilitiesAndTasks: [
      "Item falso1",
      "Item falso2",
      "Item falso3",
    ],
    skillsAndTools: [
      "Skill falsa1",
      "Skill falsa2",
      "Skill falsa3",
    ],
    softSkills: [
      "Soft Skill falsa1",
      "Soft Skill falsa2",
      "Soft Skill falsa3",
    ],
  }, */
];
