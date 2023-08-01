import React from 'react';
import { Location, Route, Routes } from 'react-router-dom';
import { HomePage, AboutPage } from 'pages';

interface AppRouteProps {
  location: Location;
}

const AppRoutes = ({ location }: AppRouteProps) => {
  return (
    <Routes location={location}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default AppRoutes;
