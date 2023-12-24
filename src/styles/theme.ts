import { css } from 'styled-components';

export const color = {
  white: '#FFFFFF',
  gray: '#AFB3B8',
  black: '#212529',
  disable: '#EBEBEC',
  bgGray: '#F8F8F8',
  bgOverlay: '#06121A',
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
  body20B: css`
    font-size: 20px;
    line-height: 32px;
    font-weight: bold;
  `,
  body20R: css`
    font-size: 20px;
    line-height: 32px;
    font-weight: normal;
  `,
  body18B: css`
    font-size: 18px;
    line-height: 28px;
    font-weight: bold;
  `,
  body18R: css`
    font-size: 18px;
    line-height: 28px;
    font-weight: normal;
  `,
  body16B: css`
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
  `,
  body16R: css`
    font-size: 16px;
    line-height: 24px;
    font-weight: normal;
  `
};

export const lightTheme = {
  color,
  typography,
  defaultOverlay: '#EFF1F5',
  defaultColor: '#202124'
};

export const darkTheme = {
  color,
  typography,
  defaultOverlay: '#202124',
  defaultColor: '#EFF1F5'
};

export default { color, typography, lightTheme, darkTheme };
