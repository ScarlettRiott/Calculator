import React, { useState } from 'react';
import './Calculator.css'; // For styling the calculator

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEqual = () => {
    try {
      setResult(eval(input).toString()); // Eval used for simplicity, consider a safer alternative.
    } catch (err) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '=', '/'].map((value) => (
          <button key={value} onClick={() => value === '=' ? handleEqual() : handleButtonClick(value)}>
            {value}
          </button>
        ))}
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;
