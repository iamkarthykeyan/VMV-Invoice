import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PreLoader from './Components/PreLoader/PreLoader';
import Navbar from './Components/Navbar/Navbar';
import MainPage from './Components/MainPage/MainPage';
import Dashboard from './Components/Dashboard/Dashboard';
import MultiStepForm from './Pages/MultiStepForm/MultiStepForm';
import BlueMultiStepForm from './Pages/InvoiceThemes/Blue/BlueMultiStepForm';
import GreenMultiStepForm from './Pages/InvoiceThemes/Green/GreenMultiStepForm';
import RedMultiStepForm from './Pages/InvoiceThemes/Red/RedMultiStepForm';
import YellowMultiStepForm from './Pages/InvoiceThemes/Yellow/YellowMultiStepForm';
import PurpleMultiStepForm from './Pages/InvoiceThemes/Purple/PurpleMultiStepForm';
import OrangeMultiStepForm from './Pages/InvoiceThemes/Orange/OrangeMultiStepForm';
import PinkMultiStepForm from './Pages/InvoiceThemes/Pink/PinkMultiStepForm';
import PdfDesign from './PdfDesign/PdfDesign';
import SigninForm from './Components/Authentication/SigninForm';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is already authenticated
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
    setLoading(false); // Stop the loader after checking authentication
  }, []);

  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Store authentication state
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Clear authentication state
  };

  return (
    <Router>
      <div>
        {loading ? (
          <PreLoader onComplete={handlePreloaderComplete} />
        ) : (
          <>
            <Navbar onLogout={handleLogout} />
            <Routes>
              <Route path="/" element={isAuthenticated ? <MainPage /> : <Navigate to="/signin" />} />
              <Route path="/signin" element={isAuthenticated ? <Navigate to="/" /> : <SigninForm onLogin={handleLogin} />} />
              <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/signin" />} />
              <Route path="/form" element={isAuthenticated ? <MultiStepForm /> : <Navigate to="/signin" />} />
              <Route path="/blueform" element={isAuthenticated ? <BlueMultiStepForm /> : <Navigate to="/signin" />} />
              <Route path="/greenform" element={isAuthenticated ? <GreenMultiStepForm /> : <Navigate to="/signin" />} />
              <Route path="/orangeform" element={isAuthenticated ? <OrangeMultiStepForm /> : <Navigate to="/signin" />} />
              <Route path="/redform" element={isAuthenticated ? <RedMultiStepForm /> : <Navigate to="/signin" />} />
              <Route path="/pinkform" element={isAuthenticated ? <PinkMultiStepForm /> : <Navigate to="/signin" />} />
              <Route path="/yellowform" element={isAuthenticated ? <YellowMultiStepForm /> : <Navigate to="/signin" />} />
              <Route path="/purpleform" element={isAuthenticated ? <PurpleMultiStepForm /> : <Navigate to="/signin" />} />
              <Route path="/design" element={isAuthenticated ? <PdfDesign /> : <Navigate to="/signin" />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
