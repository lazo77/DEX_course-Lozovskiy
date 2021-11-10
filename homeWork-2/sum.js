// Уверен можно сделать лучше и короче но не сейчас,
// и так потратил на неё полдня сегодня)))
//Функция парсит строки вида "mfdbn5", количество букв перед цифрой - любое,
//ну и всё остальное выполняет согласно заданию.
export const sum = (f, s) => {
  let isNumericF = typeof f === "number" ? true : false;
  let isNumericS = typeof s === "number" ? true : false;
  let isStringF = typeof f === "string" ? true : false;
  let isStringS = typeof s === "string" ? true : false;

  if (isNumericF && isNumericS) {
    return f + s;
  } else if ((isNumericF && isStringS) || (isStringF && isNumericS)) {
    let result = parseFloat(f) + parseFloat(s);

    if (isNaN(result) && isStringF && isNumericS) {
      return parseIfNan(f) + s;
    } else if (isNaN(result) && isNumericF && isStringS) {
      return parseIfNan(s) + f;
    }

    return result;

  } else if (isStringF && isStringS) {
    return parseIfNan(f) + parseIfNan(s);
  } else if ((!isNumericF && !isStringF) && (isStringS || isNumericS)) {
    if (isStringS) return parseIfNan(s);
    return s;
  } else if ((!isNumericS && !isStringS) && (isStringF || isNumericF)) {
    if (isStringF) return parseIfNan(f);
    return f;
  } 
  return 0;

  function parseIfNan(str) {
    let num;
    for (let i = 0; i < str.length; i++) {
      if (isFinite(+str[i])) {
        num = parseFloat(str.slice(i));
        break;
      } else {
        num = 0;
      }
    }
    return num;
  }
};
