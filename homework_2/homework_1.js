//1. Дана строка, например, '123456'. Переверните эту строку 
//(сделайте из нее '654321') не используя цикл

/* const turnAroundArray = '123456';
console.log(turnAroundArray.split('').reverse().join('')); */
 
//2. Проверьте, что строка начинается на http:// и заканчивается на .html.

/* const checkString = check => check.lastIndexOf('.html') === check.length - 5 && check.indexOf('http://') === 0;
console.log(checkString('http://bleeeablabla.html.ddff')); */

//3. Сделайте функцию, которая принимает параметром число от 1 до 7,
//а возвращает день недели на русском языке.

/* const weak = (choseTheDay, day) => choseTheDay[day - 1];
console.log(weak(['Monday', 'Tuesday', 'Wednesday', 'Thursday' , 'Friday', 'Saturday', 'Sunday' ], 7));  */
