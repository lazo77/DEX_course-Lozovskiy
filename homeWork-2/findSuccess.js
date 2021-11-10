export const findSuccess = (bankResponse) => {
  //TODO: Проверьте что в строке есть 'Success' без учёта регистра
  const strLow = bankResponse.toLowerCase();
  
  return strLow.includes("success") ? "Yes" : "No";
};