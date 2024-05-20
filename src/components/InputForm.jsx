import React from 'react';
import useInput from '../hooks/useInput';

function validatePassword(value) {
  return value.length >= 6 ? null : 'Password must be at least 6 characters long';
}

function PasswordInput() {
  const password = useInput('', validatePassword);

  return (
    <div>
      <label>
        Password:
        <input type="password" value={password.value} onChange={password.onChange} />
      </label>
      {password.error && <p style={{ color: 'red' }}>{password.error}</p>}
      <button onClick={password.reset}>Reset</button>
    </div>
  );
}

export default PasswordInput;
