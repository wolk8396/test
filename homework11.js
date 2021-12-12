/// 1 exercise


/* const arr = [1, 2, 3, 4, 5];

const  removeItem = arr => {
  return arr.splice(0, 1);
}
console.log(removeItem(arr));
 */

/* const arrFirst = [1, 2, 3, 4, 5];
const copy = [];

const arrSecond = arrFirst.map((item, index) => {
  if ( index === 0)
    return copy.push(item);
});
console.log(copy); */




////////// 2 exercise
/* const arr = [1, 2, 3, 4, 5];

const  removeItem = arr => {
  return arr.splice(4, 3);
}
console.log(removeItem(arr)); */
 

///// map
/* const arrFirst = [1, 2, 3, 4, 7];

const arrSecond = arrFirst.map(item => {
  return arrFirst.splice(item[3],[4]);
});
console.log(arrFirst);
 */

/* const arrFirst = [1, 2, 3, 4, 5];
const copy = [];

const arrSecond = arrFirst.map((item, index, arr) => {
  if ( index === arr.length-1)
    return copy.push(item);
});
console.log(copy);
 */

///////////3 exercise
/* const newBox = [];

const arrayFilled = (value, len) => {
  for (let i = 0; i < len; i++) {
    newBox.push(value);
  }
  return newBox;
}
console.log(arrayFilled(4, 5)); */


/////////4 exercise
/* const newBox = [];

const generateRange = (start, len) => {
  for (let i = start; i < len; i++) {
    newBox.push(start);
    start++
  }
  return newBox;
}
console.log(generateRange(4, 10)); */

/////////////////////////////////////////////////////////////////////////////////////
///5 exercise

 /*const array = 'Каждый охотник желает знать, где сидит фазан';
const copy = [];
let arr = array.split(' ');

const  x = arr.forEach(item => {
  copy.push(item[0])
},);
console.log(copy); */


/* const array = 'Каждый охотник желает знать, где сидит фазан';
const copy = [];
let arr = array.split(' ');

const findLetters = arr => {
  for (let i = 0; i < arr.length; i++) {
   copy.push(arr[i][0].split(' '));
  }
  return copy.join(' ');
}
console.log(findLetters(arr));  */








