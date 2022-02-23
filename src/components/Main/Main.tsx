import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import { Wrapper } from "./styles";

const Main = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Hero />
      </Wrapper>
    </>
  );
};

export default Main;
