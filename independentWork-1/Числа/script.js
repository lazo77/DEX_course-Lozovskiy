'use strict';

//Потеря точности
/*
alert( 6.35.toFixed(1) ); //6.3
alert( 6.35.toFixed(20) ); //6.34999999999999964473
alert( Math.round(6.35 * 10) / 10 ); // Правильное округление
alert( 6.05.toFixed(20) ); // 6.04999999999999982236
alert( 6.15.toFixed(20) ); // 6.15000000000000035527
alert( 6.25.toFixed(20) ); // 6.25000000000000000000
alert( 6.45.toFixed(20) ); // 6.45000000000000017764
alert( 6.55.toFixed(20) ); // 6.54999999999999982236
alert( 6.65.toFixed(20) ); // 6.65000000000000035527
alert( 6.75.toFixed(20) ); // 6.75000000000000000000
alert( 6.85.toFixed(20) ); // 6.84999999999999964473
alert( 6.95.toFixed(20) ); // 6.95000000000000017764
// Вывод: Потеря точности отсутствует у дробей с знаменателем кратным 2
// (из-за внутреннего двоичного представления), они же: ...,5 ; ...,25; ...,75;
// ...,125; ...,375; ...,625; ...,875 и т.д.)))
 */

//"Случайное" целое число
/*
let min = +prompt('min?');
let max = +prompt('max?');

function randomInteger(min, max) {
  let result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
}

alert( randomInteger(min, max) );
// здесь пытался отслеживать работу функции
console.log(`от ${min} до ${max}`);
console.group();
for (let i = 0; i < 20; i++) {
  console.log( randomInteger(min, max) );
}
console.groupEnd();
 */
//Сумма введенных чисел с проверкой (Пуствя строка, NaN)

let sum = sumNumbers();

let message = (sum === null) ? `Вы отменили ввод одного из слагаемых` :
  `Сумма введённых чисел = ${sum}`;

alert(message);

function sumNumbers() {
  let a;
  let b;

  do {
    a = prompt('Введите первое слагаемое', '');
    if ((a === null)) {
      break;
    } else if ((a === '')) {
      alert('Вы забыли ввести число, бывает');
    }else if ((isNaN(a))) {
      alert('Это не число, давайте заново)');
    }
  } while (isNaN(a) || a === '');

  if (a === null) return a;

  do {
    b = prompt('Введите второе слагаемое', '');
    if ((b === null)) {
      break;
    } else if ((b === '')) {
      alert('Вы забыли ввести число, бывает');
    }else if ((isNaN(b))) {
      alert('Это не число, давайте заново)');
    }
  } while (isNaN(b) || b === '');

  if (b === null) return b;

  return Number(a) + Number(b);
}
