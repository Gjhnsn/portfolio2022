import React, { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInVariant } from "../../../utils/animations";
import Layout from "../../../components/Layout/Layout";
import { techTools } from "../../../utils/techTools";
import { HeaderContainer } from "../Projects/styles";
import {
  FlexWrapper,
  Underline,
  TextWrapper,
  AboutImage,
  ImageWrapper,
  AboutImageOverlay,
  Content,
  ImageRelativeContainer,
} from "./styles";
import aboutIMG from "../../../assets/about.webp";

const About: FC = () => {
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

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
          <Content>
            <TextWrapper>
              <p>
                <span>Hey! I'm Garrett.</span>I am a passionate software
                developer who thrives on crafting efficient, visually
                captivating, and user-friendly digital experiences. Through my
                professional experience, I have been fortunate to help develop
                unique products across a range of industries. I believe beauty
                is in the details when it comes to creating compelling web and
                mobile application experiences, and strive for my work to leave
                a lasting and impactful impression.
              </p>
            </TextWrapper>

            <ImageRelativeContainer>
              <ImageWrapper>
                <AboutImageOverlay>
                  <AboutImage src={aboutIMG} alt="Garrett Johnson, headshot" />
                </AboutImageOverlay>
              </ImageWrapper>
            </ImageRelativeContainer>
          </Content>
        </FlexWrapper>
      </Layout>
    </motion.section>
  );
};

export default About;
