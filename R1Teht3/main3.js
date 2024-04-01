const side1 = prompt('Enter the length of the first side of the triangle: ');
const side2 = prompt('Enter the length of the second side of the triangle: ');
const side3 = prompt('Enter the length of the third side of the triangle: ');


document.querySelector('#result').textContent =
  triangleType(side1, side2, side3);


function triangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return 'Equilateral triangle';
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return 'Isosceles triangle';
  } else {
    return 'Scalene triangle';
  }
}
