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
import img6 from "../../assets/about/pro6.png";

// possible icon choice imports
import { FiTriangle, FiZap, FiChevronRight } from "react-icons/fi";
import { TiMinus, TiSpanner } from "react-icons/ti";

const About: FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const aboutImages: string[] = [img1, img2, img3, img4, img5, img6];

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
          <TiMinus style={{ marginRight: `10px` }} />
          <TechTool>{item}</TechTool>
        </ToolListItem>
      );
    });
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
              <ToolList>{renderTechTools()}</ToolList>
            </TextWrapper>
          </div>
        </LeftContent>
        <RightContent>
          <ImageWrapper>{renderAboutImage()}</ImageWrapper>
        </RightContent>
      </FlexWrapper>
    </Layout>
  );
};

export default About;
