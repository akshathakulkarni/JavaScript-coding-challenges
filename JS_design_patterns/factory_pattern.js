class ToyDuck {
  constructor (options) {
    //this.type = type;
    this.color = options.color;
    this.price = options.price;
  }
}

class ToyCar {
  constructor (options) {
    //this.type = type;
    this.color = options.color;
    this.price = options.price;
    this.name = options.name;
  }
}

class toyFactory {
  
  create = (options, type) => {
    let newToy;
    
    if (type === "car") {
      newToy = new ToyCar(options);
    } else if (type === "duck") {
      newToy = new ToyDuck(options);
    }
    newToy.type = type;
    newToy.describe = () => {
      console.log(`This is a ${newToy.type} toy`);
    }
    return newToy;
  }
}

const firstToy = new toyFactory();
const car = firstToy.create({
  color: "blue",
  price : 12,
  name : "honda"
}, "car");

console.log(car);
console.log(car.describe());