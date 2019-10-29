import React from 'react';

function useInput(initValue) {
  const [value, setValue] = React.useState(initValue);

  function onInputChange(e) {
    setValue(e.target.value);
  }

  return [value, onInputChange];
}

function Hook() {
  const [email, setEmail] = useInput('');

  return (
    <div>
      <h1>{email}</h1>
      <input type="email" onChange={setEmail} value={email} placeholder="email" />
    </div>
  );
}

export default Hook;
