import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.defaultOverlay};
    color: ${({ theme }) => theme.defaultColor};
  }
`;
