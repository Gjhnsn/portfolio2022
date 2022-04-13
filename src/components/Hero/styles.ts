import styled from "styled-components";
import background from "../../assets/treeBg.jpg";

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
  /* -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.body}; */
  text-shadow: -.8px -.8px 0 ${(props) => props.theme.body}, .8px -.8px 0 ${(props) => props.theme.body}, -.8px .8px 0 ${(props) => props.theme.body}, .8px .8px 0 ${(props) => props.theme.body};
`;

export const SubTitle = styled.div`
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
`

export const Square1 = styled.div`
  height: 350px;
  width: 350px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.accentColor};
  border-radius: 10px;
  position: relative;
  right: 50px;
  top: 120px;
  box-shadow: ${(props) => props.theme.secondaryBoxShadow};
`

export const Square2 = styled.div`
  height: 275px;
  width: 275px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.accentColor};
  border-radius: 10px;
  position: relative;
  left: 180px;
  top: 70px;
  box-shadow: ${(props) => props.theme.secondaryBoxShadow};

`