// ------------------------------ used at SideBar, ThemeToggle
export interface IThemeProps {
  theme: string;
  toggleTheme: () => void;
}

export interface IAllProjects {
  name: string;
  project: IProjectData;
}

export interface IProjectData {
  name: string;
  description: string;
  techUsed: string[];
  image: string;
  repoLink: string;
  liveLink: string;
}
