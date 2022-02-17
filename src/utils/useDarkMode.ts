import { useEffect, useState } from "react";

export const useDarkMode = () => {
  // default theme will set to dark
  const [theme, setTheme] = useState("dark");

  // setMode grabs key name 'theme' to set the theme mode
  // setItem = storage method
  // setMode then uses setTheme hook to save current theme mode
  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  // setMode to set theme
  const toggleTheme = () => {
    theme === "dark" ? setMode("light") : setMode("dark");
  };

  // check local storage for previous theme mode set
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("dark");
  }, []);

  return [theme, toggleTheme] as const;
};
