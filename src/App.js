import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Handles button clicks (numbers/operators)
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Clears both input and result
  const handleClear = () => {
    setInput("");
    setResult("");
  };

  // Evaluates the expression
  const handleCalculate = () => {
    if (input.trim() === "") {
      setResult("Error");
      return;
    }

    try {
      // Safely evaluate the expression following BODMAS
      const evaluated = eval(input);

      // Handle NaN, Infinity, etc.
      if (isNaN(evaluated)) setResult("NaN");
      else if (evaluated === Infinity || evaluated === -Infinity)
        setResult("Infinity");
      else setResult(evaluated);
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator-container">
      <h1>React Calculator</h1>

      {/* Input Field */}
      <input
        type="text"
        value={input}
        readOnly
        className="calculator-input"
      />

      {/* Result Display */}
      <div className="calculator-result">{result}</div>

      {/* Buttons */}
      <div className="button-grid">
        {["7", "8", "9", "/",
          "4", "5", "6", "*",
          "1", "2", "3", "-",
          "0", ".", "C", "+"].map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === "C" ? handleClear() : handleClick(btn))}
          >
            {btn}
          </button>
        ))}

        {/* Equal button */}
        <button className="equal-btn" onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
