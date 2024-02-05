import ILandVehicle from "./interfaces/ILandVehicle";

export default class Car implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log('starting the route')
    }
    getCargo(): void {
        console.log(`we caught the passengers, we're ready`)
    }
    
}