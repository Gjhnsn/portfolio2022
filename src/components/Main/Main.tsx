import React from "react";
import About from "../About/About";
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
      </Wrapper>
    </>
  );
};

export default Main;
