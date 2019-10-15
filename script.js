const array = [1, 2, 3, 4, 5, 6, 7, 8];

const count = array.reduce(function(acc, curr) {
  if (curr % 2 === 0) {
    acc++;
  }

  return acc;
}, 0);

const sum = array.reduce(function(acc, curr) {
  return acc + curr;
});
