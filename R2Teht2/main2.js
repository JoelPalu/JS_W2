const numbers = [];

for (let i = 0; i < 5; i++) {
  numbers.push(+prompt('Enter a number: '));
}

toTable(numbers.toString());

toTable(numbers.includes(+prompt(
    'Enter a number to check if it is in the array: ')));

numbers.pop();
toTable('after pop: ' + numbers.toString());

numbers.sort();

toTable('after sort: ' + numbers.toString());

function toTable(item) {
  document.querySelector('#result').innerHTML += '<tr><td>' + item + '</td></tr>';
}
