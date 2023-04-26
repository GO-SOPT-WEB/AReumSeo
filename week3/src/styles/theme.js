import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
    background-color: ${({ theme }) => theme.colors.yellow};
    font-family: 'UhBeeSe_hyun';
}
`;

const colors = {
  white: "#FFFFF0",
  lightPink: "#FEE1E8",
  lightPurple: "#ECD5E3",
  purple: "#CBAACB",
  lightYellow: "#FFFFB5",
  yellow: "#FBDEA2",
  darkPink: "#FF968A",
  pink: "#E5B9B5",
  mint: "#C6DBDA",
  salmon: "#FCB9AA",
  lightGreen: "#CCE2CB",
  green: "#8EB695",
  darkGreen: "#2D4849",
};

const font = {
  fontFamily: "LOTTERIACHAB",
};

const theme = {
  colors,
  font,
};
export { GlobalStyle, theme };
