fetch('http://httpbin.org/json')
  .then((data) => data.json())
  .then((data) => console.log(data));

async function doWork() {
  const res = await fetch('http://httpbin.org/text');
  const data = await res.text();

  console.log(data);
}

doWork();
