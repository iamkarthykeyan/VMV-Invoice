import React, { useRef } from "react";
import html2pdf from 'html2pdf.js';

const DownloadPdf = ({ rows, formData }) => {
    const pdfRef = useRef();

    const generatePDF = () => {
        const options = {
            margin: 0,
            filename: `VMV_International_${formData.invoiceNumber}`,
            image: { type: "jpeg", quality: 1 },
            html2canvas: { scale: 8, logging: true, dpi: 800 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        };

        // Generate PDF from the hidden content
        html2pdf()
            .from(pdfRef.current)
            .set(options)
            .save();
    };

    return (
        <>
            {/* Button to Download PDF */}
            <button
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition-all"
                onClick={generatePDF}
            >
                Download PDF
            </button>

            {/* Hidden PDF Content */}
            <div className="hidden">
                <div ref={pdfRef} className="min-h-screen bg-white flex items-center justify-center p-10">
                    <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full">
                        <div className="flex items-start mb-6 text-gray-600 justify-around">
                            <a href="#" className="text-sm">GST No: {formData.gstNumber}</a>
                            <a href="#" className="text-sm">Email: {formData.yourEmail}</a>
                            <a href="#" className="text-sm">Mobile: {formData.yourNumber}</a>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-2 gap-6">
                            {/* Left Section */}
                            <div className="bg-black text-white p-6 rounded-xl relative flex flex-col justify-between">
                                <div>
                                    <h2 className="text-5xl font-bold">VMV</h2>
                                    <h2 className="text-3xl font-bold">International</h2>
                                    <h2 className="text-3xl font-bold">Invoice.</h2>
                                </div>
                                <div className="mt-6 flex items-center justify-between">
                                    <div>
                                        <span className="text-md">Invoice Date:</span>
                                        <p className="text-lg font-semibold">{formData.date}</p>
                                    </div>
                                    <div className="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center">
                                        <p className="text-2xl mb-6">➜</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="border-2 border-black p-6 rounded-xl flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">Invoice To :</h3>
                                    <p className="mt-2 text-gray-600">{formData.buyerCompany},</p>
                                    <p className="text-gray-600">
                                        {formData.buyerAddress}, <br />
                                        {formData.kindAttention}
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <span className="text-md text-gray-600">Invoice Code :</span>
                                    <p className="text-lg font-semibold">{formData.invoiceNumber}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white mt-5 max-w-6xl w-full">
                            {/* Table Header */}
                            <div className="mb-5">
                                <div className="grid grid-cols-5 text-gray-700 font-semibold text-lg">
                                    <div className="text-center">Description</div>
                                    <div className="text-center">HSN No</div>
                                    <div className="text-center">Qty</div>
                                    <div className="text-center">Nos Rate</div>
                                    <div className="text-center">Value</div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                {rows.map((row, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-5 items-center bg-gray-100 p-3 rounded-lg gap-6"
                                    >
                                        <div className="text-center mb-3">{row.description}</div>
                                        <div className="text-center mb-3">{row.hsnNo}</div>
                                        <div className="text-center mb-3">{row.quantity}</div>
                                        <div className="text-center mb-3">{row.nosRate}</div>
                                        <div className="text-center mb-3">{row.value}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="max-w-4xl mx-0 my-10">
                                <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
                                    {/* Left: Payment Details */}
                                    <div className="bg-gray-100 p-6 rounded-lg relative">
                                        {/* QR Code */}
                                        <div className="absolute top-5 right-2">
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                                                alt="QR Code"
                                                className="w-20 h-20"
                                            />
                                        </div>
                                        <div className="text-gray-700 space-y-4">
                                            <p className="font-semibold text-lg">Payment Details:</p>
                                            <p>Mobile: {formData.yourNumber}</p>
                                            <p>GPay UPI ID: mail@yourcompany.com</p>
                                            <p>PayPal: mail@yourcompany.com</p>
                                        </div>
                                        <div className="mt-6 text-gray-500 text-sm leading-relaxed text-justify">
                                            <p>
                                                Trust our secure payment methods for transactions with 24/7 support available, Our customer support is available 24/7 to assist you...
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right: Total and Name */}
                                    <div className="relative bg-white">
                                        <div className="bg-black text-white py-6 px-8 rounded-t-xl">
                                            <div className="space-y-4">
                                                <div className="flex justify-between text-lg">
                                                    <span className="font-semibold">Sub Total</span>
                                                    <span>$800.00</span>
                                                </div>
                                                <div className="flex justify-between text-lg">
                                                    <span className="font-semibold">Tax (5%)</span>
                                                    <span>$20.00</span>
                                                </div>
                                                <div className="flex justify-between text-lg">
                                                    <span className="font-semibold">Discount (7%)</span>
                                                    <span>-$20.00</span>
                                                </div>
                                                <div className="border-t-2 border-gray-400 mt-4"></div>
                                                <div className="flex justify-between text-xl font-bold mt-4">
                                                    <span>TOTAL</span>
                                                    <span>$800.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Yellow Divider */}
                                        <div className="h-2 bg-gray-400"></div>
                                        {/* Name Section */}
                                        <div className="px-8 py-6">
                                            <p className="font-bold text-gray-800 text-lg">Your Manager Name</p>
                                            <p className="text-gray-500 text-sm">General Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default DownloadPdf;
