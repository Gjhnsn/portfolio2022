import React, { FC, useState, useEffect } from "react";
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
} from "./styles";
import img1 from "../../assets/about/pro1.png";
import img2 from "../../assets/about/pro2.png";
import img3 from "../../assets/about/pro3.png";
import img4 from "../../assets/about/pro4.png";
import img5 from "../../assets/about/pro5.png";

import img from "../../assets/edit.png";

// possible icon choice imports
import { FiTriangle, FiZap, FiChevronRight } from "react-icons/fi";
import { TiMinus, TiSpanner } from "react-icons/ti";

const About: FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const aboutImages: string[] = [img];

  // ----- cycle through aboutImages array
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImage((currentImage) =>
        currentImage < aboutImages.length - 1 ? currentImage + 1 : 0
      );
    }, 8000);
    return () => clearInterval(slideInterval);
  }, [aboutImages.length]);

  const renderAboutImage = () => {
    const bgImage = aboutImages[Math.floor(Math.random() * aboutImages.length)];

    return (
      <AboutImage style={{ backgroundImage: `url(${bgImage})` }}></AboutImage>
    );
  };

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
    <section id="about">
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
                When I first discovered web develpment it quickly became a
                natural fit. I truly enjoy the creative process of coming up
                with solutions for both design and logic.
              </p>
              <p>
                I enjoy designing and building clean user interfaces, creating
                enjoyable interactions, and the skill building that comes with
                every project.
                {/* along with the learning process that
                comes with web development. */}
                {/* along with the pursuit to learn and discover more */}
                {/* finding creative and efficient
                solutions to problems. */}
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
            <ImageWrapper>{renderAboutImage()}</ImageWrapper>
          </RightContent>
        </FlexWrapper>
      </Layout>
    </section>
  );
};

export default About;
