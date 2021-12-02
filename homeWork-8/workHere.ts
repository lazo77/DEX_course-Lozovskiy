// @ts-ignore:next-line
const VehicleData = require("./data");

// Опишите типы данных для VehicleData
interface IVehicle {
  type: "Spacecraft" | "Car" | "Helicopter";
  brand: string;
  model: string;
}
interface ISpacecraft extends IVehicle {
  drive: {
    stages: [
      {
        engineThrust: number;
        engineCount: number;
        engineType: string;
      },
      {
        engineThrust: number;
        engineCount: number;
        engineType: string;
      }
    ];
    supportedEnvironments: ["air", "vacuum"];
  };
}
interface ICar extends IVehicle {
  platform: string;
  drive: {
    type: string;
    power: number;
    torque: number;
    supportedEnvironments: ["asphalt", "sand", "rocks"];
  };
}
interface IHelicopter extends IVehicle {
  drive: {
    totalPower: number;
    engineCount: number;
    supportedEnvironments: ["air"];
  };
}

type VehicleType = ISpacecraft | ICar | IHelicopter;

export const vehicles: VehicleType[] = VehicleData;

// реализуйте класс "Транспортное средство" и его потомков
// Ожидаемый вывод getTitle - "VAZ - 2105"
// Ожидаемый вывод getInfo:
//   для всех, кроме вертолётов - "Supported environments: {env}" с
//       перечислением всех доступных окружающих сред
//   для космических кораблей - "Total thrust: {calc}kN Engine count: {cnt}",
//       вместо {calc} - общая тага всех ступеней, вместо {cnt} - общее
//       количество двигателей.
//   для автомобилей - "Power: {pwr}HP Torque: {Tq}Nm", с выводом соотв. значений
//   для вертолётов - "Under secret"

class Vehicle implements IVehicle {
  type: "Spacecraft" | "Car" | "Helicopter";
  brand: string;
  model: string;
  constructor(vehicle: VehicleType) {
    this.type = vehicle.type;
    this.brand = vehicle.brand;
    this.model = vehicle.model;
  }

  getTitle(): string {
    return `${this.brand} - ${this.model}`;
  }
  getInfo(): string {
    return "Under secret";
  }
}
class Spacecraft extends Vehicle implements ISpacecraft {
  drive: {
    stages: [
      {
        engineThrust: number;
        engineCount: number;
        engineType: string;
      },
      {
        engineThrust: number;
        engineCount: number;
        engineType: string;
      }
    ];
    supportedEnvironments: ["air", "vacuum"];
  };
  constructor(vehicle: ISpacecraft) {
    super(vehicle);
    this.drive = vehicle.drive;
  }
  getInfo(): string {
    const stagesThrust = this.drive.stages.map(
      (stage) => stage.engineThrust * stage.engineCount
    );
    const enginesCount = this.drive.stages.map((stage) => stage.engineCount);
    return `Supported environments: ${this.drive.supportedEnvironments};
    Total thrust: ${stagesThrust.reduce((sum, current) => sum + current, 0)} kN;
    Engine count: ${enginesCount.reduce((sum, current) => sum + current, 0)}.`;
  }
}
class Car extends Vehicle implements ICar {
  platform: string;
  drive: {
    type: string;
    power: number;
    torque: number;
    supportedEnvironments: ["asphalt", "sand", "rocks"];
  };
  constructor(vehicle: ICar) {
    super(vehicle);
    this.platform = vehicle.platform;
    this.drive = vehicle.drive;
  }
  getInfo(): string {
    return `Supported environments: ${this.drive.supportedEnvironments};
    "Power: ${this.drive.power} HP; 
    Torque: ${this.drive.torque} Nm.`;
  }
}
class Helicopter extends Vehicle implements IHelicopter {
  drive: {
    totalPower: number;
    engineCount: number;
    supportedEnvironments: ["air"];
  };
  constructor(vehicle: IHelicopter) {
    super(vehicle);
    this.drive = vehicle.drive;
  }
}

// реализйте функцию конвертации полученнх данных в конечный тип для
// последующего вывода данных о транспортном средстве

export function vehicleFabric(vehicle: VehicleType): Vehicle | null {
  switch (vehicle.type) {
    case "Spacecraft":
      return new Spacecraft(vehicle);
    case "Car":
      return new Car(vehicle);
    case "Helicopter":
      return new Helicopter(vehicle);
    default:
      return null;
  }
}
