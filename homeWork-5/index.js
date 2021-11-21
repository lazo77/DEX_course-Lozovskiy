import { compareText } from "./data";

// Написать 2 функции,
// первая обработает ответ от compareText (положительный и отрицательный)
// TODO: первая функция использует then и catch

const getData = (str) => {
  return compareText(str)
    .then(result => `"Success: ${result}"`)
    .catch(error => `"Error: ${error.message}"`);
};

// TODO: вторая использует try и catch
// TODO: Если ответ положительный вывести в консоль: "Success: ..."
// TODO: Если ответ отрицательный вывести в консоль: "Error: ..." (тескт ошибки)

const processingData = async (str) => {
  try {
    let response = await getData(str);
    if (response.includes("Error")) {
      throw new Error(response);
    }
    console.log(response);
  } catch (error) {
    console.error(error.message);
  }
};
processingData("короткий текст");
processingData("длинный тексттттттттттт");

// Используя конструкции then catch
// к положительному ответу добавьте " :)"
// к ответу с ошибкой добавьте " :("
// Если длина ответа меньше 20 символов, то нужно добавить "(" или ")" в зависимости от ответа,
// скобочки нужно добавлять пока длинна не станет равна 20
// TODO: на каждое действи должна быть отдельная конструкция then или catch
// Например первый then для добавления " :)", второй для подсчёта количества символов и добавления недостающих

const getResponse = async (str) => {
  const getMess = (str1) => {
    return new Promise((resolve, reject) => {
      compareText(str1)
        .then(result => resolve(`${result}:)`))
        .catch(error => reject(`${error.message}:(`));
    });
  };
  await getMess(str)
    .then(res => formatMessage(res, ")"))
    .catch(err => formatMessage(err, "("));
};

getResponse("короткий текст");
getResponse("Длинный текстттт");

function formatMessage(string, bracket) {
  while (string.length < 20) {
    string += bracket;
  }
  if (bracket === ")") {
    console.info(string);
  } else {
    console.error(string);
  }
}

// Написать функцию, которая принимает url и выводит в консоль ответ
// TODO: обработать ошибки и вывести в консоль "Ошибка"
// TODO: ошибка если тстатус меньше 200 и больше 299

const getDataFromAPI = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status < 200 || response.status >= 300) {
      throw new Error(`Ошибка`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
};

getDataFromAPI("https://randomuser.me/api");
getDataFromAPI("https://randomuser123.me/api");
getDataFromAPI("https://randomuser.me/api123");
