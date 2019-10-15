function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { msg: 'the data' };
      console.log('got the data.');
      resolve(data);
    }, 235 /* ms, ping to Tokyo */);
  });
}

getData()
  .then((data) => {
    console.log(data);

    return 555;
  })
  .then((data2) => console.log(data2));
