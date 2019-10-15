function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('got the data.');
      resolve();
    }, 235 /* ms, ping to Tokyo */);
  });
}

getData()
  .then(() => console.log('hello 1.'))
  .then(getData)
  .then(() => console.log('hello 2.'));
