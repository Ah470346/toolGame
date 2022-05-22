import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear , padding 0ms , margin 0ms;
  }

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    font-family: ${({ theme }) => theme.font};
  }

  button.btn {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }
`;
