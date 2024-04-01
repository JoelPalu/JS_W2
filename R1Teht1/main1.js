const input = parseFloat(prompt('Enter a temperature in Fahrenheit: '));
doConversion(input);
document.querySelector('#degreesF').value = input;
document.querySelector('#degreesF').addEventListener('input', function() {
  const input = parseFloat(document.querySelector('#degreesF').value);
  doConversion(input);
});

function doConversion(input) {
  const celsius = (input* 9 / 5 ) + 32;
  const kelvin = celsius + 273.15;

  document.querySelector('#results').innerHTML =
    `<td>${input}</td>
  <td>${celsius.toFixed(2)}
  </td><td>${kelvin.toFixed(2)}</td>
  `;
}
