import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home.js';
import Payments from './pages/payments.js';
import Login from './pages/login.js'
import RegistrationPage from './pages/registrationPage.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/registrationPage' element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
};

export default App;