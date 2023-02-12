   function firstGame(month) {
    month = prompt ('Введите порядкое число месяца от 1 до 12 включительно');
    if (month == 1 || month == 2 || month == 12) {
        alert('Зима');
    } else if (month == 3 || month == 4 || month == 5) {
        alert('Весна');
    } else if (month == 6 || month == 7 || month == 8) {
        alert('Лето');
    } else if (month == 9 || month == 10 || month == 11) {
        alert('Осень');
    } else {
        alert('Введите цифру от 1 по 12');
    }
   }

//    month = prompt ('Введите порядкое число месяца от 1 до 12 включительно');
//    switch (month) {
//     case '1':
//     case '2':
//     case '12':
//         alert('Зима');
//         break;

//     case '3':
//     case '4':
//     case '5':
//         alert('Весна');
//         break;

//     case '6':
//     case '7':
//     case '8':
//         alert('Лето');
//         break;

//     case '9':
//     case '10':
//     case '11':
//         alert('Осень');
//         break;
   
//     default: alert('Введите цифру от 1 по 12');
//         break;
//    }
// }