import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PreLoader from './Components/PreLoader/PreLoader';
import Navbar from './Components/Navbar/Navbar';
import MainPage from './Components/MainPage/MainPage';
import Dashboard from './Components/Dashboard/Dashboard';
import SignupForm from './Components/Account/SignupForm';
import MultiStepForm from './Pages/MultiStepForm/MultiStepForm';
// Colors
import BlueMultiStepForm from './Pages/InvoiceThemes/Blue/BlueMultiStepForm'
import GreenMultiStepForm from './Pages/InvoiceThemes/Green/GreenMultiStepForm'
import RedMultiStepForm from './Pages/InvoiceThemes/Red/RedMultiStepForm'
import YellowMultiStepForm from './Pages/InvoiceThemes/Yellow/YellowMultiStepForm'
import PurpleMultiStepForm from './Pages/InvoiceThemes/Purple/PurpleMultiStepForm'
import OrangeMultiStepForm from './Pages/InvoiceThemes/Orange/OrangeMultiStepForm'
import PinkMultiStepForm from './Pages/InvoiceThemes/Pink/PinkMultiStepForm'
// Design
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
              <Route path="/blueform" element={<BlueMultiStepForm />} />
              <Route path="/greenform" element={<GreenMultiStepForm />} />
              <Route path="/orangeform" element={<OrangeMultiStepForm />} />
              <Route path="/redform" element={<RedMultiStepForm />} />
              <Route path="/pinkform" element={<PinkMultiStepForm />} />
              <Route path="/yellowform" element={<YellowMultiStepForm />} />
              <Route path="/purpleform" element={<PurpleMultiStepForm />} />
              <Route path="/design" element={<PdfDesign />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
