import { technologysDataOne } from "../data/technologysData";
import { technologysDataTwo } from "../data/technologysData";
import { technologysDataThree } from "../data/technologysData";

// Projects data
export const projects = [
  {
    title: "La Clínica Online",
    description: "Sitio web que simula ser una clínica online con sistema de login. Los usuarios tienen distintos roles, y la idea principal es que un paciente solicite sus turnos.",
    image: "/projects/clinica-project.webp",
    link: "https://clinica-online-f6245.web.app/",
    github: "https://github.com/Leumig/clinica-online-angular",
    tags: [technologysDataOne.Angular, technologysDataTwo.Firebase]
  },
  {
    title: "Playroom MG",
    description: "Sitio web de juegos sencillos. Los usuarios pueden iniciar sesión o ingresar como invitados, enviar mensajes en el chat global y acceder al ranking.",
    image: "/projects/playroom-project.webp",
    link: "https://sala-de-juegos-82d5a.web.app/",
    github: "https://github.com/Leumig/playroom-angular/",
    tags: [technologysDataOne.Angular, technologysDataTwo.Firebase]
  },
  {
    title: "Messi Perfect Shots",
    description: "Bot de Twitter/X que se dedica a publicar fotos de Lionel Messi diariamente. Fue creado con la API de Twitter/X, y cuenta con +4.000 seguidores.",
    image: "/projects/bot-project.webp",
    link: "https://x.com/MessiPF/",
    github: "https://github.com/Leumig/bot-twitter/",
    tags: [technologysDataThree.Node, technologysDataOne.JavaScript]
  },
];
