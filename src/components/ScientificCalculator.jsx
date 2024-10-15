import React from 'react';

const ScientificCalculator = ({ handleButtonClick }) => {
  return (
    <div className="button-container">
      {['sin', 'cos', 'tan', 'log'].map((item) => (
        <button className="button" onClick={() => handleButtonClick(`${item}(`)} key={item}>
          {item}
        </button>
      ))}
      {/* Additional scientific functions */}
    </div>
  );
};

export default ScientificCalculator;
