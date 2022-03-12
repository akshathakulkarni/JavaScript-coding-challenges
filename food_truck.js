function foodMenu(menuArr) {
  const menu = menuArr.flat();
  let result = [];
  //Set returns unique values
  //result = [...new Set(menu)]; 
  //using forEach
  menu.forEach(element=> {
    if (!result.includes(element)) {
      result.push(element);
    }
  })
  return result;
}

const menuArr = [ ["pizza", "pasta"], ["pizza"], ["burger", "toast", "pizza"]];

console.log(foodMenu(menuArr))