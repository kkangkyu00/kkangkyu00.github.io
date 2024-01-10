import React from 'react';
import { Location, Route, Routes, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const HomePage = React.lazy(() => import('pages/HomePage'));
const AboutPage = React.lazy(() => import('pages/AboutPage'));
const ProjectPage = React.lazy(() => import('pages/ProjectPage'));

interface AppRouteProps {
  location: Location;
}

const AppRoutes = ({ location }: AppRouteProps) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<div />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contect" element={<div />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
