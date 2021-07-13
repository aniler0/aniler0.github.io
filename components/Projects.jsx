import Image from "next/image";
import styled from "styled-components";
import Slider from "react-slick";
import { projects } from "../utils/projects";

const Projects = () => {
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
      <Container>
        <BgImage>
          <Image src="/bgimage.png" alt="clay" width={1000} height={600} />
        </BgImage>
        <ProjectSection>
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
                        <a href={project.githubLink}>Source Code</a>
                      </Details>
                      <ImageArea>
                        <Image
                          src={project.projectImage}
                          alt="image"
                          width={300}
                          height={150}
                        />
                        <a href={project.liveProject}>Live</a>
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
const BgImage = styled.div`
  position: absolute;
  right: -14em;
  bottom: 0;
`;
const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 75%;
  height: 50%;

  & h1 {
    font-size: 1.4em;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 90%;
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
