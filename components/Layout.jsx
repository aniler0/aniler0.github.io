import styles from "styled-components";
import { GlobalStyle } from "../styles/globals";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
