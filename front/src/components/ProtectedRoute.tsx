import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';  // Import Navigate and useLocation from React Router for navigation and location info.
import { useAuth } from '../context/AuthContext';  // Import the custom authentication hook to get the current user data.

interface ProtectedRouteProps {
  children: React.ReactElement;  // The component(s) to render inside the protected route.
  requiredCourseId?: number;  // Optional prop to specify a required course ID for access.
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredCourseId }) => {
  const { user } = useAuth();  // Get the current user from the AuthContext using the custom useAuth hook.
  const location = useLocation();  // Get the current location (the URL the user is trying to access).

  // Check if the user is not logged in
  if (!user) {
    // If the user is not logged in, redirect them to the login page.
    // The "state" prop saves the current location so the user can be redirected back after login.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // Check if the route requires a course purchase and if the user hasn't purchased it
  if (requiredCourseId && !user.courses.includes(requiredCourseId)) {
    // If a specific course is required and the user hasn't purchased it, redirect them to the purchase page.
    // In this example, we're redirecting to a purchase page with ID 1.
    return <Navigate to="/purchase/1" state={{ from: location }} />;
  }

  // If the user is logged in and has access to the required course (if applicable), render the child components.
  return children;
};

export default ProtectedRoute;  // Export the component to use it in other parts of the app.
