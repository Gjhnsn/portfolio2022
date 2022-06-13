import React, { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInVariant } from "../../utils/animations";
import Layout from "../../common/Layout/Layout";
import { techTools } from "../../utils/techTools";
import {
  FlexWrapper,
  LeftContent,
  RightContent,
  Underline,
  TextWrapper,
  AboutImage,
  ImageWrapper,
  TechTool,
  ToolList,
  ToolListItem,
  AboutImageOverlay,
} from "./styles";
import bgIMG from "../../assets/aboutIMG.webp";
import { TiMinus } from "react-icons/ti";

const About: FC = () => {
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  // map through tech stack and return list of tools
  const renderTechTools = () => {
    return techTools.map((item: string) => {
      return (
        <ToolListItem key={item}>
          <TiMinus style={{ margin: `0 10px 1px 0` }} />
          <TechTool>{item}</TechTool>
        </ToolListItem>
      );
    });
  };

  return (
    <motion.section
      id="about"
      variants={fadeInVariant}
      initial="hidden"
      animate={aboutInView ? "visible" : "hidden"}
      ref={aboutRef}
    >
      <Layout>
        <FlexWrapper>
          <LeftContent>
            <h2>About</h2>
            <Underline />
            <TextWrapper>
              <p>
                <span>Hey!</span> My name is Garrett Johnson, I am a web
                developer based out of California. Helping iron out the pixel
                puzzles of the web.
              </p>
              <p>
                When I first discovered web development it quickly became a
                natural fit. I truly enjoy the creative process of coming up
                with solutions for both design and logic.
              </p>
              <p>
                I enjoy designing and building clean user interfaces, creating
                enjoyable interactions, and the skill building that comes with
                every project.
              </p>
            </TextWrapper>
            <div>
              <h3>my toolbox</h3>
              <Underline />
              <TextWrapper>
                <ToolList>{renderTechTools()}</ToolList>
              </TextWrapper>
            </div>
          </LeftContent>
          <RightContent>
            <ImageWrapper>
              <AboutImageOverlay>
                <AboutImage src={bgIMG} alt="Garrett Johnson, headshot" />
              </AboutImageOverlay>
            </ImageWrapper>
          </RightContent>
        </FlexWrapper>
      </Layout>
    </motion.section>
  );
};

export default About;
