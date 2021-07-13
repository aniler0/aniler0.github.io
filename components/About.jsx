import styled from "styled-components";
import Image from "next/image";

const About = ({ icons }) => {
  return (
    <>
      <Container>
        <AboutSections>
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
            </Section1>
            <Section2>
              <h1>I&apos;m Good At</h1>
              <br />
              <Logos>
                {icons.map((icon, key) => (
                  <Image
                    key={key}
                    src={icon.name}
                    alt={icon.alt}
                    width={60}
                    height={60}
                    layout="intrinsic"
                  />
                ))}
              </Logos>
            </Section2>
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
`;
const AboutSections = styled.div`
  display: flex;
  width: 80%;
  height: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`;
const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  user-select: none;
  height: 70%;
  width: 60%;

  @media screen and (max-width: 768px) {
    font-size: medium;
    width: 80%;
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
    height: 40%;
  }
`;
