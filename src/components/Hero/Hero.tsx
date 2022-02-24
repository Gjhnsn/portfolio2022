import React from "react";
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
  return (
    <>
      <LayoutContainer className="landing">
        <TextContainer>
          <FlexWrapper>
            <NameHeader>
              <h1>Garrett Johnson</h1>
            </NameHeader>
            <SubTitle>
              <h3>software developer</h3>
            </SubTitle>
          </FlexWrapper>
        </TextContainer>
      </LayoutContainer>
      <ImageBackground />
      <SquareWrapper>
        <Square1 />
        <Square2 />
      </SquareWrapper>
    </>
  );
};

export default Hero;
