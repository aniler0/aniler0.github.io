import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Section>
      <Container>
        <ContainerVideo
          src="/background.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <Main>
          <Header>
            Hello <br /> <span> I&apos;m Anıl</span> <br /> Frontend Developer
          </Header>
        </Main>
        <Bottom>
          <h1>Scroll Down</h1>
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

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
const ContainerVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const Main = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-width: 1600px;
  width: calc(100% - 200px);
`;

const Header = styled.header`
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

  & h1 {
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
