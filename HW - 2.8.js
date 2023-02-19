
// task 1


// let arrNums = [3, 4, 1, 9, 10, 4];

// function getResult(arr, callback){
//     return callback(arr);
// }

// function sum(arr) {
//     let res = 0;
//     for (var i = 0; i < arr.length; ++i) {
//         res += arr[i];
//     }
//     return res;
// } 

// function mult(arr) {
//     res2 = 1;
//     for (var i = 0; i < arr.length; ++i) {
//         res2 *= arr[i];
//     }
//     return res2;
// } 

// getResult (arrNums, sum)
// getResult (arrNums, mult)


// task 2

// const users = [
// 	{name: 'Jon', age: 22},
// 	{name: 'Richard', age: 18},
// 	{name: 'Anton', age: 102},
// 	{name: 'Lida', age: 23},
// 	{name: 'Bob', age: 44}
// ];

// function getSortedArrayObj(obj) {
//     obj.sort((a, b) => a.age - b.age);
//     console.log(obj);
// }

// getSortedArrayObj(users)


// task 3
 
// let arrOne = [1, '4', 9, 'two'];
// let arrTwo = [1, '4', false, 9, 'two'];

// function each(arr, callback){
//     return callback(arr);
// }

// function reverseArr(arr) {
//     return arr.reverse();
// } 

// function toNumberArr(arr) {
//     const arrr = [];
//     arr.forEach((element) => {
//         if (!isNaN(element)) {
//           arrr.push(Number(element));
//         }
//       });
//     return arrr;
// } 

// each(arrOne, reverseArr); 
// each(arrTwo, toNumberArr);


// task 4

// const currDate = (allTime) => {
//     let int = setInterval(() => {
//         console.log(new Date)
//     }, 3000);

//     setTimeout(() => {
//         clearInterval(int); 
//         console.log('30 секунд прошло')
//     }, allTime*1000)
// };

// currDate(30)

// task 5

// function calling() {
//     console.log('Звоню!')
// };

// function beeps(callback) {
//     setTimeout(() => {
//         console.log('Идут гудки...')
//         callback()
//     }, 1000);
// }

// function talk() {
//     console.log('Разговор')
// }

// calling();
// beeps(talk);