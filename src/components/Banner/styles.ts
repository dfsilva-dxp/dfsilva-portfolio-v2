import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .full {
      height: 100vh;
    }

    .headline {
      font-size: ${theme.font.sizes.display};
      font-family: ${theme.font.family.custom};
      line-height: 0.5;
      color: ${theme.colors.white};
    }
  `}
`;

export const Inset = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(237, 93, 69, 0.5) 50%, black);
`;

export const Center = styled.div`
  ${({ theme }) => css`
    height: 100%;
    color: ${theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-family: ${theme.font.family.custom};
    line-height: 0.5;

    @media (min-width: 576px) {
      font-size: 4rem;
    }

    @media (min-width: 768px) {
      font-size: 5rem;
    }

    @media (min-width: 1200px) {
      font-size: ${theme.font.sizes.display};
    }
  `}
`;

export const Subtitle = styled.h4``;
