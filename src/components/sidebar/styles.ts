import styled, { keyframes } from "styled-components";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { uiSize } from "../../utils/mobileScreens";


// ----------------------------- sidebar float up animation
const onStart = keyframes`

  0% {
      opacity: 0;
  }
100% {
    transform: translateY(-100px);
    opacity: 1;

}`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  bottom: -100px;
  margin-left: 20px;
  animation: ${onStart} 1s 1 ease forwards;
  animation-delay: 5.6s;
  opacity: 0;
  transform-origin: bottom;

  @media ${uiSize.mobileLandscape} {
    position: static;
    bottom: 0;
    animation: none;
    opacity: 1;
    justify-content: space-between;
    height: 65px;
    width: 90%;
    z-index: 110;
    padding-bottom: 0;
    margin: 20px auto 0 auto;  
    }
`;

export const IconWrapper = styled.div`
  
  display: flex;
  flex-direction: column-reverse;


    @media ${uiSize.mobileLandscape} {
      width: 35%;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-around;
      align-items: center;
    }
`

export const LongLine = styled.div`
  width: 1px;
  height: 80px;
  background-color: ${(props) => props.theme.tertiaryColor};
  margin-top: 20px;

@media ${uiSize.mobileLandscape} {
    display: none;
  }
`;

export const LinkedInIcon = styled(AiOutlineLinkedin)`
  width: 30px;
  height: auto;
  color: ${(props) => props.theme.tertiaryColor};
  cursor: pointer;
  transition: all .3s;

  @media ${uiSize.mobileLandscape} {
    color: ${(props) => props.theme.contentText};
    opacity: .7;
    height: 30px;
    width: 30px;
  }

  &:hover {
    transform: translateY(-3px);
    color: ${(props) => props.theme.linkHoverColor};
}
`;

export const GithubIcon = styled(VscGithub)`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.tertiaryColor};
  margin-bottom: 20px;
  cursor: pointer;
  padding: 2px;
  transition: all .3s;

  @media ${uiSize.mobileLandscape} {
    margin-bottom: 0;
    color: ${(props) => props.theme.contentText};
    opacity: .7;
    height: 30px;
    width: 30px;
  }

  &:hover {
    transform: translateY(-3px);
    color: ${(props) => props.theme.linkHoverColor};
}
`;

export const EmailWrapper = styled.div`
  position: relative;
  display: flex;
`

export const Email = styled.p`
  transform: rotate(180deg);
  text-orientation: sideways;
  writing-mode: vertical-lr;
  color: ${(props) => props.theme.tertiaryColor};
  font-size: .8rem;
  font-weight: 400;
  letter-spacing: .9px;

  @media ${uiSize.mobileLandscape} {
    transform: rotate(0deg);
    writing-mode: horizontal-tb;
    color: ${(props) => props.theme.contentText};
    opacity: .8;
    font-weight: 200;
    font-size: .9rem;
  }
`;

export const ShortLine = styled.div`
  width: 1px;
  height: 20px;
  background-color: ${(props) => props.theme.tertiaryColor};
  margin: 20px 0;

  @media ${uiSize.mobileLandscape} {
    display: none;
  }
`;

export const ToggleWrapper = styled.div`
  @media ${uiSize.mobileLandscape} {
    display: none;
  }
`