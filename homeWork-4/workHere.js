//TODO: Напишите функцию счётчик вызовов, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, кол-во вызовов
export const counter = (name, func) => {
  let count = 0;
  return function (...args) {
    console.log(`${name} ${++count}`);
    return func.apply(this, args);
  }
};

//TODO: Напишите функцию логгер, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, её параметры результат и название
export const logger = (name, func) => {
  // let arg;
  // let result;
  return function (...args) {
    let arg = args;
    let result = func.apply(this, args);
    console.log(`${name} ${arg} ${result}`);
    return func.apply(this, args);
  }
};

//TODO: Напишите функцию каррирования, должна принимать функцию, а возвращать функцию
// Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c)
// Должна работать для любого кол-ва аргументов
export const curry = (func) => {
  return function f1(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return f1.apply(this, args.concat(args2));
      }
    }
  }
};