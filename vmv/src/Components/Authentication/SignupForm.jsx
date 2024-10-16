// import React, { useState } from 'react';

// const SignupForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const validateForm = () => {
//     let formErrors = {};

//     // Name validation: should be more than 6 characters
//     if (!name.trim()) {
//       formErrors.name = 'Name is required';
//     } else if (name.length <= 6) {
//       formErrors.name = 'Name must be more than 6 characters';
//     }

//     // Email validation: must end with @gmail.com
//     if (!email) {
//       formErrors.email = 'Email is required';
//     } else if (!email.endsWith('@gmail.com')) {
//       formErrors.email = 'Email must end with @gmail.com';
//     }

//     // Password validation: must contain numbers, capital letters, and be more than 8 characters
//     const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     if (!password) {
//       formErrors.password = 'Password is required';
//     } else if (!passwordPattern.test(password)) {
//       formErrors.password = 'Password must be at least 8 characters long, include capital letters and numbers';
//     }

//     setErrors(formErrors);
//     return Object.keys(formErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setLoading(true);
//       setTimeout(() => {
//         // Simulate form submission process
//         setLoading(false);
//         alert('Form submitted successfully!');
//       }, 2000); // Simulate network delay
//     }
//   };

//   return (
//     <div className="flex justify-center items-center mt-6 bg-white px-4 sm:px-0">
//       <div className="bg-black p-8 rounded-md shadow-lg w-full max-w-md">
//         <h1 className="text-2xl font-semibold mb-6 text-white">Create Your VMV Account</h1>
//         <p className="text-gray-300 mb-6">Join VMV to unlock exclusive features and stay updated with our latest offerings.</p>
        
//         <form onSubmit={handleSubmit}>
//           {/* Name input field */}
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
//             <input
//               id="name"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-white`}
//               placeholder="Your Name"
//             />
//             {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
//           </div>

//           {/* Email input field */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email address</label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-white`}
//               placeholder="you@gmail.com"
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
//           </div>

//           {/* Password input field */}
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className={`w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-white`}
//               placeholder="Your Password"
//             />
//             {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
//           </div>

//           <button
//             type="submit"
//             className={`w-full py-2 px-4 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition flex justify-center items-center ${loading && 'cursor-not-allowed'}`}
//             disabled={loading}
//           >
//             {loading ? (
//               <div className="spinner border-t-transparent border-solid border-4 border-black rounded-full w-6 h-6 animate-spin"></div>
//             ) : (
//               'Sign Up'
//             )}
//           </button>
//         </form>

//         <div className="mt-6 text-center">
//           <p className="text-gray-300">
//             Already a member of VMV? <a href="#" className="text-white hover:underline">Log in</a>.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;
