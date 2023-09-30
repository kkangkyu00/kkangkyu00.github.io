import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bgOverlay};
    color: ${({ theme }) => theme.color};
  }
`;
