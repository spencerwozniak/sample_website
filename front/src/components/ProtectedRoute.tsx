import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactElement;
  requiredCourseId?: number;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredCourseId }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // User is not logged in
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (requiredCourseId && !user.courses.includes(requiredCourseId)) {
    // User is logged in but hasn't purchased the required course
    return <Navigate to="/purchase/1" state={{ from: location }} />;
  }

  // User is logged in and has purchased the course
  return children;
};

export default ProtectedRoute;
