//#1
// Раскоментировать код и починить ошибку чтобы отработала консоль

class ClassFirst {
  constructor(prop1) {
    this.prop1 = prop1;
  }
}

class ClassSecond extends ClassFirst {
  constructor(prop1, prop2) {
    super(prop1);
    this.prop2 = prop2;
  }
}

class ClassThird extends ClassSecond {
  constructor(prop1, prop2, prop3) {
    super(prop1, prop2);
    this.prop1 = prop1;
    this.prop2 = prop2;
    this.prop3 = prop3;
  }
}

const instance = new ClassThird("prop1", "prop2", "prop3");
console.log("PROPS =>", instance.prop1, instance.prop2, instance.prop3);

//#2
// Создать класс со свойствами title и date
// и статическим свойством , которое при вызове
// всегда возвращает новый экземпляр газеты с текущей датой

export class NewsPaper {
  static createNewPaper(title) {
    const date = new Date().toLocaleString(); 
    return new this(title, date);
  }
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
}

// #3 Создать иерархию классов
// ThirdCalculate -> SecondCalculate -> CalculateBase
// чтобы при вызове метода calculate у Класса ThirdCalculate
// выводилась строка
// ThirdCalculate: 1 SecondCalculate: 2 CalculateBase: 3
class CalculateBase {
  constructor() {
    this.name = "CalculateBase";
    this.count = 0;
  }
  calculate() {
    return `${this.name}: ${++this.count}`;
  }
}

class SecondCalculate extends CalculateBase {
  constructor() {
    super();
    this._name = "SecondCalculate";
  }
  calculate() {
    return `${this._name}: ${++this.count} ${super.calculate()}`;
  }
}

class ThirdCalculate extends SecondCalculate {
  constructor() {
    super();
    this.name1 = "ThirdCalculate";
  }
  calculate() {
    return `${this.name1}: ${++this.count} ${super.calculate()}`;
  }
}

const calc = new ThirdCalculate();
console.log(calc.calculate());
//console.log(calc.count);
//#4
//написать функцию которая будет вызывать нужный модуль
//по передаваемом типу first или second

export const callCurrentModule = async (type) => {
  if (type === "first") {
    import("./module1.js").then((module) => module.moduleFirst());
  }
  if (type === "second") {
    import("./module2.js").then((module) => module.moduleSecond());
  }
};

//#5 написать функцию
// которая выведет в консоль 'PING'
// передаваемое кол-во раз , раз в секунду
const pinger = async (n) => {
  if (n > 0) {
    console.log("PING");
    setTimeout(() => pinger(n - 1), 1000);
  }
  return;
};

pinger(10);