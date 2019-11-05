import { observer } from 'mobx-react';
import React from 'react';

function ShowHide() {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  function togglePasswordVisibility(e) {
    e.preventDefault();

    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <form>
      {
        !isPasswordVisible && <h1>Hello!</h1>
      }
      <input type={isPasswordVisible ? 'text' : 'password'} />
      <button onClick={togglePasswordVisibility}>Show password</button>
    </form>
  );
}

export default observer(ShowHide);
