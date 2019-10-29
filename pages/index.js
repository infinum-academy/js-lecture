import React from 'react';
import { observer } from 'mobx-react';
import fetch from 'isomorphic-fetch';
import { useAsync } from 'react-use';
import Link from 'next/link';

import {AppStoreCtx} from '../store/context';

async function getShows(appStore) {
  const shows = await fetch('https://api.infinum.academy/api/shows')
    .then((res) => res.json())
    .then(({ data = [] }) => data);

  appStore.shows.replace(shows);
}

function Index() {
  const appStore = React.useContext(AppStoreCtx);
  useAsync(() => getShows(appStore), [appStore]);

  return (
    <div>
      {appStore.shows.map(({ id, title }) => (
        <div key={id}>
          <h1>{title}</h1>
        </div>
      ))}
      <Link href="/styled">
        <a>go there</a>
      </Link>
    </div>
  );
}

export default observer(Index);
