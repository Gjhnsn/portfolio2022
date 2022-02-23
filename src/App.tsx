import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import { GlobalStyles, darkTheme, lightTheme } from "./styles/globalStyles";
import { useDarkMode } from "./utils/useDarkMode";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        {/* <Header /> */}
        <Main />
        <Sidebar theme={theme} toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
}

export default App;
