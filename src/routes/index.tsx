import React from 'react';
import { Location, Route, Routes } from 'react-router-dom';

const HomePage = React.lazy(() => import('pages/HomePage'));
const AboutPage = React.lazy(() => import('pages/AboutPage'));
const ProjectPage = React.lazy(() => import('pages/ProjectPage'));

interface AppRouteProps {
  location: Location;
}

const AppRoutes = ({ location }: AppRouteProps) => {
  return (
    <Routes location={location}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectPage />} />
    </Routes>
  );
};

export default AppRoutes;
