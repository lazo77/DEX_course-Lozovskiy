// @ts-ignore:next-line
const VehicleData = require("./data");

type spaceDrive = {
  stages: {
    engineThrust: number;
    engineCount: number;
    engineType: string;
  }[];
  supportedEnvironments: ["air", "vacuum"];
};

type carDrive = {
  type: string;
  power: number;
  torque: number;
  supportedEnvironments: ["asphalt", "sand", "rocks"];
};

type helicopterDrive = {
  totalPower: number;
  engineCount: number;
  supportedEnvironments: ["air"];
};

type VehicleType = {
  type: "Spacecraft" | "Car" | "Helicopter";
  brand: string;
  model: string;
  platform?: string;
  drive: spaceDrive | carDrive | helicopterDrive;
  getTitle(): string;
  getInfo(): string;
};

export const vehicles: VehicleType[] = VehicleData;

class Vehicle {
  type: "Spacecraft" | "Car" | "Helicopter";
  brand: string;
  model: string;
  drive: spaceDrive | carDrive | helicopterDrive;
  constructor(vehicle: VehicleType) {
    this.type = vehicle.type;
    this.brand = vehicle.brand;
    this.model = vehicle.model;
    this.drive = vehicle.drive;
  }
  getTitle() {
    return `${this.brand} - ${this.model}`;
  }
  getInfo() {
    return "Under secret";
  }
}

class Spacecraft extends Vehicle {
  drive: {
    stages: {
      engineThrust: number;
      engineCount: number;
      engineType: string;
    }[];
    supportedEnvironments: ["air", "vacuum"];
  };
  constructor(vehicle: VehicleType) {
    super(vehicle);
  }
  getInfo() {
    const stagesThrust = this.drive.stages.map(
      (stage) => stage.engineThrust * stage.engineCount
    );
    const enginesCount = this.drive.stages.map((stage) => stage.engineCount);
    return `${super.getInfo()}
    Total thrust: ${stagesThrust.reduce((sum, current) => sum + current, 0)} kN;
    Engine count: ${enginesCount.reduce((sum, current) => sum + current, 0)}.`;
  }
}

class Car extends Vehicle {
  drive: {
    type: string;
    power: number;
    torque: number;
    supportedEnvironments: ["asphalt", "sand", "rocks"];
  };
  constructor(vehicle: VehicleType) {
    super(vehicle);
  }
  getInfo() {
    return `Supported environments: ${this.drive.supportedEnvironments};
    Power: ${this.drive.power} HP; 
    Torque: ${this.drive.torque} Nm.`;
  }
}

class Helicopter extends Vehicle {
  drive: {
    totalPower: number;
    engineCount: number;
    supportedEnvironments: ["air"];
  };
  constructor(vehicle: VehicleType) {
    super(vehicle);
  }
}

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
