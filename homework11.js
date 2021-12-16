/* const array = [
  { city:'London',   departureTime: '12:00 p.m'},
  { city:'Moscow',   departureTime: '9:00 p.m'},
  { city:'New York', departureTime: '10:00 p.m'}
  ];

function propertyValue (arr, key) {
  const result = [];

  arr.forEach((item, i) => {
      arr.length = key
      result.push(item);
    },);

    return  result;
  }

  console.log(propertyValue (array, 2));
 */

/* const array = [1, 2, 3, 4, 5]

const removeItem =(arr, num) => {
  const result = [];

  arr.filter((item ,index) => {
   if ( index < num) {
     result.push(item)
   }
  });

  return  result;
}

console.log(removeItem(array, 4)); */



/* const arr = ['home', 'light', 'hi', 'world'];

function findLength(arr) {
  const  copy = [];

  arr.reduce((acc, item) => {
    copy.push(item.length);

    return acc + item.length;
  },0);

  return copy;
}

console.log( findLength(arr));
 */

/* 
const arr = [2, 3, 5, 7, 11, 13, 17, 19];
function currentSums (arr) {
const result = [];

const away = arr.reduce( (acc, item, i) => {
  result.push(acc);

  return  acc + item;
  },0);
result.push(away);

return result;
}

console.log(currentSums (arr)); */

