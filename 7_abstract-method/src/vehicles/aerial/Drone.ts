import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Beginning the take-off");
  }
  getCargo(): void {
    console.log(`Package are coupled, starting engines`);
  }
  checkWind(): void {
    console.log(`No strong wings, weather ok`);
  }
}
