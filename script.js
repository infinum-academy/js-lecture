function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ msg: 'the data' });
    }, 1000);
  });
}

async function doWork() {
  const data = await getData();

  return {
    count: 4,
    ...data,
  };
}

async function doWork2() {
  const data = await doWork();
  console.log(data);
}

doWork2().then(() => console.log('ok'));
