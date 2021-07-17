import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalStyle } from "../styles/globals";
import { MenuToggleProvider } from "../context/MenuContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MenuToggleProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </MenuToggleProvider>
    </>
  );
}

export default MyApp;
