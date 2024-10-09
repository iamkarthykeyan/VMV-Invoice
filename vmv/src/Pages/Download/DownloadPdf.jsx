import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const DownloadPdf = ({ rows }) => {
    const generatePdf = () => {
        const doc = new jsPDF('portrait', 'pt', 'A4');
        doc.setFontSize(20);
        doc.text("Invoice Details", 40, 40);

        // Create table with rows data
        const tableData = rows.map(row => [
            row.sno,
            row.description,
            row.hsnNo,
            row.quantity,
            row.nosRate,
            row.value,
        ]);

        doc.autoTable({
            head: [['Sno', 'Description', 'HSN No', 'Qty', 'No\'s Rate', 'Value']],
            body: tableData,
            startY: 60,
        });

        // Save the PDF
        doc.save('invoice.pdf');
    };

    return (
        <button onClick={generatePdf} className="hidden"></button> // Button hidden since it's handled in PriceAndProducts
    );
};

export default DownloadPdf;
