import React, { useState } from 'react';

const PriceAndProducts = () => {
    const [rows, setRows] = useState([{ description: '', hsnNo: '', qty: 0, nosRate: 0 }]);

    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const updatedRows = [...rows];
        updatedRows[index][name] = value;

        // Calculate the value (Qty * Nos Rate)
        if (name === 'qty' || name === 'nosRate') {
            updatedRows[index].value = updatedRows[index].qty * updatedRows[index].nosRate;
        }

        setRows(updatedRows);
    };

    const addRow = () => {
        setRows([...rows, { description: '', hsnNo: '', qty: 0, nosRate: 0 }]);
    };

    const calculateTotal = () => {
        return rows.reduce((total, row) => total + (row.value || 0), 0);
    };

    return (
        <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Price & Products</h3>
            
            {rows.map((row, index) => (
                <div className="grid grid-cols-5 gap-4 mb-4" key={index}>
                    <div>{index + 1}</div>
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={row.description}
                        onChange={(e) => handleChange(index, e)}
                        className="p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
                    />
                    <input
                        type="text"
                        name="hsnNo"
                        placeholder="HSN No"
                        value={row.hsnNo}
                        onChange={(e) => handleChange(index, e)}
                        className="p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
                    />
                    <input
                        type="number"
                        name="qty"
                        placeholder="Qty"
                        value={row.qty}
                        onChange={(e) => handleChange(index, e)}
                        className="p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
                    />
                    <input
                        type="number"
                        name="nosRate"
                        placeholder="Nos Rate"
                        value={row.nosRate}
                        onChange={(e) => handleChange(index, e)}
                        className="p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
                    />
                    <div className="flex items-center justify-center">{row.value || 0}</div>
                </div>
            ))}
            
            <button
                onClick={addRow}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4"
            >
                Add Row
            </button>

            <div className="text-xl font-semibold mt-4">Total Value: {calculateTotal()}</div>
        </div>
    );
};

export default PriceAndProducts;
