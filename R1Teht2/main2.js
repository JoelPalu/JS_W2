const inputX1 = parseFloat(prompt('Enter X coordinate of first dot: '));
const inoutY1 = parseFloat(prompt('Enter Y coordinate of first dot: '));
const inputX2 = parseFloat(prompt('Enter X coordinate of second dot: '));
const inoutY2 = parseFloat(prompt('Enter Y coordinate of second dot: '));


document.querySelector('#result').textContent =
  'Distance between dots is: ' + distance(inputX1, inoutY1, inputX2, inoutY2);

function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1)^2 + (y2 - y1)^2);
}
