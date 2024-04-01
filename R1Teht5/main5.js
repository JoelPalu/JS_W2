const input = parseFloat(prompt('Enter a number: '));

document.querySelector('#result').textContent = 'Sum: ' + naturalSum(input);

function naturalSum(input) {
  let sum = 0;
  for (let i = 0; i <= input; i++) {
    sum += i;
  }
  return sum;
}
