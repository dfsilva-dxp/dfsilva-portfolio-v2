import { screen } from "@testing-library/dom";
import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import Glitch from ".";

describe("<Glitch/>", () => {
  it("should render a column by default", () => {
    renderWithTheme(
      <div>
        <Glitch data-testid="glitch" />
        <p>Glitch</p>
      </div>
    );

    expect(screen.getByText("Glitch").previousElementSibling).toHaveStyle({
      "grid-template-columns": "1fr"
    });
  });

  it("should render two columns when passed", () => {
    renderWithTheme(
      <div>
        <Glitch data-testid="glitch" columns="two" />
        <p>Glitch</p>
      </div>
    );

    const glitch = screen.getByText("Glitch").previousElementSibling;

    expect(glitch).toHaveStyle({
      "grid-template-columns": "repeat(2,1fr)"
    });
    expect(glitch).toHaveStyleRule("border-right", "1px solid #E1E1E6", {
      modifier: "::before"
    });
  });

  it("should render three columns when passed", () => {
    renderWithTheme(
      <div>
        <Glitch data-testid="glitch" columns="three" />
        <p>Glitch</p>
      </div>
    );

    const glitch = screen.getByText("Glitch").previousElementSibling;

    expect(glitch).toHaveStyle({
      "grid-template-columns": "repeat(3,1fr)"
    });
    expect(glitch).toHaveStyleRule("border-right", "1px solid #E1E1E6", {
      modifier: "::before"
    });
    expect(glitch).toHaveStyleRule("border-right", "1px solid #E1E1E6", {
      modifier: "::after"
    });

    expect(glitch).toMatchSnapshot();
  });
});
