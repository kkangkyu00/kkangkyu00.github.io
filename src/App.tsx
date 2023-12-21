import React from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderContainer, LNB } from 'containers';
import AppRoutes from 'routes';

import './App.less';

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <React.Suspense fallback="">
        <HeaderContainer />
        <LNB />
        <AppRoutes location={location} />
      </React.Suspense>
    </div>
  );
};

export default App;
