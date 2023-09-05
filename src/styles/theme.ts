import { css } from 'styled-components';
// import { pixelToRem, pixelToEm, pixelToVw, toSpacing } from 'utils';

export const color = {};

export const typography = {
  title48B: css`
    font-size: 48px;
    line-height: 72px;
    font-weight: bold;
  `,
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

export const lightTheme = {
  MAIN: '#6868AD',
  SUB: '#dbd7ff',
  BACKGROUND: '#eff1f5',
  SUBBACKGROUND: 'rgb(242, 240, 253)'
};

export const darkTheme = {
  MAIN: '#dbd7ff',
  SUB: '#6868AD',
  BACKGROUND: '#202124',
  SUBBACKGROUND: '#30373e'
};

export const spacing = {
  default: '8px',
  half: '4px',
  double: '16px',
  triple: '24px'
};

export default { color, typography, spacing, lightTheme, darkTheme };
