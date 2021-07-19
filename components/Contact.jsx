import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SocialMediaLinks from "./SocialMediaLinks";

const Contact = ({ socialmediaicons }) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(true);
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
  const handleSubmit = (e) => {
    if (name && mail && message !== "") {
      e.preventDefault();
      setSubmitted(false);

      const timer = setTimeout(() => {
        setSubmitted(true);
        setName("");
        setMail("");
        setMessage("");
      }, 3000);

      let data = {
        name,
        mail,
        message,
      };
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log("response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          setSubmitted(true);
          setName("");
          setMail("");
          setBody("");
        }
      });

      timer;
    }
  };

  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactSection
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={boxVariants}
        >
          <Title>
            <h1>Contact Me</h1>
            <h4>Have a question or want to work together ?</h4>
          </Title>

          <FormSection>
            <Form>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter e-mail"
                value={mail}
                onChange={(e) => {
                  setMail(e.target.value);
                }}
                required
              />
              <textarea
                type="text"
                name="message"
                placeholder="Your Message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              />
              <Button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                disabled={submitted === true ? false : true}
              >
                <h4>SUBMIT</h4>
              </Button>
            </Form>
          </FormSection>
        </ContactSection>
        <SocialMediaLinks socialmediaicons={socialmediaicons} />
      </ContactWrapper>
      <Footer>
        <h1>
          ANIL ER <span>©2021</span>
        </h1>
      </Footer>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;
const ContactWrapper = styled.section`
  height: 65%;
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ContactSection = styled(motion.section)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-evenly;
`;

const Title = styled.div`
  & h4 {
    font-weight: 400;
  }
`;

const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  height: 70%;
  width: 75%;

  border-radius: 9px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 85%;

  & input {
    width: 20em;
    border-radius: 9px;
    background-color: #f3f3f3;
    padding: 1em;
    margin-bottom: 0.5em;
    border: none;
  }
  & textarea {
    border: none;
    border-radius: 9px;
    padding: 1em;
    background-color: #f3f3f3;
    width: 30rem;
    height: 5rem;
    max-width: 45em;
  }

  @media screen and (max-width: 768px) {
    & input {
      width: 13em;
    }
    & textarea {
      width: auto;
      height: 4rem;
      max-width: 20em;
    }
  }
`;
const Button = styled.button`
  padding: 0.5em 1em;
  margin-top: 1em;
  border: none;
  -webkit-appearance: none;
  & h4 {
    font-weight: 500;
    font-size: small;
  }

  ${({ disabled }) =>
    disabled
      ? css`
          background-color: #cccccc;

          & h4 {
            color: #666666;
          }
        `
      : css`
          cursor: pointer;
          border: none;
          & h4 {
            color: black;
          }
        `}
`;
const Footer = styled.div`
  position: absolute;
  bottom: 0;
  color: #b5b5b5;
  padding: 1em;
  & h1 {
    font-weight: 400;
    font-size: 0.7em;
  }
  & span {
    color: #595959;
  }
  @media screen and (max-width: 768px) {
    right: 0;
    & h1 {
      font-weight: 400;
      font-size: 0.5em;
    }
  }
`;
