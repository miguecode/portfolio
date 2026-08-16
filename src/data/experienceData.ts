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
  positionSub?: string;
  description: string;
  mode: string;
  language: string,
  responsabilitiesAndTasks: string[];
  skillsAndTools: string[];
  softSkills: string[];
}

// Experience data
export const experienceData: Record<"es" | "en", Job[]> = {
  es: [
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
      position: "Frontend Developer",
      positionSub: "IoT & Dashboard Solutions",
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
    }
  ],
  en: [
    {
      company: {
        name: "Senzary LLC.",
        description: "International IoT Company",
        ubication: "Florida, United States",
        icon: SenzaryIcon,
        bgColorIcon: "bg-gray-100",
        darkBgColorIcon: "dark:bg-purple-100",
        borderColorIcon: "border-gray-300",
        darkBorderColorIcon: "dark:border-purple-100",
      },
      date: {
        start: "November 2025",
        end: "Present",
      },
      position: "Frontend Developer",
      positionSub: "IoT & Dashboard Solutions",
      description:
        "I am part of the development team at Senzary, an international IoT company focused on industrial solutions and real-time monitoring of multiple devices. I work in a remote and collaborative environment participating in the design, development, and optimization of operational dashboards used by major clients such as ENI, AES, IAC or P&G.",
      mode: "Remote — Full Time",
      language: "English",
      responsabilitiesAndTasks: [
        "Development of interactive, operational and accessible dashboards, focused on real-time IoT data visualization.",
        "Creation and customization of reusable widgets, focusing on UX/UI best practices, accessibility and responsive design.",
        "Working with critical data from industrial sensors; alarms, H2S gases, temperature, personnel tracking, airport doors, industrial machinery, front loaders and more.",
        "Integration and configuration of IoT entities in the ThingsBoard platform, including support in device assignment and administration, rule chains, alarms, notifications and customer-asset architecture.",
        "Participation in last-minute adjustments under pressure, prior to reviews and client deliveries.",
        "Production deliveries to industrial clients, focusing on stability, performance, and user experience.",
        "Technical documentation and daily communication in English, both written and on calls.",
        "Direct support, assistance and training to multiple clients.",
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
        "Work and communication with an international team (remote and in English)",
        "Proactivity, responsibility and commitment in high-demand environments",
        "Daily documentation and tracking of completed tasks",
      ],
    }
  ]
};
