import React from 'react';
import { Routes, Route, useLocation, Location } from 'react-router-dom';
import { HomePage } from 'pages';
import { HeaderContainer } from 'containers';

import './App.css';

interface AppRouteProps {
  location: Location;
}

// 추후 따로 분리
const AppRoute = ({ location }: AppRouteProps) => {
  return (
    <Routes location={location}>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

const App = () => {
  const location = useLocation();
  return (
    <div>
      <HeaderContainer />
      <AppRoute location={location} />
    </div>
  );
};

export default App;
