import React from 'react';
import useCounter from '../hooks/useCounter';

function Counter() {
  const { count, increment, decrement, reset, setIncrement, setDecrement, incrementLevel, decrementLevel } = useCounter(0, 4, 2);

  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment by {incrementLevel}</button>
      <button onClick={decrement}>Decrement by {decrementLevel}</button>
      <button onClick={reset}>Reset</button>
      <div>
        <label>
          Increment Level:
          <input 
            type="number" 
            value={incrementLevel} 
            onChange={(e) => setIncrement(Number(e.target.value))} 
          />
        </label>
      </div>
      <div>
        <label>
          Decrement Level:
          <input 
            type="number" 
            value={decrementLevel} 
            onChange={(e) => setDecrement(Number(e.target.value))} 
          />
        </label>
      </div>
    </div>
  );
}

export default Counter;