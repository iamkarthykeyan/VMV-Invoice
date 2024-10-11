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
