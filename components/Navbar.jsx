import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Title>aniler</Title>
        <NavLinks>
          <Link href="/" passHref>
            <NavLink>Home</NavLink>
          </Link>
          <Link href="/projects" passHref>
            <NavLink>Projects</NavLink>
          </Link>
          <Link href="/about" passHref>
            <NavLink>About</NavLink>
          </Link>
        </NavLinks>
        <NavBars />
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  position: fixed;
  padding: 1em 2em;
  align-items: center;
  height: 60px;
  width: 100%;
  z-index: 100;
  background-color: transparent;
`;
const Title = styled.h1`
  font-size: medium;
  padding: 0.5em;

  color: #000000;
  user-select: none;
`;

const NavLinks = styled.div`
  //navmenu
  display: flex;
  justify-content: space-evenly;
  width: calc(12em + 3vw);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBars = styled(CgMenuRight)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 25px;
    height: 25px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;
const NavLink = styled.a`
  display: flex;
  align-items: center;
  color: #000000;
  text-decoration: none;
  font-weight: 400;
  font-size: small;
  &:hover {
    color: white;
  }
`;
