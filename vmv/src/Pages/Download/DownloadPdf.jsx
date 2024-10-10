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
        doc.save("invoice.pdf");
    };

    return (
        <>
        <button
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition-all"
            onClick={generatePDF}
        >
            Download PDF
        </button>
        <div className="bg-gray-100 min-h-screen flex justify-center items-center p-8">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-8">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-purple-700">Your Company Invoice.</h1>
            <p className="text-sm text-gray-500 mt-1">Invoice Date: October, 21 2024</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">www.yourcompany.com</p>
            <p className="text-sm text-gray-500">+998 224 662 24</p>
            <p className="text-sm text-gray-500">mail@company.com</p>
          </div>
        </div>

        {/* Invoice To Section */}
        <div className="flex justify-between items-start mt-8">
          <div>
            <p className="text-lg font-bold text-purple-700">Invoice To:</p>
            <p className="text-md text-gray-700">Hamdan Sunarto</p>
            <p className="text-sm text-gray-500">22 Bright Street, Your Location</p>
            <p className="text-sm text-gray-500">2292 United Kingdom</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Invoice Code:</p>
            <p className="text-md text-purple-700 font-bold">INV-2924-0008</p>
          </div>
        </div>

        {/* Item Description Table */}
        <div className="mt-8">
          <table className="w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="bg-purple-700 text-white rounded-md">
                <th className="p-3 rounded-l-md">S.No</th>
                <th className="p-3">Description</th>
                <th className="p-3">HSN No</th>
                <th className="p-3">Qty</th>
                <th className="p-3">No's Rate</th>
                <th className="p-3 rounded-r-md">Value</th>
              </tr>
            </thead>
            <tbody>
              {[
                { sno: 1, description: "Branding Strategy", hsn: "1234", qty: 2, rate: 100, value: 200 },
                { sno: 2, description: "Logo Design", hsn: "5678", qty: 2, rate: 100, value: 200 },
                { sno: 3, description: "Website Design", hsn: "9101", qty: 2, rate: 100, value: 200 },
                { sno: 4, description: "Brand Marketing", hsn: "1121", qty: 2, rate: 100, value: 200 },
              ].map((row, index) => (
                <tr
                  key={index}
                  className={`text-gray-700 bg-gray-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="p-3 border-b text-center">{row.sno}</td>
                  <td className="p-3 border-b">{row.description}</td>
                  <td className="p-3 border-b text-center">{row.hsn}</td>
                  <td className="p-3 border-b text-center">{row.qty}</td>
                  <td className="p-3 border-b text-center">${row.rate}.00</td>
                  <td className="p-3 border-b text-center">${row.value}.00</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Payment Details and Summary */}
        <div className="flex justify-between mt-10">
          {/* Payment Details */}
          <div className="w-1/2">
            <img src="path_to_qr_code" alt="QR Code" className="h-32 mb-3" />
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-gray-600 font-bold">Payment:</p>
              <p className="text-sm text-gray-600 mt-1">England National Bank</p>
              <p className="text-sm text-gray-600">124-521-63415</p>
              <p className="text-sm text-gray-600 mt-2">PayPal/Online</p>
              <p className="text-sm text-gray-600">mail@yourcompany.com</p>
            </div>
          </div>

          {/* Invoice Summary */}
          <div className="w-1/3 bg-purple-700 text-white rounded-lg p-6">
            <div className="flex justify-between">
              <p>Sub Total:</p>
              <p>$800.00</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>Tax (5%):</p>
              <p>$40.00</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>Discount (7%):</p>
              <p>$56.00</p>
            </div>
            <hr className="border-gray-400 my-4" />
            <div className="flex justify-between text-lg font-bold">
              <p>Total:</p>
              <p>$800.00</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">Nico Ernando Hidayat, General Manager</p>
        </div>
      </div>
    </div>
        </>
    );
};

export default DownloadPdf;
