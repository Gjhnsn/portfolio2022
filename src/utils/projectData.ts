import { IProjectData } from "./models";
import quickr from "../assets/project_imgs/quickr.webp";
import pocketDex from "../assets/project_imgs/pocketDex.webp";
import omnomnom from "../assets/project_imgs/omnomnom.webp";
import moneyMinder from "../assets/project_imgs/moneyMinder.png"
// import toadTv from "../assets/project_imgs/toadTV.webp";


export const projectData: IProjectData[] = [
  {
    id: 0,
    name: "QuickR",
    description:
      "QuickR helps simplify QR Code scanning, storage, creation, organization and sharing. Providing quick and easy access to QR codes of importance. The app optimizes QR code management using Redux Toolkit, incorporates a QR code generation API and utilizes Expo.dev's barcode scanner.",
    techUsed: ['React Native', 'Styled-Components', 'Expo', 'Redux Toolkit'],
    image: `${quickr}`,
    repoLink: "https://github.com/Gjhnsn/QuickR",
    altRepoLink: "https://youtu.be/7HeWyDv62aY",
    liveLink: "https://butterysoft.github.io/QuickR-Landing-Page/",
  },
  {
    id: 1,
    name: "MoneyMinder",
    description:
      "An expense tracker originally built with React, GraphQL, MongoDB, Mongoose, and Apollo. Later, refactored to a frontend only application utilizing Redux Toolkit for CRUD functionality. The app provides a simple interface for users to manage monthly expenses.",
    techUsed: ['React', 'Redux Toolkit', 'Styled-Components', 'Framer Motion'],
    image: `${moneyMinder}`,
    repoLink: "https://github.com/Gjhnsn/expense-tracker-rr",
    altRepoLink: "https://github.com/Gjhnsn/expense-tracker",
    liveLink: "https://money-minder-f7154.web.app/",
  },
  {
    id: 2,
    name: "PocketDex",
    description:
      "PocketDex is an online Pokedex powered by the PokeAPI. With lazy loading functionality, it loads Pokemon as you scroll, while also providing options for filtering and sorting the loaded Pokemon. PocketDex also utilizes Material UI components, and Chart.js to enhance data visualization.",
    techUsed: ["React", "Sass", "Material UI"],
    image: `${pocketDex}`,
    repoLink: "https://github.com/dannysanchez559/poke-app",
    liveLink: "https://pocketdex-a45b8.web.app/",
  },
  {
    id: 3,
    name: "Omnomnom",
    description:
      "Omnomnom is a recipe app developed with the Spoonacular API. It allows you to discover meal options tailored to your selected ingredients. The app provides a wide range of recipes based on your chosen ingredients, accompanied by detailed instructions and a list of any missing ingredients.",
    techUsed: ["Typescript", "Styled-Components"],
    image: `${omnomnom}`,
    repoLink: "https://github.com/connielion/omnomnom",
    liveLink: "https://omnomnom-b8486.web.app/",
  },
  // {
  //   id: 4,
  //   name: "ToadTv",
  //   description:
  //     "ToadTV is a movie database built using the OMDb API. This app allows users to search for movie titles and view details about selected movies. ToadTv was designed and developed as a team project of 5 developers.",
  //   techUsed: ["React", "Sass"],
  //   image: `${toadTv}`,
  //   repoLink: "https://github.com/Lap343/2021-React-Apprenticeship",
  //   liveLink: "https://toadtv-b4454.web.app/",
  // },
];
