const evenNumbers = [];
let input;
do {
  input = prompt('Enter a number or "done" to exit: ');
  if (parseInt(input) % 2 === 0) {
    evenNumbers.push(input);
  }
  console.log(input);
} while (input !== 'done');

if (evenNumbers.length === 0) {
  toTable('No even numbers');
} else {
  toTable('Even numbers');
  for (const number of evenNumbers) {
    toTable(number);
  }
}

function toTable(item) {
  document.querySelector('#result')
      .insertAdjacentHTML('beforeend', `<tr><td>${item}</td></tr>`);
}
