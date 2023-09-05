import React from 'react';
import { Location, Route, Routes } from 'react-router-dom';
import { HomePage, AboutPage } from 'pages';
import RotatedGrid from 'components/MouseInteraction/RotatedGrid';

interface AppRouteProps {
  location: Location;
}

const AppRoutes = ({ location }: AppRouteProps) => {
  return (
    <Routes location={location}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route
        path="/projects"
        element={
          <div>
            <RotatedGrid />
          </div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
