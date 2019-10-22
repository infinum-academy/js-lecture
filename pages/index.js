import React from 'react';
import {useAsync} from 'react-use';
import fetch from 'isomorphic-fetch';

function getShows() {
  return fetch('https://api.infinum.academy/api/shows')
    .then((res) => res.json());
}

function Index() {
  const [sR, setSR] = React.useState(false);
  const {value} = useAsync(getShows, [sR]);

  function onRClick() {
    setSR(!sR);
  }

  return (
    <div>
      {value && value.data.length}
      <button onClick={onRClick}>refresh</button>
    </div>
  );
}

export default Index;
