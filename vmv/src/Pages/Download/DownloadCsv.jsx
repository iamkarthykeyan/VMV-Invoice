import { CSVLink } from 'react-csv';

const DownloadCsv = ({ rows, formData }) => {
  // Prepare the CSV data
  const formattedRows = rows.map((row, index) => ({
    "S.No": index + 1,
    Description: row.description,
    "HSN No": row.hsnNo,
    Quantity: row.quantity,
    "Rate (Nos)": row.nosRate,
    Value: row.value,
  }));

  // Add header information to the CSV
  const headerData = [
    [`Date: ${formData.date}`],
    [`Invoice Number: ${formData.invoiceNumber}`],
    [`Buyer Company: ${formData.buyerCompany}`],
    [`Buyer Address: ${formData.buyerAddress}`],
    [], // Empty row for spacing
    ["S.No", "Description", "HSN No", "Quantity", "Rate (Nos)", "Value"], // Table headers
  ];

  // Combine header and row data
  const csvData = [...headerData, ...formattedRows.map(Object.values)];

  return (
    <CSVLink data={csvData} filename={`Invoice_${formData.invoiceNumber}.csv`}>
      Download CSV
    </CSVLink>
  );
};

export default DownloadCsv;
