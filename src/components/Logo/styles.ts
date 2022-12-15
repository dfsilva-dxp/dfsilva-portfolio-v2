import styled, { css } from "styled-components";

export const Wrap = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray50};
    position: relative;
    z-index: ${theme.layers.base};

    .blend-mode {
      mix-blend-mode: exclusion;
    }

    .text {
      display: block;
    }

    svg {
      width: 7.8125rem;
    }

    @media (max-width: 768px) {
      .text {
        display: none;
      }

      svg {
        width: 2.5rem;
      }
    }
  `}
`;
