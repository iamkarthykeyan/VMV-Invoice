import React, { useState } from 'react';

const SignupForm = () => {
  const [name, setName] = useState('');  // Added state for name
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex justify-center items-center mt-6 bg-white px-4 sm:px-0">
      <div className="bg-black p-8 rounded-md shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-white">Create Your VMV Account</h1>
        <p className="text-gray-300 mb-6">Join VMV to unlock exclusive features and stay updated with our latest offerings.</p>
        
        <form onSubmit={handleSubmit}>
          {/* Name input field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
            <input 
              id="name" 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Your Name" 
              required 
            />
          </div>

          {/* Email input field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email address</label>
            <input 
              id="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="you@gmail.com" 
              required 
            />
          </div>

          {/* Password input field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input 
              id="password" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white" 
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-2 px-4 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-300">Already a member of VMV? <a href="#" className="text-white hover:underline">Log in</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
