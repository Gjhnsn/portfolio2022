import styled from "styled-components";
import img from "../../assets/treeBg.jpg";

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// ------------------------------------- left side content

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
  align-items: center;
`;

export const TechTool = styled.p`
  color: ${(props) => props.theme.secondaryText};
`;

// ----------------------------------------- right side content

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
  /*  keep no space b/w linear-gradient and props or image wont render */
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
