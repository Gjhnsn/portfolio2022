import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import { GlobalStyles, darkTheme, lightTheme } from "./styles/globalStyles";
import { useDarkMode } from "./utils/useDarkMode";
import { ThemeProvider } from "styled-components";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <GlobalStyles />
        <Sidebar theme={theme} toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
