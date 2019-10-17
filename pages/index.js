import React from 'react';
import fetch from 'isomorphic-fetch';

function getShows() {
  return fetch('https://api.infinum.academy/api/shows')
    .then((res) => res.json());
}

function Index() {
  const [shows, setShows] = React.useState([]);
  const [shouldRefresh, setShouldRefresh] = React.useState(false);
  React.useEffect(() => {
    getShows().then(({ data }) => setShows(data));
  }, [shouldRefresh]);

  function onRefreshClick() {
    setShouldRefresh(!shouldRefresh);
  }

  return (
    <div>
      <h1>{shows.length}</h1>
      <button onClick={onRefreshClick}>refresh</button>
    </div>
  );
}

export default Index;
