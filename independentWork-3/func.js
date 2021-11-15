'use strict';

//Напишите функцию pow(x,n), которая возвращает x в степени n.
//Создайте страницу, которая запрашивает x и n, а затем выводит
//результат pow(x,n). В этой задаче функция обязана поддерживать
// только натуральные значения n, т.е. целые от 1 и выше.
/* 
let x, n;

do {
  x = +prompt('Введите число x', '');
} while (!isFinite(x));

do {
  n = +prompt('Введите число n', '');
} while (!Number.isInteger(n) || n < 1);

alert(pow(x, n));

function pow(x, n) {
  return x ** n;
} */

//Замените код Function Expression стрелочной функцией

let ask = (question, yes, no) => {
  if(confirm(question)) yes()
  else no();
}
ask('Вы согласны?', 
() => alert('Вы согласились'),
() => alert('Вы отменили'));


