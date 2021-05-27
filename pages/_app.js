import Link from 'next/link';
import styled, { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
const Container = styled.div`
    width: 100%;
    height: 100%;
`;
const GlobalStyle = createGlobalStyle`
  ${reset};
`;

export default function App ({ Component, pageProps }) {
    return (
        <Container>
            <GlobalStyle />
            
            <Link href="/page1">
                <a>page1</a>
            </Link>
            <Link href="/page2">
                <a>page2</a>
            </Link>
            <Component {...pageProps} />
        </Container>
    );
}