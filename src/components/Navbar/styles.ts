import styled, { css } from "styled-components";

import { IBarProps } from "./navbar";

export const Bar = styled.div<IBarProps>`
  ${({ theme, navSize, navColor }) => css`
    width: 100%;
    height: ${navSize};
    background: ${navColor};
    position: fixed;
    top: 0;
    z-index: ${theme.layers.menu};
    transition: all 0.15s ease-out;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Links = styled.ul`
  display: flex;
  align-items: center;
`;
