import React, { useEffect, useState, FC } from "react";
import {
  Link,
  LinkList,
  Nav,
  StyledLogo,
  Anchor,
  StyledHamburger,
  MobileBackdrop,
  ToggleWrapper,
} from "./styles";
import { Twirl as Hamburger } from "hamburger-react";
import { ThemeToggle } from "../../../components/ThemeToggle/ThemeToggle";
import { IThemeProps } from "../../../utils/models";

const Header: FC<IThemeProps> = ({ theme, toggleTheme }) => {
  const [showNav, setShowNav] = useState(true);
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", controlNav);
    return () => {
      window.removeEventListener("scroll", controlNav);
    };
  }, []);

  const controlNav = () => {
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      if (window.scrollY === 0 || window.scrollY < 0) {
        setShowNav(true);
      } else if (lastScrollY < window.scrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY = window.scrollY;
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const mobileMenuBackdrop = () => {
    return (
      <MobileBackdrop
        onClick={() => setShowMobileNav(false)}
        showMobileNav={showMobileNav}
      ></MobileBackdrop>
    );
  };

  return (
    <>
      <Nav showNav={showNav}>
        <StyledLogo onClick={scrollToTop} />
        <StyledHamburger>
          <Hamburger
            toggled={showMobileNav}
            toggle={setShowMobileNav}
            direction="right"
            rounded
            label="Show menu"
          />
        </StyledHamburger>

        <LinkList showMobileNav={showMobileNav}>
          <Link
            style={{ animationDelay: "4.9s" }}
            showMobileNav={showMobileNav}
            onClick={() => setShowMobileNav(false)}
          >
            <Anchor href="#home">Home</Anchor>
          </Link>
          <Link
            style={{ animationDelay: "5s" }}
            showMobileNav={showMobileNav}
            onClick={() => setShowMobileNav(false)}
          >
            <Anchor href="#about">About</Anchor>
          </Link>
          <Link
            style={{ animationDelay: "5.1s" }}
            showMobileNav={showMobileNav}
            onClick={() => setShowMobileNav(false)}
          >
            <Anchor href="#projects">Projects</Anchor>
          </Link>
          <Link
            style={{ animationDelay: "5.2s" }}
            showMobileNav={showMobileNav}
            onClick={() => setShowMobileNav(false)}
          >
            <Anchor href="#contact">Contact</Anchor>
          </Link>
          <ToggleWrapper>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </ToggleWrapper>
        </LinkList>
      </Nav>
      {showMobileNav && mobileMenuBackdrop()}
    </>
  );
};

export default Header;
