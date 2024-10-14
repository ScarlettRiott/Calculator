import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Graph from './components/Graph';
import History from './components/History';
import UnitConverter from './components/UnitConverter';
import './index.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [calculatorType, setCalculatorType] = useState('basic');

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleCalculatorTypeChange = (type) => {
    setCalculatorType(type);
  };

  return (
    <div className={`calculator ${theme}`}>
      <button onClick={handleToggleTheme}>
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
      <div>
        <button onClick={() => handleCalculatorTypeChange('basic')}>Basic</button>
        <button onClick={() => handleCalculatorTypeChange('scientific')}>Scientific</button>
        <button onClick={() => handleCalculatorTypeChange('financial')}>Financial</button>
        <button onClick={() => handleCalculatorTypeChange('graph')}>Graph</button>
        <button onClick={() => handleCalculatorTypeChange('converter')}>Unit Converter</button>
      </div>

      {calculatorType === 'basic' && <Calculator />}
      {calculatorType === 'scientific' && <Calculator scientific />}
      {calculatorType === 'financial' && <Calculator financial />}
      {calculatorType === 'graph' && <Graph />}
      {calculatorType === 'converter' && <UnitConverter />}
      
      <History />
    </div>
  );
}

export default App;
