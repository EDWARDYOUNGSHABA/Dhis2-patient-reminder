// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Check if the user is authenticated by retrieving the auth token from localStorage
  const isAuthenticated = localStorage.getItem('authToken'); // Replace 'authToken' with your exact key if different

  // If user is not authenticated, redirect to the SignIn page
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  // If user is authenticated, allow access to the children components
  return children;
};

export default PrivateRoute;
