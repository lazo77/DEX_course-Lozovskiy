export const showPrice = (price, discount) => {
  const discountedPrice = price - (price * discount) / 100;
  //TODO: Привести цену к виду: 10.00 р.
  // округлять до копеек в сторону магазина
  let resoultDisPrice = (Math.ceil(discountedPrice * 100) /100).toFixed(2);

  return `${resoultDisPrice} р.`
};