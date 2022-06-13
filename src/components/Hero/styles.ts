import styled, { keyframes } from "styled-components";
import background from "../../assets/flower.webp";
import { uiSize } from "../../utils/mobileScreens";

const onStart = keyframes`
{
  0% {
      opacity: 0;
      transform: translateY(75px);
  }
100% {
    transform: translateY(0);
    opacity: 1;
}
}`;

const squareFade = keyframes`
{
  0% {
      opacity: 0;
  }
100% {
    opacity: 1;
}
}`;

export const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  top: 100px;
  width: 100%;
  z-index: 10;

  @media ${uiSize.mobileLandscape} {
    top: -18vh;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameHeader = styled.h1`
  animation: ${onStart} 1s 1 ease forwards;

  @media ${uiSize.laptop13in} {
    font-size: 4.5rem;
  }

  @media ${uiSize.bigTablet} {
    font-size: 4rem;
  }

  @media ${uiSize.smallTablet} {
    font-size: 3.2rem;
  }

  @media ${uiSize.mobileLandscape} {
    font-size: 2.8rem;
  }

  @media ${uiSize.mobile} {
    font-size: 2.2rem;
    letter-spacing: 2px;
  }
`;

export const SubTitle = styled.div`
  animation: ${onStart} 1s 1 ease forwards;
  animation-delay: 0.2s;
  opacity: 0;
`;

export const SubText = styled.h3`
  @media ${uiSize.mobileLandscape} {
    font-size: 1.5rem;
  }

  @media ${uiSize.mobile} {
    font-size: 1.3rem;
  }
`;

export const ImageBackground = styled.div`
  background-image: linear-gradient${(props) => props.theme.projectGradient},
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


// ---------------- accent square elements

// ---------------- square wrapper = same size as background image
export const SquareWrapper = styled.div`
  height: 100%;
  width: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  right: 0;

  @media ${uiSize.smallTablet} {
    width: 100%;
  }
`;

export const BottomSquare = styled.div`
  height: 350px;
  width: 350px;
  border-width: ${(props) => props.theme.borderWidth};
  border-style: solid;
  border-color: ${({theme}) => theme.accentColor};
  border-radius: 10px;
  position: relative;
  left: 130px;
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
  font-weight: 600;
  font-size: 0;
  font-family: "Sora", sans-serif;
  transition: font-size 0.2s ease;
  animation: ${squareFade} 1.7s 1 ease-in forwards;
  animation-delay: 0.5s;
  opacity: 0;

  @media ${uiSize.laptop13in} {
    height: 275px;
    width: 275px;
    top: 120px;
  }

  @media ${uiSize.bigTablet} {
    
  }

  @media ${uiSize.tablet} {
    
  }

  @media ${uiSize.smallTablet} {
    height: 240px;
    width: 240px;
    left: 280px;
    };

  @media ${uiSize.mobileLandscape} {
    height: 200px;
    width: 200px;
    top: 190px;
    left: 130px;
  }

  @media ${uiSize.mobile} {
    top: 190px;
    left: 110px;
    height: 175px;
    width: 175px;
  }

  @media ${uiSize.smallMobile} {
    left: 110px;
  }
`;

export const TopSquare = styled.div`
  height: 275px;
  width: 275px;
  border-width: ${(props) => props.theme.borderWidth};
  border-style: solid;
  border-color: ${(props) => props.theme.accentColor};
  border-radius: 10px;
  position: relative;
  right: 450px;
  bottom: 125px;
  align-self: center;
  box-shadow: ${(props) => props.theme.secondaryBoxShadow};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.headerText};
  font-weight: 600;
  font-size: 0;
  font-family: "Sora", sans-serif;
  transition: font-size 0.2s ease;
  animation: ${squareFade} 1.7s 1 ease-in forwards;
  animation-delay: 0.2s;
  opacity: 0;

  @media ${uiSize.laptop13in} {
    height: 225px;
    width: 225px;
    bottom: 90px;
    right: 330px;
  }

  @media ${uiSize.smallTablet} {
    right: 120px;
    bottom: 70px;
    height: 200px;
    width: 200px;
  }

  @media ${uiSize.mobileLandscape} {
    height: 150px;
    width: 150px;
    top: 80px;
    right: 180px;
  }

  @media ${uiSize.mobile} {
    top: 80px;
    right: 160px;
    height: 125px;
    width: 125px;
  }
`;
