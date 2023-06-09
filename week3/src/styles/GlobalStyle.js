import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
font-family: 'UhBeeSe_hyun';
src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeeSe_hyun.woff') format('woff');
font-weight: normal;
font-style: normal;
}

@font-face {
    font-family: 'LOTTERIACHAB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/LOTTERIACHAB.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

body {
    padding-bottom: 30rem;
    background-color: ${({ theme }) => theme.colors.yellow};
    font-family: 'UhBeeSe_hyun';
}

img {
    width: 10rem;
    height: 12rem;
    border-radius: 2rem;
    border-style: double;
    border-width: 0.5rem;
    border-color: ${({ theme }) => theme.colors.purple};
}
`;
