import { screen } from "@testing-library/dom";
import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import Section from ".";

describe("<Section />", () => {
  it("should render a children", () => {
    const { container } = renderWithTheme(
      <Section>
        <h1>Heading</h1>
      </Section>
    );

    expect(
      screen.getByRole("heading", { name: /heading/i })
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
