function coffee(coffeeArr) {
  //first argument to reduce method id the total of previous callbacks executed on array
  let coffeeSum = coffeeArr.reduce((totalCoffee, numOfCoffee) => (totalCoffee += numOfCoffee))
  return coffeeSum;
}

console.log(coffee([2,3,1,4,5]));