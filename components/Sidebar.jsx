import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Sidebar = ({ toggleMenu, setToggleMenu }) => {
  const variants = {
    open: { x: "200%" },
    closed: { x: 0 },
  };

  return (
    <SideBarContainer
      animate={toggleMenu === true ? "open" : "closed"}
      variants={variants}
      toggleMenu={toggleMenu}
      onClick={() => setToggleMenu(false)}
    >
      <SideBarWrapper>
        <NavLinks>
          <NavLink>
            <Link to="home" spy={true} smooth={true}>
              Home
            </Link>
          </NavLink>
          <NavLink>
            <Link to="about" spy={true} smooth={true}>
              About
            </Link>
          </NavLink>

          <NavLink>
            <Link to="projects" spy={true} smooth={true}>
              Projects
            </Link>
          </NavLink>

          <NavLink>
            <Link to="contact" spy={true} smooth={true}>
              <h4>Contact</h4>
            </Link>
          </NavLink>
        </NavLinks>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default Sidebar;

const SideBarContainer = styled(motion.div)`
  display: none;
  @media screen and (max-width: 768px) {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 60px;
    bottom: 0;
    right: 0;
    width: 50%;
    z-index: 999;
    transition: opacity 2s ease-in;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(214, 214, 214, 0.37);
    backdrop-filter: blur(6.5px);
    -webkit-backdrop-filter: blur(6.5px);
    ${({ toggleMenu }) =>
      toggleMenu === false ? `display: block;` : `display: none;`}
  }
`;

const SideBarWrapper = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const NavLinks = styled.ul`
  //navmenu
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: calc(12em + 3vw);
  height: 50%;
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
  & a {
    font-size: 1rem;
  }
`;
