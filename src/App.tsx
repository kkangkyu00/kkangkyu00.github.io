import React from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from 'routes';

import MainLayout from './layouts/MainLayout';
import './App.less';

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <React.Suspense fallback="">
        <MainLayout>
          <AppRoutes location={location} />
        </MainLayout>
      </React.Suspense>
    </div>
  );
};

export default App;
