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
  IconWrapper
} from "./styles";

const Sidebar: FC<IThemeProps> = ({ theme, toggleTheme }) => {
  return (
    <Container>
      <LongLine />
      <IconWrapper>
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
      </IconWrapper>
      <ShortLine />
      <div>
        <Email>garrett.bjnsn@gmail.com</Email>
      </div>
      <ShortLine />
    </Container>
  );
};

export default Sidebar;
