'use strict';

//Задачи learn.javascript.ru

//1
/*
let date = new Date(2012, 1, 20, 3, 12);
alert(date);
 */

//2 День недели
/*
let date1 = new Date(2012, 0, 3);

function getWeekDay(date) {
    let dayNum = date.getDay();
    let week = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return week[dayNum];
}

alert( getWeekDay(date1) );
 */

//3 Местный день недели (Мой вариант)
/*
function getLocalDay(date) {
    let week = [7, 1, 2, 3, 4, 5, 6];
    return week[date.getDay()];
}
alert( getLocalDay( new Date(2012, 0, 3)) );
 */

//3 Местный день недели (Из ответов)
/* function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) {
      day = 7;
    }
    return day;
  } */
//Этот вариант лучше, ибо не плодит сущности?
// Или как?

//4
// Число которое было daysPar дней назад от текущей даты
// (в задании было от конкретной)
// В ответе вообще не так, мне кажется мой вариант проще.
/*
let today = Date.now();
//для конкретной даты let day = new Date(a, b, c);
const MS_IN_DAY = 24 * 60 * 60 * 1000;

function getDateAgo(datePar, daysPar) {
    let dateAgo = new Date(datePar - daysPar * MS_IN_DAY);
    // let dateAgo = new Date(datePar.getTime() - daysPar * MS_IN_DAY);
    return dateAgo.getDate();
}

alert(getDateAgo(today, 365));
 */

//5 Последний день месяца
// Тут прям полностью совпало)
/*
function getLastDayOfMonth(year, month){
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
 */
//6 Количество секунд сегодня до сейчас))
/*
function getSecondsToday() {
    let now = Date.now();
    let today = new Date().setHours(0, 0, 0, 0);

    return Math.round( (now - today) / 1000 );
}
alert( getSecondsToday() );
 */
// Вот тут намучался, честно говоря! Хотя не ожидал)))
// Но получилось короче чем в ответе.

//7 Количество секунд до завтра
/*
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    return Math.round( (tomorrow - now) / 1000 );
}
console.log( getSecondsToTomorrow() );
 */

//8 Форматирование даты
function formatDate(date) {
    let now = Date.now();

    let year = String(date.getFullYear());
    let month = () => {
        let m = date.getMonth() + 1;
        if (m > 9) return m;
        return `0${m}`;
    }
    let day = (date.getDate() < 10) ? `0${date.getDate()}` : date.getDate();
    let hours = (date.getHours() < 10) ? `0${date.getHours()}` : date.getHours();
    let min = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes();

    let diffSec = Math.floor( (now - date) / 1000 );
    let diffMin = Math.floor( (now - date) / (60 * 1000) );
    if (diffSec < 1) {
        return 'Прямо сейчас'
    } else if (diffSec >= 1 && diffSec < 60) {
        return `${diffSec} секунд назад`
    } else if (diffMin < 60) {
        return `${diffMin} минут назад`
    }
    return `${day}.${month()}.${year.slice(2)} ${hours}:${min}`
}
alert( formatDate(new Date(new Date - 1)) );

alert( formatDate(new Date(new Date - 30 * 1000)) );

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) );

alert( formatDate(new Date(new Date - 86400 * 1000)) );
// Конечно месяцы можно было бы получить так же как дни, часы или минуты,
// но я уже написал так (на тот момент дни, часы, минуты ещё не форматировал),
// а потом не стал менять, чтобы спросить насколько плохо так делать. ?
// И в целом отсутствие единого подхода, не только тут, но и в других заданиях,
// объясняется не только неопытностью но и желанием попробовать (поторенировать)
// разные подходы.
// Кстати, на learn.javascript.ru, в тестах к этой задаче - дырка, они пропускают
// неформатированые часы и минуты (неправильно выбрали время 11:22))).
