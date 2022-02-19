import styled, { keyframes } from "styled-components";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const onStart = keyframes`
{
  0% {
      opacity: 0;
  }
100% {
    opacity: 1;
}
}`;

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 30px 0px;
  padding: 0 50px;
  border: 1px solid red;
`;

// ---------------------- logo svg imported here as react component
export const StyledLogo = styled(Logo)`
  fill: ${(props) => props.theme.tertiaryColor};
  animation: ${onStart} 1.3s 1 ease forwards;
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const Link = styled.li`
  margin-left: 50px;
  opacity: 0;
  color: ${(props) => props.theme.tertiaryColor};
  animation: ${onStart} 1.3s 1 ease forwards;

  &:first-child {
    margin-left: 0;
  }
`;
