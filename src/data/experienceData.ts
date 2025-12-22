// Icons
import SenzaryIcon from "../icons/companies/Senzary.astro";

// Interfaces
export interface Job {
  company: {
    name: string,
    description: string,
    ubication: string,
    icon: any,
    bgColorIcon: string,
    darkBgColorIcon: string
  },
  date: {
    start: string,
    end: string
  },

  position: string,
  description: string,
  items: string[],
  mode: string,
};

// Experience data
export const experienceData: Job[] = [
  {
    company: {
      name: "Senzary LLC.",
      description: "Empresa internacional de IoT",
      ubication: "Estados Unidos, Florida",
      icon: SenzaryIcon,
      bgColorIcon: "bg-red-400",
      darkBgColorIcon: "dark:bg-purple-100",
    },
    date: {
      start: "Noviembre de 2025",
      end: "Presente",
    },
    position: "Desarrollador Frontend",
    description: "Formo parte del equipo de desarrollo frontend de Senzary, una empresa IoT internacional orientada a soluciones industriales y monitoreo de dispositivos con datos complejos en tiempo real. Trabajo en un entorno remoto y colaborativo participando en el diseño, desarrollo y optimización de dashboards operativos utilizados por clientes reales como ENI, IAC o AES.",
    items: [
      "Item 1",
      "Item 2",
      "Item 3",
      "Item 4",
      "Item 5",
      "Item 6",
    ],
    mode: 'En remoto — Jornada Completa',
  },
];