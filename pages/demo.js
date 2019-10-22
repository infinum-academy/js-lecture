import {useAsync} from 'react-use';

import Show from '../components/Show';

function getData() {
  return fetch('https://api.infinum.academy/api/shows')
    .then((res) => res.json())
    .then((res) => res.data);
}

function Demo() {
  const {value} = useAsync(getData);

  function storeLike() {}

  return (
    <h1>{value && <Show name={value[0].title} onLike={storeLike} />}</h1>
  );
}

export default Demo;
