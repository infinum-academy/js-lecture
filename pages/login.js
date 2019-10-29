import LoginForm from '../components/LoginForm';

function Login() {
  function onLogin(email, password) {
    console.log(email, password);
  }

  return (
    <div>
      <h1>Login page</h1>
      <LoginForm onLogin={onLogin} />
    </div>
  );
}

export default Login;
