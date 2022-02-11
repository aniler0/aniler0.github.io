import Image from "next/image";
import styled from "styled-components";
import Slider from "react-slick";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { BiWorld } from "react-icons/bi";

const Projects = ({ projects }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Container id="projects">
        <ProjectSection
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={boxVariants}
        >
          <h1>My Projects</h1>
          <SlidingArea>
            <Corausel {...settings}>
              {projects.map((project, index) => {
                return (
                  <Wrap key={index}>
                    <ProjectContainer key={project.id}>
                      <Details>
                        <h2>{project.projectName}</h2>
                        <h4>{project.projectDetails}</h4>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source Code
                        </a>
                      </Details>
                      <ImageArea>
                        <Image
                          src={project.projectImage}
                          alt="image"
                          width={300}
                          height={150}
                          priority={true}
                        />
                        <a
                          href={project.liveProject}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <LinkImage alt="live-icon" />
                        </a>
                      </ImageArea>
                    </ProjectContainer>
                  </Wrap>
                );
              })}
            </Corausel>
          </SlidingArea>
        </ProjectSection>
      </Container>
    </>
  );
};

export default Projects;

const Container = styled.div`
  height: 100vh;
  background-color: #f1f2fa;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;
const BgImage = styled(motion.div)`
  position: absolute;
  right: -14em;
  bottom: 0;
`;
const ProjectSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 75%;
  height: 70%;

  & h1 {
    font-size: 1.4em;
    z-index: 999;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 70%;
    & h1 {
      font-size: 1.2em;
    }
  }
`;
const SlidingArea = styled.div`
  width: 100%;
  height: 80%;
`;

const Corausel = styled(Slider)`
  border-radius: 30px;
  width: 100%;
  padding: 2em;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(214, 214, 214, 0.37);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);

  .slick-list {
    margin: 0 -10px;
  }

  @media screen and (max-width: 768px) {
    ul {
      width: 80%;
    }
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(214, 214, 214, 0.37);
    -webkit-backdrop-filter: blur(6.5px);
    backdrop-filter: none;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const LinkImage = styled(BiWorld)`
  margin-top: 10px;
  width: 1.5vmax;
  height: 1.5vmax;
  color: black;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const ImageArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 50%;
  margin-top: 1.5em;

  & h2 {
    font-weight: 400;
  }
  & h4 {
    font-weight: 400;
    color: gray;
  }

  & a {
    color: #a9a9a9;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    & h2 {
      margin-bottom: 10px;
    }
    & h4 {
      font-size: small;
    }
  }
`;
