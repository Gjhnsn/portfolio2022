import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import { GlobalStyles, darkTheme, lightTheme } from "./styles/globalStyles";
import { useDarkMode } from "./utils/useDarkMode";
import { ThemeProvider } from "styled-components";
import Main from "./components/Main/Main";
import {projectData} from './utils/projectData'

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  // temp test map for projects
  const projects = projectData.map((project) => {
    return console.log(project.project.image)
  })

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Main />
        <Sidebar theme={theme} toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
}

export default App;
