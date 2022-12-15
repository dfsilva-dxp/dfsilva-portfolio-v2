import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import Link from ".";

const props = {
  label: "Home",
  path: "/home"
};

describe("<Link/>", () => {
  it("should render currectly link", () => {
    renderWithTheme(<Link {...props} />);

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/home");

    expect(link).toHaveStyle({
      width: "100px",
      height: "1.4rem",
      "line-height": 1.1
    });

    expect(link.parentElement).toHaveStyle({
      display: "inline-block",
      position: "relative",
      height: "1.4rem",
      padding: "0.2rem 1rem",
      "z-index": 10,
      overflow: "hidden"
    });
  });

  it("should render text in uppercase when passed", () => {
    renderWithTheme(<Link {...props} isUppercase />);

    const link = screen.getByRole("link");

    expect(link.parentElement).toHaveStyle({
      "text-transform": "uppercase"
    });
  });
});
