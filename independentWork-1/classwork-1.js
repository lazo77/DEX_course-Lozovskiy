export const getHolidayPrizes = (name, birthday, sum) => {
  let today = new Date();
  let birthDate = new Date(Date.parse(birthday));
  let bonusRaw = sum * 0.1 + (birthDate.getMonth() * birthDate.getDate());
  let bonus = Math.round(bonusRaw / 10) * 10;

  if (birthDate.getMonth() == today.getMonth() && birthDate.getDate() == today.getDate()) {
    return `У ${name} сегодня праздник, его премия составляет ${bonus}`;
  }
};
