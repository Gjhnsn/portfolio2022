import { IProjectData } from "./models";
import quickr from '../assets/project_imgs/quickr2.png';
import pocketDex from '../assets/project_imgs/pocketDex1.png'
import omnomnom from '../assets/project_imgs/omnomnom.png';
import toadTv from '../assets/project_imgs/toadTV.png';



// data values not yet finalized

export const projectData: IProjectData[] = [
  {
    id: 1,
    name: "QuickR",
    description:
      "Scuttle rigging scurvy cog lee nipper Letter of Marque transom Buccaneer Privateer. Chain Shot ho Letter of Marque hornswaggle booty fathom jack bounty maroon Barbary Coast. Nipperkin Barbary Coast measured fer yer chains blow the man down Letter of Marque smartly splice the main brace furl parley starboard.",
    techUsed: ["React", "JavaScript"],
    image: `${quickr}`,
    repoLink: "repo.link",
    liveLink: "live.link",
  },
  {
    id: 2,
    name: "PocketDex",
    description:
      "Scuttle rigging scurvy cog lee nipper Letter of Marque transom Buccaneer Privateer. Chain Shot ho Letter of Marque hornswaggle booty fathom jack bounty maroon Barbary Coast. Nipperkin Barbary Coast measured fer yer chains blow the man down Letter of Marque smartly splice the main brace furl parley starboard.",
    techUsed: ["React", "JavaScript"],
    image: `${pocketDex}`,
    repoLink: "repo.link",
    liveLink: "live.link",
  },
  {
    id: 3,
    name: "Omnomnom",
    description:
      "Scuttle rigging scurvy cog lee nipper Letter of Marque transom Buccaneer Privateer. Chain Shot ho Letter of Marque hornswaggle booty fathom jack bounty maroon Barbary Coast. Nipperkin Barbary Coast measured fer yer chains blow the man down Letter of Marque smartly splice the main brace furl parley starboard.",
    techUsed: ["React", "JavaScript"],
    image: `${omnomnom}`,
    repoLink: "repo.link",
    liveLink: "live.link",
  },
  {
    id: 4,
    name: "ToadTv",
    description:
      "Scuttle rigging scurvy cog lee nipper Letter of Marque transom Buccaneer Privateer. Chain Shot ho Letter of Marque hornswaggle booty fathom jack bounty maroon Barbary Coast. Nipperkin Barbary Coast measured fer yer chains blow the man down Letter of Marque smartly splice the main brace furl parley starboard.",
    techUsed: ["React", "JavaScript"],
    image: `${toadTv}`,
    repoLink: "repo.link",
    liveLink: "live.link",
  },
];
