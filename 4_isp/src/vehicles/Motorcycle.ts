import IVehicle from "./IVehicle";
import IVehicleMotorcycle from "./IVehicleMotorcycle";

export default class Motorcycle implements IVehicleMotorcycle, IVehicle{
    constructor(
        color: string,
        year: number,
        engine: number
    ) {
        this.configurationMotorcycle(color, year, engine)
    }

    startVehicle(): void {
       console.log('Starting engines.')
    }

    configurationMotorcycle(color: string, year: number, engine: number): void {
       console.log(`Motorcyble with ${color} color, year ${year} and motor ${engine}.`);
       this.startVehicle();
    }
    
}