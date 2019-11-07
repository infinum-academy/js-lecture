import React from 'react';

function useCounter(initValue) {
  const [count, setCount] = React.useState(initValue);

  function onCount(direction = 1) {
    return () => setCount(count + direction);
  }

  return [count, onCount(), onCount(-1)];
}

export default useCounter;
