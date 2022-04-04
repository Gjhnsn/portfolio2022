import styled, { keyframes } from "styled-components";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { IHeaderProps } from '../../utils/models'

const onStart = keyframes`
{
  0% {
      opacity: 0;
  }
100% {
    opacity: 1;
}
}`;


// ---------------------------- TODO --- complete nav scroll styles

export const Nav = styled.nav<IHeaderProps>`
  position: fixed;
  z-index: 15;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  /* margin: 20px 0px; */
  backdrop-filter: blur(7px);
  box-shadow: ${(props) => props.theme.secondaryBoxShadow};
  padding: 0px 50px;
  background-color: ${(props) => props.theme.navGradient};
  transform: ${(props) => props.showNav ? `translateY(0px)` : `translateY(-80px)`};
  transition: transform .2s ease-in;
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
