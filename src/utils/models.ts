// ------------------------------ used at SideBar, ThemeToggle
export interface IThemeProps {
  theme: string;
  toggleTheme: () => void;
}

// ------------------------------ used for prject data at projectData.ts
export interface IProjectData {
  id: number;
  name: string;
  description: string;
  techUsed: string[];
  image: string;
  repoLink: string;
  liveLink: string;
}

// ------------------------------------ used at ProjectCard.tsx
export interface IProjectCardProps {
  project: IProjectData;
}

// ------------------------------------ used in styles of ProjectCard.tsx
// ------------------------------------ used for passing project image path as prop
export interface ProjectCardImgProps {
  projectImg: string;
}

// ------------------------------------ used in Header.tsx styles
export interface IHeaderProps {
  showNav: boolean;
}

// ------------------------------------ used in Header.tsx styles
export interface INavProps {
  showMobileNav: boolean;
}

// ------------------------------------ used in Contact.tsx styles
export interface IMessageProps {
  successMessage: boolean;
}

