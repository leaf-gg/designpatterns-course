import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Beginning the take-off");
  }
  getCargo(): void {
    console.log(`We caught the passengers, we're ready`);
  }
  checkWind(): void {
    console.log(`Winds at 30km, South, winds ok`);
  }
}
