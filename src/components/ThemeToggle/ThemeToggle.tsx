import React, { FC } from "react";
import { IThemeProps } from "../../utils/models";

export const ThemeToggle: FC<IThemeProps> = ({ theme, toggleTheme }) => {

  const Toggler: FC = (props) => {
    return <div>{props.children}</div>;
  };

  return (
    <div onClick={toggleTheme}>
      {theme === "light" ? <Toggler>Dark</Toggler> : <Toggler>Light</Toggler>}
    </div>
  );
};
