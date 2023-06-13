import React, { useEffect, useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import { GlobalStyles, darkTheme, lightTheme } from "./styles/globalStyles";
import { useDarkMode } from "./utils/useDarkMode";
import { ThemeProvider } from "styled-components";
import Main from "./components/Main/Main";
import Loader from "./components/Loader/Loader";


function App() {
  
  const [isLoading, setIsLoading] = useState(true);

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
      setIsLoading(false)
    }, 4300)

  }, [])

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        {isLoading ? <Loader /> : null}
        <Main theme={theme} toggleTheme={toggleTheme}/>
        <Sidebar theme={theme} toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
}

export default App;
