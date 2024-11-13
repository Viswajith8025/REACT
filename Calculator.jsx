import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="w-80 mx-auto my-12 p-5 rounded-lg bg-gray-800 shadow-lg">
      <input
        className="w-full h-16 bg-gray-900 text-white text-right text-3xl p-4 rounded-lg mb-3 focus:outline-none"
        value={input}
        readOnly
      />
      <div className="w-full h-12 text-right text-gray-400 text-2xl pr-2 mb-5">
        {result}
      </div>

      <div className="grid grid-cols-4 gap-3">
      <button
          onClick={() => handleClick("0")}
          className="col-span-1 h-16 bg-gray-700 text-white rounded-lg text-2xl"
        >
          0
        </button>
        <button
          onClick={() => handleClick("/")}
          className="col-span-1 h-16 bg-gray-700 text-white rounded-lg text-2xl"
        >
          ÷
        </button>
        <button
          onClick={() => handleClick("*")}
          className="col-span-1 h-16 bg-gray-700 text-white rounded-lg text-2xl"
        >
          ×
        </button>
        <button
          onClick={() => handleClick("-")}
          className="col-span-1 h-16 bg-gray-700 text-white rounded-lg text-2xl"
        >
          −
        </button>

        <button
          onClick={() => handleClick("7")}
          className="col-span-1 h-16 bg-gray-700 text-white rounded-lg text-2xl"
        >
          7
        </button>
        <button
          onClick={() => handleClick("8")}
          className="col-span-1 h-16 bg-gray-700 text-white rounded-lg text-2xl"
        >
          8
        </button>
        <button
          onClick={() => handleClick("9")}
          className="col-span-1 h-16 bg-gray-700 text-white rounded-lg text-2xl"
        >
          9
        </button>
        <button
          onClick={() => handleClick("+")}
          className="col-span-1 h-16 bg-gray-700 text-white rounded-lg text-2xl"
        >
          +
        </button>

        <button
          onClick={() => handleClick("4")}
          className="col-span-1 h-16 bg-gray-700 text-white rounded-lg text-2xl"
        >
          4
        </button>
        <button
          onClick={() => handleClick("5")}
          className="col-span-1 h-16 bg-gray-700 text-white rounded-lg text-2xl"
        >
          5
        </button>
        <button
          onClick={() => handleClick("6")}
          className="col-span-1 h-16 bg-gray-700 text-white rounded-lg text-2xl"
        >
          6
        </button>
        <button
          onClick={handleCalculate}
          className="col-span-1 h-16 bg-gray-700 text-white rounded-lg text-2xl"
        >
          =
        </button>

        <button
          onClick={() => handleClick("1")}
          className="col-span-1 h-16 bg-gray-700 text-white rounded-lg text-2xl"
        >
          1
        </button>
        <button
          onClick={() => handleClick("2")}
          className="col-span-1 h-16 bg-gray-700 text-white rounded-lg text-2xl"
        >
          2
        </button>
        <button
          onClick={() => handleClick("3")}
          className="col-span-1 h-16 bg-gray-700 text-white rounded-lg text-2xl"
        >
          3
        </button>

        
        <button
          onClick={handleClear}
          className="col-span-3 h-16 bg-gray-700 text-white rounded-lg text-2xl"
        >
          C
        </button>
        <button
          onClick={() => handleClick(".")}
          className="col-span-1 h-16 bg-gray-700 text-white rounded-lg text-2xl"
        >
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;
