import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import LogoParticles from ".";

describe("<LogoParticles/>", () => {
  it("should render currectly", () => {
    const { container } = renderWithTheme(<LogoParticles />);

    expect(screen.getByLabelText("Logo Particles")).toHaveStyle({
      "background-color": "transparent"
    });

    expect(container).toMatchSnapshot();
  });
});
