// first exercise
/* const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const myArr = arr => {
    const arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] >=  0 ) {
            arrNew.push('-' + arr[i])
        }
    }
    return arrNew.join(' ');
}
console.log(myArr(arr));  */


/* const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = [ ];

let  a = arr.forEach( (item, i, arr) => {
    if ( arr[i] !== 0){
    arr[i] = arr[i]*-1
    result = arr.join(' ')
    }
});

console.log(typeof result);
console.log( result); 
 */

/* const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const myArr = arr => {
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] !== 0 ) {
            arr[i] = arr[i]*-1
        }
    }
    return arr.join(' ');
}
console.log(myArr(arr)); */

//second exercise
////. Написать функцию createArray(n), которая создаёт массив произвольных
// чисел от 0 до 9 длиной n. Попробовать так же найти
// решение от 0 до 10 включительно

/* let array = [];
let n = 10;

for (let i = 0; i < n; i++) {
     array.push(Math.round(9* Math.random()));
}
console.log(array); */



/// third exercise
 let users = [
    {name : 'Jack', age: 50},
    {name : 'Jack', age: 25},
    {name : 'Jack', age: 20},
];

let sum = 0;
let ages = [];
let result = 0;

let  b = users.forEach( (item, i, array) => {
    sum += item.age;
    result = sum / array.length;
},);

console.log(result); 




/* let arr = [
    {name : 'Jack', age: 50},
    {name : 'Jack', age: 25},
    {name : 'Jack', age: 20},
];

let sum = 0;
const result =0;

const arrMy = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > 0) {
         sum += arr[i].age;
        }
    }
    return sum/arr.length
}

console.log(arrMy(arr)); */