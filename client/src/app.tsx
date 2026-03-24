import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./components/Layout'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage/ProjectsPage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const KnowledgeBasePage = lazy(() => import('./pages/KnowledgeBasePage/KnowledgeBasePage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const RouteFallback = () => (
  <div className="min-h-[40vh] flex items-center justify-center text-blue-100/70">Loading...</div>
);

const RoutesComponent = () => {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="knowledge" element={<KnowledgeBasePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesComponent;
