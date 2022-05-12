import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import { GlobalStyles, darkTheme, lightTheme } from "./styles/globalStyles";
import { useDarkMode } from "./utils/useDarkMode";
import { ThemeProvider } from "styled-components";
import Main from "./components/Main/Main";


function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Main theme={theme} toggleTheme={toggleTheme}/>
        <Sidebar theme={theme} toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
}

export default App;
