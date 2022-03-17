class vehicle {
  constructor(options) {
    this.wheels = options.wheels;
    this.doors = options.doors;
    this.color = options.color;
  }
}

class factory {
  create  = (options, vehicleType) => {
    let newVehicle = new vehicle(options);
    newVehicle.type = vehicleType; 
    newVehicle.startEngine = () => {
      console.log("Start engine");
    }
    newVehicle.stopEngine = () => {
      console.log("stop engine");
    }
    return newVehicle;
  }
}

const vehicles = new factory(); //elimimates repeated constructor calls 
const newCar = vehicles.create({
  wheels : 4,
  doors: 4,
  color: "red"
}, "Car");

const truck = vehicles.create({
  wheels: 6,
  doors: 2,
  color: "yellow"
}, "truck");

console.log(newCar);
console.log(newCar.startEngine());
console.log(newCar.stopEngine());
console.log(truck);