import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../../Loader/Loader'

function HistoryInvoice() {
    const [histories, setHistories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHistories = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/history/saveInfo');
                setHistories(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error('Error fetching histories:', error);
                setHistories([]);
            } finally {
                setLoading(false);
            }
        };

        fetchHistories();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="min-h-screen flex flex-col items-center">
            <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-8 space-y-6">
                {histories.length === 0 ? (
                    <p className="text-center text-lg text-gray-600">No history found.</p>
                ) : (
                    histories.map((history) => (
                        <div key={history._id} className="p-5 border-b last:border-b-0 border-gray-200">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-1">{history.buyerCompanyName}</h2>
                            <p className="text-gray-700 text-lg">Invoice Number: <span className="font-medium">{history.invoiceNumber}</span></p>
                            <p className="text-gray-700 text-lg">Date: <span className="font-medium">{history.date}/{history.month}/{history.year}</span></p>
                            <p className="text-gray-500 text-sm">Created At: {new Date(history.createdAt).toLocaleDateString()}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default HistoryInvoice;
