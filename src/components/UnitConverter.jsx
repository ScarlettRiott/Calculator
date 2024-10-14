import React, { useState } from 'react';
import convert from 'convert-units';

const UnitConverter = () => {
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState('');

  const handleConvert = () => {
    const conversion = convert(inputValue).from('m').to('ft');
    setResult(conversion);
  };

  return (
    <div>
      <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleConvert}>Convert m to ft</button>
      <div>Result: {result} ft</div>
    </div>
  );
};

export default UnitConverter;
