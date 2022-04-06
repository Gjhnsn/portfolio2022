import React, { FC } from "react";
import { IThemeProps } from "../../utils/models";
import { TogglePlaceholder } from "./styles";
import { BsSun, BsMoon, BsSunFill, BsMoonFill } from "react-icons/bs";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from 'react-icons/fi'



export const ThemeToggle: FC<IThemeProps> = ({ theme, toggleTheme }) => {
  const Toggler: FC = (props) => {
    return <TogglePlaceholder>{props.children}</TogglePlaceholder>;
  };

  const darkIconTheme = {
    color: `#5F6A59`,
    height: `25px`,
    width: `25px`,
    // border: `1px solid pink`
  }

  const lightIconTheme = {
    color: `#5D4733`,
    height: `20px`,
    width: `auto`,
    // border: `1px solid blue`
  }

  return (
    <div onClick={toggleTheme}>
      {theme === "light" ? <Toggler><FaRegMoon style={lightIconTheme} /></Toggler> : <Toggler><FiSun style={darkIconTheme}/></Toggler>}
    </div>
  );
};
