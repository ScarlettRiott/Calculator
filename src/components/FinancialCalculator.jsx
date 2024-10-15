import React, { useState } from 'react';

const FinancialCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(null);

  const calculateInterest = () => {
    const interest = (principal * rate * time) / 100;
    setResult(interest);
  };

  return (
    <div>
      <h2>Financial Calculator</h2>
      <div>
        <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} placeholder="Principal" />
        <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="Rate (%)" />
        <input type="number" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Time (years)" />
        <button onClick={calculateInterest}>Calculate Interest</button>
        {result && <p>Interest: {result}</p>}
      </div>
    </div>
  );
};

export default FinancialCalculator;
