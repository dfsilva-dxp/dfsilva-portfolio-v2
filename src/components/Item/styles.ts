import styled, { css } from "styled-components";

import { ItemProps } from "./item";

export const Wrap = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    position: relative;
    height: 1.4rem;
    padding: 0.2rem 0.5rem;
    z-index: ${theme.layers.base};
    overflow: hidden;
  `}
`;

export const Icon = styled.div<Pick<ItemProps, "isUppercase">>`
  ${({ theme, isUppercase }) => css`
    width: fit-content;
    height: 1.4rem;
    text-transform: ${isUppercase ? "uppercase" : "initial"};
    line-height: 1.1;
    cursor: pointer;

    & .before,
    & .after {
      padding-bottom: 0.6rem;
      font-weight: ${theme.font.weight.bold};
      font-family: ${theme.font.family.custom};
      font-size: 0.8125rem;
      letter-spacing: 2px;
      transition: all 0.25s;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    &:hover .before,
    &:hover .after {
      transform: translateY(-1.5rem);
    }
  `}
`;
