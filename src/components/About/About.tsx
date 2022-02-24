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
  TechTool,
} from "./styles";
// possible icon choice imports
import { FiTriangle, FiZap, FiChevronRight } from "react-icons/fi";
import { TiMinus, TiSpanner } from "react-icons/ti";

const About = () => {

  // function that will map through tech stack and return list of tools
  const toolKit = () => {
    return (
      <>
        <li>
          <TiMinus style={{ marginRight: `10px` }} />
          <TechTool>React</TechTool>
        </li>
        <li>
          <TiSpanner style={{ marginRight: `10px` }} />
          <TechTool>JasvaScript</TechTool>
        </li>
      </>
    );
  };

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
              <ul>{toolKit()}</ul>
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
