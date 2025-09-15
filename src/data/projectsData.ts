import { technologysDataOne } from "../data/technologysData";
import { technologysDataTwo } from "../data/technologysData";

// Interfaces
export interface Link {
  name: string;
  url: string;
  icon: string;
  action?: string; 
}

interface Image {
  desktop: string,
  mobile: string,
}

export interface Project {
  title: string;
  description: string;
  image: Image;
  links: Link[];
  tags: any[];
  featured?: boolean;
}

export interface OtherProject {
  title: string;
  description: string;
  links: Link[];
  tags: any[];
}

// Featured Projects data
export const projects: Project[] = [
  // Vital Avellaneda
  {
    title: "Vital Avellaneda",
    description: "Plataforma web para gestión de Clínica Médica. Pacientes y especialistas pueden gestionar turnos y mucho más, todo en un entorno moderno y seguro.",
    image: {
      desktop:"/projects/vital-avellaneda-mockup-big.webp",
      mobile:"/projects/vital-avellaneda-mockup-small.webp",
    },
    links: [
      {
        name: "Abrir",
        url: "https://vital-avellaneda.web.app/",
        icon: "Link",
      },
      {
        name: "Video",
        url: "https://www.youtube.com/watch?v=PC0unpPIUWw",
        icon: "Video",
        action: "open-modal",
      },
      {
        name: "Código",
        url: "https://github.com/miguecode/vital-avellaneda",
        icon: "GitHub",
      },
    ],
    tags: [technologysDataOne.Angular, technologysDataOne.TailwindCSS, technologysDataTwo.Firebase],
    featured: true,
  },

  // Messi Perfect Shots
  {
    title: "Messi Perfect Shots",
    description: "Bot de X/Twitter que se dedica a publicar fotos de Lionel Messi diariamente. Fue creado con la API de X/Twitter, y cuenta con +5.000 seguidores.",
    image: {
      desktop:"/projects/mps-mockup-big.webp",
      mobile:"/projects/mps-mockup-small.webp",
    },
    links: [
      {
        name: "Abrir",
        url: "https://x.com/MessiPF/",
        icon: "Twitter",
      },
      {
        name: "Código",
        url: "https://github.com/miguecode/messi-perfect-shots/",
        icon: "GitHub",
      },
    ],
    tags: [technologysDataTwo.Node, technologysDataOne.TypeScript]
  },

  // Jueguitos JS
  {
    title: "Jueguitos JS",
    description: "Sitio web de juegos sencillos. Los usuarios pueden iniciar sesión o ingresar como invitados, enviar mensajes en el chat global y acceder al ranking.",
    image: {
      desktop:"/projects/playroom-mockup-big.webp",
      mobile:"/projects/playroom-mockup-small.webp",
    },
    links: [
      {
        name: "Abrir",
        url: "https://sala-de-juegos-82d5a.web.app/",
        icon: "Link",
      },
      {
        name: "Código",
        url: "https://github.com/miguecode/playroom-angular/",
        icon: "GitHub",
      },
    ],
    tags: [technologysDataOne.Angular, technologysDataOne.Bootstrap, technologysDataTwo.Firebase]
  },
];

// Other projects data
export const otherProjects: OtherProject[] = [
  // Restaurante QR
  {
    title: 'Restaurante QR',
    description: 'App Android que lleva a cabo el funcionamiento de un restaurante con sistema de usuarios, y generación/lectura de códigos QR. Hecha en equipo simulando un entorno profesional.',
    links: [
      {
        name: "Código",
        url: "https://github.com/miguecode/restaurante-qr",
        icon: "GitHub",
      }
    ],
    tags: [technologysDataTwo.Ionic, technologysDataOne.Angular, technologysDataTwo.Firebase],
  },

  // Maxikiosco Junior
  {
    title: 'Maxikiosco Junior',
    description: 'Aplicación de escritorio en .NET de un kiosco con gestión de productos, estadísticas de venta, administración de usuarios y generación/lectura de archivos CSV.',
    links: [
      {
        name: "Código",
        url: "https://github.com/miguecode/kiosco-junior-desktop",
        icon: "GitHub",
      }
    ],
    tags: [technologysDataTwo.Net, technologysDataTwo.SQL],
  },

  // API La Comanda
  {
    title: 'API La Comanda',
    description: 'API que simula el comportamiento de un restaurante, principalmente el flujo de una comanda. Gestión de entidades y autenticación mediante JSON Web Tokens.',
    links: [
      {
        name: "Código",
        url: "https://github.com/miguecode/slim-comanda-api",
        icon: "GitHub",
      }
    ],
    tags: [technologysDataTwo.PHP, technologysDataTwo.SQL],
  },

  // Portfolio
  {
    title: 'Portfolio',
    description: 'Es este mismo sitio web. Hecho con Astro y Tailwind CSS, el portfolio es mi carta de presentación técnica, el cual voy retocando a lo largo del tiempo.',
    links: [
      {
        name: "Código",
        url: "https://github.com/miguecode/portfolio",
        icon: "GitHub",
      }
    ],
    tags: [technologysDataOne.Astro, technologysDataOne.TailwindCSS],
  },
]