import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
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
        <Sidebar />
      </div>
    </ThemeProvider>
  );
}

export default App;
