import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import PreLoader from './Components/PreLoader/PreLoader';
import MainPage from './Components/MainPage/MainPage';
import Sidebar from './Components/Dashboard/Dashboard';
import SignupForm from './Components/Account/SignupForm';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreLoaderFinish = () => {
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <PreLoader onFinish={handlePreLoaderFinish} />
      ) : (
        <>
        <Navbar/>
        <MainPage />
        <Sidebar/>
        <SignupForm/>
        </>
      )}
    </div>
  );
};

export default App;
