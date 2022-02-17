import React, { FC } from "react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { IThemeProps } from "../../utils/models";
import {
  LongLine,
  Container,
  IconPlaceHolder,
  ShortLine,
  Email,
} from "./styles";

const Sidebar: FC<IThemeProps> = ({ theme, toggleTheme }) => {
  return (
    <Container>
      <LongLine />
      <IconPlaceHolder />
      <IconPlaceHolder />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <ShortLine />
      <Email>garrett.bjnsn@gmail.com</Email>
      <ShortLine />
    </Container>
  );
};

export default Sidebar;
