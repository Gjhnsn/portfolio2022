import styled, { keyframes } from "styled-components";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";



// ----------------------------- sidebar float up animation
const onStart = keyframes`
{
  0% {
      opacity: 0;
      transform: scale(0.5);
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
  animation: ${onStart} 1.3s 1 ease forwards;
  transform-origin: bottom;
  border: 1px solid blue;
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

`;

export const GithubIcon = styled(VscGithub)`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.tertiaryColor};
  margin-bottom: 20px;
  cursor: pointer;
  padding: 2px;
`;

export const Email = styled.p`
  transform: rotate(180deg);
  text-orientation: sideways;
  writing-mode: vertical-lr;
  color: ${(props) => props.theme.tertiaryColor};
`;

export const ShortLine = styled.div`
  width: 1px;
  height: 20px;
  background-color: ${(props) => props.theme.tertiaryColor};
  margin: 20px 0;
`;
