const accounts = [{ balance: 100.5 }, { balance: 0.5 }, { balance: -10.45 }];
console.log(this);

function sayHello() {
  console.log('hello ctx is', this);

  const saySmthElse = () => {
    console.log('smth else ctx is', this);
  };

  saySmthElse();
}

sayHello.call({ name: 'hello world ' });
