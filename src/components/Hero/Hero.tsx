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
    <section id='home'>
      <LayoutContainer style={{marginBottom: '100px'}} className="landing">
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
      <ImageBackground />
      <SquareWrapper>
        <Square1 />
        <Square2 />
      </SquareWrapper>
    </section>
  );
};

export default Hero;
