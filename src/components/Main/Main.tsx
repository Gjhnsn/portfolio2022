import React, { FC } from "react";
import { IThemeProps } from "../../utils/models";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import { Wrapper } from "./styles";

const Main: FC<IThemeProps> = ({ theme, toggleTheme }) => {

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <Wrapper>
        <Hero theme={theme} toggleTheme={toggleTheme}/>
        <About />
        <Projects />
        <Contact />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Main;
