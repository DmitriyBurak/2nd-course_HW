
// task 1

// let strForTask1 = 'js';

// strForTask1 = strForTask1.toUpperCase();

// console.log(strForTask1);


// task 2

// let arrayOfWords = ['Автомобиль Мерседес', 'Мотоцикл Хонда', 'Грузовик Ман', 'Автомобиль Ниссан', 'Мотоцикл Кавасаки']
// let wordForSearch= 'Мотоцикл';
// let arrayRes = []

// function getRandNum(arrayWords, stringForSearch) {
//         for (i = 0; i < arrayWords.length; i++){
//             let suitEl = arrayWords[i].toLowerCase().startsWith(stringForSearch.toLowerCase())
//             if(suitEl){
//                 arrayRes.push(arrayWords[i].toLowerCase()) // в примере в задании возвращаются в массив значения с измененным регистром, если возвращать после проверки изначальные значения, нужно строку 21 изменить на arrayRes.push(arrayWords[i])
//             }               
//         }
//     }

//     getRandNum(arrayOfWords, wordForSearch)
//     console.log(arrayRes);

// или 

// arrayOfWords.forEach ((elem) =>{
//     if (elem.toLowerCase().startsWith(wordForSearch.toLowerCase())){
//         arrayRes.push(elem);
//     }
// })

// console.log(arrayRes);


// task 3


// let num3 = 32.58884

// console.log(Math.floor(num3));
// console.log(Math.ceil(num3));
// console.log(Math.round(num3));


// task 4

// let ar = []
// function whatIsMinMax(a,b,c,d,e,f) {
//     ar.push(a)
//     ar.push(b)
//     ar.push(c)
//     ar.push(d)
//     ar.push(e)
//     ar.push(f)   
//     console.log(ar);
//     ar = ar.sort()
//     console.log('минимальное число - ' + ar[0]);
//     console.log('максимальное число - ' + ar[ar.length-1]);
// }

// whatIsMinMax(52, 53, 49, 77, 21, 32)


// task 5

// function randNum(numMin, numMax) {
//     return Math.round(Math.random()*(numMax - numMin) + numMin);
// }

// console.log(randNum(1, 10))


// task 6

// let array6 = []

// function getRandNum(numToMax) {
//     for (i = 0; i < Math.ceil(numToMax/2); i++){
//         let nums = Math.round(Math.random()*numToMax)
//         array6.push(nums)        
//     }
// }

// console.log(getRandNum(13))
// console.log(array6);


// task 7

// function randomize(firstNum, secondNum) {
//     return Math.round(Math.random()*(secondNum - firstNum) + firstNum);
// }

// console.log(randomize(4, 6))


// task 8

// let whatDateToday = new Date();

// console.log(whatDateToday);


// task 9

// let currentDate = new Date()
// let days = 73;

// console.log(currentDate);

// let futureDate = currentDate.setTime(currentDate.getTime() + days*24*60*60*1000)

// currentDate = new Date(futureDate)

// console.log(currentDate);


// task 10

// let dateToday = new Date();
// const allDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const allMonths = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// function newView(oldDate) {
//     let newViewOfDate = "Дата: " + oldDate.getDate() + " " + allMonths[oldDate.getMonth()] + " " + oldDate.getFullYear() + " - это " + allDays[oldDate.getDay()] + ". Время: " + dateToday.getHours() + ":" + dateToday.getMinutes() + ":" + dateToday.getSeconds();
//     return newViewOfDate 
// }

// console.log(newView(dateToday)); 
