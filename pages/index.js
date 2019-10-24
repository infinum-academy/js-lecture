import {observer} from 'mobx-react';
import fetch from 'isomorphic-fetch';
import {useAsync} from 'react-use';

import appStore from '../store/AppStore';

async function getShows() {
  const shows = await fetch('https://api.infinum.academy/api/shows')
    .then((res) => res.json())
    .then(({ data = [] }) => data);

  appStore.shows.replace(shows);
}

function Index() {
  const {loading} = useAsync(getShows);

  return (
    <div>
      {loading && <h1>Shows are loading...</h1>}
      {
        appStore.shows.map(({ _id, title, imageUrl }) => (
          <div key={_id}>
            <img src={`https://api.infinum.academy/${imageUrl}`} />
            <h1>{title}</h1>
          </div>
        ))
      }
    </div>
  );
}

export default observer(Index);
