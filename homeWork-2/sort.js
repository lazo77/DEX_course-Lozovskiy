export const sort = (data) => {
  //TODO: Отсортируйте массив строк по алфавиту
  /* Сперва хотел попробовать отсортировать без использования .sort() 
  (днем успел немного почитать о методах массивов), но быстро понял,
  что это жесткая разновидность мазохизма и усну я, в лучшем случае, утром
  (т.к. поставил цель закончить ДЗ сегодня) ну и сделал так: */
  data.sort((a, b) => a.localeCompare(b));
  return data;
};