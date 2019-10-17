import React from 'react';

function Name({ name }) {
  return <h1>{name}</h1>;
}

function Index() {
  const [value, setValue] = React.useState('slovenija');

  function onButtonClick() {
    console.log('button clicked', value);
  }

  function onInputChange(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      <Name name="andrei" />
      <h1>Hello world</h1>
      <input type="text" onChange={onInputChange} value={value} />
      <button onClick={onButtonClick}>
        Click me
      </button>
    </div>
  );
}

export default Index;
