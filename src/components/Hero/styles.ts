import styled, { keyframes } from "styled-components";
import background from "../../assets/pine.jpg";

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

export const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  top: 100px;
  width: 100%;
  z-index: 10;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameHeader = styled.h1`
  text-shadow: -0.8px -0.8px 0 ${(props) => props.theme.body},
    0.8px -0.8px 0 ${(props) => props.theme.body},
    -0.8px 0.8px 0 ${(props) => props.theme.body},
    0.8px 0.8px 0 ${(props) => props.theme.body};
    animation: ${onStart} 1s 1 ease forwards;
`;

export const SubTitle = styled.div`
  animation: ${onStart} 1s 1 ease forwards;
  animation-delay: .2s;
  opacity: 0;
`;

export const ImageBackground = styled.div`
  /* may dynamically change bg color with mode */
  background-image: linear-gradient${(props) => props.theme.gradientColor},
    url(${background});
  height: 100%;
  width: 40%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  z-index: -10;
  top: 0;
  right: 0;
`;

// ---------------- accent square elements

// ---------------- square wrapper = same size as background image
export const SquareWrapper = styled.div`
  height: 100%;
  width: 40%;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Square1 = styled.div`
  height: 350px;
  width: 350px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.accentColor};
  border-radius: 10px;
  position: relative;
  left: 150px;
  top: 420px;
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
  transition: font-size .2s ease;
  animation: ${onStart} 1s 1 ease forwards;
  animation-delay: .9s;
  opacity: 0;


  &:hover {
    color: ${(props) => props.theme.headerText};
    font-weight: 600;
    font-size: 14rem;
    font-family: "Sora", sans-serif;
    transition: font-size .2s ease;
    text-shadow: -0.8px -0.8px 0 ${(props) => props.theme.body},
    0.8px -0.8px 0 ${(props) => props.theme.body},
    -0.8px 0.8px 0 ${(props) => props.theme.body},
    0.8px 0.8px 0 ${(props) => props.theme.body};
  }
`;

export const Square2 = styled.div`
  height: 275px;
  width: 275px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.accentColor};
  border-radius: 10px;
  position: relative;
  right: 70px;
  bottom: 125px;
  box-shadow: ${(props) => props.theme.secondaryBoxShadow};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.headerText};
  font-weight: 600;
  font-size: 0;
  font-family: "Sora", sans-serif;
  transition: font-size .2s ease;
  animation: ${onStart} 1s 1 ease forwards;
  animation-delay: .6s;
  opacity: 0;


  &:hover {
    color: ${(props) => props.theme.headerText};
    font-weight: 600;
    font-size: 10rem;
    font-family: "Sora", sans-serif;
    transition: font-size .2s ease;
    text-shadow: -0.8px -.8px 0 ${(props) => props.theme.body},
    0.8px -0.8px 0 ${(props) => props.theme.body},
    -0.8px 0.8px 0 ${(props) => props.theme.body},
    0.8px 0.8px 0 ${(props) => props.theme.body};
  }
`;
