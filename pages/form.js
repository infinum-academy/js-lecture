import { observer } from 'mobx-react';
import React from 'react';
import useForm from 'react-hook-form';

function Form() {
  const { errors, register, handleSubmit } = useForm();

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
      <input type="password" name="password" ref={register({})} />
      <input type="submit" />
    </form>
  );
}

export default observer(Form);
