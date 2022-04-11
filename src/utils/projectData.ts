import { IProjectData } from "./models";
import quickr from '../assets/project_imgs/quickr2.png';
import pocketDex from '../assets/project_imgs/pocketDex1.png'
import omnomnom from '../assets/project_imgs/omnomnom.png';
import toadTv from '../assets/project_imgs/toadTV.png';



// data values not yet finalized

export const projectData: IProjectData[] = [
  {
    id: 0,
    name: "QuickR",
    description:
      "Scuttle rigging scurvy cog lee nipper Letter of Marque transom Buccaneer Privateer. Chain Shot ho Letter of Marque hornswaggle booty fathom jack bounty maroon Barbary Coast. Nipperkin Barbary Coast measured fer yer chains blow the man down Letter of Marque smartly splice the main brace furl parley starboard.",
    techUsed: ["React", "JavaScript"],
    image: `${quickr}`,
    repoLink: "https://github.com/Gjhnsn/QuickR",
    liveLink: "live.link",
  },
  {
    id: 1,
    name: "PocketDex",
    description:
      "Scuttle rigging scurvy cog lee nipper Letter of Marque transom Buccaneer Privateer. Chain Shot ho Letter of Marque hornswaggle booty fathom jack bounty maroon Barbary Coast. Nipperkin Barbary Coast measured fer yer chains blow the man down Letter of Marque smartly splice the main brace furl parley starboard.",
    techUsed: ["React", "JavaScript"],
    image: `${pocketDex}`,
    repoLink: "https://github.com/dannysanchez559/poke-app",
    liveLink: "https://pocketdex-a45b8.web.app/",
  },
  {
    id: 2,
    name: "Omnomnom",
    description:
      "Scuttle rigging scurvy cog lee nipper Letter of Marque transom Buccaneer Privateer. Chain Shot ho Letter of Marque hornswaggle booty fathom jack bounty maroon Barbary Coast. Nipperkin Barbary Coast measured fer yer chains blow the man down Letter of Marque smartly splice the main brace furl parley starboard.",
    techUsed: ["React", "JavaScript"],
    image: `${omnomnom}`,
    repoLink: "https://github.com/connielion/omnomnom",
    liveLink: "https://omnomnom-b8486.web.app/",
  },
  {
    id: 3,
    name: "ToadTv",
    description:
      "Scuttle rigging scurvy cog lee nipper Letter of Marque transom Buccaneer Privateer. Chain Shot ho Letter of Marque hornswaggle booty fathom jack bounty maroon Barbary Coast. Nipperkin Barbary Coast measured fer yer chains blow the man down Letter of Marque smartly splice the main brace furl parley starboard.",
    techUsed: ["React", "JavaScript"],
    image: `${toadTv}`,
    repoLink: "https://github.com/Lap343/2021-React-Apprenticeship",
    liveLink: "https://toadtv-b4454.web.app/",
  },
];
