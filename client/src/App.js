import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <ProtectedRoute path="/home" component={HomePage} />
        <ProtectedRoute path="/profile/:userId" component={ProfilePage} />
      </Switch>
    </Router>
  );
};

export default App;