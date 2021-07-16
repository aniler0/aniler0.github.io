import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const SocialMediaLinks = ({ socialmediaicons }) => {
  return (
    <SocialMediaSection>
      <SocialMedia>
        {socialmediaicons.map((icon, index) => {
          return (
            <a key={index} href={icon.webpage} target="_blank" rel="noreferrer">
              <Image
                key={index}
                src={icon.name}
                alt={icon.alt}
                width={30}
                height={30}
                layout="intrinsic"
              />
            </a>
          );
        })}
      </SocialMedia>
    </SocialMediaSection>
  );
};

export default SocialMediaLinks;
const SocialMediaSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 80%;
`;
const SocialMedia = styled.div`
  position: absolute;
  right: 30px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 50%;
    height: 10%;
    bottom: 0;
    right: 25%;

    & img {
      width: 60%;
      height: 60%;
    }
  }
`;
