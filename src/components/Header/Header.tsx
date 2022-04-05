import React, { useEffect, useState } from "react";
import { Link, LinkList, Nav, StyledLogo } from "./styles";

const Header = () => {
  const [showNav, setShowNav] = useState(true);

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

  useEffect(() => {
    window.addEventListener("scroll", controlNav);
    return () => {
      window.removeEventListener("scroll", controlNav);
    };
  }, []);

  return (
    <Nav showNav={showNav}>
      <StyledLogo />
      <div>
        <LinkList>
          <Link style={{ animationDelay: "1s" }}><a href='#home'>Home</a></Link>
          <Link style={{ animationDelay: "1.2s" }}><a href='#about'>About</a></Link>
          <Link style={{ animationDelay: "1.4s" }}><a href="#projects">Projects</a></Link>
          <Link style={{ animationDelay: "1.6s" }}><a href="#contact">Contact</a></Link>
        </LinkList>
      </div>
    </Nav>
  );
};

export default Header;
