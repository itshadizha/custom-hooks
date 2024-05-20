import { useState, useCallback } from 'react';

function useInput(initialValue, validate) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);

  const onChange = useCallback((e) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (validate) {
      const validationResult = validate(newValue);
      setError(validationResult);
    }
  }, [validate]);

  const reset = useCallback(() => {
    setValue(initialValue);
    setError(null);
  }, [initialValue]);

  return {
    value,
    error,
    onChange,
    reset,
  };
}

export default useInput;
