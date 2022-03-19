const car = {
  name : "Honda",
  brake : function () {
    console.log("Apply brakes");
  },
  start : function () {
    console.log("Please start the engine")
  }
};

//Use object create to instantiate a new car
const myCar = Object.create(car);
console.log(myCar.name);