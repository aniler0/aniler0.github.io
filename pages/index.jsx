import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import { GlobalStyle } from "../styles/globals";

export default function HomePage() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
