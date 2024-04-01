const input = parseFloat(prompt('Enter your score!'));


document.querySelector('#result').textContent =
  grade(input);


function grade(input) {
  if (input < 0 || input > 100) {
    return 'Invalid score!';
  } else if (input < 40) {
    return 'Grade: 0';
  } else if (input < 52) {
    return 'Grade: 1';
  } else if (input < 64) {
    return 'Grade: 2';
  } else if (input < 76) {
    return 'Grade: 3';
  } else if (input < 88) {
    return 'Grade: 4';
  } else {
    return 'Grade: 5';
  }
}
