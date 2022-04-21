import React, { useEffect, useState } from "react";
import { Link, LinkList, Nav, StyledLogo, Anchor } from "./styles";

const Header = () => {
  const [showNav, setShowNav] = useState(true);

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
      <div>
        <LinkList>
          <Link style={{ animationDelay: "1.6s" }}>
            <Anchor href="#home">Home</Anchor>
          </Link>
          <Link style={{ animationDelay: "1.7s" }}>
            <Anchor href="#about">About</Anchor>
          </Link>
          <Link style={{ animationDelay: "1.8s" }}>
            <Anchor href="#projects">Projects</Anchor>
          </Link>
          <Link style={{ animationDelay: "1.9s" }}>
            <Anchor href="#contact">Contact</Anchor>
          </Link>
        </LinkList>
      </div>
    </Nav>
  );
};

export default Header;
