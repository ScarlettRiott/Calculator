import React, { useReducer, lazy, Suspense } from 'react';
import './Calculator.css';

const ScientificCalculator = lazy(() => import('./ScientificCalculator'));
const FinancialCalculator = lazy(() => import('./FinancialCalculator'));

const initialState = {
  input: '',
  mode: 'normal', // normal, scientific, financial
  history: [],
};

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, input: action.payload };
    case 'SET_MODE':
      return { ...state, mode: action.payload, input: '' };
    case 'ADD_HISTORY':
      return { ...state, history: [...state.history, action.payload] };
    case 'CLEAR_INPUT':
      return { ...state, input: '' };
    default:
      return state;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const handleButtonClick = (value) => {
    dispatch({ type: 'SET_INPUT', payload: state.input + value });
  };

  const calculate = () => {
    try {
      const result = Function('"use strict";return (' + state.input + ')')();
      dispatch({ type: 'ADD_HISTORY', payload: `${state.input} = ${result}` });
      dispatch({ type: 'SET_INPUT', payload: String(result) });
    } catch (error) {
      alert('Invalid calculation');
    }
  };

  const clearInput = () => {
    dispatch({ type: 'CLEAR_INPUT' });
  };

  const toggleMode = () => {
    const newMode = state.mode === 'normal' ? 'scientific' : state.mode === 'scientific' ? 'financial' : 'normal';
    dispatch({ type: 'SET_MODE', payload: newMode });
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">{state.input}</div>
        <button className="button mode-button" onClick={toggleMode}>
          Switch to {state.mode === 'normal' ? 'Scientific' : state.mode === 'scientific' ? 'Financial' : 'Normal'}
        </button>

        {state.mode === 'normal' && (
          <div className="button-container">
            {['7', '8', '9', '/'].map((item) => (
              <button className="button" onClick={() => handleButtonClick(item)} key={item}>
                {item}
              </button>
            ))}
            {/* Add rest of the buttons */}
          </div>
        )}

        {state.mode === 'scientific' && (
          <Suspense fallback={<div>Loading Scientific...</div>}>
            <ScientificCalculator handleButtonClick={handleButtonClick} />
          </Suspense>
        )}

        {state.mode === 'financial' && (
          <Suspense fallback={<div>Loading Financial...</div>}>
            <FinancialCalculator />
          </Suspense>
        )}
      </div>

      <div className="history-container">
        <h3>History</h3>
        <ul>
          {state.history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
