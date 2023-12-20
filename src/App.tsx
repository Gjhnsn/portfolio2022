import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import { GlobalStyles, darkTheme, lightTheme } from "./styles/globalStyles";
import { useDarkMode } from "./utils/useDarkMode";
import { ThemeProvider } from "styled-components";
import Main from "./pages/Home/Main/Main";
import Loader from "./components/Loader/Loader";
import NotFound from "./pages/NotFound/NotFound";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const { pathname } = useLocation();
  const homePage = '/';

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
      setIsLoading(false);
    }, 4300);
  }, []);

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        {isLoading && pathname === homePage ? <Loader /> : null}
        <Routes>
          <Route
            path="/"
            element={<Main theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route path="/work" element={<div>Work Page</div>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Sidebar theme={theme} toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
}

export default App;
