import styled from "styled-components";
import { uiSize } from "../../utils/mobileScreens";
import { motion } from "framer-motion";

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid pink;


  @media ${uiSize.smallTablet} {
    flex-direction: column;
  }
`;

// ------------------------------------- top content

export const TopContent = styled(motion.div)`
  display: flex;
  max-width: 100%;

  @media ${uiSize.bigTablet} {
    max-width: 100%;
  }

  @media ${uiSize.smallTablet} {
    max-width: 100%;
    flex-direction: column;
  }
`;

export const Underline = styled.div`
  width: 80%;
  height: ${(props) => props.theme.borderWidth};
  background-color: ${(props) => props.theme.accentColor};
  margin: 20px 0;
`;

export const TextWrapper = styled.div`
  align-self: center;
  padding: 0 20px;

  p:nth-child(even) {
    margin: 15px 0px;
  }

  span {
    color: ${(props) => props.theme.tertiaryColor};
    font-weight: 400;
    font-size: 24px;
    width: 100%;
    display: inline-block;
  }

  @media ${uiSize.bigTablet} {
    padding-left: 20px;
    padding-right: 10px;
  }

  @media ${uiSize.tablet} {
    padding-left: 20px;
  }

  @media ${uiSize.mobile} {
    padding-left: 15px;
  }
`;

export const ImageRelativeContainer = styled.div`
  position: relative;

  @media ${uiSize.smallTablet} {
    align-self: center;
    margin-top: 20px;
  }
`

export const ImageWrapper = styled.div`
  height: 425px;
  width: 425px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.boxShadow};

  @media ${uiSize.bigTablet} {
    height: 325px;
    width: 325px;
  }

  @media ${uiSize.tablet} {
    height: 265px;
    width: 265px;
    margin-bottom: 25px;
  }

  @media ${uiSize.smallTablet} {
    height: 325px;
    width: 325px;
  }

  @media ${uiSize.mobileLandscape} {
    height: 300px;
    width: 300px;
  }

  @media ${uiSize.smallMobile} {
    height: 280px;
    width: 280px;
  }

  /* ------------------------ Gold accent border */
  &:after {
    content: "";
    position: absolute;
    display: block;
    z-index: -1;
    height: 425px;
    width: 425px;
    border: solid ${(props) => props.theme.accentColor};
    border-width: ${(props) => props.theme.borderWidth};
    border-radius: 10px;
    top: 17px;
    left: 17px;
    transition: all 0.3s;
    box-shadow: ${(props) => props.theme.secondaryBoxShadow};

    @media ${uiSize.bigTablet} {
      height: 325px;
      width: 325px;
      top: 13px;
      left: 13px;
    }

    @media ${uiSize.tablet} {
      height: 265px;
      width: 265px;
      top: 10px;
      left: 10px;
    }

    @media ${uiSize.smallTablet} {
      height: 325px;
      width: 325px;
    }

    @media ${uiSize.mobileLandscape} {
      height: 300px;
      width: 300px;
    }

    @media ${uiSize.smallMobile} {
      height: 280px;
      width: 280px;
    }
  }

  &:hover::after {
    content: "";
    border: none;
    border-radius: 5px;
    transform: translateY(-17px) translateX(-17px);
    box-shadow: ${(props) => props.theme.aboutBorder};

    @media ${uiSize.bigTablet} {
      transform: translateY(-13px) translateX(-13px);
    }

    @media ${uiSize.tablet} {
      transform: translateY(-10px) translateX(-10px);
    }
  }
`;

export const AboutImageOverlay = styled.div`
  height: 100%;
  width: 100%;
  transform: scale(1.2);
  transition: 0.7s ease;

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

export const AboutImage = styled.img`
  background-position: 50%, 50%;
  width: 100%;
  height: 100%;
`;



// ----------------------------------------- bottom content

export const BottomContent = styled.div`
  margin-top: 40px;
  width: 100%;
  align-self: flex-start;

  @media ${uiSize.bigTablet} {
  }

  @media ${uiSize.smallTablet} {
    max-width: 100%;
    margin-top: 15px;
  }

  @media ${uiSize.mobileLandscape} {
    max-width: 100%;
    align-items: center;
  }
`;

export const ToolContainer = styled.div`
  width: 100%;
`

export const ToolList = styled.ul`
  margin-left: 20px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, 1fr); 
  width: 100%;

  p:nth-child(even) {
    margin: 0px;
  }

  @media ${uiSize.bigTablet} {
    grid-template-columns: repeat(4, 1fr); 

  }

  @media ${uiSize.tablet} {
    grid-template-columns: repeat(2, minmax(150px, 180px));
  }
`;

export const ToolListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  width: 100%;

  @media ${uiSize.mobile} {
    margin: 0 5px 5px 0;
  }
`;

export const TechTool = styled.p`
  color: ${(props) => props.theme.secondaryText};
  font-family: "Sora", sans-serif;
  font-size: 0.8rem;

  @media ${uiSize.mobile} {
    font-size: 0.8rem;
  }
`;


