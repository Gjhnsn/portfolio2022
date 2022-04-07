import styled from "styled-components";
import { ProjectCardImgProps } from "../../utils/models";
import { MdOpenInNew } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";



export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 50%;
`;

export const ProjectCardImage = styled.div<ProjectCardImgProps>`
  height: 450px;
  width: 490px;
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
  z-index: 2;
`;

export const ProjectCardOverlay = styled.div`
  background: rgba(40, 40, 40, .5);
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

// ----------------------------------------- alternate title style, keeping until final decision
// export const ProjectTitle = styled.h3`
//   transition: all 0.5s ease;
//   font-size: 40px;
//   padding: 8px 30px;
//   text-align: center;
//   opacity: 1;
//   z-index: 10;
//   border-radius: 5px;
//   color: ${(props) => props.theme.headerText};
//   letter-spacing: 7px;
//   border: 2px solid ${(props) => props.theme.accentColor};
//   background: linear-gradient${(props) => props.theme.gradientColor};
//  position: absolute;
//  bottom: 0;
//  left: 0;
// `;

export const TitleContainer = styled.div`
    transform: rotate(270deg);
    position: absolute;
    margin-right: 620px;
    display: flex;
    align-items: center;
`

export const ProjectTitle = styled.h3`
  transition: all 0.5s ease;
  font-size: 55px;
  padding: 3px 10px;
  text-align: center;
  opacity: 1;
  z-index: 10;
  color: ${(props) => props.theme.tertiaryColor};
  letter-spacing: 10px;  
`;


export const ProjectCardData = styled.div`
  height: 500px;
  width: 500px;
  transition: all .5s ease;
  transform: translateX(5px);

  /* temporary code below for styling purposes */
  /* transform: translateX(45%); */
  /* delete above when styling is done */

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 30px 30px 30px 70px;
  opacity: 0;
`;

export const CardBorder = styled.div`
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.accentColor};
  box-shadow: ${(props) => props.theme.secondaryBoxShadow};
  transition: transform 0.5s ease;
  z-index: 1;
`

export const ProjectContainer = styled.div`
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
      transform: translateX(-47.5%);
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
      font-size: 20px;
      padding: 0 30px;
    }
  }

  /* slide bottom card right on hover */
  &:hover {
    ${CardBorder} {
      transition: transform 0.5s ease;
      transform: translateX(45%);
    }
  }

  &:hover {
    ${ProjectCardData} {
      transition: all .8s ease;
      opacity: 1;
    }
  }
`;

// ------------------------------------- project data styles begin (right card)
export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;

// export const IconPlaceHolder = styled.div`
//   width: 30px;
//   height: 30px;
//   background-color: grey;
//   margin: 0 0 0 25px;
// `;

export const OpenIcon = styled(MdOpenInNew)`
  width: 34px;
  height: 34px;
  color: ${(props) => props.theme.tertiaryColor};
  margin: 0 0 0 25px;
  cursor: pointer;
`

export const ViewCodeIcon = styled(VscGithub)`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.tertiaryColor};
  margin: 0 0 0 25px;
  cursor: pointer;
  z-index: 15;
`

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
