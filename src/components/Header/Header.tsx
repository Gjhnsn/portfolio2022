import React, { useEffect, useState, FC } from "react";
import {
  Link,
  LinkList,
  Nav,
  StyledLogo,
  Anchor,
  Burger,
  StyledHamburger,
  MobileNavBackdrop,
  MobileBackdrop,
} from "./styles";
import { Twirl as Hamburger } from "hamburger-react";

const Header = () => {
  const [showNav, setShowNav] = useState(true);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

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
        {/* <Burger onClick={() => setShowMobileNav(!showMobileNav)}>
        <span />
        <span />
        <span />
      </Burger> */}
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
        </LinkList>
      </Nav>
      {showMobileNav ? mobileMenuBackdrop() : null}
    </>
  );
};

export default Header;
