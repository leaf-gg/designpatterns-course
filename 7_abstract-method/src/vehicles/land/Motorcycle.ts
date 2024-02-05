import ILandVehicle from "./interfaces/ILandVehicle";

export default class Motorcycle implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log('starting the delivery food.')
    }
    getCargo(): void {
        console.log(`we caught the package`)
    }
    
}