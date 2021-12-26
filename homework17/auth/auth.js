const btn = document.querySelector('#check');
const first = document.querySelector('#inp_first');
const last = document.querySelector('#inp_last');

btn.onclick = () => {

	const users = {
    first_name: first.value,
		last_name: last.value
	};

	localStorage.setItem('users', JSON.stringify(users));
	const get = localStorage.getItem('users');

	if (get !== null) {
		window.location = '/homework17/homepage/homepage.html';
	} else {
	}
}
