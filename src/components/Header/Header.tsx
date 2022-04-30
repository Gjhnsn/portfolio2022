import React, { useEffect, useState, FC } from "react";
import { Link, LinkList, Nav, StyledLogo, Anchor, Burger, StyledHamburger } from "./styles";
import { Twirl as Hamburger } from 'hamburger-react'



const Header = () => {
  const [showNav, setShowNav] = useState(true);
  const [showMobileNav, setShowMobileNav] = useState(false)

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

  return (
    <Nav showNav={showNav}>
      <StyledLogo onClick={scrollToTop} />
      {/* <Burger onClick={() => setShowMobileNav(!showMobileNav)}>
        <span />
        <span />
        <span />
      </Burger> */}
      <StyledHamburger>
         <Hamburger onToggle={toggled => {toggled ? setShowMobileNav(true) : setShowMobileNav(false)}} direction="right" rounded label="Show menu"/>
      </StyledHamburger>
      <div>
        <LinkList showMobileNav={showMobileNav}>
          <Link style={{ animationDelay: "1.4s" }} showMobileNav={showMobileNav}>
            <Anchor href="#home">Home</Anchor>
          </Link>
          <Link style={{ animationDelay: "1.5s" }} showMobileNav={showMobileNav}>
            <Anchor href="#about">About</Anchor>
          </Link>
          <Link style={{ animationDelay: "1.6s" }} showMobileNav={showMobileNav}>
            <Anchor href="#projects">Projects</Anchor>
          </Link>
          <Link style={{ animationDelay: "1.7s" }} showMobileNav={showMobileNav}>
            <Anchor href="#contact">Contact</Anchor>
          </Link>
        </LinkList>
      </div>
    </Nav>
  );
};

export default Header;
