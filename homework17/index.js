const btn = document.querySelector('#btn');

btn.onclick = () => {
  const get = localStorage.getItem('users');

		if (get !== null) {
        window.location = 'homepage/homepage.html';
    } else  {
        window.location = 'auth/auth.html';
    }
}
