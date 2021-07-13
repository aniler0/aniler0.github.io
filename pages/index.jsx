import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";
import { GlobalStyle } from "../styles/globals";
import icons from "../utils/icons";
import projects from "../utils/projects";
import socialmediaicons from "../utils/socialmedia";

export default function HomePage() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Sidebar />
      <Home />
      <About icons={icons} />
      <Projects projects={projects} />
      <Contact socialmediaicons={socialmediaicons} />
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
