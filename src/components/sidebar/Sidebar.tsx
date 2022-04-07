import React, { FC } from "react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { IThemeProps } from "../../utils/models";
import {
  LongLine,
  Container,
  ShortLine,
  Email,
  LinkedInIcon,
  GithubIcon,
} from "./styles";

const Sidebar: FC<IThemeProps> = ({ theme, toggleTheme }) => {
  return (
    <Container>
      <LongLine />
      <LinkedInIcon />
      <GithubIcon />

      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <ShortLine />
      <Email>garrett.bjnsn@gmail.com</Email>
      <ShortLine />
    </Container>
  );
};

export default Sidebar;
