import IVehicle from "./interfaces/IVehicle";

export default class Bike implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("starting the delivery...");
  }

  getCargo(): void {
    console.log("We recieve the order, now we are going to deliver the package.");
  }
}
