import styled, { keyframes, css } from "styled-components";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { IHeaderProps } from "../../../utils/models";
import { uiSize } from "../../../utils/mobileScreens";
import { INavProps } from "../../../utils/models";

const onStart = keyframes`

  0% {
    transform: translateY(-50px);
      opacity: 0;
  }
100% {
    opacity: 1;
}
`;

const hamburgerEnter = keyframes`

  0% {
      opacity: 0;
  }
100% {
    transform: translateY(0);
    opacity: 1;

}`;

const backdrop = keyframes`

  0% {
    
      opacity: 0;
  }
100% {
    opacity: .5;

}`;

// ---------------------------- TODO --- complete nav scroll styles

export const Nav = styled.nav<IHeaderProps>`
  position: fixed;
  z-index: 15;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  backdrop-filter: blur(7px);
  box-shadow: ${(props) => props.theme.secondaryBoxShadow};
  padding: 15px 50px;
  background-color: ${(props) => props.theme.navGradient};
  transform: ${(props) =>
    props.showNav ? `translateY(0px)` : `translateY(-82px)`};
  transition: transform 0.2s ease-in;
  flex-wrap: wrap;

  @media ${uiSize.mobileLandscape} {
    padding: 15px 0px;
    width: 100%;
  }
`;

// ---------------------- logo svg imported here as react component
export const StyledLogo = styled(Logo)`
  fill: ${(props) => props.theme.tertiaryColor};
  cursor: pointer;
  transition: all 0.2s ease;
  animation: ${onStart} 1s 1 ease forwards;
  animation-delay: 4.8s;
  opacity: 0;

  &:hover {
    fill: ${(props) => props.theme.linkHoverColor};
  }

  @media ${uiSize.mobileLandscape} {
    margin-left: 30px;
  }
`;

export const StyledHamburger = styled.div`
  display: none;
  color: ${(props) => props.theme.tertiaryColor};
  cursor: pointer;
  transform: translateY(-55px);

  @media ${uiSize.mobileLandscape} {
    display: block;
    align-self: center;
    margin-right: 30px;
    animation: ${hamburgerEnter} 1s 1 ease forwards;
    animation-delay: 1.3s;
  }
`;

export const LinkList = styled.ul<INavProps>`
  display: flex;
  flex-direction: row;
  list-style: none;

  @media ${uiSize.mobileLandscape} {
    overflow: hidden;
    height: ${(props) => (props.showMobileNav ? "60vh" : "0")};
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 100vw;
    transition: height 0.3s ease-in;
    padding: 0 30px;
  }
`;

export const MobileBackdrop = styled.div<INavProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.tertiaryColor};
  opacity: 0.5;
  z-index: 5;
  animation: ${backdrop} 0.7s 1 ease forwards;
  display: none;

  @media ${uiSize.mobileLandscape} {
    display: block;
  }
`;

export const ToggleWrapper = styled.div`
  display: none;

  @media ${uiSize.mobileLandscape} {
    display: block;
  }
`;

export const Link = styled.li<INavProps>`
  margin-left: 50px;
  opacity: 0;
  animation: ${onStart} 0.8s 1 ease forwards;

  @media ${uiSize.mobileLandscape} {
    animation: none;
    margin-left: 0;
    padding: 30px 10px;
    opacity: ${(props) => (props.showMobileNav ? "1" : "0")};
    transition: opacity 0.5s ease-in;
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

  @media ${uiSize.mobileLandscape} {
    font-size: 1.5rem;
  }
`;
