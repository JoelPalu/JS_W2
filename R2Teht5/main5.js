const numbers = [40, 20, 10, 923, 1231, 2321, 323, 23];

console.log(numbers);
console.log(sortArray(numbers, 'asc'));
console.log(sortArray(numbers, 'desc'));

function sortArray(item, sortType) {
  const arr = item;
  if (sortType === 'desc') {
    arr.sort((a, b) => b - a);
  } else if (sortType === 'asc') {
    arr.sort((a, b) => a - b);
  } else {
    console.log('Please provide a valid sort type (asc or desc)');
  }
  return arr;
}
