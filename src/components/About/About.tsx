import React, { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInVariant } from "../../utils/animations";
import Layout from "../../common/Layout/Layout";
import { techTools } from "../../utils/techTools";
import { HeaderContainer } from "../Projects/styles";
import {
  FlexWrapper,
  Underline,
  TextWrapper,
  AboutImage,
  ImageWrapper,
  TechTool,
  ToolList,
  ToolListItem,
  AboutImageOverlay,
  TopContent,
  BottomContent,
  ImageRelativeContainer,
  ToolContainer,
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
          <HeaderContainer>
            <h2>About</h2>
            <Underline />
          </HeaderContainer>
          <TopContent>
            <TextWrapper>
              <p>
                <span>Hey! My name is Garrett Johnson</span> 
                I am a passionate software developer who thrives on crafting efficient, visually captivating, and user-friendly digital experiences. Through my professional experience, I have been fortunate to help develop unique products across a range of industries. I believe beauty is in the detials when it comes to creating compelling web and application experiences, and strive for my work to leave a lasting and impactful impression.
              </p>
            </TextWrapper>

            <ImageRelativeContainer>
              <ImageWrapper>
                <AboutImageOverlay>
                  <AboutImage src={bgIMG} alt="Garrett Johnson, headshot" />
                </AboutImageOverlay>
              </ImageWrapper>
            </ImageRelativeContainer>

          </TopContent>
          
          <BottomContent>
            <HeaderContainer>
            <h3>my toolbox</h3>
            <Underline />
            </HeaderContainer>
            <ToolContainer>
              <ToolList>{renderTechTools()}</ToolList>
            </ToolContainer>
          </BottomContent>
        </FlexWrapper>
      </Layout>
    </motion.section>
  );
};

export default About;
