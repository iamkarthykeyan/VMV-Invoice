import React, { useState } from 'react';
import PreLoader from './Pages/PreLoader';
import MainPage from './Pages/MainPage';
import Navbar from './Components/Navbar/Navbar';

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
        </>
      )}
    </div>
  );
};

export default App;
