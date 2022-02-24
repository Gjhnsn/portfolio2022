import React from "react";
import Layout from "../../common/Layout/Layout";
import {
  FlexWrapper,
  LeftContent,
  RightContent,
  Underline,
  TextWrapper,
  SquarePlaceHolder,
  ImageWrapper,
} from "./styles";

const About = () => {
  return (
    <Layout>
      <FlexWrapper>
        <LeftContent>
          <h2>About</h2>
          <Underline />
          <TextWrapper>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              aperiam earum ducimus quisquam ipsum distinctio error architecto
              voluptates ratione iure enim repellendus pariatur aut nisi
              temporibus ad, animi nam praesentium.
            </p>
          </TextWrapper>
          <div>
            <h3>my toolbox</h3>
            <Underline />
            <TextWrapper>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                aperiam earum ducimus quisquam ipsum distinctio error architecto
                voluptates ratione iure enim repellendus pariatur aut nisi
                temporibus ad, animi nam praesentium.
              </p>
            </TextWrapper>
          </div>
        </LeftContent>
        <RightContent>
          <ImageWrapper>
            <SquarePlaceHolder />
          </ImageWrapper>
        </RightContent>
      </FlexWrapper>
    </Layout>
  );
};

export default About;
