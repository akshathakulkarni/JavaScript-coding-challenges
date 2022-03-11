//Create a book class that provides information about books in the store

//Books Class as a function
function Books(title, author, ISBN, noOfCopies) { 
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
  this.noOfCopies = noOfCopies;
};

//Declare function on the protoype so each instance doesn't create a new function
Books.prototype.getAvailability = function() { 
  if(this.noOfCopies === 0) {
    return("All copies sold out.");
  } else if(this.noOfCopies < 10) {
    return("Low stock");
  } 
  return("In stock");
};

Books.prototype.sell = function(numCopiesSold = 1) {
  return this.noOfCopies -= numCopiesSold;
};

Books.prototype.restock = function(numCopiesStocked = 5) {
  return this.noOfCopies += numCopiesStocked;
}

//Create Books class
class Books {
  constructor(title, author, ISBN, noOfCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.noOfCopies = noOfCopies;
  }
  getAvailability() {
    if(this.noOfCopies === 0) {
      return("All copies sold out.");
    } else if(this.noOfCopies < 10) {
      return("Low stock");
    } 
    return("In stock");
  }
  sell(numCopiesSold = 1) {
    return this.noOfCopies -= numCopiesSold;
  }
  stoked(numCopiesStocked = 5) {
    return this.noOfCopies += numCopiesStocked;
  }
}
//Create an instance of the class
const newBook = new Books("FirstBook", "ABC", 12345, 5); 
console.log(newBook.getAvailability());
newBook.restock(12);
console.log(newBook.getAvailability());
newBook.sell(17);
console.log(newBook.getAvailability());