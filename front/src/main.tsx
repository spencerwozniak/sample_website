import React, { Suspense, lazy, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import './index.css';
import { AuthProvider } from './context/AuthContext';
import LoadingCircle from './items/LoadingCircle';
import ReactGA from 'react-ga4';

// Initialize Google Analytics with your measurement ID
ReactGA.initialize('G-RHT79B9JCQ');

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const MissionPage = lazy(() => import('./pages/MissionPage'));
const HistoryPage = lazy(() => import('./pages/HistoryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const WhatWeDoPage = lazy(() => import('./pages/WhatWeDoPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const OpportunitiesPage = lazy(() => import('./pages/OpportunitiesPage'));
const MediaPage = lazy(() => import('./pages/MediaPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));

const router = createBrowserRouter([
  { path: '/', 
    element: <HomePage />, 
    errorElement: <NotFound /> 
  },
  { 
    path: '/about', 
    element: <AboutPage /> 
  },
  { 
    path: '/about/mission', 
    element: <MissionPage /> 
  },
  { 
    path: '/about/history', 
    element: <HistoryPage /> 
  },
  { 
    path: '/contact', 
    element: <ContactPage /> 
  },
  { 
    path: '/what-we-do', 
    element: <WhatWeDoPage /> 
  },
  { 
    path: '/team', 
    element: <TeamPage /> 
  },
  { 
    path: '/opportunities', 
    element: <OpportunitiesPage /> 
  },
  { 
    path: '/media', 
    element: <MediaPage /> 
  },
  { 
    path: '/register', 
    element: <RegisterPage /> 
  },
  { 
    path: '/login', 
    element: <LoginPage /> 
  },
  { 
    path: '/profile', 
    element: <ProfilePage /> 
  },
  { path: '*', element: <NotFound /> },
]);

const ScrollToTopOnRouteChange: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.send({ hitType: 'pageview', page: pathname }); // Send page view on route change
  }, [pathname]);

  return null;  // Ensures the component doesn't render anything
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <Suspense fallback={<LoadingCircle />}>
        <RouterProvider router={router}>
          <ScrollToTopOnRouteChange /> {/* Ensures scroll after route change */}
        </RouterProvider>
      </Suspense>
    </AuthProvider>
  </React.StrictMode>,
);
