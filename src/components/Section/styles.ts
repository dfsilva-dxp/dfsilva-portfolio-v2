import styled, { css } from "styled-components";

export const Content = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: fit-content;
    border-bottom: 1px solid ${theme.colors.glitch};
  `}
`;
