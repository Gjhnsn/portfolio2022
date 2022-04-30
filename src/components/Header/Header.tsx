import React, { useEffect, useState } from "react";
import { Link, LinkList, Nav, StyledLogo, Anchor, Hamburger } from "./styles";

const Header = () => {
  const [showNav, setShowNav] = useState(true);
  const [showNavToggle, setShowNavToggle] = useState(false)

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
      <Hamburger onClick={() => setShowNavToggle(!showNavToggle)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <div>
        <LinkList showNavToggle={showNavToggle}>
          <Link style={{ animationDelay: "1.4s" }} showNavToggle={showNavToggle}>
            <Anchor href="#home">Home</Anchor>
          </Link>
          <Link style={{ animationDelay: "1.5s" }} showNavToggle={showNavToggle}>
            <Anchor href="#about">About</Anchor>
          </Link>
          <Link style={{ animationDelay: "1.6s" }} showNavToggle={showNavToggle}>
            <Anchor href="#projects">Projects</Anchor>
          </Link>
          <Link style={{ animationDelay: "1.7s" }} showNavToggle={showNavToggle}>
            <Anchor href="#contact">Contact</Anchor>
          </Link>
        </LinkList>
      </div>
    </Nav>
  );
};

export default Header;
