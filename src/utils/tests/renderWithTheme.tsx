import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { render, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { MyTheme } from "../../styles";

export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(
    <ThemeProvider theme={MyTheme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
