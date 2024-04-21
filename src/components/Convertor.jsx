import React, { useState } from "react";

export const Convertor = () => {
  const [value, setValu] = useState(1);
  document.title="Currency Convertor"
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="w-1/2 border p-6 rounded-2xl flex items-center justify-center">
        <div className="w-full">
          <input
            type="text"
            placeholder="Enter you amount"
            className="w-11/12 p-1.5 border border-blue-700 rounded-md"
          />
          <div className="mt-2">
            <label for="cars" className="mt-3">
              From Currency
            </label>
            <br />
            <select
              id="cars"
              className="w-11/12 p-1.5 rounded-md border border-blue-700"
            >
              <option value="volvo">use</option>
            </select>
          </div>
          <div className="mt-2">
            <label for="cars" className="mt-3">
              To Currency
            </label>
            <br />
            <select
              id="cars"
              className="w-11/12 p-1.5 rounded-md border border-blue-700"
            >
              <option value="volvo">use</option>
            </select>
          </div>
            <button className="p-1.5 bg-fuchsia-600 w-11/12 rounded-md mt-3 text-white">Convert</button>
          <h1 className="text-center mt-10 text-6xl">{value}</h1>
        </div>
      </div>
    </div>
  );
};
