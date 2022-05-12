import { IProjectData } from "./models";
import quickr from "../assets/project_imgs/quickr2.png";
import pocketDex from "../assets/project_imgs/pocketDex1.png";
import omnomnom from "../assets/project_imgs/omnomnom.png";
import toadTv from "../assets/project_imgs/toadTV.png";


export const projectData: IProjectData[] = [
  {
    id: 0,
    name: "QuickR",
    description:
      "QuickR provides QR code scanning, storage, creation, organization and sharing. Allowing users to have quick and easy access to QR codes of importance. QuickR manages QR codes through Redux Toolkit, uses a QR code generating API as well as a barcode scanner provided by Expo.dev. QuickR was designed and developed as a team project of 3 developers.",
    techUsed: ['React Native', 'Styled-Components', 'Expo', 'Redux Toolkit'],
    image: `${quickr}`,
    repoLink: "https://github.com/Gjhnsn/QuickR",
    liveLink: "https://youtu.be/7HeWyDv62aY",
  },
  {
    id: 1,
    name: "PocketDex",
    description:
      "PocketDex is an online Pokedex using the PokeAPI. This app lazy loads Pokemon as you scroll and allows for filtering and sorting of loaded pokemon. Additionally you can view details about each pokemon including their stats, move set, their cries and more. PocketDex was designed and developed as a team project of 3 developers.",
    techUsed: ["React", "Sass"],
    image: `${pocketDex}`,
    repoLink: "https://github.com/dannysanchez559/poke-app",
    liveLink: "https://pocketdex-a45b8.web.app/",
  },
  {
    id: 2,
    name: "Omnomnom",
    description:
      "Omnomnom is a meal recipe app built using the Spoonacular API. This app will find potential meal options based on your selected ingredients. Selected recipes will provide an ingredients list, including any missing ingredients, as well as a list of instructions. Omnomnom was designed and developed as a team project of 3 developers.",
    techUsed: ["Typescript", "Styled-Components"],
    image: `${omnomnom}`,
    repoLink: "https://github.com/connielion/omnomnom",
    liveLink: "https://omnomnom-b8486.web.app/",
  },
  {
    id: 3,
    name: "ToadTv",
    description:
      "ToadTV is a movie database built using the OMDb API. This app allows users to search for movie titles and view details about selected movies. ToadTv was designed and developed as a team project of 5 developers.",
    techUsed: ["React", "Sass"],
    image: `${toadTv}`,
    repoLink: "https://github.com/Lap343/2021-React-Apprenticeship",
    liveLink: "https://toadtv-b4454.web.app/",
  },
];
