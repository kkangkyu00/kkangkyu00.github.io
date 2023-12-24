import React from 'react';
import { Location, Route, Routes, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';

const HomePage = React.lazy(() => import('pages/HomePage'));
const AboutPage = React.lazy(() => import('pages/AboutPage'));
const ProjectPage = React.lazy(() => import('pages/ProjectPage'));

interface AppRouteProps {
  location: Location;
}

const AppRoutes = ({ location }: AppRouteProps) => {
  return (
    <MainLayout>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Outlet />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </MainLayout>
  );
};

export default AppRoutes;
