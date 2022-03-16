import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 50%;
  border: 1px solid white;
`;

export const ProjectCardImage = styled.div`
  height: 450px;
  width: 500px;
  /* background-image: linear-gradient(rgba(18, 18, 18, 0.55), rgba(18, 18, 18, 0.55)) ; */
  background-size: cover;
  background-position: 50% 50%;
  transition: transform 0.5s ease;
  transform: translateX(-20px);
  /* temporary code below for styling */
  /* transform: translateX(-45%); */
  /* delete above when styling is done */
  margin: 0 5px;
  z-index: 1;
  position: absolute;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  justify-content: center;
  align-items: center;

    /* background: linear-gradient(rgba(18, 18, 18, 0.55), rgba(18, 18, 18, 0.55)); */

`;

export const ProjectCardData = styled.div`
  height: 500px;
  width: 500px;
  transition: transform 0.5s ease;
  transform: translateX(5px);
  /* temporary code below for styling */
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

export const ProjectContainer = styled.div`
  /* border: 1px solid purple; */
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
      transition: transform 0.5s ease;
      transform: translateX(-45%);
      
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

// project data styles (right card)

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
  /* font-size: 36px; */
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
