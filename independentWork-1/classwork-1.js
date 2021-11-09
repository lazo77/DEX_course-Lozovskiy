export const getHolidayPrizes = (name, birthday, sum) => {
let today = new Date();
let birthDate = new Date(Date.parse(birthday));
if (birthDate.getMonth() == today.getMonth() && birthDate.getDate() == today.getDate()) {
  return `У ${name} сегодня ДР премия = ${sum * 0.1 +
     (birthDate.getMonth() * birthDate.getDate()) }`;
}
};
