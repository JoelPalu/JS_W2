const numbers = [40, 20, 10, 923, 1231, 2321, 323, 23];

console.log(numbers);
console.log(sortArray(numbers));

function sortArray(item) {
  const arr = item;
  arr.sort((a, b) => a - b);
  return arr;
}
