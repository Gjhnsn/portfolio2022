import styled from "styled-components";
import { uiSize } from "../../../utils/mobileScreens";
import { motion } from "framer-motion";

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media ${uiSize.smallTablet} {
    flex-direction: column;
  }
`;

// ------------------------------------- top content

export const Content = styled(motion.div)`
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
`;

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
  transform: scale(1.5) translateY(10%);
  transition: 0.7s ease;
  display: flex;
  justify-content: center;

  /* ----------------------------- gradient overlay */
  /* &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    display: flex; 
    width: 130%;
    height: 130%;
   // background: linear-gradient${(props) => props.theme.secondaryGradient};
    opacity: .7;
    z-index: 10;

  }
  &:hover:after {
     transform-origin: bottom;
     transform: translateX(100%);
     transition: .5s ease;
     } */

  &:hover {
    transform: scale(1.45) translate(1.5%, 8.5%);
  }
`;

export const AboutImage = styled.img`
  width: auto;
  height: 100%;
  position: absolute;
  top: 1.5%;
`;
