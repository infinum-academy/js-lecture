import React from 'react';

function useComplexState(initValue) {
  const [internalState, setInternalState] = React.useState(initValue);

  function setState(patch) {
    setInternalState({
      ...internalState,
      ...patch,
    });
  }

  return [internalState, setState];
}

function Hook() {
  const [state, setState] = useComplexState({
    email: '',
    password: '',
  });

  function onEmailChange(e) {
    setState({
      email: e.target.value,
    });
  }

  function onPasswordChange(e) {
    setState({
      password: e.target.value,
    });
  }

  return (
    <div>
      <h1>{state.email} {state.password}</h1>
      <input type="email" onChange={onEmailChange} value={state.email} placeholder="email" />
      <input type="password" onChange={onPasswordChange} value={state.password} placeholder="password" />
    </div>
  );
}

export default Hook;
