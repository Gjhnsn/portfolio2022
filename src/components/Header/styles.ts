import styled, { keyframes, css } from "styled-components";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { IHeaderProps } from "../../utils/models";
import { uiSize } from "../../utils/mobileScreens";


// --------------------- TODO: ADD BACKGROUND OVERLAY FOR MOBILE NAV TO CLICK OUT

interface INavProps {
  showMobileNav: boolean
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

const backdrop = keyframes`
{
  0% {
    
      opacity: 0;
  }
100% {
    opacity: .5;
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
    
    padding: 15px 0px;
    width: 100%;
  }

  /* &:after {
    content: '';
    display: none;

    @media ${uiSize.mobile} {
      display: block;
      background-color: green;
      height: 100vh;
      width: 100vw;
    }
  } */
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

  @media ${uiSize.mobile} {
    margin-left: 30px;
  }
`;

export const StyledHamburger = styled.div`
  display: none;
  color: ${(props) => props.theme.tertiaryColor};
  cursor: pointer;
  animation: ${onStart} 1s 1 ease forwards;
  animation-delay: 1.3s;
  opacity: 0;
  
  @media ${uiSize.mobile} {
    display: block;
    align-self: center;
    margin-right: 30px;
  }
`

export const Burger = styled.div`
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
    height: ${(props) => props.showMobileNav ?' 50vh' : '0'};
    /* flex-basis: 100%; */
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 100vw;
    transition: height .3s ease-in;
    /* border: 1px solid orange; */
    padding: 0 30px;
  }
`;

export const MobileBackdrop = styled.div`
  position: fixed;  
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.tertiaryColor};
  opacity: .5;
  z-index: 1;
  animation: ${backdrop} 1s 1 ease forwards;
`

export const Link = styled.li<INavProps>`
  margin-left: 50px;
  opacity: 0;
  animation: ${onStart} .8s 1 ease forwards;

  @media ${uiSize.mobile} {
    animation: none;
    margin-left: 0;
    padding: 30px 10px;
    opacity: ${(props) => props.showMobileNav ? '1' : '0'};
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
