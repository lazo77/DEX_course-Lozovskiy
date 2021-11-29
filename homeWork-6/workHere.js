import { Vehicle, ElectricCar, ICECar } from "./types";

// ВАЖНО: ни в одной задаче нельзя использовать глобальные
// переменные. Проверяться будет только содержание уже
// существующих деклараций файла

// Необходимо описать класс "Привод", который будет принимать
// тип привода автомобиля ("FWD", "RWD", "AWD"). Предусмотреть
// метод canDrive(cover), который на основе полученного параметра
// будет определять может ли автомобиль передвигаться по поверхности:
// - "asphalt" доступен для всех;
// - "sand" доступен для полного привода ("AWD");
// - "rocks" не доступен для всех;
// - при получении иных вариантов параметра — выбрасывать ошибку
export class Drive {
  constructor(drive) {
    this.drive = drive;
    this.canDrive = this.canDrive.bind(this);
  }
  canDrive(cover) {
    if (cover === "asphalt") return true;
    if (cover === "rocks") return false;
    if (cover === "sand" && this.drive === "AWD") {
      return true;
    } else {
      throw new Error("not implemented");
    }
  }
}

// Необходимо описать класс "Зарядная станции" для зараядки
// электирческих автомобилей (chargeVehicle должен вызывать vehicle.charge()).
// Имейте в виду, что электромобили возгараются от перезарядки
// (>100%) или при слишком интенсивной зарадке (импульс заряда должен
// быть не чаще чем 1раз в 0,5сек).
export class Charger {
  constructor() {
    this.lastCharge = Date.now() - 2000;
  }
  chargeVehicle(vehicle) {
    let lastCharge = this.lastCharge;
    // console.log(lastCharge);
    if (vehicle instanceof ElectricCar) {
      if (vehicle.battery < 100 && Date.now() - lastCharge > 500) {
        vehicle.charge();//один вызов!!!! и пожар...
        return;
      }
    } else {
      throw new Error("not implemented");
    }
  }
}

// Унаследуйте класс Vehicle. Необходимо создать класс таким образом,
// чтоб пробег всех автомобилей можно было получить без параметров.
// Реализуйте функцию получения суммарного пробега всех автомобилей
export class Car extends Vehicle {
  constructor(brand, model, drive) {
    super(brand, model, drive);
  }
  trip(mileage) {
    super.trip(mileage);
    console.log(this.milage);
    // throw new Error("not implemented");
  }
}

export function getTotalCarsMileage() {
  throw new Error("not implemented");
}
