import React from 'react';

const PriceAndProducts = () => {
    return (
        <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Price and Products</h3>
            <label htmlFor="description" className="block text-gray-700 mb-1">Description</label>
            <input
                type="text"
                placeholder="Enter Description"
                className="w-full p-3 border-2 border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
            <label htmlFor="your-email" className="block text-gray-700 mb-1">HSN No</label>
            <input
                type="email"
                placeholder="Enter HSN No."
                className="w-full p-3 border-2 border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
            <label htmlFor="your-number" className="block text-gray-700 mb-1">Quantity</label>
            <input
                type="number"
                placeholder="Enter Quantity"
                className="w-full p-3 border-2 border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
            <label htmlFor="your-number" className="block text-gray-700 mb-1">No's Rate</label>
            <input
                type="number"
                placeholder="Enter No's Rate"
                className="w-full p-3 border-2 border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
        </div>
    );
};

export default PriceAndProducts;
