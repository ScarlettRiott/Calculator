// src/Calculator.jsx
import React, { useState } from 'react';
import Select from 'react-select';
import { create, all } from 'mathjs';
import classNames from 'classnames';
import './Calculator.css';


const math = create(all);

const options = [
    { value: 'normal', label: 'Normal' },
    { value: 'financial', label: 'Financial' },
    { value: 'scientific', label: 'Scientific' },
];

const Calculator = () => {
    const [currentValue, setCurrentValue] = useState('');
    const [history, setHistory] = useState([]);
    const [calcType, setCalcType] = useState('normal');
    const [theme, setTheme] = useState('light');

    // Handle Input Change
    const handleChange = (e) => {
        setCurrentValue(e.target.value);
    };

    // Handle Calculation Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const result = math.evaluate(currentValue);
            setHistory([...history, `${currentValue} = ${result}`]);
            setCurrentValue(result.toString());
        } catch (error) {
            alert('Invalid calculation! Please try again.');
            setCurrentValue('');
        }
    };

    // Handle Calculator Type Change
    const handleCalcTypeChange = (selectedOption) => {
        setCalcType(selectedOption.value);
    };

    // Handle Theme Switch
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // Shortcut Formulas for Financial and Scientific
    const applyShortcutFormula = (formula) => {
        setCurrentValue(formula);
    };

    // Unit Conversion Example
    const handleConversion = (unit, value) => {
        const convertedValue = math.unit(value, unit).toNumber('m'); // converting to meters as an example
        setCurrentValue(convertedValue.toString());
    };

    return (
        <div className={classNames('calculator', theme)}>
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
            
            <h1>{calcType.charAt(0).toUpperCase() + calcType.slice(1)} Calculator</h1>
            
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={currentValue} 
                    onChange={handleChange} 
                    placeholder="Enter calculation"
                />
                <button type="submit">Calculate</button>
            </form>

            <Select 
                options={options} 
                onChange={handleCalcTypeChange} 
                placeholder="Select calculator type" 
            />

            {calcType === 'financial' && (
                <div>
                    <button onClick={() => applyShortcutFormula('100 * (1 + 0.05)^10')}>
                        Compound Interest (10 years, 5%)
                    </button>
                </div>
            )}

            {calcType === 'scientific' && (
                <div>
                    <button onClick={() => applyShortcutFormula('sin(45 deg)')}>
                        Sine of 45°
                    </button>
                    <button onClick={() => applyShortcutFormula('log(100)')}>
                        Logarithm of 100
                    </button>
                </div>
            )}

            {calcType === 'unit-conversion' && (
                <div>
                    <button onClick={() => handleConversion('km', 5)}>
                        Convert 5 km to meters
                    </button>
                </div>
            )}

            <h2>History</h2>
            <ul>
                {history.map((entry, index) => (
                    <li key={index}>{entry}</li>
                ))}
            </ul>
        </div>
    );
};

export default Calculator;
