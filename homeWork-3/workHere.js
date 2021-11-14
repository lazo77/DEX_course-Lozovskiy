export const processCartData = (cartData) => {
  //TODO: Нужно добавить поле discount(oldPrice - price)
  // убрать поле oldPrice
  let discountedProd = cartData.filter((prod) => prod.oldPrice);
  discountedProd.forEach((prod) => {
      if (prod.oldPrice > prod.price) {
          prod.discount = prod.oldPrice - prod.price;
      }
      delete prod.oldPrice;
  });
  return cartData;
};

export const makeCartItemCopy = (cartData) => {
  //TODO: сделать копию элемента "Пицца с анчоусами"
  // После увеличить кол-во добавленного ингредиента
  const cartItem = cartData.find(prod => prod.name === "Пицца с анчоусами");
  let cloneCartItem = Object.assign({}, cartItem);
  cloneCartItem.addedIngredients?.forEach((prod) => ++prod.count);
  return cloneCartItem;
};


export const calcSum = (cartData) => {
  //TODO: посчитать суммы по типам товаров и их цены
  const waterProd = cartData.filter((prod) => prod.type === "water");
  const pizzaProd = cartData.filter((prod) => prod.type === "pizza");
  const otherProd = cartData.filter((prod) => prod.type === "other");

  const totalCounts = cartData.map(prod => prod.count);
  const totalCountsSum = totalCounts.reduce((sum, num) => sum + num, 0);

  const totalPricesSum = cartData.map(prod => prod.price * prod.count);
  const totalSum = totalPricesSum.reduce((sum, num) => sum + num, 0);


  function getTypePricesSum(prodTypeArr) {
      const prodPricesSum = prodTypeArr.map(prod => prod.price * prod.count);
      return prodPricesSum.reduce((sum, num) => sum + num, 0);
  }

  function getTypeCountsSum(prodTypeArr) {
      const prodCounts = prodTypeArr.map(prod => prod.count);
      return prodCounts.reduce((sum, num) => sum + num, 0);
  }

  return {
      total: { count: totalCountsSum, sum: totalSum },
      water: { count: getTypeCountsSum(waterProd), sum: getTypePricesSum(waterProd) },
      pizza: { count: getTypeCountsSum(pizzaProd), sum: getTypePricesSum(pizzaProd) },
      other: { count: getTypeCountsSum(otherProd), sum: getTypePricesSum(otherProd) }
  };
};

export const getCartItemsByDate = (cartData, date) => {
  //TODO: выбрать покупки сделанные за выбранную дату
  const dateToDay = new Date(date).setHours(0, 0, 0, 0);
  return cartData.filter(prod => new Date(prod.date).setHours(0, 0, 0, 0) === dateToDay);
};

export const repeatOrder = (cartData, date) => {
  //TODO: нужно повторить заказ за выбранную дату
  // дублиовать соответствующие элементы
  // поставить в начало спиcка
  // дату текущую
  // поменять id на уникальный
  const dateToDay = new Date(date).setHours(0, 0, 0, 0);
    const dateOrder = cartData.filter((prod) =>
        new Date(prod.date).setHours(0, 0, 0, 0) === dateToDay
    );
    let cloneDateOrder = Object.assign([], dateOrder);
    cloneDateOrder.forEach(prod => {
        prod.id = `${date} ${prod.id}`;
        prod.date = new Date().toString();
    });
    cartData = cloneDateOrder.concat(cartData);
    return cartData;
};

export const addItem = (cartData, item) => {
  //TODO: увеличить кол-во товара в полученном элементе
  item.count = ++item.count;
  return cartData;
};

export const checkPromo = (cartData) => {
  //TODO: нужно проверить корзина подходит под правила промоакции
  // проверить что суммарно в корзине больше 1000р
  // что есть пункт больше чем на 500р
  // что нет скидочных товаров
  const totalPricesSum = cartData.map(prod => prod.price * prod.count);
  
  const totalSum = totalPricesSum.reduce((sum, num) => sum + num, 0);
  const bigPosition = Math.max.apply(null, totalPricesSum);
  const discountedProd = cartData.filter((prod) => prod.discount);
  return {
      total: totalSum > 1000,
      oneBigPosition: bigPosition > 500,
      notDiscounted: discountedProd.length === 0
  };
};