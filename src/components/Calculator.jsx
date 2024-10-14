import React, { useState } from 'react';

const scientificButtons = ['sin', 'cos', 'tan', 'log', 'sqrt', 'exp', '^', 'π', 'e'];
const financialButtons = ['PV', 'FV', 'RATE', 'NPV', 'IRR', 'PMT'];

const Calculator = ({ scientific, financial }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleEqual = () => {
    try {
      const evalResult = eval(input); // Use mathjs for safer evaluation in production
      setResult(evalResult);
      setHistory([...history, `${input} = ${evalResult}`]);
      setInput('');
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const buttons = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '/', '='];

  return (
    <div>
      <div className="display">
        <input type="text" value={input} readOnly />
        <input type="text" value={result} readOnly />
      </div>
      <div>
        {buttons.map((btn, idx) => (
          <button key={idx} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        <button onClick={handleEqual}>=</button>
        <button onClick={handleClear}>C</button>
        {scientific && scientificButtons.map((btn, idx) => (
          <button key={idx} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        {financial && financialButtons.map((btn, idx) => (
          <button key={idx} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
