import React, { FC } from "react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { IThemeProps } from "../../utils/models";
import {
  LongLine,
  Container,
  IconPlaceHolder,
  ShortLine,
  Email,
  LinkedInIcon,
  GithubIcon,
  IconWrapper,
  // iconStyles
} from "./styles";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

const Sidebar: FC<IThemeProps> = ({ theme, toggleTheme }) => {
  return (
    <Container>
      <LongLine />
      {/* <IconPlaceHolder /> */}
      {/* <IconWrapper> */}
        <LinkedInIcon />
        <GithubIcon />
        {/* <IconPlaceHolder /> */}
      
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      {/* </IconWrapper> */}
      <ShortLine />
      <Email>garrett.bjnsn@gmail.com</Email>
      <ShortLine />
    </Container>
  );
};

export default Sidebar;
