import React, { FC, useState, useEffect } from "react";
import {
  TextContainer,
  Square1,
  NameHeader,
  SubTitle,
  ImageBackground,
  Square2,
  FlexWrapper,
  SquareWrapper,
} from "./styles";
import { LayoutContainer } from "../../common/Layout/styles";

const Hero = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  // ---------------------------------------------------------window.scrollY getting scroll positio

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => setScrollOffset(window.scrollY);

  return (
    <section id="home">
      <LayoutContainer style={{ marginBottom: "100px" }} className="landing">
        <TextContainer>
          <FlexWrapper>
            <div>
              <NameHeader>Garrett Johnson</NameHeader>
            </div>
            <SubTitle>
              <h3>web developer</h3>
            </SubTitle>
          </FlexWrapper>
        </TextContainer>
      </LayoutContainer>
      <ImageBackground
        style={{ transform: `translateY(${scrollOffset * 0.08}px)` }}
      />
      <SquareWrapper>
        <Square1
          style={{ transform: `translateY(-${scrollOffset * 0.5}px)` }}
        />
        <Square2
          style={{ transform: `translateY(-${scrollOffset * 0.2}px)` }}
        />
      </SquareWrapper>
    </section>
  );
};

export default Hero;
