import styled from "styled-components";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const About = ({ icons }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.7,
      },
    },
  };

  return (
    <>
      <Container id="about">
        <AboutSections
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={boxVariants}
        >
          <Paragraph>
            <Section1>
              <h1>About Me</h1>
              <br />
              <p>
                Hello. I am Anıl, a web developer who is passionate about coding
                and learning everything about code. I am interested in the
                frontend side. I am currently enrolled at Suleyman Demirel
                University for four years.
              </p>
              <br />
            </Section1>
            <Section2>
              <h1>Resume</h1>

              <ButtonContainer>
                <a href="/Resume(English).pdf" target="_blank">
                  <ResumeButton>English</ResumeButton>
                </a>
                <a href="/Resume(Turkish).pdf" target="_blank">
                  <ResumeButton>Turkish</ResumeButton>
                </a>
              </ButtonContainer>
            </Section2>

            <Section3>
              <h1>I&apos;m Good At</h1>
              <br />
              <Logos>
                {icons.map((icon, key) => (
                  <motion.div
                    key={key}
                    whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Image
                      key={key}
                      src={icon.name}
                      alt={icon.alt}
                      width={60}
                      height={60}
                      layout="intrinsic"
                    />
                  </motion.div>
                ))}
              </Logos>
            </Section3>
          </Paragraph>
          <ProfilePhoto src="/profile-pic.png" />
        </AboutSections>
      </Container>
    </>
  );
};

export default About;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const AboutSections = styled(motion.div)`
  display: flex;
  width: 80%;
  height: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: space-around;

    height: 95%;
  }
`;
const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  user-select: none;
  height: 70%;
  width: 50%;

  @media screen and (max-width: 768px) {
    font-size: medium;
    width: 90%;
    height: 70%;
    justify-content: space-evenly;
  }
`;
const Section1 = styled.div`
  @media screen and (max-width: 768px) {
    font-size: small;
    margin-top: 20px;
  }
`;
const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  @media screen and (max-width: 768px) {
    font-size: small;
  }
`;
const Section3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  @media screen and (max-width: 768px) {
    font-size: small;
  }
`;
const ResumeButton = styled.button`
  font-size: medium;
  font-weight: 400;
  padding: 0.7em 1.5em;
  border: none;
  border-radius: 9px;
  cursor: pointer;
  & a {
    color: black;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    font-size: small;
    margin: 5px;
    padding: 0.3em 1em;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  height: 4em;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 220px;
  @media screen and (max-width: 768px) {
    justify-content: space-around;
    align-items: center;
    width: 60%;
  }
`;

const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;

  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    flex-wrap: wrap;

    & img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

const ProfilePhoto = styled.img`
  height: 60%;
  background: linear-gradient(45deg, #00e9fa, #0033ff);
  border-radius: 80%;
  padding: 8px;
  @media screen and (max-width: 768px) {
    height: 27%;
  }
`;
