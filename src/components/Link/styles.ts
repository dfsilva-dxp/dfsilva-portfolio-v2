import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

import { ILinkProps } from "./link";

export const Wrap = styled.div<Pick<ILinkProps, "isUppercase">>`
  ${({ theme, isUppercase }) => css`
    display: inline-block;
    position: relative;
    height: 1.4rem;
    padding: 0.2rem 1rem;
    text-transform: ${isUppercase ? "uppercase" : "initial"};
    z-index: ${theme.layers.base};
    overflow: hidden;
  `}
`;

export const Link = styled(NavLink)`
  ${({ theme }) => css`
    width: 100px;
    height: 1.4rem;
    line-height: 1.1;

    &::before,
    &::after {
      display: block;
      content: attr(data-label);
      padding-bottom: 0.6rem;
      font-weight: ${theme.font.weight.bold};
      letter-spacing: 2px;
      transition: all 0.25s;
    }

    &:hover::before,
    &:hover::after {
      transform: translateY(-1.5rem);
    }
  `}
`;
