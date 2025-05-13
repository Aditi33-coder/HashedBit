import React, { useState } from 'react';
import './style.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const calculate = (op) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult('Invalid input');
      return;
    }

    let res;
    switch (op) {
      case '+': res = a + b; break;
      case '-': res = a - b; break;
      case '*': res = a * b; break;
      case '/': res = b !== 0 ? a / b : 'Cannot divide by zero'; break;
      default: res = '';
    }
    setResult(res);
  };

  return (
    <div className="container">
      <h2>React Assignment 1 - Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />
      <div className="buttons">
        <button onClick={() => calculate('+')}>Add</button>
        <button onClick={() => calculate('-')}>Subtract</button>
        <button onClick={() => calculate('*')}>Multiply</button>
        <button onClick={() => calculate('/')}>Divide</button>
      </div>
      <div className="result">
        <strong>Result:</strong> {result}
      </div>
    </div>
  );
}

export default App;
