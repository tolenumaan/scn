
import React from 'react';
import { TableData, TableRowData } from '../types';
import ExportIcon from './icons/ExportIcon';

interface TableDisplayProps {
  tableData: TableData;
}

const TableDisplay = ({ tableData }: TableDisplayProps): JSX.Element => {
  const { headers, rows, caption } = tableData;

  const convertToCSV = (tableHeaders: string[], tableRows: TableRowData[]): string => {
    const headerRowString = tableHeaders.join(',');
    const csvRows = tableRows.map(row => 
      tableHeaders.map(header => {
        const cellValue = row[header];
        const stringValue = cellValue !== undefined && cellValue !== null ? String(cellValue) : '';
        if (stringValue.includes(',') || stringValue.includes('\n') || stringValue.includes('"')) {
          return `"${stringValue.replace(/"/g, '""')}"`;
        }
        return stringValue;
      }).join(',')
    );
    return [headerRowString, ...csvRows].join('\n');
  };

  const handleExport = () => {
    const csvData = convertToCSV(headers, rows);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      const fileName = caption ? caption.replace(/\s+/g, '_').toLowerCase() : 'table_export';
      link.setAttribute('download', `${fileName}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  if (!headers || !rows) {
    return <p className="text-red-400">Table data anomaly detected.</p>;
  }

  return (
    <div className="my-6 overflow-x-auto glassmorphic shadow-xl rounded-lg">
      {caption && 
        <caption className="p-4 text-xl font-semibold text-left robotic-title bg-black bg-opacity-25 rounded-t-lg block">
          {caption}
        </caption>
      }
      <table className="min-w-full divide-y divide-[rgba(0,240,240,0.2)]">
        <thead className="bg-black bg-opacity-30">
          <tr>
            {headers.map((header, index) => (
              <th 
                key={index} 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider robotic-title !text-sm"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[rgba(0,240,240,0.15)]">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-opacity-10' : 'bg-opacity-20'} bg-slate-800 hover:bg-slate-700 hover:bg-opacity-40 transition-colors duration-150`}>
              {headers.map((header, cellIndex) => (
                <td key={cellIndex} className="px-6 py-4 whitespace-normal text-sm text-slate-300 break-words">
                  {String(row[header] || '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-4 bg-black bg-opacity-25 rounded-b-lg flex justify-end">
        <button
          onClick={handleExport}
          className="flex items-center px-4 py-2 bg-slate-700 text-cyan-300 text-sm font-medium rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 transition-all duration-150 ease-in-out shadow-md hover:shadow-lg robotic-title !text-sm"
          title={`Export ${caption || 'table'} to CSV`}
        >
          <ExportIcon className="w-4 h-4 mr-2 text-cyan-400" />
          Export Data Stream
        </button>
      </div>
    </div>
  );
};

export default TableDisplay;
