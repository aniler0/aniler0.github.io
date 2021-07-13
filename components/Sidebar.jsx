import React, { useState } from "react";
import styled from "styled-components";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-scroll";

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  return (
    <SideBarContainer
      toggleMenu={toggleMenu}
      onClick={() => setToggleMenu(false)}
    >
      <SideBarMenu>
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
          <SidebarIcon />
        </SideBarWrapper>
      </SideBarMenu>
    </SideBarContainer>
  );
};

export default Sidebar;

const SideBarContainer = styled.div`
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
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(214, 214, 214, 0.37);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  ${({ toggleMenu }) => (toggleMenu === true ? `opacity:1` : `opacity:0`)}
`;
const SideBarMenu = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
`;
const SideBarWrapper = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid black;
`;
const NavLinks = styled.ul`
  //navmenu
  display: flex;
  justify-content: space-evenly;
  width: calc(15em + 3vw);

  @media screen and (max-width: 768px) {
    display: none;
  }
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

const SidebarIcon = styled(CgMenuRight)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 25px;
    height: 25px;
  }
`;
