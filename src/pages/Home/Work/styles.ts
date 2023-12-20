import styled from "styled-components";
import { WorkCardImgProps } from "../../../utils/models";
import texture from "../../../assets/texture.png";
import { uiSize } from "../../../utils/mobileScreens";

export const Card = styled.div`
  background-color: ${(props) => props.theme.tertiaryColor};
  background-image: url(${texture});
  background-position: center;
  background-repeat: repeat;
  background-size: auto;
  width: 100%;
  padding: 30px;
  margin-bottom: 40px;
  border-radius: 5px;
  position: relative;
  box-shadow: ${(props) => props.theme.boxShadow};

  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    color: ${(props) => props.theme.body};
    font-size: 1.5rem;
  }
`;

export const LinkBox = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px 10px;

  .icon {
    color: ${(props) => props.theme.body};
    font-size: 1.5rem;
  }
`;

export const MutedText = styled.p`
  color: ${(props) =>
    props.theme.darkTheme ? props.theme.headerText : "#cfcfcf"};
  font-size: 0.8rem;
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div<WorkCardImgProps>`
  background-image: url(${(props) => props.projectImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 300px;
  height: 175px;
  margin-left: 15px;
  border-radius: 5px;
`;

export const ContentText = styled.p`
  color: #f5eee6;
  margin: 5px 0 20px 0;
  // padding-left: 50px;

  @media ${uiSize.tablet} {
    margin-bottom: 45px;
  }
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 10px 10px 0;
  max-width: 80%;

  & .tech {
    border: 2px solid ${(props) => props.theme.body};
    border-radius: 3px;
    padding: 0 8px;
    line-height: 22px;
    margin-left: 4px;

    @media ${uiSize.tablet} {
      margin-top: 10px;
    }
  }
`;
