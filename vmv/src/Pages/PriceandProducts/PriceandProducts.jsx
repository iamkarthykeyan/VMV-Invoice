import React, { useState } from 'react';

const PriceAndProducts = () => {
    const [description, setDescription] = useState('');
    const [hsnNo, setHsnNo] = useState('');
    const [quantity, setQuantity] = useState('');
    const [nosRate, setNosRate] = useState('');
    const [rows, setRows] = useState([]);

    const handleAddRow = () => {
        if (description && hsnNo && quantity && nosRate) {
            const newRow = {
                sno: rows.length + 1,
                description,
                hsnNo,
                quantity: parseInt(quantity, 10),
                nosRate: parseFloat(nosRate),
                value: parseInt(quantity, 10) * parseFloat(nosRate),
            };
            setRows([...rows, newRow]);
            // Clear inputs after adding the row
            setDescription('');
            setHsnNo('');
            setQuantity('');
            setNosRate('');
        }
    };

    return (
        <div className="p-4">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Price and Products</h3>
            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 mb-1">Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter Description"
                    className="w-full p-3 border-2 border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="hsn-no" className="block text-gray-700 mb-1">HSN No</label>
                <input
                    type="text"
                    value={hsnNo}
                    onChange={(e) => setHsnNo(e.target.value)}
                    placeholder="Enter HSN No."
                    className="w-full p-3 border-2 border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="quantity" className="block text-gray-700 mb-1">Quantity</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Enter Quantity"
                    className="w-full p-3 border-2 border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="nos-rate" className="block text-gray-700 mb-1">No's Rate</label>
                <input
                    type="number"
                    value={nosRate}
                    onChange={(e) => setNosRate(e.target.value)}
                    placeholder="Enter No's Rate"
                    className="w-full p-3 border-2 border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                />
            </div>
            <button
                onClick={handleAddRow}
                className="bg-lime-600 text-white py-2 px-4 rounded-lg hover:bg-lime-700 transition duration-200 focus:outline-none font-semibold w-full flex items-center justify-center"
            >
                Add Product to the Table <p className="ml-2 text-2xl">→</p>
            </button>

            {/* Table to display added rows */}
            <div className="mt-6 overflow-x-auto shadow-md rounded-md">
                <table className="min-w-full bg-white border-collapse">
                    <thead className="bg-black text-white rounded-t-lg">
                        <tr className="text-left">
                            <th className="p-3 font-semibold text-center">Sno</th>
                            <th className="p-3 font-semibold text-center">Description</th>
                            <th className="p-3 font-semibold text-center">HSN No.</th>
                            <th className="p-3 font-semibold text-center">Qty</th>
                            <th className="p-3 font-semibold text-center">No's Rate</th>
                            <th className="p-3 font-semibold text-center">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index} className="bg-white">
                                <td className="border p-3 text-black text-center">{row.sno}</td>
                                <td className="border p-3 text-black text-center">{row.description}</td>
                                <td className="border p-3 text-black text-center">{row.hsnNo}</td>
                                <td className="border p-3 text-black text-center">{row.quantity}</td>
                                <td className="border p-3 text-black text-center">{row.nosRate}</td>
                                <td className="border p-3 text-black text-center">{row.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PriceAndProducts;
