const dinner = [
  {
    name : "Veggie Wrap",
    isVeg : true
  },
  {
    name : "Chicken Wrap",
    isVeg : false
  },
  {
    name : "Rice",
    isVeg : true
  }
]

//Given an index.html with an unordered list having an id set to menu
function getVegDinner (dinner) {
  //Use query selector to get the unordered list element
  const dinnerNode = document.querySelector("#menu");
  //Use array.filter to method to get only veg items
  const result = dinner.filter(item => {
    item.isVeg === true;
  })
  result.forEach(element => {
    //Create a list element in the DOM for each veg dinner
    let dish = document.createElement("li");
    //Set the text content of that list item with the name of the current element
    dish.textContent = element.name;
    //append new list item to unordered list
    dinnerNode.appendChild(dish);
  });
};

const vegDinner = getVegDinner(dinner);
console.log(vegDinner);