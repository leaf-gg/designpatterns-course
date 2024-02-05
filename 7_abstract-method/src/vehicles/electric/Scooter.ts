import IElectric from "./interfaces/IElectric";

export default class Scooter implements IElectric {
    startRoute(): void {
        this.checkBattery();
        this.getCargo();
    }
    checkBattery(){
        console.log('Battery from scooter are fully charged');
    }
    getCargo() {
        console.log('The package are ready to go.')
    }


}