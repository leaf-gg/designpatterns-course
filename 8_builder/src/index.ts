import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./director/director";
import Vehicle from "./products/Vehicle";

const builder: VehicleBuilder = new VehicleBuilder();
const director: Director = new Director(builder);

director.constructSedanCar();
const sedan: Vehicle = builder.getVehicle();
console.log(
  `Creating vehicle type ${sedan.vehicleType}, with ${sedan.wheelsTotal} rims.`
);

director.constructTruck();
const truck: Vehicle = builder.getVehicle();
console.log(
  `Creating vehicle type ${truck.vehicleType}, with ${truck.wheelsTotal} rims.`
);

director.constructMotorcycle();
const motorcycle: Vehicle = builder.getVehicle();
console.log(
    `Creating vehicle type ${motorcycle.vehicleType}, with ${motorcycle.wheelsTotal} rims.`
  );
  