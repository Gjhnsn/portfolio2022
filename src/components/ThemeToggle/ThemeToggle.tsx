import React, { FC } from "react";
import { IThemeProps } from "../../utils/models";
import { TogglePlaceholder } from "./styles";
import { FaRegMoon, FaSun } from "react-icons/fa";
import { FiSun } from 'react-icons/fi'
import { BiMoon } from 'react-icons/bi' 
import { HiOutlineMoon } from 'react-icons/hi' 



export const ThemeToggle: FC<IThemeProps> = ({ theme, toggleTheme }) => {
  const Toggler: FC = (props) => {
    return <TogglePlaceholder>{props.children}</TogglePlaceholder>;
  };

  const darkIconTheme = {
    color: `#5F6A59`,
    height: `auto`,
    width: `28px`,

    // border: `1px solid pink`
  }

  const lightIconTheme = {
    color: `#5D4733`,
    height: `auto`,
    width: `28px`,
    // border: `1px solid blue`
  }

  return (
    <div onClick={toggleTheme}>
      {theme === "light" ? <Toggler><HiOutlineMoon style={lightIconTheme} /></Toggler> : <Toggler><FiSun style={darkIconTheme}/></Toggler>}
    </div>
  );
};
