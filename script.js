fetch('http://httpbin.org/post', {
  method: 'POST',
  body: JSON.stringify({
    msg: 'ok',
  }),
})
  .then((data) => data.json())
  .then((data) => console.log(data));
