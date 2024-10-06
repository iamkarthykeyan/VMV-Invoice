import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import PreLoader from './Components/PreLoader/PreLoader';
import MainPage from './Components/MainPage/MainPage';

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
