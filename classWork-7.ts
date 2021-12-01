//#1 Напишите интерфейсы для 3-х обьектов ниже

const obj1: ob1 = {
  prop1: "prop1",
  prop2: "prop2",
  prop3: () => "prop3"
};
interface ob1 {
  prop1: string;
  prop2: string;
  prop3: () => string;
}

const obj2: ob2 = {
  prop4: 45,
  prop5: Object.keys(obj1),
  prop6: () => +"100" + +"100",
  prop7: () => () => +"100" - +"100" + "50",
  prop8: !(() => +"55" * 20 + "150")
};
interface ob2 {
  prop4: number;
  prop5: string[];
  prop6: () => number;
  prop7: () => () => string;
  prop8: boolean;
}

// в obj3 нужно передать в дженерик - интерфейс типы
// которые будет возвращать функция propObj4
interface ob3<T> {
  propObj1: number;
  propObj2: () => () => ob1;
  propObj3: () => [ob1, ob2];
  propObj4: (num: number) => T;
}

const obj3: ob3<string | number | ob1 | [string, number, ob2]> = {
  propObj1: 43,
  propObj2: () => () => obj1,
  propObj3: () => [obj1, obj2],
  propObj4: (num: number) => {
    if (num === 1) {
      return "num1";
    } else if (num === 2) {
      return 2;
    } else if (num === 3) {
      return obj1;
    } else {
      return ["1", 2, obj2];
    }
  }
};

//#2 работа с Utility Types
const unionObj = {
  key1: "key1",
  key2: "key2",
  key3: "key3",
  key4: "key4"
};

//получить обьединение ключей 'key1' | 'key2'
// из обьекта unionObj
type unionKeys = Pick<typeof unionObj, "key1" | "key2">;

interface IBaseInterface {
  goodProp1: string;
  goodProp2: number;
  badProp1: string;
}

interface IBaseInherit extends IBaseInterface {
  goodProp3: string;
  goodProp4: number;
  badProp2: string;
}

// получить тип только с хорошими свойствами из IBaseInherit
type goodProps = Omit<IBaseInherit, "badProp1" | "badProp2">;

// получить тип этой функции
// и тип ее возвращаемого значения
const exampleHandler = () => ({
  exampleKey1: "exampleKey1",
  exampleKey2: 100,
  exampleKey3: "exampleKey3"
});

type TExampleHandler = typeof exampleHandler;
type TExampleReturnType = ReturnType<typeof exampleHandler>;

//#3
// передать функцию в typeFunction чтобы она полностью
// подходила под тип funcType

type funcType = (
  param: number
) =>
  | undefined
  | null
  | ((flag: boolean) => string | (() => Promise<(string | number)[]>));

const typeFunction = (func: funcType) => {
  func(2);
};

typeFunction((num) => {
  switch (num) {
    case -1:
      return undefined;
    case 0:
      return null;
    default:
      return function (flag: boolean) {
        if (flag) return "string";
        return () =>
          new Promise((resolve) => {
            if (num < 0) resolve([num]);
            resolve([num.toString(2)]);
          });
      };
  }
});

//#4
// напишите тело класса чтобы имплеминитровать
// интерфейсы IImplement1 и IImplement2

interface IImplement1<T extends string | number> {
  name: string;
  randomProp: T;

  handler(param1: T, param2: T): T;

  handler2(param: string, param2: number): () => boolean;
}

interface IImplement2 {
  handler3<T>(param: T): T[];

  handler4(): Promise<string>;
}

class Implementator implements IImplement1<string>, IImplement2 {
  name: string;
  randomProp: string;
  constructor(name: string, randomProp: string) {
    this.name = name;
    this.randomProp = randomProp;
  }
  handler(str1: string, str2: string): string {
    return str1.concat(str2);
  }
  handler2(str: string, num: number) {
    return () => +str < num;
  }
  handler3<T>(param: T): T[] {
    return [param];
  }
  handler4(): Promise<string> {
    return new Promise((resolve) => resolve("Promise resolved"));
  }
}
