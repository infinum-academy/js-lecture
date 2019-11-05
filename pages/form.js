import { observer } from 'mobx-react';
import React from 'react';
import useForm from 'react-hook-form';
import { useAsync } from 'react-use';

function fakeGetData() {
  return new Promise((resolve) =>
    resolve({
      name: 'andrei',
      email: 'andrei@infinum.co',
      password: 'andreijenajbolji123!',
    }),
  );
}

function Form() {
  const { value } = useAsync(fakeGetData);
  const { errors, register, handleSubmit, setValue } = useForm();

  React.useEffect(() => {
    if (value) {
      Object.keys(value) // ['name', 'email', 'password']
        .forEach((key) => setValue(key, value[key]));
    }
  }, [value]);

  function onSubmit(data) {
    console.log('logging you in...', data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="name"
        ref={register({
          required: 'Name is required.',
        })}
      />
      {errors.name && <span>{errors.name.message}</span>}
      <input type="email" name="email" ref={register({})} />
      <input
        type="password"
        name="password"
        ref={register({
          validate: (value) => value.length >= 6 || 'Password bla',
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}
      <input type="submit" />
    </form>
  );
}

export default observer(Form);
