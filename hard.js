
const btn = document.querySelector('#btn');
const  number = Math.floor(Math.random() * 9);
const attempts = document.querySelector('#out');
const input = document.querySelector('#input');
let attemptCount = 1;
console.log(number);

btn.addEventListener('click', createArray);

function createArray() {
	const userInput = Number(input.value);
  if (attemptCount === 1) {
  }
  	attempts.textContent  += userInput + ', ';
  if ( userInput == number )  {
    attempts.textContent = `you win `;
		win();
  } else if (attemptCount === 4)  {
    stopBtn ();
		attempts.textContent =`GAME OVER`;
  } else {
  } if (userInput < number) {
    res.innerHTML ='it is too low';
		} else if ( userInput > number)  {
    res.innerHTML ='it is so high';
	}

	input.value = '';
	attemptCount++

}

function stopBtn () {
	btn.disabled = true;
	input.disabled = true;
}

function win() {
  input.disabled = true;
	btn.disabled = true;
}
