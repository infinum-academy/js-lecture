import React from 'react';

function LoginForm({ onLogin }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  function onLoginClick() {
    onLogin(email, password);
  }

  return (
    <div>
      <input type="email" onChange={onEmailChange} value={email} placeholder="email" />
      <input type="password" onChange={onPasswordChange} value={password} placeholder="password" />
      <button onClick={onLoginClick}>Login</button>
    </div>
  );
}

export default LoginForm;
