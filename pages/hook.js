import React from 'react';

import useCounter from '../utils/useCounter';

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
