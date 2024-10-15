// src/components/Calculator.jsx
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [mode, setMode] = useState('normal'); // modes: normal, scientific, financial
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  
  const handleButtonClick = (value) => {
    setInput(prev => prev + value);
  };

  const calculate = () => {
    try {
      const result = eval(input); // Note: eval can be dangerous, use with caution
      setHistory([...history, `${input} = ${result}`]);
      setInput(String(result));
    } catch (error) {
      alert('Invalid calculation');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  const toggleMode = () => {
    setMode(mode === 'normal' ? 'scientific' : mode === 'scientific' ? 'financial' : 'normal');
    setInput('');
  };

  const handleFinancialCalculation = (formulas) => {
    // Implement financial calculations using the provided formulas
    // This is a placeholder for your financial calculations
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <button className="button" onClick={toggleMode}>Switch to {mode === 'normal' ? 'Scientific' : 'Financial'}</button>
      
      {mode === 'normal' && (
        <div className="button-container">
          {['7', '8', '9', '/'].map((item) => (
            <button className="button" onClick={() => handleButtonClick(item)} key={item}>{item}</button>
          ))}
          {['4', '5', '6', '*'].map((item) => (
            <button className="button" onClick={() => handleButtonClick(item)} key={item}>{item}</button>
          ))}
          {['1', '2', '3', '-'].map((item) => (
            <button className="button" onClick={() => handleButtonClick(item)} key={item}>{item}</button>
          ))}
          {['0', '.', '=', '+'].map((item) => (
            <button className="button" onClick={item === '=' ? calculate : () => handleButtonClick(item)} key={item}>{item}</button>
          ))}
          <button className="button clear-button" onClick={clearInput}>C</button>
        </div>
      )}

      {mode === 'scientific' && (
        <div className="button-container">
          {['sin', 'cos', 'tan', 'log'].map((item) => (
            <button className="button" onClick={() => handleButtonClick(`${item}(`)} key={item}>{item}</button>
          ))}
          {['(', ')', '√', 'pow'].map((item) => (
            <button className="button" onClick={() => handleButtonClick(item)} key={item}>{item}</button>
          ))}
          {/* Add more scientific buttons as needed */}
        </div>
      )}

      {mode === 'financial' && (
        <div>
          <label>Loan Amount:</label>
          <input type="number" onChange={(e) => setInput(e.target.value)} />
          <label>Interest Rate (%):</label>
          <input type="number" onChange={(e) => setInput(e.target.value)} />
          <label>Loan Term (years):</label>
          <input type="number" onChange={(e) => setInput(e.target.value)} />
          <button onClick={() => handleFinancialCalculation({})}>Calculate</button>
        </div>
      )}

      <div className="history-container">
        <h3>History</h3>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
