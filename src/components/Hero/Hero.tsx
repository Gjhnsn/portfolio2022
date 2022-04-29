import React, { FC, useState, useEffect } from "react";
import {
  TextContainer,
  NameHeader,
  SubTitle,
  ImageBackground,
  FlexWrapper,
  SquareWrapper,
  TopSquare,
  BottomSquare,
  SubText,
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
              <SubText>web developer</SubText>
            </SubTitle>
          </FlexWrapper>
        </TextContainer>
      </LayoutContainer>
      <ImageBackground
        style={{ transform: `translateY(${scrollOffset * 0.08}px)` }}
      />
      <SquareWrapper>
        <BottomSquare style={{ transform: `translateY(-${scrollOffset * 0.5}px)` }}>
          J
        </BottomSquare>
      {/* </SquareWrapper>
      <SquareWrapper>   */}
        <TopSquare style={{ transform: `translateY(-${scrollOffset * 0.2}px)` }}>
          G
        </TopSquare>
      </SquareWrapper>
    </section>
  );
};

export default Hero;
