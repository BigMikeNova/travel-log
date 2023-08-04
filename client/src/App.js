import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import Registration from './pages/Registration';
import PostCreation from './pages/PostCreation';
import { Navigate } from 'react-router-dom'; // Add this import

const App = () => {
  const isAuthenticated = true; // Replace this with your actual authentication logic

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<Registration />} />
        <Route
          path="/home"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/createpost"
          element={isAuthenticated ? <PostCreation /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
