import Link from "next/link";
import { useEffect } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import storeWrapper from "../src/redux/store";
import {useSelector} from 'react-redux';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    overscroll-behavior-y: none;
  }
`;
const GNB = styled.div`
  width: "100%";
  height: 50px;
  position: fixed;
`;
function App({ Component, pageProps }) {
  const isDevelopement = 0;
  useEffect(() => {
    console.log('isClient? check process.browser ===>', process.browser );
    console.log('isServer? check typeof window ===>', typeof window === "undefined");
    console.log('environment?  ===>', process.env.NODE_ENV)
  }, [])
  return (
    <Container>
      <GlobalStyle />
      <GNB>
        <Link href="/page1">
          <a>page1</a>
        </Link>
        <Link href="/page2">
          <a>page2</a>
        </Link>
      </GNB>
      <Component {...pageProps} />
    </Container>
  );
}
export default storeWrapper.withRedux(App);
