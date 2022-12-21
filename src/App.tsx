import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ParallaxProvider } from "react-scroll-parallax";

import { DefaultRouter } from "./routes";

import { GlobalStyle, MyTheme } from "./styles";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={MyTheme}>
        <ParallaxProvider>
          <DefaultRouter />
        </ParallaxProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
