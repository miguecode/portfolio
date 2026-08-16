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
export const projects: Record<"es" | "en", Project[]> = {
  es: [
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
    // Prodeazo
    {
      title: "Prodeazo",
      description: "Plataforma web de predicciones de fútbol creada para el Mundial 2026. Los usuarios pueden registrarse, crear grupos y competir en el ranking global.",
      image: {
        desktop:"/projects/prodeazo-mockup-big.webp",
        mobile:"/projects/prodeazo-mockup-small.webp",
      },
      links: [
        {
          name: "Abrir",
          url: "https://prodeazo.vercel.app/",
          icon: "Link",
        },
        {
          name: "Código",
          url: "https://github.com/ProdeazoApp/ProdeazoApp",
          icon: "GitHub",
        },
      ],
      tags: [technologysDataOne.Nextjs, technologysDataOne.TypeScript, technologysDataOne.TailwindCSS],
    },
    // Messi Perfect Shots
    {
      title: "Messi Perfect Shots",
      description: "Bot de X/Twitter que se dedica a publicar fotos de Lionel Messi diariamente. Fue creado con la API de X/Twitter, y cuenta con +6.000 seguidores.",
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
    // miguedocs
    {
      title: "miguedocs",
      description: "Sitio web estilo Docs hecho con Fumadocs, funciona como mi biblioteca de apuntes de programación creados a lo largo del tiempo.",
      image: {
        desktop:"/projects/miguedocs-mockup-big.webp",
        mobile:"/projects/miguedocs-mockup-small.webp",
      },
      links: [
        {
          name: "Abrir",
          url: "https://miguedocs.vercel.app/",
          icon: "Link",
        },
        {
          name: "Código",
          url: "https://github.com/miguecode/miguedocs/",
          icon: "GitHub",
        },
      ],
      tags: [technologysDataOne.Nextjs, technologysDataOne.TypeScript, technologysDataOne.TailwindCSS]
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
  ],
  en: [
    // Vital Avellaneda
    {
      title: "Vital Avellaneda",
      description: "Web platform for Medical Clinic management. Patients and specialists can manage appointments and much more, all in a modern and secure environment.",
      image: {
        desktop:"/projects/vital-avellaneda-mockup-big.webp",
        mobile:"/projects/vital-avellaneda-mockup-small.webp",
      },
      links: [
        {
          name: "Open",
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
          name: "Code",
          url: "https://github.com/miguecode/vital-avellaneda",
          icon: "GitHub",
        },
      ],
      tags: [technologysDataOne.Angular, technologysDataOne.TailwindCSS, technologysDataTwo.Firebase],
      featured: true,
    },
    // Prodeazo
    {
      title: "Prodeazo",
      description: "Football predictions web platform created for the 2026 World Cup. Users can register, create groups and compete in the global ranking.",
      image: {
        desktop:"/projects/prodeazo-mockup-big.webp",
        mobile:"/projects/prodeazo-mockup-small.webp",
      },
      links: [
        {
          name: "Open",
          url: "https://prodeazo.vercel.app/",
          icon: "Link",
        },
        {
          name: "Code",
          url: "https://github.com/ProdeazoApp/ProdeazoApp",
          icon: "GitHub",
        },
      ],
      tags: [technologysDataOne.Nextjs, technologysDataOne.TypeScript, technologysDataOne.TailwindCSS],
    },
    // Messi Perfect Shots
    {
      title: "Messi Perfect Shots",
      description: "X/Twitter bot dedicated to posting photos of Lionel Messi daily. It was created with the X/Twitter API and has +6,000 followers.",
      image: {
        desktop:"/projects/mps-mockup-big.webp",
        mobile:"/projects/mps-mockup-small.webp",
      },
      links: [
        {
          name: "Open",
          url: "https://x.com/MessiPF/",
          icon: "Twitter",
        },
        {
          name: "Code",
          url: "https://github.com/miguecode/messi-perfect-shots/",
          icon: "GitHub",
        },
      ],
      tags: [technologysDataTwo.Node, technologysDataOne.TypeScript]
    },
    // miguedocs
    {
      title: "miguedocs",
      description: "Docs-style website made with Fumadocs, acting as my library of programming notes created over time.",
      image: {
        desktop:"/projects/miguedocs-mockup-big.webp",
        mobile:"/projects/miguedocs-mockup-small.webp",
      },
      links: [
        {
          name: "Open",
          url: "https://miguedocs.vercel.app/",
          icon: "Link",
        },
        {
          name: "Code",
          url: "https://github.com/miguecode/miguedocs/",
          icon: "GitHub",
        },
      ],
      tags: [technologysDataOne.Nextjs, technologysDataOne.TypeScript, technologysDataOne.TailwindCSS]
    },
    // Jueguitos JS
    {
      title: "Jueguitos JS",
      description: "Simple games website. Users can log in or enter as guests, send messages in the global chat and access the ranking.",
      image: {
        desktop:"/projects/playroom-mockup-big.webp",
        mobile:"/projects/playroom-mockup-small.webp",
      },
      links: [
        {
          name: "Open",
          url: "https://sala-de-juegos-82d5a.web.app/",
          icon: "Link",
        },
        {
          name: "Code",
          url: "https://github.com/miguecode/playroom-angular/",
          icon: "GitHub",
        },
      ],
      tags: [technologysDataOne.Angular, technologysDataOne.Bootstrap, technologysDataTwo.Firebase]
    },
  ]
};

// Other projects data
export const otherProjects: Record<"es" | "en", OtherProject[]> = {
  es: [
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
  ],
  en: [
    // Restaurante QR
    {
      title: 'Restaurante QR',
      description: 'Android App that carries out the operation of a restaurant with user system, and generation/reading of QR codes. Made in a team simulating a professional environment.',
      links: [
        {
          name: "Code",
          url: "https://github.com/miguecode/restaurante-qr",
          icon: "GitHub",
        }
      ],
      tags: [technologysDataTwo.Ionic, technologysDataOne.Angular, technologysDataTwo.Firebase],
    },
    // Maxikiosco Junior
    {
      title: 'Maxikiosco Junior',
      description: 'Desktop application in .NET for a kiosk with product management, sales statistics, user administration and generation/reading of CSV files.',
      links: [
        {
          name: "Code",
          url: "https://github.com/miguecode/kiosco-junior-desktop",
          icon: "GitHub",
        }
      ],
      tags: [technologysDataTwo.Net, technologysDataTwo.SQL],
    },
    // API La Comanda
    {
      title: 'API La Comanda',
      description: 'API that simulates the behavior of a restaurant, mainly the flow of an order. Entity management and authentication via JSON Web Tokens.',
      links: [
        {
          name: "Code",
          url: "https://github.com/miguecode/slim-comanda-api",
          icon: "GitHub",
        }
      ],
      tags: [technologysDataTwo.PHP, technologysDataTwo.SQL],
    },
    // Portfolio
    {
      title: 'Portfolio',
      description: 'This is the very website you are looking at. Made with Astro and Tailwind CSS, the portfolio is my technical cover letter, which I tweak over time.',
      links: [
        {
          name: "Code",
          url: "https://github.com/miguecode/portfolio",
          icon: "GitHub",
        }
      ],
      tags: [technologysDataOne.Astro, technologysDataOne.TailwindCSS],
    },
  ]
}