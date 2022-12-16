import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* Kontora-regular - latin */
@font-face {
  font-family: 'Kontora';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('../../public/fonts/Kontora/regular.otf') format('otf'),
}

/* Kontora-medium - latin */
@font-face {
  font-family: 'Kontora';
  font-style: medium;
  font-weight: 500;
  src: local(''),
       url('../../public/fonts/Kontora/medium.otf') format('otf'),
}

/* Kontora-600 - latin */
@font-face {
  font-family: 'Kontora';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('../../public/fonts/Kontora/bold.otf') format('otf'), 
}
/* Kontora-700 - latin */
@font-face {
  font-family: 'Kontora';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url('../../public/fonts/Kontora/black.otf') format('otf'), 
}

${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    vertical-align: baseline;
  }
  .html {
    @media (max-width: 768px) {
      font-size: 87.5%;
    }
  }
  html,
  body {
    background: ${theme.colors.white};
    color: ${theme.colors.text};
    transition: background 0.15s ease-in-out;
  }
  body {
    overflow-x: hidden;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }
  ol,
  ul {
    list-style: none;
  }
  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem ${theme.font.family.default}, sans-serif;
    color: ${theme.colors.text};
    transition: color 0.15s ease-in-out;
  }
  span {
    display: inline-block;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a,
  p {
    font-size: ${theme.font.sizes.small};
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`}
`;

export default GlobalStyle;
