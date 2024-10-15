import React, { useState } from 'react';
import Calculator from './components/Calculator';
import CurrencyConverter from './components/CurrencyConverter';
import FinancialCalculator from './components/FinancialCalculator';
import ScientificCalculator from './components/ScientificCalculator';
import History from './components/History';
import './App.css';

const App = () => {
  const [calculatorType, setCalculatorType] = useState('Standard');
  const [history, setHistory] = useState([]);

  const addToHistory = (calculation) => {
    setHistory((prev) => [...prev, calculation]);
  };

  return (
    <div className="App">
      <div className="calculator-type-selector">
        <button onClick={() => setCalculatorType('Standard')}>Standard</button>
        <button onClick={() => setCalculatorType('Scientific')}>Scientific</button>
        <button onClick={() => setCalculatorType('Financial')}>Financial</button>
        <button onClick={() => setCalculatorType('CurrencyConverter')}>Currency Converter</button>
      </div>
      {calculatorType === 'Standard' && <Calculator />}
      {calculatorType === 'Scientific' && <ScientificCalculator />}
      {calculatorType === 'Financial' && <FinancialCalculator />}
      {calculatorType === 'CurrencyConverter' && <CurrencyConverter />}
      <History history={history} />
    </div>
  );
};

export default App;
