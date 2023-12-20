import React, { useState, useEffect } from "react";
import {
  TextContainer,
  NameHeader,
  SubTitle,
  ImageBackground,
  FlexWrapper,
  SquareWrapper,
  SubText,
  BlurOverlay,
  Square1,
  Square2,
  Square3,
} from "./styles";
import { LayoutContainer } from "../../../components/Layout/styles";

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
            <NameHeader>Garrett Johnson</NameHeader>
            <SubTitle>
              <SubText>software developer</SubText>
            </SubTitle>
          </FlexWrapper>
        </TextContainer>
      </LayoutContainer>
      <BlurOverlay />
      <SquareWrapper>
        <Square1
          style={{ transform: `translateY(-${scrollOffset * 0.5}px)` }}
        ></Square1>
        <Square2></Square2>
        <Square3
          style={{ transform: `translateY(-${scrollOffset * 0.3}px)` }}
        ></Square3>
      </SquareWrapper>
    </section>
  );
};

export default Hero;
