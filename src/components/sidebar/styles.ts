import styled, { keyframes } from "styled-components";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";



// ----------------------------- sidebar float up animation
const onStart = keyframes`
{
  0% {
      opacity: 0;
  }
100% {
    transform: translateY(-100px);
    opacity: 1;
}
}`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  bottom: -100px;
  margin-left: 20px;
  animation: ${onStart} 1s 1 ease forwards;
  animation-delay: 2.3s;
  opacity: 0;
  transform-origin: bottom;
`;

export const LongLine = styled.div`
  width: 1px;
  height: 80px;
  background-color: ${(props) => props.theme.tertiaryColor};
  margin-top: 20px;
`;

export const LinkedInIcon = styled(AiOutlineLinkedin)`
  width: 30px;
  height: auto;
  color: ${(props) => props.theme.tertiaryColor};
  cursor: pointer;
  transition: all .3s;

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

  &:hover {
    transform: translateY(-3px);
    color: ${(props) => props.theme.linkHoverColor};
}
`;

export const Email = styled.p`
  transform: rotate(180deg);
  text-orientation: sideways;
  writing-mode: vertical-lr;
  color: ${(props) => props.theme.tertiaryColor};
  font-size: .8rem;
  font-weight: 400;
  letter-spacing: .9px;
`;

export const ShortLine = styled.div`
  width: 1px;
  height: 20px;
  background-color: ${(props) => props.theme.tertiaryColor};
  margin: 20px 0;
`;
