import IVehicle from "./IVehicle";
import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicleCar, IVehicle{
    startVehicle(): void {
        console.log('Starting engines.')
    }

    constructor(
        color: string,
        year: number,
        engine: number,
        seats: number
    ) {
        this.configurationCar(color, year, engine, seats);
    }
    
    configurationCar(color: string, year: number, engine: number, seats: number): void {
       console.log(`Car with ${color} color, year ${year} and motor ${engine} and ${seats} seats`);
       this.startVehicle();
    }
 
}