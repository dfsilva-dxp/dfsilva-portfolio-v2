import styled, { css } from "styled-components";

export const Desktop = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray50};
    position: relative;
    z-index: ${theme.layers.base};
    display: none;
    transition: display 0.25s linear;

    svg {
      width: 7.8125rem;
    }

    @media (min-width: 768px) {
      display: block;
    }
  `}
`;
export const Mobile = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray50};
    position: relative;
    z-index: ${theme.layers.base};
    display: block;
    transition: display 0.25s linear;

    @media (min-width: 768px) {
      display: none;
    }
  `}
`;
