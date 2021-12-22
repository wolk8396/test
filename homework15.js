const body = document.querySelector('body');
const user = [
  {name :  'Jack',    age: 30},
  {name :  'Luther',  age: 32},
  {name :  'Klaus',   age: 33},
  {name :  'Allison', age: 30}
];

const render = function (array) {
  body.innerHTML = null;

  array.forEach((item, i) => {
  	const p = document.createElement('p');

    p.innerText = `Name ${item.name}, age ${item.age}.`;

    p.onclick = () => {
      const userArr = array.filter((item, index) => {
        return index !== i;
      });

    	render(userArr);

    }

    body.appendChild(p);
  });
}
render(user);
