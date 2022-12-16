import { renderWithTheme } from "../../utils/tests/renderWithTheme";
import { screen } from "@testing-library/dom";

import Navbar from ".";

describe("<Navbar/>", () => {
  it("should render currectly", () => {
    renderWithTheme(<Navbar />);

    expect(
      screen.getByLabelText("Daniel Silva Desktop logo")
    ).toBeInTheDocument();
  });
});
