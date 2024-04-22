import React, { useEffect, useState } from "react";
import axios from "axios";

export const Convertor = () => {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(7);
  const [toamount, setToAmount] = useState("USD");
  const [fromamount, setFromAmount] = useState("INR");
  const [convert, setConvert] = useState();

  useEffect(() => {
    const getData = async function () {
      try {
        const res = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/${fromamount}`
        );
        setRates(res.data.rates);
      } catch (error) {
        console.error("error", error);
      }
    };
    getData();
  }, [fromamount]);

  const handleSubmit = () => {
    const a = (amount * rates[toamount]).toFixed(2);
    setConvert(a);
  };

  document.title = "Currency Converter";

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="w-1/2 border p-6 rounded-2xl flex items-center justify-center">
        <div className="w-full">
          <input
            type="text"
            placeholder="Enter your amount"
            className="w-11/12 p-1.5 border border-blue-700 rounded-md"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <div className="mt-2">
            <label htmlFor="fromCurrency" className="mt-3">
              From Currency
            </label>
            <br />
            <select
              id="fromCurrency"
              className="w-11/12 p-1.5 rounded-md border border-blue-700"
              value={fromamount}
              onChange={(e) => {
                setFromAmount(e.target.value);
              }}
            >
              {Object.keys(rates).map((currency) => (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-2">
            <label htmlFor="toCurrency" className="mt-3">
              To Currency
            </label>
            <br />
            <select
              id="toCurrency"
              className="w-11/12 p-1.5 rounded-md border border-blue-700"
              value={toamount}
              onChange={(e) => {
                setToAmount(e.target.value);
              }}
            >
              {Object.keys(rates).map((currency) => (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleSubmit}
            className="p-1.5 bg-fuchsia-600 w-11/12 rounded-md mt-3 text-white hover:bg-black text-w"
          >
            Convert
          </button>
          {convert!== 0 &&(
            <h1 className="text-center mt-10 text-4xl">{`${amount} ${fromamount} equals ${convert} ${toamount}`}</h1>

          )}
        </div>
      </div>
    </div>
  );
};
