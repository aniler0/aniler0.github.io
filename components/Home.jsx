import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Hero = () => {
  const bgvideo = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 4,
        delay: 1.5,
        ease: [0.83, 0, 0.17, 1],
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 4,
        delay: 1.5,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  const text = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 1.4,
        delay: 2,
        ease: [0.83, 0, 0.17, 1],
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 2,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  return (
    <Section id="home">
      <Container>
        <ContainerVideo
          src="/background.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
          variants={bgvideo}
          initial="hidden"
          animate="visible"
        />
        <Main>
          <Header variants={text} initial="hidden" animate="visible">
            Hello <br />
            <span>I&apos;m Anıl</span>
            <br /> Frontend Developer
          </Header>
        </Main>
        <Bottom>
          <Link to="about" spy={true} smooth={true} duration={50}>
            Scroll Down
          </Link>

          <ScrollImage src="/scroll-down.svg" />
        </Bottom>
      </Container>
    </Section>
  );
};

export default Hero;

const Section = styled.div`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const Container = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
const ContainerVideo = styled(motion.video)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const Main = styled(motion.div)`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-width: 1600px;
  width: calc(100% - 200px);
`;

const Header = styled(motion.header)`
  text-align: center;
  font-size: 1.4em;
  font-weight: 400;
  color: #000000;
  width: 80%;
  user-select: none;
  & span {
    font-weight: 600;
    font-size: 4em;
    background: #121fcf;
    background: -webkit-linear-gradient(to right, #121fcf 0%, #cf1512 100%);
    background: -moz-linear-gradient(to right, #121fcf 0%, #cf1512 100%);
    background: linear-gradient(to right, #121fcf 0%, #cf1512 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 768px) {
      font-size: 1.5em;
    }
  }
  @media screen and (max-width: 768px) {
    width: 500px;
  }
`;
const Bottom = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  width: 10%;
  bottom: 2em;
  cursor: pointer;
  animation: MoveUpDown 2s ease-in-out infinite;

  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 2em;
    }
    50% {
      bottom: 2.5em;
    }
  }

  & a {
    font-size: small;
    font-weight: 500;
    user-select: none;
  }

  @media screen and (max-width: 768px) {
    width: 30%;
  }
`;
const ScrollImage = styled.img`
  width: 20px;
`;
