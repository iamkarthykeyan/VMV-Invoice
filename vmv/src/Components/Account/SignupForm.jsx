import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [locale, setLocale] = useState('United States (English)');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-gray-900">Let's create your account.</h1>
        <p className="text-gray-600 mb-6">Signing up for Square is fast and free. No commitments or long-term contracts required.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
            <input 
              id="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com" 
              required 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input 
              id="password" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="locale" className="block text-sm font-medium text-gray-700 mb-2">Locale</label>
            <select 
              id="locale" 
              value={locale} 
              onChange={(e) => setLocale(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            >
              <option>United States (English)</option>
              <option>United Kingdom (English)</option>
              <option>India (English)</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="flex items-start mb-4">
            <input 
              id="terms" 
              type="checkbox" 
              checked={agreed} 
              onChange={() => setAgreed(!agreed)} 
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
              required 
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-700">I agree to Square's <a href="#" className="text-blue-600 hover:underline">Terms</a>, <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>, and <a href="#" className="text-blue-600 hover:underline">E-Sign Consent</a>.</label>
          </div>

          <button 
            type="submit" 
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Continue
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-700">Already have a Square account? <a href="#" className="text-blue-600 hover:underline">Sign in</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
