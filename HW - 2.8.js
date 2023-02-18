
// task 1


// let arrNums = [3, 4, 1, 9, 10, 4];

// function getResult(callback){
//     callback();
// }

// function sum(arr) {
//     res = 0;
//     for (var i = 0; i < arr.length; ++i) {
//         res += arr[i];
//     }
//     console.log(res);
// } 

// function mult(arr) {
//     res2 = 1;
//     for (var i = 0; i < arr.length; ++i) {
//         res2 *= arr[i];
//     }
//     console.log(res2);
// } 

// getResult (
//     function() {
//         sum(arrNums)        
//     }
// )

// getResult (
//     function() {
//         mult(arrNums)        
//     }
// )

// !!!   вызов не такой, так в условии задачи, прощу подсказать иные способы решения 

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


// можно ли передать как второй парамерт свойство age?

// task 3
 
// let arrOne = [1, '4', 9, 'two'];
// let arrTwo = [1, '4', false, 9, 'two'];

// function each(callback){
//     callback();
// }

// function reverseArr(arr) {
//     arr = arr.reverse()
//     console.log(arr);
// } 



// let arrr = []

// function toNumberArr(arr) {
//     for (i = 0; i < arr.length; i++){
//         if (arr[i] === false){
//             arr[i] = 0 
//         }
//         if (arr[i] === true){
//             arr[i] = 1}
//         if (!isNaN(arr[i])){
//             arrr.push(arr[i])
//         }
//     }
//     console.log(arrr);
// } 

// each( function () {
//     reverseArr(arrOne)
// })

// each( function () {
//     toNumberArr(arrTwo)
// })


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

function calling() {
    console.log('Звоню!')
};

function beeps() {
    let brEak = setTimeout(() => {
        console.log('Идут гудки...')
    }, 1000);
    clearTimeout(brEak)
    console.log('Идут гудки...');
}

function talk() {
    console.log('Разговор')
}

calling();
beeps();
talk();


// не уверен, что данное решение является правильным, скорее некий читинг, потмоу что не совсем понимаю идею задания, зачем отсрочить действие и убрать эту же отсрочку

