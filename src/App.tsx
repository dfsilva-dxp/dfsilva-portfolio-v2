import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DefaultRouter } from "./routes";

import { GlobalStyle, MyTheme } from "./styles";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={MyTheme}>
        <DefaultRouter />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
