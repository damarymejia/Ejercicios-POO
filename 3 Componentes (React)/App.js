import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './App.css';

function App() {
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
    } else {
      setResult(result + value);
    }
  };

  return (
    <div className="App">
      <Display value={result} />
      <div className="buttons">
        <Button value="7" onClick={handleClick} />
        <Button value="8" onClick={handleClick} />
        <Button value="9" onClick={handleClick} />
        <Button value="/" onClick={handleClick} />
        <Button value="4" onClick={handleClick} />
        <Button value="5" onClick={handleClick} />
        <Button value="6" onClick={handleClick} />
        <Button value="*" onClick={handleClick} />
        <Button value="1" onClick={handleClick} />
        <Button value="2" onClick={handleClick} />
        <Button value="3" onClick={handleClick} />
        <Button value="-" onClick={handleClick} />
        <Button value="0" onClick={handleClick} />
        <Button value="." onClick={handleClick} />
        <Button value="=" onClick={handleClick} />
        <Button value="+" onClick={handleClick} />
        <Button value="C" onClick={handleClick} />
      </div>
    </div>
  );
}

export default App;

