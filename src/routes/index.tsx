import React from 'react';
import { Location, Route, Routes } from 'react-router-dom';
import RotatedGrid from 'components/MouseInteraction/RotatedGrid';

const HomePage = React.lazy(() => import('pages/HomePage'));
const AboutPage = React.lazy(() => import('pages/AboutPage'));

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
