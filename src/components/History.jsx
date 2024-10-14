import React, { useState } from 'react';

const History = () => {
  const [history, setHistory] = useState([]);

  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," + history.join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'history.csv');
    document.body.appendChild(link);
    link.click();
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const importedHistory = e.target.result.split('\n');
      setHistory(importedHistory);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <h2>History</h2>
      <ul>
        {history.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
      <button onClick={handleExport}>Export History</button>
      <input type="file" onChange={handleImport} />
    </div>
  );
};

export default History;
