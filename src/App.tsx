import React from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderContainer } from 'containers';
import AppRoutes from 'routes';

import './App.css';

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
