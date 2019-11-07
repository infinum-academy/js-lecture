import {useAsync} from 'react-use';

function getData() {
  return fetch('https://api.infinum.academy/api/shows')
    .then((res) => res.json())
    .then((res) => res.data);
}

function Demo() {
  const {value} = useAsync(getData);

  function storeLike() {}

  return (
    <h1>yolo</h1>
  );
}

export default Demo;
