var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered = number.filter((x) => {
  return x % 2 === 0;
});
console.log(filtered);
