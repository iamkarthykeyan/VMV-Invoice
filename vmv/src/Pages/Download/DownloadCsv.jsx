// DownloadCsv Component
import { CSVLink } from 'react-csv';

const DownloadCsv = ({ rows, formData }) => {
  const formattedRows = rows.map((row, index) => ({
    "S.No": index + 1,
    Description: row.description,
    "HSN No": row.hsnNo,
    Quantity: row.quantity,
    "Rate (Nos)": row.nosRate,
    Value: row.value,
  }));

  const headerData = [
    [`Date: ${formData.date}`],
    [`GST No: ${formData.gstNumber}`],
    [`Invoice Number: ${formData.invoiceNumber}`],
    [`Buyer Company: ${formData.buyerCompany}`],
    [`Buyer Address: ${formData.buyerAddress}`],
    [],
    ["S.No", "Description", "HSN No", "Quantity", "Rate (Nos)", "Value"],
  ];

  const csvData = [...headerData, ...formattedRows.map(Object.values)];

  return (
    <CSVLink data={csvData} filename={`Invoice_${formData.invoiceNumber}.csv`}>
      <button
        className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition-all mt-5"
      >
        Download CSV
      </button>
    </CSVLink>
  );
};

export default DownloadCsv;
