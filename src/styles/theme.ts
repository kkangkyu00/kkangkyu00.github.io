import { css } from 'styled-components';
// import { pixelToRem, pixelToEm, pixelToVw, toSpacing } from 'utils';

export const color = {
  white: '#FFFFFF',
  gray: '#AFB3B8',
  black: '#212529',
  disable: '#EBEBEC',
  bgGray: '#F8F8F8',
  // bgOverlay: '#06121A',
  bgDNB: '#11202C',
  //
  bgRB: '#243441',
  A4: '#94A0A3',
  A5: '#C4C8C7'
};

export const typography = {
  title32B: css`
    font-size: 32px;
    line-height: 52px;
    font-weight: bold;
  `,
  title32R: css`
    font-size: 32px;
    line-height: 52px;
    font-weight: normal;
  `,
  title24B: css`
    font-size: 24px;
    line-height: 36px;
    font-weight: bold;
  `,
  title24R: css`
    font-size: 24px;
    line-height: 36px;
    font-weight: normal;
  `,
  title20B: css`
    font-size: 20px;
    line-height: 32px;
    font-weight: bold;
  `,
  title20R: css`
    font-size: 20px;
    line-height: 32px;
    font-weight: normal;
  `,
  title18B: css`
    font-size: 18px;
    line-height: 28px;
    font-weight: bold;
  `,
  title18R: css`
    font-size: 18px;
    line-height: 28px;
    font-weight: normal;
  `
};

export const spacing = {
  default: '8px',
  half: '4px',
  double: '16px',
  triple: '24px'
};

export const lightTheme = {
  // color,
  typography,
  spacing,
  bgOverlay: '#EFF1F5',
  color: '#202124'
};

export const darkTheme = {
  // ...color,
  typography,
  spacing,
  bgOverlay: '#202124',
  color: '#EFF1F5'
};

export default { color, typography, spacing, lightTheme, darkTheme };
