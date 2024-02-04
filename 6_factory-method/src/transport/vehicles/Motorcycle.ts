import IVehicle from "./interfaces/IVehicle";

export default class Motorcycle implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("starting the delivery...");
    }
    getCargo(): void {
        console.log("we get the package");
    }

}