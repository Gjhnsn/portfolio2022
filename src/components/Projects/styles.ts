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
  background-color: grey;
  border: gold 1px solid;
  transition: transform 0.5s ease;
  transform: translateX(-20px);
  /* temporary code below for styling */
  transform: translateX(-45%);
  /* delete above when styling is done */
  margin: 0 5px;
  z-index: 1;
  position: absolute;
`;

export const ProjectCardData = styled.div`
  height: 500px;
  width: 500px;
  border: green 3px solid;
  transition: transform 0.5s ease;
  transform: translateX(5px);
  /* temporary code below for styling */
  transform: translateX(45%);
    /* delete above when styling is done */
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 25px;
  padding-left: 70px;
`;

export const ProjectContainer = styled.div`
  border: 1px solid purple;
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
`

export const IconPlaceHolder = styled.div`
  width: 30px;
  height: 30px;
  background-color: grey;
  margin: 25px 0 0 25px;
`

export const ProjectName = styled.h3`
  color: ${(props) => props.theme.accentColor};
  /* font-size: 36px; */
  margin: 20px 0 35px 0;
`

export const Description = styled.div`
  text-align: right;
`

export const CardFooter = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
  padding-left: 70px;
  padding-bottom: 25px;
`

export const ProjectTech = styled.li`
  color: ${(props) => props.theme.secondaryText}
`