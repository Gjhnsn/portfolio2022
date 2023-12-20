import styled, { keyframes } from "styled-components";
import background from "../../../assets/flower.webp";
import { uiSize } from "../../../utils/mobileScreens";

const onStart = keyframes`

  0% {
      opacity: 0;
      transform: translateY(75px);
  }
100% {
    transform: translateY(0);
    opacity: 1;
}
`;

const squareFade = keyframes`

  0% {
      opacity: 0;
  }
100% {
    opacity: 1;
}`;

const squareRotate = keyframes`
  from { transform: rotate(0deg) translateX(40px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: absolute;
  width: 50%;
  z-index: 10;
  left: 15%;

  @media ${uiSize.smallTablet} {
    left: 12%;
  }

  @media ${uiSize.mobile} {
    left: 5%;
  }

  @media ${uiSize.xlScreen4k} {
    left: 15%;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameHeader = styled.h1`
  animation: ${onStart} 1s 1 ease forwards;
  animation-delay: 3.9s;
  opacity: 0;

  @media ${uiSize.bigTablet} {
    font-size: 8rem;
    line-height: 7rem;
  }

  @media ${uiSize.smallTablet} {
    font-size: 6rem;
    line-height: 5rem;
  }

  @media ${uiSize.mobileLandscape} {
    font-size: 4rem;
    line-height: 3.5rem;
  }

  @media ${uiSize.mobile} {
    font-size: 3.5rem;
    line-height: 3rem;
  }

  @media ${uiSize.xlScreen4k} {
    font-size: 18rem;
    line-height: 15rem;
  }
`;

export const SubTitle = styled.div`
  animation: ${onStart} 1s 1 ease forwards;
  animation-delay: 4.1s;
  opacity: 0;
`;

export const SubText = styled.h3`
  padding-left: 3px;

  @media ${uiSize.mobileLandscape} {
    font-size: 1.5rem;
  }

  @media ${uiSize.mobile} {
    font-size: 1.3rem;
  }

  @media ${uiSize.xlScreen4k} {
    font-size: 5rem;
    line-height: 4rem;
  }
`;

export const ImageBackground = styled.div`
  background-image: linear-gradient ${(props) => props.theme.projectGradient},
    url(${background});
  height: 100%;
  width: 40%;
  background-position: 30%;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  z-index: -10;
  bottom: 0;
  right: 0;

  @media ${uiSize.mobileLandscape} {
    height: 60%;
    width: 100%;
    bottom: 0;
    left: 0;
  }
`;

export const BlurOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 105%;
  width: 100vw;
  background-color: ${(props) => props.theme.bodyBlur};
  backdrop-filter: blur(8px);
  z-index: -1;
`;

// ---------------- accent square elements

// ---------------- square wrapper = same size as background image
export const SquareWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  overflow-x: hidden;

  @media ${uiSize.smallTablet} {
    width: 100%;
  }
`;

export const Square1 = styled.div`
  height: 350px;
  width: 350px;
  border-width: 8px;
  border-style: solid;
  border-color: ${({ theme }) => theme.accentColor};
  border-radius: 10px;
  position: relative;
  left: 10%;
  top: 155px;
  align-self: center;
  box-shadow: ${(props) => props.theme.secondaryBoxShadow};
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.headerText};
  transition: font-size 0.2s ease;
  animation: ${squareFade} 1.7s 1 ease-in forwards;
  animation-delay: 4.4s;
  opacity: 0;
  z-index: -2;

  @media ${uiSize.smallTablet} {
    height: 240px;
    width: 240px;
    top: 15%;
  }

  @media ${uiSize.mobileLandscape} {
    height: 250px;
    width: 200px;
    left: -10%;
    top: -1%;
  }

  @media ${uiSize.xlScreen4k} {
    height: 600px;
    width: 600px;
  }
`;

export const Square2 = styled.div`
  height: 400px;
  width: 400px;
  border-width: 8px;
  border-style: solid;
  border-color: ${(props) => props.theme.accentColor};
  border-radius: 20px;
  position: absolute;
  right: 25%;
  bottom: 10%;
  align-self: center;
  box-shadow: ${(props) => props.theme.secondaryBoxShadow};
  color: ${(props) => props.theme.headerText};
  transition: font-size 0.2s ease;
  animation: ${squareFade} 1.7s 1 ease-in forwards,
    ${squareRotate} 60s linear infinite;
  animation-delay: 4.1s;
  opacity: 0;
  z-index: -2;

  @media ${uiSize.laptop13in} {
    height: 325px;
    width: 325px;
    right: 30%;
  }

  @media ${uiSize.bigTablet} {
    height: 225px;
    width: 225px;
    right: 30%;
  }

  @media ${uiSize.mobile} {
    right: 40%;
    bottom: 7%;
    height: 175px;
    width: 175px;
  }

  @media ${uiSize.smallMobile} {
    height: 155px;
    width: 155px;
  }

  @media ${uiSize.xlScreen4k} {
    height: 700px;
    width: 700px;
  }
`;

export const Square3 = styled.div`
  height: 90%;
  width: 30%;
  border-width: 8px;
  border-style: solid;
  border-color: ${(props) => props.theme.accentColor};
  border-radius: 20px;
  position: absolute;
  right: -10%;
  top: -5%;
  align-self: center;
  box-shadow: ${(props) => props.theme.secondaryBoxShadow};
  color: ${(props) => props.theme.headerText};
  transition: font-size 0.2s ease;
  animation: ${squareFade} 1.7s 1 ease-in forwards;
  animation-delay: 4.3s;
  opacity: 0;
  z-index: -2;
`;
