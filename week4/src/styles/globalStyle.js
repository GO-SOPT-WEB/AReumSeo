import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Katuri';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_13@1.0/Katuri.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


body {
    padding-bottom: 30rem;
    background-color: ${({ theme }) => theme.colors.lightYellow};
    font-family: 'Katuri';
}

img {
    width: 10rem;
    height: 10rem;
    margin-top: -1rem;
    border: 0;
    border-radius: 1rem;
    object-fit: contain;
}
`;
