import React from "react";
import html2pdf from "html2pdf.js";

const DownloadPdf = ({ rows, formData }) => {

    var pdfContent = `<div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <div className="flex justify-evenly items-center mb-6">
          <div className="text-gray-600">
            <div className="flex items-center space-x-11">
              <a href="#" className="text-sm">${formData.youremail}</a>
              <span className="text-sm">${formData.yourmobile}</span>
              <a href="mailto:mail@company.com" className="text-sm">${formData.yourAddress}</a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="bg-purple-600 text-white p-6 rounded-xl relative flex flex-col justify-between">
            <div>
              <h2 className="text-5xl font-bold">VMV</h2>
              <h2 className="text-3xl font-bold">International</h2>
              <h2 className="text-3xl font-bold">Invoice.</h2>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <span className="text-md">Invoice Date:</span>
                <p className="text-lg font-semibold">${formData.date}</p>
              </div>
              <div className="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center">
                <p className="text-2xl">➜</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="border-2 border-purple-500 p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Invoice To :</h3>
              <p className="mt-2 text-gray-600">${formData.buyerCompany}</p>
              <p className="text-gray-600">
                ${formData.buyerAddress}, <br />
                ${form.kindAttention}
              </p>
            </div>
            <div className="mt-6">
              <span className="text-md text-gray-600">Invoice Code :</span>
              <p className="text-lg font-semibold">${formData.invoiceNumber}</p>
            </div>
          </div>
        </div>`;

        var vmvPdf = 
        `<div>
        ${pdfContent}
        </div>`;

        var options = {
          margin: 10,
          filename: "VMV_International_Invoice.pdf",
          image: { type: "jpeg", quality: 1 },
          html2canvas: { scale: 8, logging: true, dpi: 800 },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };
  
      // Generate PDF from HTML content
       html2pdf.from(vmvPdf).set(options).save();

    return (
        <>
        <button
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition-all"
            onClick={generatePDF}
        >
            Download PDF
        </button>
        </>
    );
};

export default DownloadPdf;
