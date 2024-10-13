import * as XLSX from "xlsx";

const DownloadExcel = ({ rows, formData }) => {
  const handleDownload = () => {
    // Prepare the data for the Excel file
    const formattedRows = rows.map((row, index) => [
      index + 1,             // S.No
      row.description,       // Description
      row.hsnNo,             // HSN No
      row.quantity,          // Quantity
      row.nosRate,           // Rate (Nos)
      row.value              // Value
    ]);

    // Add header data
    const headerData = [
      [`Date: ${formData.date}`],
      [`GST No: ${formData.gstNumber}`],
      [`Invoice Number: ${formData.invoiceNumber}`],
      [`Buyer Company: ${formData.buyerCompany}`],
      [`Buyer Address: ${formData.buyerAddress}`],
      [],
      ["S.No", "Description", "HSN No", "Quantity", "Rate (Nos)", "Value"]
    ];

    // Combine the header and formatted row data
    const worksheetData = [...headerData, ...formattedRows];
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Invoice Data");

    // Write the Excel file
    XLSX.writeFile(workbook, `VMV_International_${formData.invoiceNumber}.xlsx`);
  };

  return (
    <button
      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition-all mt-5"
      onClick={handleDownload}
    >
      Download Excel
    </button>
  );
};

export default DownloadExcel;
