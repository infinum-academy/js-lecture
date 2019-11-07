import { observer } from 'mobx-react';
import { useAsync } from 'react-use';
import Link from 'next/link';
import {useInject} from 'dependable-react';

import ShowService from '../services/showService';
import AppStore from '../store/AppStore';

function Index() {
  const showService = useInject(ShowService);
  const appStore = useInject(AppStore);
  useAsync(showService.load);

  return (
    <div>
      {appStore.shows.map(({ _id, title }) => (
        <div key={_id}>
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
