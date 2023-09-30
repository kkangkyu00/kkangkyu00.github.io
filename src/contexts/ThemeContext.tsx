import React, { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useTheme } from 'hooks';

import { lightTheme, darkTheme } from 'styles/theme';

interface ThemeProviderProps {
  children: ReactNode;
}

const defaultValue = {
  theme: 'light',
  onChangeTheme: () => {}
};

export const ThemeContext = React.createContext(defaultValue);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeProps = useTheme();
  return (
    <ThemeContext.Provider value={themeProps}>
      <StyledThemeProvider theme={themeProps.theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
