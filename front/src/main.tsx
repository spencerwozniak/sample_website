// Importing necessary libraries and components
import React, { Suspense, lazy, useEffect } from 'react';  // React provides the core functionality for building components. Suspense and lazy are used for lazy loading components, and useEffect is for handling side effects.
import ReactDOM from 'react-dom/client';  // ReactDOM is used to render React components into the DOM.
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';  // React Router is used to handle navigation between pages in a single-page app.
import './index.css';  // Importing the CSS file that applies global styles.
import { AuthProvider } from './context/AuthContext';  // Importing the AuthProvider, which will likely manage user authentication state.
import LoadingCircle from './items/LoadingCircle';  // Importing a LoadingCircle component to show a loading spinner while components are being loaded.
import ReactGA from 'react-ga4';  // Importing Google Analytics to track user behavior on the website.

// Initialize Google Analytics with your specific measurement ID
ReactGA.initialize('G-RHT79B9JCQ');

// Using lazy loading for components to optimize page load times. Each component is only loaded when it's needed.
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const MissionPage = lazy(() => import('./pages/MissionPage'));
const HistoryPage = lazy(() => import('./pages/HistoryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const WhatWeDoPage = lazy(() => import('./pages/WhatWeDoPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const OpportunitiesPage = lazy(() => import('./pages/OpportunitiesPage'));
const MediaPage = lazy(() => import('./pages/MediaPage'));
const NotFound = lazy(() => import('./pages/NotFound'));  // 404 Not Found page when a route doesn't match.
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));

// Defining the routes of the application using createBrowserRouter.
// Each route is associated with a specific page component and an optional error page (for invalid routes).
const router = createBrowserRouter([
  { 
    path: '/',  // Path for the home page
    element: <HomePage />,  // Renders the HomePage component when the user navigates to '/'
    errorElement: <NotFound />  // Renders the NotFound component if there's an error (e.g., page doesn't exist)
  },
  { 
    path: '/about',  // Path for the About page
    element: <AboutPage />  // Renders the AboutPage component when the user navigates to '/about'
  },
  { 
    path: '/about/mission',  // Path for the Mission page (under the About section)
    element: <MissionPage /> 
  },
  { 
    path: '/about/history',  // Path for the History page (under the About section)
    element: <HistoryPage /> 
  },
  { 
    path: '/contact',  // Path for the Contact page
    element: <ContactPage /> 
  },
  { 
    path: '/what-we-do',  // Path for the "What We Do" page
    element: <WhatWeDoPage /> 
  },
  { 
    path: '/team',  // Path for the Team page
    element: <TeamPage /> 
  },
  { 
    path: '/opportunities',  // Path for the Opportunities page
    element: <OpportunitiesPage /> 
  },
  { 
    path: '/media',  // Path for the Media page
    element: <MediaPage /> 
  },
  { 
    path: '/register',  // Path for the Registration page
    element: <RegisterPage /> 
  },
  { 
    path: '/login',  // Path for the Login page
    element: <LoginPage /> 
  },
  { 
    path: '/profile',  // Path for the Profile page
    element: <ProfilePage /> 
  },
  { 
    path: '*',  // Wildcard route for any paths not matched above
    element: <NotFound />  // Renders the NotFound component for unknown routes.
  },
]);

// This component scrolls to the top of the page whenever the route changes.
const ScrollToTopOnRouteChange: React.FC = () => {
  const { pathname } = useLocation();  // Gets the current route pathname.

  useEffect(() => {
    window.scrollTo(0, 0);  // Scrolls to the top of the page on route change.
    ReactGA.send({ hitType: 'pageview', page: pathname });  // Sends a pageview hit to Google Analytics for tracking.
  }, [pathname]);  // This effect runs whenever 'pathname' changes.

  return null;  // This component does not render anything.
};

// Rendering the entire application into the root element of the page.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>  {/* Wrapping the application in AuthProvider to manage user authentication. */}
      {/* 
        Suspense is used to display a fallback UI (like a loading spinner) 
        while the lazily loaded components are being fetched.
      */}
      <Suspense fallback={<LoadingCircle />}>
        <RouterProvider router={router}>
          {/* ScrollToTopOnRouteChange ensures the page scrolls to the top after navigating to a new route */}
          <ScrollToTopOnRouteChange /> 
        </RouterProvider>
      </Suspense>
    </AuthProvider>
  </React.StrictMode>,
);
