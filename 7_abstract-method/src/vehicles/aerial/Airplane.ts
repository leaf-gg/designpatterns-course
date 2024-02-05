import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Beginning the take-off");
  }
  getCargo(): void {
    console.log(`We caught the passengers, starting engines`);
  }
  checkWind(): void {
    console.log(`Winds at 25km, South, winds ok`);
  }
}
