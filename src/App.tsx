import React from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderContainer } from 'containers';
import AppRoutes from 'routes';

import './App.css';

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <React.Suspense fallback="">
        <HeaderContainer />
        <AppRoutes location={location} />
      </React.Suspense>
    </div>
  );
};

export default App;
