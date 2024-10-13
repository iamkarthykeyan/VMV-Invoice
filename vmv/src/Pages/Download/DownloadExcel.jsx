import * as XLSX from 'xlsx';

const DownloadExcel = ({ rows, formData }) => {
  const handleDownload = () => {
    // Prepare the data for the Excel file
    const formattedRows = rows.map((row, index) => ({
      "S.No": index + 1,
      Description: row.description,
      "HSN No": row.hsnNo,
      Quantity: row.quantity,
      "Rate (Nos)": row.nosRate,
      Value: row.value,
    }));

    const headerData = [
      { A: `Date: ${formData.date}` },
      { A: `Invoice Number: ${formData.invoiceNumber}` },
      { A: `Buyer Company: ${formData.buyerCompany}` },
      { A: `Buyer Address: ${formData.buyerAddress}` },
      {},
      { A: "S.No", B: "Description", C: "HSN No", D: "Quantity", E: "Rate (Nos)", F: "Value" },
    ];

    const wsData = [...headerData, ...formattedRows.map(Object.values)];
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, "Invoice Data");
    XLSX.writeFile(wb, `Invoice_${formData.invoiceNumber}.xlsx`);
  };

  return (
    <button
      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition-all"
      onClick={handleDownload}
    >
      Download Excel
    </button>
  );
};

export default DownloadExcel;
