import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PreLoader from './Components/PreLoader/PreLoader'; // Keep only one import
import Navbar from './Components/Navbar/Navbar';
import MainPage from './Components/MainPage/MainPage';
import Dashboard from './Components/Dashboard/Dashboard';
import SignupForm from './Components/Account/SignupForm';
import MultiStepForm from './Pages/MultiStepForm/MultiStepForm';
import PdfDesign from './PdfDesign/PdfDesign';

const App = () => {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  return (
    <Router>
      <div>
        {loading ? (
          <PreLoader onComplete={handlePreloaderComplete} />
        ) : (
          <>
            <Navbar />
            {/* Routes for different pages */}
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/form" element={<MultiStepForm />} />
              <Route path="/design" element={<PdfDesign />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
