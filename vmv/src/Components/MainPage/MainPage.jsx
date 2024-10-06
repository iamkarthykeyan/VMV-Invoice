// MainPage.js
import React from 'react';

const MainPage = () => {
  return (
    <div className="main-page h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Minimal Navbar */}
      <nav className="w-full p-4 bg-gray-800 text-white flex justify-between">
        <div>Logo</div>
        <div>Menu</div>
      </nav>

      {/* Centered Content */}
      <div className="text-center mt-20">
        <h1 className="text-6xl mb-8">VMV International</h1>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MainPage;
