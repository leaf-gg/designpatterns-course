import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log('starting the route using scooter')
    }
    getCargo(): void {
        console.log(`we caught the package, we're ready`)
    }
    
}