import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          // If the user is authenticated, render the protected component
          return <Component {...props} />;
        } else {
          // If the user is not authenticated, navigate to the login page
          return <Navigate to="/login" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
