import IVehicleMotorcycle from "./iVehicleMotorcycle";

export default class Motorcycle implements IVehicleMotorcycle {
  constructor(
    color: string,
    year: number,
    engine: number
  ) {
    this.configure(color, year, engine);
  }

  startVehicle(): void {
    console.log("Starting engines...");
  }
  configure(
    color: string,
    year: number,
    engine: number,

  ): void {
    console.log(
      `Creating a motorcycle: ${color}, ${year}, ${engine}`
    );
    this.startVehicle();
  }
}
