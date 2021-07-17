import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { MenuContext } from "../context/MenuContext";

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [toggleMenu, setToggleMenu] = useContext(MenuContext);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else setScrollNav(false);
  };

  const isToggle = () => {
    setToggleMenu(!toggleMenu);
    console.log(toggleMenu);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <NavContainer>
        <Title>aniler</Title>
        <NavLinks>
          <NavLink>
            <Link to="home" spy={true} smooth={true} duration={50}>
              Home
            </Link>
          </NavLink>
          <NavLink>
            <Link to="about" spy={true} smooth={true} duration={50}>
              About
            </Link>
          </NavLink>

          <NavLink>
            <Link to="projects" spy={true} smooth={true} duration={50}>
              Projects
            </Link>
          </NavLink>

          <NavLink>
            <Link to="contact" spy={true} smooth={true} duration={50}>
              <h4>Contact</h4>
            </Link>
          </NavLink>
        </NavLinks>
        {toggleMenu === false ? (
          <CloseIcon onClick={() => isToggle()} />
        ) : (
          <SideBarIcon onClick={() => isToggle()} />
        )}
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
  transition: 300ms ease-in;
  ${({ scrollNav }) =>
    scrollNav === true
      ? `
    background: white;
  `
      : `background:transparent;`}
`;
const Title = styled.h1`
  font-size: medium;
  padding: 0.5em;

  color: #000000;
  user-select: none;
`;
const SideBarIcon = styled(CgMenuRight)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 25px;
    height: 25px;
    cursor: pointer;
    transition: 300ms ease-in;
  }
`;
const CloseIcon = styled(AiOutlineClose)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    width: 25px;
    height: 25px;
    transition: 300ms ease-in;
  }
`;
const NavLinks = styled.ul`
  //navmenu
  display: flex;
  justify-content: space-evenly;
  width: calc(15em + 3vw);

  @media screen and (max-width: 768px) {
    display: none;
    cursor: pointer;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;
const NavLink = styled.li`
  display: flex;
  cursor: pointer;
  align-items: center;
  color: #000000;
  text-decoration: none;
  font-weight: 400;
  font-size: small;

  &:hover {
    color: white;
  }
`;
