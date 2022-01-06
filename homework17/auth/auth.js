const body = document.querySelector('body');
const btn = document.querySelector('#check');
const login = document.querySelector('#inp_first');
const password = document.querySelector('#inp_last');
const createLogin = document.querySelector('#inp_newLogin');
const createPassword = document.querySelector('#inp_password');
const btnCreate = document.querySelector('#create');
const p = document.createElement('p');

const accessUsers = [
  {
    login: 'Jack',
    pass:   8396
  },
  {
    login: 'Luther',
    pass:    1313
  },
	{
    login: 'Klaus',
    pass:    2141
  },
	{
    login: 'Allison',
    pass:   4888
  },
];
console.log(accessUsers);

btn.onclick = () => {
	const pass = Number(password.value);
	const log = login.value

	for (let i = 0; i < accessUsers.length; i++) {
		if(log === accessUsers[i].login && pass === accessUsers[i].pass) {
			window.location = '/homepage/homepage.html';
		} else {
      alert ('fuck you');
      break;
			}
	}

	body.appendChild(p);
}


btnCreate.onclick = () => {
  const checkLogin = createLogin.value;
	const checkPassword = Number(createPassword.value);

	for (let i = 0; i < accessUsers.length; i++) {
		if(checkLogin === accessUsers[i].login) {
			p.innerText = `this login is taken `;
			break;
		} else {
			accessUsers.push(
				{
					login: checkLogin,
					pass: checkPassword
				}
			);

			window.location = '/homepage/homepage.html';
			}
	}
		body.appendChild(p);
	}


