import { screen } from "@testing-library/dom";
import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import Logo from ".";

describe("<Logo/>", () => {
  it("should render currectly logo", () => {
    const { container } = renderWithTheme(<Logo />);

    expect(
      screen.getByLabelText(/Daniel Silva Desktop logo/i).parentElement
    ).toHaveStyle({
      color: "#E1E1E6",
      position: "relative",
      "z-index": 10
    });

    expect(container).toMatchSnapshot();
  });
});
