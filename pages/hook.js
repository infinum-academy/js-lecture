import React from 'react';

function useCounter(initValue) {
  const [count, setCount] = React.useState(initValue);

  function onCount(direction) {
    return () => setCount(count + direction);
  }

  return [count, onCount(1), onCount(-1)];
}

function Hook() {
  const [count, countUp, countDown] = useCounter(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={countUp}>Count UP!</button>
      <button onClick={countDown}>Count DOWN!</button>
    </div>
  );
}

export default Hook;
