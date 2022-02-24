import styled from "styled-components";
import img from "../../assets/treeBg.jpg";

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;

export const Underline = styled.div`
  width: 80%;
  height: 2px;
  background-color: ${(props) => props.theme.accentColor};
  margin: 20px 0;
`;

export const TextWrapper = styled.div`
  align-self: flex-end;
  padding-left: 135px;
  margin-bottom: 20px;
`;

export const TechTool = styled.p`
  color: ${(props) => props.theme.secondaryText};
`;

// -------------------------------------- right box content

export const RightContent = styled.div`
  max-width: 50%;
`;

export const ImageWrapper = styled.div`
  height: 425px;
  width: 425px;
  border: 2px solid ${(props) => props.theme.accentColor};
  border-radius: 10px;
  overflow: hidden;
`;

export const SquarePlaceHolder = styled.div`
  height: 100%;
  width: 100%;
  background-image: linear-gradient${(props) => props.theme.gradientColor},
    url(${img});
  background-position: center;
  background-size: 100%;
  transform: scale(1.3);
  transition: 1s;

  &:hover {
    transform: scale(1);
  }
`;
