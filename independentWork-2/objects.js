'use strict';
//чудо-функция "Свабдя)))"
/* 
function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
});
// Насколько я понял, чудо-функция marry(man, woman) создает объект
// с "бесконечно-рекурсивными" свойствами, закольцованными взаимными ссылками
// (если конечно корректно такое их определение, только что сам придумал их так обозвать).
console.log(family.father);
console.log(family.father.wife.husband);
console.log(family.father.wife.husband.wife.husband);
console.log(family.father.wife.husband.wife.husband.wife.husband);
//будут выводить "одно и то же", аналогично для family.mother.
// А объектов - 3:
// man со свойствами name и wife (wife ссылается в свойстве husband на объект man),
// woman со свойствами name и husband (husband ссылается в свойстве wife на объект woman),
// family со свойствами father (ссылается на объект man) и mother (ссылается на объект woman).
// Правильно?
 */


/* function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
} */


/* let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

alert(sum); */


/* let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
} */


let user = {
  name: 'Bill',
  age: 33,
  permissions: {
    canView: true,
    canEdit: false
  },
  priorities: {
    darkTheme: true,
    fontSize: 18
  }
};


console.log( clone(user) );
// Функция рекурсивного клонирования объекта
function clone(object) {
  let newObject = {};

  for (let prop in object) {
    newObject[prop] = (typeof object[prop] !== 'object') ? object[prop] : clone(object[prop]);
  }
  return newObject
}

