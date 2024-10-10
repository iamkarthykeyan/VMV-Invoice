import React from "react";

const InvoiceComponent = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <div className="flex justify-between items-center mb-6">
          <div className="text-gray-600">
            <div className="flex items-center space-x-11">
              <a href="#" className="text-sm">www.yourcompany.com</a>
              <span className="text-sm">+998 224 662 24</span>
              <a href="mailto:mail@company.com" className="text-sm">mail@company.com</a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="bg-purple-600 text-white p-6 rounded-lg relative flex flex-col justify-between">
            <div>
              <div className="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center mb-4">
              <p className="text-2xl">➜</p> 
              </div>
              <h2 className="text-3xl font-bold">VMV</h2>
              <h2 className="text-3xl font-bold">International</h2>
              <h2 className="text-3xl font-bold">Invoice.</h2>
            </div>
            <div className="mt-6">
              <span className="text-sm">Invoice Date:</span>
              <p className="text-lg font-semibold">October 21, 2024</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="border border-gray-200 p-6 rounded-lg flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Invoice To</h3>
              <p className="mt-2 text-gray-600">Hamdan Sunarto</p>
              <p className="text-gray-600">
                22 Bright Street, Your Location, <br />
                22192, United Kingdom
              </p>
            </div>
            <div className="mt-6">
              <span className="text-sm text-gray-600">Invoice Code:</span>
              <p className="text-lg font-semibold">INV-2924-0008</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceComponent;
