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
  IconWrapper,
  ToggleWrapper,
  EmailWrapper,
} from "./styles";

const Sidebar: FC<IThemeProps> = ({ theme, toggleTheme }) => {
  return (
    <Container>
      <LongLine />
      <IconWrapper>
        <LinkedInIcon
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/garrett-johnson-dev/",
              "_blank"
            )
          }
        />
        <GithubIcon
          onClick={() => window.open("https://github.com/Gjhnsn", "_blank")}
        />
        <ToggleWrapper>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </ToggleWrapper>
      </IconWrapper>
      <ShortLine />
      <EmailWrapper>
        <Email>garrett.bjnsn@gmail.com</Email>
      </EmailWrapper>
      <ShortLine />
    </Container>
  );
};

export default Sidebar;
