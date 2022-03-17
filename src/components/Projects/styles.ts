import styled, { keyframes } from "styled-components";
import { ProjectCardImgProps } from "../../utils/models";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 50%;
  border: 1px solid white;
`;

export const ProjectCardImage = styled.div<ProjectCardImgProps>`
  height: 450px;
  width: 500px;
  transform: translateX(-20px);

  background-image: url(${(props) => props.projectImg});
  background-size: cover;
  background-position: 50% 50%;

  /* temporary code below for styling purposes */
  /* transform: translateX(-45%); */
  /* delete above when styling is done */

  margin: 0 5px;
  position: absolute;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
`;

export const ProjectCardOverlay = styled.div`
  background: ${(props) => props.theme.projectGradient};
  opacity: 1;
  border-radius: 9px;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
`;

export const ProjectTitle = styled.h3`
  transition: all 0.5s ease;
  font-size: 40px;
  padding: 8px 30px;
  text-align: center;
  opacity: 1;
  z-index: 10;
  border-radius: 5px;
  color: ${(props) => props.theme.headerText};
  letter-spacing: 7px;
  border: 2px solid ${(props) => props.theme.accentColor};
  background: linear-gradient${(props) => props.theme.gradientColor};
`;


export const ProjectCardData = styled.div`
  height: 500px;
  width: 500px;
  transition: transform 0.5s ease;
  transform: translateX(5px);

  /* temporary code below for styling purposes */
  /* transform: translateX(45%); */
  /* delete above when styling is done */

  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 30px 30px 30px 70px;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.accentColor};
  box-shadow: ${(props) => props.theme.secondaryBoxShadow};
`;

export const ProjectContainer = styled.div<ProjectCardImgProps>`
  padding: 0 15px;
  margin-top: 70px;
  margin-bottom: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    width: 100%;
  }

  /* slide top card to left on hover */
  &:hover {
    ${ProjectCardImage} {
      transition: all 0.5s ease;
      transform: translateX(-45%);
    }
  }

  /* fade out overlay on hover */
  &:hover {
    ${ProjectCardOverlay} {
      transition: all 0.5s ease;
      opacity: 0;
    }
  }

  /* fade out title on hover */
  &:hover {
    ${ProjectTitle} {
      transition: all 0.4s ease;
      opacity: 0;
      font-size: 28px;
      padding: 0 30px;
    }
  }

  /* slide bottom card right on hover */
  &:hover {
    ${ProjectCardData} {
      transition: transform 0.5s ease;
      transform: translateX(45%);
    }
  }
`;

// ------------------------------------- project data styles begin (right card)
export const LinkWrapper = styled.div`
  display: flex;
`;

export const IconPlaceHolder = styled.div`
  width: 30px;
  height: 30px;
  background-color: grey;
  margin: 0 0 0 25px;
`;

export const ProjectName = styled.h3`
  color: ${(props) => props.theme.accentColor};
  margin: 20px 0 35px 0;
`;

export const Description = styled.div`
  text-align: right;
`;

export const CardFooter = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
  padding-left: 70px;
  padding-bottom: 30px;
  display: flex;
`;

export const ProjectTech = styled.li``;

export const TechList = styled.p`
  color: ${(props) => props.theme.secondaryText};
`;
