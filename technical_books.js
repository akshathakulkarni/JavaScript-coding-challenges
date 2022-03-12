class Book {
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

//Inheritance
class TechBook extends Book {
  constructor(title, author, ISBN, noOfCopies, edition) {
    super(title, author, ISBN, noOfCopies);
    this.edition = edition;
  }
  getEdition() {
    return `The current edition of this book is ${this.edition}`;
  }
}

const newTechBook = new TechBook("TechBook", "TechAuthor", 2022, 5, 1);
console.log(newTechBook.getAvailability());
console.log(newTechBook.getEdition());