import jsPDF from "jspdf";
import "jspdf-autotable";
import React from "react";

const DownloadPdf = ({ rows, formData }) => {
    const generatePDF = () => {
        const doc = new jsPDF();

        // Add title
        doc.text("Invoice", 20, 10);

        // Add formData to PDF
        doc.text(`Date: ${formData.date}`, 20, 20);
        doc.text(`Invoice Number: ${formData.invoiceNumber}`, 20, 30);
        doc.text(`Buyer Company: ${formData.buyerCompany}`, 20, 40);
        doc.text(`Buyer Address: ${formData.buyerAddress}`, 20, 50);
        doc.text(`Kind Attention: ${formData.kindAttention}`, 20, 60);
        doc.text(`Email: ${formData.youremail}`, 20, 70);
        doc.text(`Mobile: ${formData.yourmobile}`, 20, 80);
        doc.text(`Gst Info: ${formData.gstNumber}`, 20, 90);

        // Create a table for rows data
        doc.autoTable({
            startY: 70,
            head: [['Item', 'Description', 'HSN No','Quantity','Nos Rate','Value']],
            body: rows.map((row, index) => [
                index + 1,
                row.description,
                row.hsnNo,
                row.quantity,
                row.nosRate,
                row.value,
            ]),
        });

        // Save the generated PDF
        doc.save("VMV-International.pdf");
    };

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





 <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
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
                ${formData.kindAttention}
              </p>
            </div>
            <div className="mt-6">
              <span className="text-md text-gray-600">Invoice Code :</span>
              <p className="text-lg font-semibold">${formData.invoiceNumber}</p>
            </div>
          </div>
        </div>
        </div>
        </div>

