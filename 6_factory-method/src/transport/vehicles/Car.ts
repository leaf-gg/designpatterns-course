import IVehicle from "./interfaces/IVehicle";

export default class Car implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("starting the route...");
  }
  getCargo(): void {
    console.log(`We're ready, we get all the passengers`);
  }
}
