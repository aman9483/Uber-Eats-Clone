import React from 'react';
import './style.css'; 
const cityData = [
  'Akron', 'Albuquerque', 'Bridgeport', 'Concord', 'Dayton', 'El Paso', 'Hartford',
  'Houston', 'Indianapolis', 'McAllen', 'Mesa', 'Milwaukee', 'Nashville', 'New Orleans',
  'Oklahoma City', 'Omaha', 'Orlando', 'Palm Bay', 'Providence', 'Queens', 'San Antonio',
  'Stony Brook', 'Tucson', 'West Hollywood'
];

const Table = () => {
  const columns = 7;
  const rows = Math.ceil(cityData.length / columns);

  // Split the cityData into rows
  const dataRows = [];
  for (let i = 0; i < rows; i++) {
    dataRows.push(cityData.slice(i * columns, (i + 1) * columns));
  }

  return (
    <table className="custom-table">
      
      <tbody>
        {dataRows.map((row, rowIndex) => (
          <tr key={rowIndex} className="table-row">
            {row.map((city, columnIndex) => (
              <td key={columnIndex} className="table-cell">{city}</td>
            ))}
            {/* Fill remaining cells in the last row with empty cells if needed */}
            {row.length < columns && (
              Array.from({ length: columns - row.length }).map((_, index) => (
                <td key={`empty-${index}`}></td>
              ))
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
