import React, { createContext } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderContainer } from 'containers';
import AppRoutes from 'routes';

import { lightTheme } from 'styles/theme';
import './App.css';

export const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {
    return null;
  }
});

const App = () => {
  const location = useLocation();
  return (
    <div>
      <HeaderContainer />
      <AppRoutes location={location} />
    </div>
  );
};

export default App;
