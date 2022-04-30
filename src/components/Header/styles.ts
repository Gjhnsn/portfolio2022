import styled, { keyframes, css } from "styled-components";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { IHeaderProps } from "../../utils/models";
import { uiSize } from "../../utils/mobileScreens";
import { Interface } from "readline";

interface INavProps {
  showNavToggle: boolean
}

const onStart = keyframes`
{
  0% {
    transform: translateY(-50px);
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
  width: 100vw;
  /* height: 80px; */
  backdrop-filter: blur(7px);
  box-shadow: ${(props) => props.theme.secondaryBoxShadow};
  padding: 15px 50px;
  background-color: ${(props) => props.theme.navGradient};
  transform: ${(props) =>
    props.showNav ? `translateY(0px)` : `translateY(-80px)`};
  transition: transform 0.2s ease-in;
  flex-wrap: wrap;

  border: 1px solid pink;

  @media ${uiSize.mobile} {
    padding: 15px 30px;
    width: 100%;
  }
`;

// ---------------------- logo svg imported here as react component
export const StyledLogo = styled(Logo)`
  fill: ${(props) => props.theme.tertiaryColor};
  cursor: pointer;
  transition: all 0.2s ease;
  animation: ${onStart} 1s 1 ease forwards;
  animation-delay: 1.3s;
  opacity: 0;

  &:hover {
    fill: ${(props) => props.theme.linkHoverColor};
  }
`;

export const Hamburger = styled.div`
  flex-direction: column;
  cursor: pointer;
  display: none;

  span {
    height: 3px;
    width: 30px;
    background-color: ${(props) => props.theme.tertiaryColor};
    margin: 4px 0;
    border-radius: 5px;
  }

  @media ${uiSize.mobile} {
    display: flex;
    align-self: center;
  }
`

export const LinkList = styled.ul<INavProps>`
  display: flex;
  flex-direction: row;
  list-style: none;

  @media ${uiSize.mobile} {
    overflow: hidden;
    height: ${(props) => props.showNavToggle ?' 60vh' : '0'};
    /* flex-basis: 100%; */
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 85vw;
    transition: height .3s ease-in;
    /* border: 1px solid orange; */
  }
`;

export const Link = styled.li<INavProps>`
  margin-left: 50px;
  opacity: 0;
  animation: ${onStart} .8s 1 ease forwards;

  @media ${uiSize.mobile} {
    animation: none;
    margin-left: 0;
    padding: 50px 10px;
    opacity: ${(props) => props.showNavToggle ? '1' : '0'};
    transition: opacity .5s ease-in;
  }

  &:first-child {
    margin-left: 0;
  }
`;

export const Anchor = styled.a`
  color: ${(props) => props.theme.tertiaryColor};
  transition: all 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.linkHoverColor};
  }

  @media ${uiSize.mobile} {
    font-size: 1.5rem;
  }
`;
