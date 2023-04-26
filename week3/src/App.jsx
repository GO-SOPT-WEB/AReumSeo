import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/theme";
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Button />
    </ThemeProvider>
  );
}

export default App;
