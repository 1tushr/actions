let details = document.querySelectorAll('input');
let login = JSON.parse(localStorage.getItem('login')) || [];

for (let i = 0; i < details.length; i++) {
  details[i].value = login[i]|| "";
}

function inputs() {
  for (let i = 0; i < details.length; i++) {
    login[i] = details[i].value;
  }
  console.log(login);
  localStorage.setItem('login', JSON.stringify(login));

  // checking the login details
  let signup = JSON.parse(localStorage.getItem('signups')) || [];
  if (login[0] === signup[2] && login[1] === signup[3]) {
    console.log('Login successful');
  } else {
    console.log('Login failed');
  }
  
console.log('Compared signup values:', signup);
console.log(login[0] )
console.log(login[1] )
console.log(signup[2])
console.log(signup[3]);
}

let btn = document.getElementById('btn');
btn.addEventListener('click', inputs);

console.log('Compared login values:', login);

