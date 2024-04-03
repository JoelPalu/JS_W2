async function getData() {
  const response = await fetch('https://reqres.in/api/users/1');
  const data = await response.json();
  console.log(data);
}

async function postData() {
  const response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'morpheus',
      job: 'leader',
    }),
  });
  const data = await response.json();
  console.log(data);
}

async function getData2() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error); // catch the error
  }
}


getData();
postData();
getData2();

