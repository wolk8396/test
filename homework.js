/* ///1

 const myStr= '55639217';

function myFunction () {
    let myEmpty = [];
    let result = ' ';
    result = myStr.split('');

for (let i = 0; i < result.length; i++) {
    myEmpty.push(result[i]);
    if (result [i+1] % 2  && result [i] % 2){
    myEmpty.push(':');
}
}
    return myEmpty.join('');
}
console.log(myFunction ()); */

//4

/* const worldArr = [1, 2, 3, 4, 5];

const  removeItem = (arr, num) => {
    arr.splice(num, 1);
     return arr;
}
console.log(removeItem(worldArr, )); */

///2
/*  const arr = [1, 2, 3, 1 ,5, 8, 8];
let store = [];
let a2 = arr.filter( (item,i) => {
    return arr.indexOf(item) === i;
})
console.log(a2); */


///3
 /* const arr = [1, 2, 3, 1 ,5, 8, 8];
let store = [];
let a2 = arr.filter( (item,i) => {
    return arr.indexOf(item) !== i;
})
console.log(a2); */





//2 ,3

 const arr = [1, 2, 3, 1 ,5, 8, 8];

 const findReplicas = (arr) => {
    const replicas =[ ];
    const compare = [];

    for (let num of arr) {
        if (!compare.includes(num)) {
            compare.push(num);
        }else {
            replicas.push(num);
           /*  console.log(replicas);
            console.log(compare);  */
        }
}
return replicas;
}
console.log(findReplicas(arr));



