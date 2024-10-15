import React, { useState } from 'react';

const ScientificCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleEqual = () => {
    try {
      setResult(eval(input).toString()); // Again, replace eval in production.
    } catch (err) {
      setResult('Error');
    }
  };

  return (
    <div>
      <h2>Scientific Calculator</h2>
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {['sin', 'cos', 'tan', 'log', 'sqrt', '^', '(', ')'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        <button onClick={handleEqual}>Equal</button>
      </div>
    </div>
  );
};

export default ScientificCalculator;
