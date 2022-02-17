import React from "react";
import {ReactComponent as DarkMode } from '../../assets/darkModeLogo.svg'
import { Link, LinkList, Nav } from "./styles";

const Header = () => {
  return (
    <Nav>
      <div ><DarkMode /></div>
      
      <div>
        <LinkList>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Projects</Link>
          <Link>Contact</Link>
        </LinkList>
      </div>
    </Nav>
  );
};

export default Header;
