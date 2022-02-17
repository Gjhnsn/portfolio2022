import React from "react";
import { Link, LinkList, Nav, StyledLogo } from "./styles";

const Header = () => {
  return (
    <Nav>
      <StyledLogo />
      <div>
        <LinkList>
          <Link style={{ animationDelay: "1s" }}>Home</Link>
          <Link style={{ animationDelay: "1.2s" }}>About</Link>
          <Link style={{ animationDelay: "1.4s" }}>Projects</Link>
          <Link style={{ animationDelay: "1.6s" }}>Contact</Link>
        </LinkList>
      </div>
    </Nav>
  );
};

export default Header;
