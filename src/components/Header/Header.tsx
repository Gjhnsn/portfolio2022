import React, { useEffect, useState, FC } from "react";
import {
  Link,
  LinkList,
  Nav,
  StyledLogo,
  Anchor,
  Burger,
  StyledHamburger,
  MobileBackdrop,
} from "./styles";
import { Twirl as Hamburger } from "hamburger-react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { IThemeProps } from "../../utils/models";

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
      if (lastScrollY < window.scrollY) {
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
      <MobileBackdrop onClick={() => setShowMobileNav(false)}></MobileBackdrop>
    );
  };

  const hamburgerMenu = () => {
    return (
      <Hamburger
        onToggle={(toggled) => {
          toggled ? setShowMobileNav(true) : setShowMobileNav(false);
        }}
        direction="right"
        rounded
        label="Show menu"
      />
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
            style={{ animationDelay: "1.4s" }}
            showMobileNav={showMobileNav}
            onClick={() => setShowMobileNav(false)}
          >
            <Anchor href="#home">Home</Anchor>
          </Link>
          <Link
            style={{ animationDelay: "1.5s" }}
            showMobileNav={showMobileNav}
            onClick={() => setShowMobileNav(false)}
          >
            <Anchor href="#about">About</Anchor>
          </Link>
          <Link
            style={{ animationDelay: "1.6s" }}
            showMobileNav={showMobileNav}
            onClick={() => setShowMobileNav(false)}
          >
            <Anchor href="#projects">Projects</Anchor>
          </Link>
          <Link
            style={{ animationDelay: "1.7s" }}
            showMobileNav={showMobileNav}
            onClick={() => setShowMobileNav(false)}
          >
            <Anchor href="#contact">Contact</Anchor>
          </Link>
          
          <ThemeToggle theme={theme} toggleTheme={toggleTheme}/>
        </LinkList>
      </Nav>
      {showMobileNav ? mobileMenuBackdrop() : null}
    </>
  );
};

export default Header;
