'use strict'

//Сумма свойств объекта
/* 
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 300
};

alert( sumSalaries(salaries) );

function sumSalaries(obj) {
  return Object.values(obj).reduce((sum, current) => sum + current, 0);
}
 */

//Подсчёт количества свойств объекта

let user = {
  name: 'John',
  age: 30
};

alert( count(user) );

function count(obj) {
  return Object.keys(obj).length;
}

// Ну тут было совсем легко 