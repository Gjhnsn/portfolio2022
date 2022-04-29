import styled from "styled-components";
import { uiSize } from "../../utils/mobileScreens";

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 5px solid white;

  @media ${uiSize.mobileLandscape} {
    flex-direction: column;
    
  }
`;

// ------------------------------------- left side content

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;

  @media ${uiSize.mobileLandscape} {
    max-width: 100%;
  }
`;

export const Underline = styled.div`
  width: 80%;
  height: 2px;
  background-color: ${(props) => props.theme.accentColor};
  margin: 20px 0;
`;

export const TextWrapper = styled.div`
  align-self: flex-end;
  padding-left: 100px;
  margin-bottom: 20px;
`;

export const ToolList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 200px));
  width: 100%;
`;

export const ToolListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const TechTool = styled.p`
  color: ${(props) => props.theme.secondaryText};
  font-family: 'Sora', sans-serif;
  font-size: .8rem;
`;

// ----------------------------------------- right side content

export const RightContent = styled.div`
  max-width: 50%;
  display: block;
  position: relative;

  @media ${uiSize.mobileLandscape} {
    max-width: 100%;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  height: 425px;
  width: 425px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.boxShadow};

  @media ${uiSize.mobileLandscape} {
    height: 300px;
    width: 300px;
  }

/* ------------------------ Gold accent border */
  &:after {
    content: "";
    position: absolute;
    display: block;
    z-index: -1;
    height: 425px;
    width: 425px;
    border: 2px solid ${(props) => props.theme.accentColor};
    border-radius: 10px;
    top: 17px;
    left: 17px;
    transition: transform .3s;
    box-shadow: ${(props) => props.theme.secondaryBoxShadow};

    @media ${uiSize.mobileLandscape} {
    height: 300px;
    width: 300px;
  }
  }

  &:hover::after {
      content: "";
      transform: translateY(-9%) translateX(-9%);
    }
`;

export const AboutImage = styled.div`
  height: 100%;
  width: 100%;
  background-position: 50% 50%;
  background-size: 100%;
  image-rendering: -webkit-optimize-contrast;
  transform: scale(1.2);
  transition: .7s ease;
  
/* ----------------------------- gradient overlay */
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient${(props) => props.theme.secondaryGradient};
    z-index: 10;
  }

  &:hover {
    transform: scale(1);
  }
`;
