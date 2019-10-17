import React from 'react';

function Index() {
  const [count, setCount] = React.useState(1);
  const [devidedCount, setDividedCount] = React.useState(0);

  function inc() {
    setDividedCount(count / 2);
    setCount(count + 1);
  }

  function dec() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count is: {count}</h1>
      <h1>Devided Count is: {devidedCount}</h1>
      <button onClick={dec}>- Dec</button>
      <button onClick={inc}>+ Inc</button>
    </div>
  );
}

export default Index;
