import React from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from 'routes';

import './App.less';

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <React.Suspense fallback="">
        <AppRoutes location={location} />
      </React.Suspense>
    </div>
  );
};

export default App;
