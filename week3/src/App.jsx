import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/theme";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
