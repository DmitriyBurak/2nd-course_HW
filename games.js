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


    function secondGame() {
        let arrayForGame = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
        arrayForGame = arrayForGame.sort(() => Math.random() - 0.5);
        alert(arrayForGame);
        let firstQues = prompt('Чему равнялся первый элемент массива?');
        let secondQues = prompt('Чему равнялся последний элемент массива?');
        if (firstQues === arrayForGame[0] && secondQues === arrayForGame[arrayForGame.length - 1]){
            alert('Ты угадал оба элемента!');
        } else if (firstQues === arrayForGame[0] || secondQues === arrayForGame[arrayForGame.length - 1]){
            alert('Вы были близки к победе!');
        } else {
            alert('Вы ответили неверно');
        } 
    }