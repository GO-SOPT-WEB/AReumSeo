import { ThemeProvider, DefaultTheme } from "styled-components";
import theme from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import Router from "./Router";
function App() {
  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
