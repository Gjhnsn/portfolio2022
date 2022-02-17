import React, { FC } from "react";
import { IThemeProps } from "../../utils/models";
import { TogglePlaceholder } from "./styles";

export const ThemeToggle: FC<IThemeProps> = ({ theme, toggleTheme }) => {
  const Toggler: FC = (props) => {
    return <TogglePlaceholder>{props.children}</TogglePlaceholder>;
  };

  return (
    <div onClick={toggleTheme}>
      {theme === "light" ? <Toggler>Dk</Toggler> : <Toggler>Lt</Toggler>}
    </div>
  );
};
