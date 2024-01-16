import IVehicleCar from "./iVehicleCar";

export default class Car implements IVehicleCar {
  constructor(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ) {
    this.configure(color, year, engine, seats, doors);
  }

  startVehicle(): void {
    console.log("Starting engines...");
  }
  configure(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ): void {
    console.log(
      `Creating a car: ${color}, ${year}, ${engine}, ${seats}, ${doors}`
    );
    this.startVehicle();
  }
}
