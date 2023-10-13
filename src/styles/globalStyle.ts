import { createGlobalStyle, css } from 'styled-components';

const GlobalStyleCss = css`
  body {
    background-color: ${({ theme }) => theme.defaultOverlay};
    color: ${({ theme }) => theme.defaultColor};
  }
`;

export default createGlobalStyle`${GlobalStyleCss}`;
