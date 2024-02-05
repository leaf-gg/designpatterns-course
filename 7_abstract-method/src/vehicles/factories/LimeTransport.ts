import Drone from "../aerial/Drone";
import IAircraft from "../aerial/interfaces/IAircraft";
import Scooter from "../electric/Scooter";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class LimeTransport implements ITransportFactory{

    createTransportVehicle(): ILandVehicle {
        return new Scooter();
    }
    createTransportAircraft(): IAircraft {
        return new Drone();
    }
    
}