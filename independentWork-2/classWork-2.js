export const getUsersAddress = (data) => {
  let matchUsers = data.filter((user) => isFinite(user.address.street.slice(0, 1)));
  let users = matchUsers.map(user => user.name);
  let addresses = matchUsers.map(user => user.address.street);
return `На улицах ${addresses} живут пользователи ${users}`
};

export const getDoubleUserBonuses = (data) => {
  const users = data.map(user => user.name);
    const bonuses = data.map(user => Object.values(user.userBonuses) );
    console.log(bonuses);
    const sumBonuses = bonuses.map(bonus => (bonus.reduce((sum, num) => sum + num, 0)) * 2);
    console.log(sumBonuses);
    return `Пользователи ${users} получат соответственно ${sumBonuses}`;
};
