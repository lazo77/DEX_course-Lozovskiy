export const dateToString = (date) => {
  //TODO: Преобразовать дату к Вчера/Сегодня/Завтра или год:месяц:день
  const dateToDate = new Date(date);
    const dateToСompare = new Date(dateToDate.getFullYear(), dateToDate.getMonth(), dateToDate.getDate());
    const now = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    const yeaterday = new Date(now.getFullYear(), now.getMonth(), now.getDate()-1);
    const year = dateToСompare.getFullYear();
    let month = ((dateToСompare.getMonth() + 1) > 9) ? dateToСompare.getMonth() + 1 :
     `0${dateToСompare.getMonth() + 1}`;
    let day = (dateToСompare.getDate() < 10) ? `0${dateToСompare.getDate()}` : dateToСompare.getDate();

/*     console.log(dateToDate);
    console.log(dateToСompare);
    console.log(now);
    console.log(now.getTime() == dateToСompare.getTime()); */

    switch (dateToСompare.getTime()) {
        case yeaterday.getTime():
            return 'Вчера';
            break;
        case now.getTime():
            return 'Сегодня';
            break;
        case tomorrow.getTime():
            return 'Завтра';
            break;
        default:
            return `${year}:${month}:${day}`;
            break;
    }
};