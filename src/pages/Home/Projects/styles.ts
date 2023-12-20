import styled from "styled-components";
import { ProjectCardImgProps } from "../../../utils/models";
import { MdOpenInNew } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { uiSize } from "../../../utils/mobileScreens";
import { motion } from "framer-motion";

export const HeaderContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  min-width: 50%;
`;

export const ProjectCardImage = styled.div<ProjectCardImgProps>`
  height: 450px;
  width: 490px;
  transform: translateX(-20px);
  background-image: url(${(props) => props.projectImg});
  background-size: cover;
  background-position: center;
  margin: 0 5px;
  position: absolute;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  z-index: 2;

  @media ${uiSize.projectLayout} {
    transform: translateX(0px);
    align-self: flex-start;
    z-index: 2;
    right: 75px;
    top: 65px;
    margin: -65px 0 0 0;
    position: relative;
  }

  @media ${uiSize.smallTablet} {
    display: none;
  }

  @media ${uiSize.mobileLandscape} {
    display: none;
  }
`;

export const ProjectCardOverlay = styled.div`
  // project overlay here
  background-image: linear-gradient ${(props) => props.theme.projectGradient};
  opacity: 1;
  border-radius: 9px;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;

  @media ${uiSize.projectLayout} {
    display: none;
  }
`;

export const TitleContainer = styled.div`
  transform: rotate(270deg);
  position: absolute;
  margin-right: 620px;
  display: flex;
  align-items: center;

  @media ${uiSize.projectLayout} {
    display: none;
  }
`;

export const ProjectTitle = styled.h3`
  transition: all 0.5s ease;
  font-size: 3rem;
  font-weight: 400;
  padding: 3px 10px;
  text-align: center;
  opacity: 1;
  z-index: 10;
  color: ${(props) => props.theme.tertiaryColor};
  letter-spacing: 10px;
`;

export const ProjectCardData = styled.div<ProjectCardImgProps>`
  height: 500px;
  width: 500px;
  transition: all 0.5s ease;
  transform: translateX(5px);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 25px 30px 30px 65px;
  opacity: 0;

  @media ${uiSize.projectLayout} {
    opacity: 1;
    transform: translateX(0px);
    transition: none;
    padding: 30px;
    min-height: 500px;
    height: auto;
  }

  @media ${uiSize.smallTablet} {
    // small screen background image
    width: auto;
    background-image: linear-gradient
        ${(props) => props.theme.mobileProjectGradient},
      url(${(props) => props.projectImg});
    background-size: cover;
    background-position: 50% 50%;
    border-radius: 10px;
  }
`;

export const CardBorder = styled.div`
  border-radius: 10px;
  border-width: ${(props) => props.theme.borderWidth};
  border-style: solid;
  border-color: ${(props) => props.theme.accentColor};
  box-shadow: ${(props) => props.theme.secondaryBoxShadow};
  transition: transform 0.5s ease;
  z-index: 1;

  @media ${uiSize.projectLayout} {
    align-self: flex-end;
    background-color: ${(props) => props.theme.body};
    position: relative;
    left: 65px;
  }

  @media ${uiSize.smallTablet} {
    left: 0px;
  }

  @media ${uiSize.mobileLandscape} {
    background: transparent;
  }
`;

export const ProjectContainer = styled(motion.div)`
  padding: 0 15px;
  margin-top: 70px;
  margin-bottom: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    width: 100%;

    @media ${uiSize.projectLayout} {
      width: auto;
    }
  }

  /* slide top card to left on hover */
  &:hover {
    ${ProjectCardImage} {
      transition: all 0.5s ease;
      transform: translateX(-47.5%);

      @media ${uiSize.projectLayout} {
        transform: translateX(0%);
        transition: none;
      }
    }
  }

  /* fade out overlay on hover */
  &:hover {
    ${ProjectCardOverlay} {
      transition: all 0.5s ease;
      opacity: 0;

      @media ${uiSize.projectLayout} {
        transition: none;
      }
    }
  }

  /* fade out title on hover */
  &:hover {
    ${ProjectTitle} {
      transition: all 0.4s ease;
      opacity: 0;
      font-size: 20px;
      padding: 0 30px;
    }
  }

  /* slide bottom card right on hover */
  &:hover {
    ${CardBorder} {
      transition: transform 0.5s ease;
      transform: translateX(45%);

      @media ${uiSize.projectLayout} {
        transform: translateX(0);
        transition: none;
      }
    }
  }

  &:hover {
    ${ProjectCardData} {
      transition: all 0.8s ease;
      opacity: 1;

      @media ${uiSize.projectLayout} {
        transition: none;
      }
    }
  }

  @media ${uiSize.projectLayout} {
    height: auto;
    width: auto;
    flex-direction: column;
  }

  @media ${uiSize.mobileLandscape} {
    padding: 0;
  }
`;

// ------------------------------------- project data styles begin (right card)
export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const OpenIcon = styled(MdOpenInNew)`
  width: 34px;
  height: 34px;
  color: ${(props) => props.theme.tertiaryColor};
  margin: 0 0 0 25px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: ${(props) => props.theme.linkHoverColor};
  }
`;

export const ViewCodeIcon = styled(VscGithub)`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.tertiaryColor};
  margin: 0 0 0 25px;
  cursor: pointer;
  z-index: 15;
  transition: all 0.3s;

  &:hover {
    color: ${(props) => props.theme.linkHoverColor};
  }
`;

export const ProjectName = styled.h3`
  color: ${(props) => props.theme.accentColor};
  margin: 20px 0 20px 0;
  font-size: 1.8rem;
`;

export const Description = styled.div`
  text-align: left;
  text-indent: 50px;

  p {
    &:nth-child(2) {
      text-indent: 0px;
    }
    a {
      color: ${(props) => props.theme.accentColor};
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      font-weight: 300;
      letter-spacing: 1px;
      line-height: 30px;
    }
  }

  @media ${uiSize.projectLayout} {
    padding-bottom: 80px;
  }
`;

export const CardFooter = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
  padding-left: 54px;
  padding-bottom: 20px;
  padding-right: 30px;
  display: flex;
  flex-wrap: wrap;

  @media ${uiSize.projectLayout} {
    padding-left: 19px;
  }
`;

export const ProjectTech = styled.li`
  display: flex;
  align-items: center;
`;

export const TechList = styled.p`
  color: ${(props) => props.theme.secondaryText};
  font-size: 0.8rem;
  font-family: "Sora", sans-serif;
`;
