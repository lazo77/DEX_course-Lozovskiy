'use strict';

// Поигрался с получением подстроки
/*
let str = 'Widget with id';
alert( str.startsWith( 'wi'[0].toUpperCase() ) );//true
alert( str.slice(-7, -1) );
alert( str.slice(3, 6) );
alert( str.substring(6, 3) );
alert( str.substr(7, 6) );
 */


// Антиспам)) предполагается получение непустой строки.
/*
let str = prompt('Введите текст', 'xxxVIAGRAxxx')

let message = ( checkSpam(str) ) ? 'Обнаружен спам!' : 'Спам не обнаружен.';

alert(message);

function checkSpam(str) {

  let strLow = str.toLowerCase();

  return strLow.includes('viagra') || strLow.includes('xxx');
}
// Сначала было str = str.toLowerCase(); , но посмотрев ответ
// и подумав, понял что переопределять глобальную переменную, не лучшая
// идея, в данном случае это не критично, но тем не менее...
 */


// Функция обрезки строки до заданной длины со вставкой троеточия.
// Правильный ответ в задании:
// function truncate(str, maxlength) {
// return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '\u2026' : str;}
// А вот мой вариант:
/*
function truncate(str, maxlength) {
  if (str.length <= maxlength) return str;

  return str.slice(0, maxlength - 1) + '\u2026';
}
// Мне кажется - то же самое, а на самом деле?
 */


// Интерполяция выражений, вложенные шаблоны
/*
let threeDots = '\u2026';
let pathToUnicodeTable = `https://unicode-table.com/ru/`;

let info = `Я посмотрел код для многоточия (${threeDots})
в Tаблице символов Юникода, расположенной здесь:
${String.raw`${pathToUnicodeTable}`}`;

alert(info);
console.log(info);
 */

// Теговые шаблоны
// Фунция studForPrompt заточена исключительно под переделку в родительный падеж
//"Александров" с фамилией на "ий" и тем же кол-вом букв, очень узкоспециальная)) и
// громоздкая, создана исключительно в целях личного обучения.

let grade;
const student = 'александр лозовский';

let studForPrompt = str => {
  return str[0].toUpperCase() + str.substr(1, 8) +
    String.fromCodePoint(str.codePointAt(0)) + str[9] +
    str[10].toUpperCase() + str.slice(11, str.length - 2) + 'ого';
}

do {
  grade = +prompt(`Oцените старания ${studForPrompt(student)}
по 5-бальной системе, будьте снисходительны.` , '');
} while (isNaN(grade) || grade < 1 || grade > 5);

let result = myFirstTag`Студент ${student} - ${grade}.`;

alert(result);

function myFirstTag(strings, studExp, gradeExp) {

  let studName = studExp[0].toUpperCase() + studExp.substr(1, 8);

  let studReaction;
  if (gradeExp == 5) {
    studReaction = 'доволен "как питон" )))';
  } else if (gradeExp == 4) {
    studReaction = 'feels good';
  } else if (gradeExp == 3) {
    studReaction = 'огорчен, но твердо намерен наверстать';
  } else {
    studReaction = 'впал в ступор..';
  }

  return `${strings[0]}${studName}${strings[1]}${studReaction}${strings[2]}`;
}
