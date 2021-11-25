/* const myStr= '55639217';
const myEmpty = [];

function myFunction () {
    let result = '';
    result = myStr.split('');

    for (let i = 1; i < result.length; i++) {
        myEmpty.push(result[i]);
        if (result [i] % 2  && result [i] % 2){
            myEmpty.push(':');
        }
}
return myEmpty.join(' ')
}
console.log(myFunction ()); */



/* const worldArr = [1, 2, 3, 4, 5];

const  removeItem = (arr, num) => {
    arr.splice(num, 1);
     return arr;
}
console.log(removeItem(worldArr, )); */


let a = [1, 2, 3, 1 ,5];
let b = [];
let len = a.length;

for (let i = 0; i < len; i++) {
        if(b.indexOf(a[i]) ===-1) {
            b.push(a[i]);
        }
}
console.log(b);




