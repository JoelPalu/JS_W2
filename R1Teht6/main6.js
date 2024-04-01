const input = parseFloat(prompt('Enter a number: '));

document.querySelector('#result').innerHTML = multiplicationTable(input);

function multiplicationTable(input) {
  let result = '';
  for (let i = 1; i <= input; i++) {
    result += '<tr>';
    for (let j = 1; j <= input; j++) {
      result += '<td>' + i * j + '</td>';
    }
    result += '</tr>';
  }
  return result;
}
