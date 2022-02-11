import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Head from "next/head";

import socialmediaicons from "../utils/socialmedia";
import projects from "../utils/projects";
import icons from "../utils/icons";

const About = dynamic(() => import("../components/About"));
const Contact = dynamic(() => import("../components/Contact"));
const Home = dynamic(() => import("../components/Home"));
const Navbar = dynamic(() => import("../components/Navbar"));
const Projects = dynamic(() => import("../components/Projects"));
const Sidebar = dynamic(() => import("../components/Sidebar"));

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Anıl Er</title>
        <meta charset="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <AnimatePresence exitBeforeEnter>
        <>
          <Navbar />
          <Sidebar />
          <Home />
          <About icons={icons} />
          <Projects projects={projects} />
          <Contact socialmediaicons={socialmediaicons} />
        </>
      </AnimatePresence>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      icons,
      projects,
      socialmediaicons,
    },
  };
}
