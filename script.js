function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ msg: 'the data' });
    }, 1000);
  });
}

function getData2() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject({ msg: 'the data' });
    }, 1000);
  });
}

getData()
  .then(() => console.log('ok'))
  .then(getData2)
  .catch((data) => console.log('hello', data))
  .then(() => console.log('ok2'));
