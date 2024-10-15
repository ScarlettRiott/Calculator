import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/bcdcde183c5fcbb78c914cef/latest/${fromCurrency}`);
        const data = await response.json();
        setRates(data.conversion_rates);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch exchange rates');
        setLoading(false);
      }
    };
    fetchRates();
  }, [fromCurrency]);

  const convertCurrency = () => {
    if (rates[toCurrency]) {
      const conversion = amount * rates[toCurrency];
      setResult(conversion.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      {loading && <p>Loading exchange rates...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <>
          <div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
            />
            <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
              {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            <span> to </span>
            <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
              {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            <button onClick={convertCurrency}>Convert</button>
          </div>
          {result && <p>{amount} {fromCurrency} = {result} {toCurrency}</p>}
        </>
      )}
    </div>
  );
};

export default CurrencyConverter;
