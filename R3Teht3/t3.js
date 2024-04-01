const target = document.querySelector('#target');

// Get the browser name
const userData = navigator.userAgent;
console.log('User Agent: ' + userData);
// Get the screen width
const screenWidth = window.screen.width;

// Get the screen height
const screenHeight = window.screen.height;


target.insertAdjacentHTML('beforeend', '<p>Browser Name: ' + getBrowserName(userData) + '</p>');
target.insertAdjacentHTML('beforeend', '<p>Opetating System: ' + getOperatingSystem(userData) + '</p>');
target.insertAdjacentHTML('beforeend', '<p>Screen Width: ' + screenWidth + '</p>');
target.insertAdjacentHTML('beforeend', '<p>Screen Height: ' + screenHeight + '</p>');
target.insertAdjacentHTML('beforeend', '<p>Available Screen Width: ' + window.screen.availWidth + '</p>');
target.insertAdjacentHTML('beforeend', '<p>Available Screen Height: ' + window.screen.availHeight + '</p>');
target.insertAdjacentHTML('beforeend', '<p>Language: ' + navigator.language + '</p>');
target.insertAdjacentHTML('beforeend', '<p>Date: ' + getDate() + '</p>');


function getDate() {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  console.log(new Date().toLocaleDateString('fi-FI', options));
  return new Date().toLocaleDateString('fi-FI', options);
}

// KIITOS CHATTI! TÄMMÄ ON KAATOTIINEN MUTTA TOIMII!
function getBrowserName(userAgent) {
  let version;

  if (userAgent.indexOf('Firefox') > -1) {
    version = userAgent.includes('Firefox/') ? userAgent.split('Firefox/')[1].split(' ')[0] : '';
    return 'Firefox ' + version;
  } else if (userAgent.indexOf('Edg') > -1) {
    version = userAgent.includes('Edg/') ? userAgent.split('Edg/')[1].split(' ')[0] : '';
    return 'Edge ' + version;
  } else if (userAgent.indexOf('Chrome') > -1) {
    version = userAgent.includes('Chrome/') ? userAgent.split('Chrome/')[1].split(' ')[0] : '';
    return 'Chrome ' + version;
  } else if (userAgent.indexOf('MSIE') > -1) {
    version = userAgent.includes('MSIE ') ? userAgent.split('MSIE ')[1].split(';')[0] : '';
    return 'Internet Explorer ' + version;
  } else if (userAgent.indexOf('Trident') > -1) {
    version = userAgent.includes('rv:') ? userAgent.split('rv:')[1].split(')')[0] : '';
    return 'Internet Explorer ' + version;
  } else if (userAgent.indexOf('Safari') > -1) {
    version = userAgent.includes('Version/') ? userAgent.split('Version/')[1].split(' ')[0] : '';
    return 'Safari ' + version;
  } else {
    return 'Unknown';
  }
}

function getOperatingSystem(userAgent) {
  if (userAgent.indexOf('Win') !== -1) {
    return 'Windows';
  } else if (userAgent.indexOf('Mac') !== -1) {
    return 'MacOS';
  } else if (userAgent.indexOf('Linux') !== -1) {
    return 'Linux';
  } else if (userAgent.indexOf('Android') !== -1) {
    return 'Android';
  } else if (userAgent.indexOf('like Mac') !== -1) {
    return 'iOS';
  } else {
    return 'Unknown';
  }
}

console.log('Operating System: ' + getOperatingSystem(navigator.userAgent));
