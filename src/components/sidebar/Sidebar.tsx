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
      <LinkedInIcon
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/garrett-johnson-b08377162/",
            "_blank"
          )
        }
      />
      <GithubIcon
        onClick={() => window.open("https://github.com/Gjhnsn", "_blank")}
      />

      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <ShortLine />
      <Email>garrett.bjnsn@gmail.com</Email>
      <ShortLine />
    </Container>
  );
};

export default Sidebar;
