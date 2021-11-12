'use strict';

//1
/* function camelize(str) {
  let strArr = str.split('-');
  for (let i = 1; i < strArr.length; i++) {
    strArr[i] = `${strArr[i][0].toUpperCase()}${strArr[i].slice(1)}`
  }
  return strArr.join('');
}
console.log( camelize('list-style-image-hvbbh') ); */

//2
/* let arr = [1, 3, 4, 2, 6, 5, 7];
function filterRange(arr, a, b) {
  const result = arr.filter(num => (num >= a && num <= b));
  return result; 
} */
// console.log( filterRange(arr, 3, 5) );


//3
/* let arr = [1, 3, 4, 2, 6, 5, 7];
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      //тут конечно потупил пока догадался откатывать
      //счетчик назад, спасибо отладчику Chrome))
      i--;
    }
  }
}
filterRangeInPlace(arr, 3, 5);
console.log(arr); */

//Калькулятор
// Сначала быстро сделал так:
/* function Calculator () {
  this.calculate = (str) => {
    let strArr = str.split(' ');
    if ( (strArr.length == 3) && isFinite(strArr[0]) && isFinite(strArr[2]) ) {
      if (strArr[1] === '+') {
        return +strArr[0] + +strArr[2];
      } else if (strArr[1] === '-') return +strArr[0] - +strArr[2];
    } else return `Проверьте правильность ввода, должна быть строка вида: 
число пробел оператор пробел число`;
  }
}
let calc = new Calculator;
alert( calc.calculate("2 + 5") );
alert( calc.calculate("2 - 5") );
alert( calc.calculate("a + 5") );
alert( calc.calculate("3+5") );
 */

//Потом долго тупил, мучался и (честно скажу) заглянул в решение,
//буквально на минуту, понять принцип, закрыл и переписал по своему,
//для запоминания, может и сам бы додумался, но время поджимает.
/* 
function Calculator () {
  this.operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  }
  this.calculate = (str) => {
    let strArr = str.split(' ');
    let a = +strArr[0];
    let b = +strArr[2];
    let op = strArr[1];
    if (!this.operations[op] || isNaN(a) || isNaN(b)) {
      return `Проверьте правильность ввода, должна быть строка вида: 
      число пробел оператор пробел число`;
    }

    return this.operations[op](a, b);
  }
  this.addMethod = (op, func) => {
    this.operations[op] = func;
  }
}
let calc = new Calculator;

calc.addMethod('*', (a, b) => a * b);
calc.addMethod('/', (a, b) => a / b);
calc.addMethod('**', (a, b) => a ** b);

console.log( calc.calculate("2 + 5") );
console.log( calc.calculate("2 - 5") );
console.log( calc.calculate("a + 5") );
console.log( calc.calculate("3+5") );
console.log( calc.calculate("9 / 3") );
console.log( calc.calculate("9 * 3") );
console.log( calc.calculate("9 ** 2") );
 */

//Трансформировать в массив имён
/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map( user => user.name );

alert( names ); */
//Это было легко.

//Трансформировать в объекты

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map(user => {
  let obj = new function () {
    this.fullName = `${user.name} ${user.surname}`;
    this.id = user.id;
  }
  return obj;
});

console.log(usersMapped);
alert(usersMapped[0].fullName);
alert(usersMapped[0].id);

// Тут, на уровне логики решил почти сразу, а вот с реализацией
// пришлось пострадать, но недолго))
// Открыл решение и сначала матерился, потому что сразу делал
// так же, но не работало, потом заметил разницу, и ....
// чо так можно было?! 
