import React, { useState } from 'react';

const FinancialCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState('');

  const calculateSimpleInterest = () => {
    const interest = (principal * rate * time) / 100;
    setResult(interest);
  };

  return (
    <div className="financial-calculator">
      <label>
        Principal:
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </label>
      <label>
        Rate of Interest:
        <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
      </label>
      <label>
        Time (years):
        <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <button className="button" onClick={calculateSimpleInterest}>
        Calculate Interest
      </button>
      {result && <div className="result">Simple Interest: {result}</div>}
    </div>
  );
};

export default FinancialCalculator;
