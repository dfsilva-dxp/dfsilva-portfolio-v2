import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, MyTheme } from "./styles";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={MyTheme}>
        <h1>Portfólio</h1>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
