import React, { FC } from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import { Wrapper } from "./styles";

const Main = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Main;
