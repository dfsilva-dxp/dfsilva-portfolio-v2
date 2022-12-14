import { screen } from "@testing-library/react";

import Container from ".";
import { renderWithTheme } from "../../utils/tests/renderWithTheme";

describe("<Container/>", () => {
  it("should render with width: 100% in small size", () => {
    const { container } = renderWithTheme(
      <Container>
        <h1>React hooks</h1>
      </Container>
    );

    const heading = screen.getByRole("heading", { name: /react hooks/i });
    const parent = heading.parentElement;

    expect(parent).toHaveStyle({
      width: "100%",
      margin: "0 auto",
      padding: "0 1rem"
    });

    expect(container).toMatchSnapshot();
  });

  it("should render with a width 33.75rem when the screen has a min-width 576px", () => {
    renderWithTheme(
      <Container>
        <h1>React hooks</h1>
      </Container>
    );

    const heading = screen.getByRole("heading", { name: /react hooks/i });
    const parent = heading.parentElement;

    expect(parent).toHaveStyleRule("max-width", "33.75rem", {
      media: "(min-width: 576px)"
    });
  });

  it("should render with a width 45rem when the screen has a min-width 768px", () => {
    renderWithTheme(
      <Container>
        <h1>React hooks</h1>
      </Container>
    );

    const heading = screen.getByRole("heading", { name: /react hooks/i });
    const parent = heading.parentElement;

    expect(parent).toHaveStyleRule("max-width", "45rem", {
      media: "(min-width: 768px)"
    });
  });

  it("should render with a width 60rem when the screen has a min-width 992px", () => {
    renderWithTheme(
      <Container>
        <h1>React hooks</h1>
      </Container>
    );

    const heading = screen.getByRole("heading", { name: /react hooks/i });
    const parent = heading.parentElement;

    expect(parent).toHaveStyleRule("max-width", "60rem", {
      media: "(min-width: 992px)"
    });
  });

  it("should render with a width 71.25rem when the screen has a min-width 1200px", () => {
    renderWithTheme(
      <Container>
        <h1>React hooks</h1>
      </Container>
    );

    const heading = screen.getByRole("heading", { name: /react hooks/i });
    const parent = heading.parentElement;

    expect(parent).toHaveStyleRule("max-width", "71.25rem", {
      media: "(min-width: 1200px)"
    });
  });

  it("should render with a width 82.5rem when the screen has a min-width 1400px", () => {
    renderWithTheme(
      <Container>
        <h1>React hooks</h1>
      </Container>
    );

    const heading = screen.getByRole("heading", { name: /react hooks/i });
    const parent = heading.parentElement;

    expect(parent).toHaveStyleRule("max-width", "82.5rem", {
      media: "(min-width: 1400px)"
    });
  });
});
