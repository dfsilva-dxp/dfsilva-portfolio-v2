import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Default } from "./routes";

import { GlobalStyle, MyTheme } from "./styles";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={MyTheme}>
        <GlobalStyle />
        <Default />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
