const sortNumber = n => {
	let count = '';

	for (let i = 0; i < n; i++) {
		count += '\n';
		i % 2 === 0 ?  count +=' #'.repeat(4) : count +=' '+' #'.repeat(4);
	}
	return count;
}
console.log(sortNumber(8)); 

//////////////////////////////////////////////////////////////////////////////

const Findfactorial = number => number ? number * Findfactorial(number - 1) : 1;
console.log(Findfactorial(4)); 

//////////////////////////////////////////////////////////////////////////////
const sortArr = () => {
	const arrNumbers = [8, 7, 2, 3, 5, 4, 6, 1];

	for (let v = arrNumbers.length - 1; v > 0; v--) {
    for (let i = 0; i < v; i++) {
      if (arrNumbers[i] > arrNumbers[i + 1]) {
      	const temporaryPosition = arrNumbers[i];
				arrNumbers[i] = arrNumbers[i + 1];
        arrNumbers[i + 1] = temporaryPosition;
      }
    }
  }
	return arrNumbers;
}
console.log(sortArr()); 

//////////////////////////////////////////////////////////////////////////
let size = 120;
let covert = 'Kilobit';

switch (covert) {
	case covert = 'Kilobit':
		size *= 1024;
		console.log('Bytes', size,);
		break;
	case covert = 'Megabits':
		size = size * 1024 ** 2;
		console.log('bytes', size,);
		break;
	case covert = 'Gigabyte':
		size = size * 1024 ** 3;
		console.log('Bytes', size,);
		break;
}; 

const covertDate = size => {
	const covert = ['Kilobit', 'Megabits',  'Gigabyte'];
	const sizeInformation = [];

		for (let i = 1; i <=3; i++) {
			sizeInformation.push(size * 1024 ** i +' Bytes');
		}

	return covert.reduce((acc, item, i) =>{
			acc[item] = sizeInformation[i];
		return acc;
	},{});
}
console.log(covertDate(120));
