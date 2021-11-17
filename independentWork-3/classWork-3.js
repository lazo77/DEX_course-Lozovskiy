const funcСurryingCount = (n) => {
  return function f1(...rest) {
    if (rest.length >= n) {
      return rest.slice(0, n).reduce((total, current) => total + current, 0);
    } else {
      return function (...rest2) {
        return f1(...rest, ...rest2);
      }
    }
  }
}
const funcCurrent = funcСurryingCount(3);

console.log("funcCurrent(1, 3, 4, 2) ", funcCurrent(1, 3, 4, 2));
console.log("funcCurrent(1, 3)(4, 5, 1) ", funcCurrent(1, 3)(4, 5, 1));
console.log("funcCurrent(1)(3,4) ", funcCurrent(1)(3, 4));
console.log("funcCurrent(1)(3)(4, 5) ", funcCurrent(1)(3)(4, 5));
//То есть всё отличие от предыдущей задачи это вместо rest.length >= 3,
//rest.length >= n, ну и обрезать лишние аргументы в сумме???
//Или я опять не догоняю...