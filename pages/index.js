import {observer} from 'mobx-react';
import fetch from 'isomorphic-fetch';
import {useAsync} from 'react-use';
import Link from 'next/link';

import appStore from '../store/AppStore';

async function getShows() {
  const shows = await fetch('https://api.infinum.academy/api/shows')
    .then((res) => res.json())
    .then(({ data = [] }) => data);

  appStore._shows.replace(shows);
}

function Index() {
  const {loading} = useAsync(getShows);

  return (
    <div>
      {loading && <h1>Shows are loading...</h1>}
      {
        appStore.shows.map(({ id, title, imageUrl }) => (
          <div key={id}>
            <img alt="cover" src={imageUrl} />
            <h1>{title}</h1>
          </div>
        ))
      }
      <Link href="/styled">
        <a>go there</a>
      </Link>
    </div>
  );
}

export default observer(Index);
