import styled, { css, DefaultTheme } from "styled-components";

import { IGlitchProps } from "./glitch";

const gridModifiers = {
  one: () => css`
    grid-template-columns: 1fr;
  `,
  two: (theme: DefaultTheme) => css`
    grid-template-columns: repeat(2, 1fr);

    &::before {
      content: "";
      border-right: 1px solid ${theme.colors.glitch};
    }
  `,
  three: (theme: DefaultTheme) => css`
    grid-template-columns: repeat(3, 1fr);

    &::before,
    &::after {
      content: "";
      border-right: 1px solid ${theme.colors.glitch};
    }
  `
};

export const Grid = styled.div<IGlitchProps>`
  ${({ theme, columns }) => css`
    position: absolute;
    height: 100%;
    border-left: 1px solid ${theme.colors.glitch};
    border-right: 1px solid ${theme.colors.glitch};
    left: ${theme.spacings.xsmall};
    right: ${theme.spacings.xsmall};
    z-index: ${theme.layers.glitch};
    display: grid;

    ${!!columns && gridModifiers[columns](theme)}
  `}
`;
