import React, { useState } from 'react';

const History = ({ history }) => {
  const [visible, setVisible] = useState(false);

  const toggleHistory = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button onClick={toggleHistory}>
        {visible ? 'Close History' : 'Show History'}
      </button>
      {visible && (
        <div className="history-slider">
          <h3>Calculation History</h3>
          <ul>
            {history.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default History;
