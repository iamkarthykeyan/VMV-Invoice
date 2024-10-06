import React, { useState } from "react";
import { FaCheckCircle, FaCircle } from "react-icons/fa";
import PriceAndProducts from "../PriceandProducts/PriceandProducts";

const MultiStepForm = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => setStep(step + 1);
    const handlePrev = () => setStep(step - 1);

    // Step labels and icons
    const steps = [
        { id: 1, label: "Dealership Details", icon: <FaCircle /> },
        { id: 2, label: "Address", icon: <FaCircle /> },
        { id: 3, label: "Price & Products", icon: <FaCircle /> },
        { id: 4, label: "GST Info", icon: <FaCircle /> },
        { id: 5, label: "Download", icon: <FaCircle /> },
    ];

    // Render content based on the current step
    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-gray-800">Dealership Details</h3>

                        <div className="mb-4">
                            <label htmlFor="date" className="block text-gray-700 mb-1">Date</label>
                            <input
                                type="date"
                                id="date"
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="invoice-number" className="block text-gray-700 mb-1">Invoice Number</label>
                            <input
                                type="text"
                                id="invoice-number"
                                placeholder="Enter invoice number"
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="buyer-company" className="block text-gray-700 mb-1">Buyer Company Name</label>
                            <input
                                type="text"
                                id="buyer-company"
                                placeholder="Enter buyer company name"
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="buyer-address" className="block text-gray-700 mb-1">Buyer Address</label>
                            <input
                                type="text"
                                id="buyer-address"
                                placeholder="Enter buyer address"
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="kind-attention" className="block text-gray-700 mb-1">Kind Attention</label>
                            <input
                                type="text"
                                id="kind-attention"
                                placeholder="Dear Sir, (Optional message)"
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
                            />
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-gray-800">Our Address</h3>

                        <input
                            type="text"
                            placeholder="Your Address"
                            defaultValue="PLOT NO: 115 LAKSHMI NAGAR KOLADI THIRUVERKADU CHENNAI : 600077"
                            className="w-full p-3 border-2 border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 border-2 border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                        />

                        <input
                            type="tel"
                            placeholder="Your Number"
                            className="w-full p-3 border-2 border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                        />
                    </div>

                );
            case 3:
                return (
                    <div>
                        <PriceAndProducts/>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-gray-800">GST Information</h3>
                        <input
                            type="text"
                            placeholder="Enter GST number"
                            className="w-full p-3 border-2 border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                        />
                    </div>
                );
            case 5:
                return (
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-gray-800">Download as PDF</h3>
                        <button
                            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition-all"
                            onClick={() => alert("PDF Downloaded")}
                        >
                            Download PDF
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
                {/* Progress Stepper */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    {steps.map((stepItem, index) => (
                        <div key={stepItem.id} className="flex-1 flex flex-col items-center mb-4 md:mb-0">
                            {/* Centered Circle Icon */}
                            <span
                                className={`text-2xl mb-2 ${step > index ? "text-gray-800" : "text-gray-400"
                                    } transition-colors`}
                            >
                                {step > index ? <FaCheckCircle className="text-gray-800" /> : stepItem.icon}
                            </span>
                            {/* Step Label */}
                            <p
                                className={`font-medium text-sm ${step === stepItem.id ? "text-gray-800" : "text-gray-400"
                                    }`}
                            >
                                {stepItem.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Step Content */}
                <div>{renderStepContent()}</div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                    {step > 1 && (
                        <button
                            onClick={handlePrev}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-all"
                        >
                            Back
                        </button>
                    )}
                    {step < 5 ? (
                        <button
                            onClick={handleNext}
                            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-all"
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            onClick={() => alert("Form Completed")}
                            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-all"
                        >
                            Complete
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MultiStepForm;
