//Декоратор шпион
/* 
work = spy(work);
work(1, 2);
work(4, 5); 

for (let args of work.calls) {
  console.log(`call: ${args.join()}`); 
}

function work(a, b) {
  alert( a + b ); 
}

function spy(func) {
  wrap.calls = [];
  function wrap(...args) {
    wrap.calls.push(args);
    return func.apply(this,args);
  } 
  return wrap;
}
 */

//Задерживающий декоратор
/* 
function func(x) {
  console.log(x * 2);
  // return x * 2; - Почему так выдает undefined???
}

function delay(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

let f_3k = delay(func, 3000);
let al_5k = delay(alert, 5000);

f_3k(3);
al_5k('Как??');
 */

//Проверка аргументов

const allArgsValid = function(fn) {
  return function(...args) {
  if (args.length != fn.length) {
      alert('Неправильное колличество параметров');
      return;
    }
    const validArgs = args.filter(arg => Number.isInteger(arg));
    if (validArgs.length < fn.length) {
      alert('Аргументами могут быть только целые числа');
      return;
    }
    return fn(...args);
  }
}

let multiply = function (a, b, c) {
  return a * b * c;
}
multiply = allArgsValid(multiply);

let pow = function (a, b) {
  return a ** b;
}
pow = allArgsValid(pow);

console.log(multiply(2, 4));
console.log(multiply(1, 2, 3));
console.log(multiply(2, 4, "vgbdh"));
console.log(pow(1, 2.3));
console.log(pow(2, 4));
