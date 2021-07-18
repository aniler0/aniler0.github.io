import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";

const Loading = ({ setLoading }) => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,

      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 3.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeIn",
        duration: 1,
        delay: 0.5,
      },
    },
  };

  return (
    <Container>
      <LoaderWrapper
        variants={container}
        animate={item.show}
        initial={item.hidden}
        exit={item.exit}
        onAnimationComplete={() => setLoading(false)}
      >
        <Loader />
        <motion.h1 variants={item}>LOADING</motion.h1>
      </LoaderWrapper>
    </Container>
  );
};

export default Loading;
const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: radial-gradient(#cecece, #fff);
  overflow: hidden;
`;

const LoaderWrapper = styled(motion.div)`
  width: 350px;
  height: 350px;
  border-radius: 100%;
  background: linear-gradient(
    165deg,
    rgba(255, 255, 255, 1) 0%,
    rgb(220, 220, 220) 40%,
    rgb(170, 170, 170) 98%,
    rgb(10, 10, 10) 100%
  );
  position: relative;

  & h1 {
    user-select: none;
    font-weight: 400;
    font-size: 0.7em;
    position: absolute;
    letter-spacing: 2px;
    bottom: 47%;
    left: 43%;
  }

  @media screen and (max-width: 765px) {
    width: 270px;
    height: 270px;

    & h1 {
      bottom: 47%;
      left: 40%;
    }
  }
`;
const Loader = styled(motion.div)`
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border-bottom: 0 solid #ffffff05;

    box-shadow: 0 -10px 20px 20px #ffffff40 inset,
      0 -5px 15px 10px #ffffff50 inset, 0 -2px 5px #ffffff80 inset,
      0 -3px 2px #ffffffbb inset, 0 2px 0px #ffffff, 0 2px 3px #ffffff,
      0 5px 5px #ffffff90, 0 10px 15px #ffffff60, 0 10px 20px 20px #ffffff40;
    filter: blur(3px);
    animation: 2s rotate linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;
