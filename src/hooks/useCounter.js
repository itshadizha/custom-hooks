import { useState, useCallback } from 'react';

function useCounter(initialValue = 0, initialIncrementLevel = 1, initialDecrementLevel = 1) {
  const [count, setCount] = useState(initialValue);
  const [incrementLevel, setIncrementLevel] = useState(initialIncrementLevel);
  const [decrementLevel, setDecrementLevel] = useState(initialDecrementLevel);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + incrementLevel);
  }, [incrementLevel]);

  const decrement = useCallback(() => {
    setCount(prevCount => prevCount - decrementLevel);
  }, [decrementLevel]);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  const setIncrement = useCallback((level) => {
    setIncrementLevel(level);
  }, []);

  const setDecrement = useCallback((level) => {
    setDecrementLevel(level);
  }, []);

  return {
    count,
    increment,
    decrement,
    reset,
    setIncrement,
    setDecrement,
    incrementLevel,
    decrementLevel
  };
}

export default useCounter;